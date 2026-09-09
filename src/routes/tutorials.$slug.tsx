import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bookmark, Check, Clock, Lightbulb, Star, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { DifficultyBadge, TutorialCard } from "@/components/TutorialCard";
import { getTutorial, tutorials } from "@/lib/data";

export const Route = createFileRoute("/tutorials/$slug")({
  loader: ({ params }) => {
    const tutorial = getTutorial(params.slug);
    if (!tutorial) throw notFound();
    return { tutorial };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Tutorial not found — Craftroom" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = loaderData.tutorial;
    return {
      meta: [
        { title: `${t.title} — Craftroom tutorial` },
        { name: "description", content: t.blurb },
        { property: "og:title", content: `${t.title} — Craftroom tutorial` },
        { property: "og:description", content: t.blurb },
        { property: "og:image", content: t.image },
        { name: "twitter:image", content: t.image },
      ],
    };
  },
  component: TutorialPage,
});

function TutorialPage() {
  const { tutorial } = Route.useLoaderData();
  const [done, setDone] = useState<number[]>([]);
  const [basket, setBasket] = useState<string[]>([]);

  const toggleStep = (i: number) =>
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));
  const toggleMat = (id: string) =>
    setBasket((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));

  const percent = Math.round((done.length / tutorial.steps.length) * 100);
  const basketTotal = tutorial.materials
    .filter((m) => basket.includes(m.id))
    .reduce((s, m) => s + m.price, 0);

  return (
    <SiteShell>
      <article className="mx-auto max-w-6xl px-5 py-12">
        <div className="rise grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{tutorial.category}</p>
            <h1 className="mt-2 text-4xl leading-tight sm:text-5xl">{tutorial.title}</h1>
            <p className="mt-4 max-w-lg text-muted-foreground">{tutorial.blurb}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <DifficultyBadge level={tutorial.difficulty} />
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {tutorial.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" /> {tutorial.rating}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" /> {tutorial.saves} makers
              </span>
            </div>
            <p className="mt-4 text-sm">
              by <span className="font-medium">{tutorial.maker}</span>
            </p>
          </div>
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="h-72 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)] lg:h-96"
          />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Step by step</p>
                <h2 className="mt-1 text-2xl">
                  {tutorial.steps.length} steps · {percent}% complete
                </h2>
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>

            <ol className="mt-8 space-y-4">
              {tutorial.steps.map((s, i) => {
                const complete = done.includes(i);
                return (
                  <li
                    key={s.title}
                    className={`card-soft fade-up p-6 transition-colors ${complete ? "bg-sage/40" : ""}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4">
                      <button
                        onClick={() => toggleStep(i)}
                        aria-label={`Mark step ${i + 1} complete`}
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                          complete
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background font-display"
                        }`}
                      >
                        {complete ? <Check className="h-4 w-4" /> : i + 1}
                      </button>
                      <div className="min-w-0">
                        <h3 className="text-lg">{s.title}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                        {s.tip && (
                          <p className="mt-3 flex items-start gap-2 rounded-xl bg-clay/60 px-3 py-2 text-xs text-clay-foreground">
                            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {s.tip}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {s.minutes} min
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <aside className="card-soft sticky top-24 p-6">
            <p className="eyebrow">Materials list</p>
            <h2 className="mt-1 text-2xl">Shop what you need</h2>
            <ul className="mt-5 space-y-3">
              {tutorial.materials.map((m) => {
                const added = basket.includes(m.id);
                return (
                  <li
                    key={m.id}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border/80 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {m.qty} · {m.shop}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleMat(m.id)}
                      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        added
                          ? "bg-sage text-sage-foreground"
                          : "bg-muted text-foreground hover:bg-clay hover:text-clay-foreground"
                      }`}
                    >
                      {added ? "Added" : `$${m.price.toFixed(2)}`}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">{basket.length} in basket</span>
              <span className="font-display text-lg">${basketTotal.toFixed(2)}</span>
            </div>
            <Link
              to="/materials"
              className="group mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Bookmark className="h-4 w-4" />
              Buy the full list
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>

        <section className="mt-24">
          <p className="eyebrow">Keep going</p>
          <h2 className="mt-1 text-3xl">You might also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials
              .filter((t) => t.slug !== tutorial.slug)
              .slice(0, 3)
              .map((t, i) => (
                <TutorialCard key={t.slug} tutorial={t} index={i} />
              ))}
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

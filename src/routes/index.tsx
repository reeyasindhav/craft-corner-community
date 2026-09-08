import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShoppingBasket, Heart } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { TutorialCard } from "@/components/TutorialCard";
import { tutorials, communityProjects, categories } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Craftroom — DIY & handcraft tutorial platform" },
      {
        name: "description",
        content:
          "Structured craft tutorials with difficulty ratings, shoppable materials lists, and a community gallery of finished projects.",
      },
      { property: "og:title", content: "Craftroom — DIY & handcraft tutorial platform" },
      {
        property: "og:description",
        content: "Tutorials, materials and makers in one cosy room.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="rise">
            <p className="eyebrow">Featured collection</p>
            <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">
              Small rituals,
              <br />
              <span className="text-primary">beautifully made.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Slow down and make something lovely for the everyday. Follow structured tutorials,
              shop the exact materials, and share what your hands made.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Explore tutorials
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Join the craftroom
              </Link>
            </div>
            <dl className="mt-12 flex flex-wrap gap-10">
              {[
                ["1,240", "tutorials"],
                ["380", "materials"],
                ["24k", "makers"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl">{n}</dt>
                  <dd className="eyebrow mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative rise" style={{ animationDelay: "120ms" }}>
            <Sparkles className="floaty absolute -left-4 -top-4 z-10 h-8 w-8 text-sage-foreground/60" />
            <div className="grid grid-cols-2 gap-4">
              <img
                src={tutorials[0].image}
                alt="Pressed flower candle in progress"
                className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
              <img
                src={tutorials[2].image}
                alt="Hand-pinched clay pots"
                className="h-44 w-full rounded-3xl object-cover"
              />
              <div className="flex h-44 flex-col justify-between rounded-3xl bg-sage p-5">
                <p className="eyebrow text-sage-foreground/70">This week</p>
                <p className="font-display text-lg leading-snug text-sage-foreground">
                  Learn the art of visible mending
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              to="/explore"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Curated for you</p>
            <h2 className="mt-1 text-3xl">Made for slow evenings</h2>
          </div>
          <Link to="/explore" className="group inline-flex items-center gap-2 text-sm text-primary">
            See all tutorials
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.slice(0, 3).map((t, i) => (
            <TutorialCard key={t.slug} tutorial={t} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Structured steps",
              body: "Every tutorial is broken into timed steps with difficulty badges — no scrubbing through videos.",
            },
            {
              icon: ShoppingBasket,
              title: "Shoppable materials",
              body: "The materials list is the shop. Add the exact quantities you need straight to your basket.",
            },
            {
              icon: Heart,
              title: "A kind community",
              body: "Share finished projects, ask questions, and get gentle feedback from makers like you.",
            },
          ].map((f, i) => (
            <div key={f.title} className="card-soft fade-up p-7" style={{ animationDelay: `${i * 90}ms` }}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-clay text-clay-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">From the craftroom</p>
            <h2 className="mt-1 text-3xl">What's trending in the community</h2>
          </div>
          <Link to="/community" className="group inline-flex items-center gap-2 text-sm text-primary">
            View community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <ShowcaseTile project={communityProjects[0]} tall />
          <div className="grid gap-5">
            <ShowcaseTile project={communityProjects[1]} />
            <ShowcaseTile project={communityProjects[2]} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-clay p-9">
            <p className="eyebrow text-clay-foreground/70">Live this week</p>
            <h3 className="mt-3 text-3xl leading-tight text-clay-foreground">
              Learn the art
              <br />
              of visible mending
            </h3>
            <p className="mt-3 max-w-sm text-sm text-clay-foreground/80">
              Join textile artist Clara Mae for a cosy evening workshop.
            </p>
            <Link
              to="/tutorials/$slug"
              params={{ slug: "visible-mending-sampler" }}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background"
            >
              Save my spot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="rounded-3xl bg-sage p-9">
            <p className="eyebrow text-sage-foreground/70">Craftroom picks</p>
            <h3 className="mt-3 text-3xl leading-tight text-sage-foreground">
              Everything you need,
              <br />
              all in one place.
            </h3>
            <p className="mt-3 max-w-sm text-sm text-sage-foreground/80">
              Save materials as you browse and shop your list when you're ready to make.
            </p>
            <Link
              to="/materials"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-foreground"
            >
              Explore materials
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ShowcaseTile({
  project,
  tall,
}: {
  project: (typeof communityProjects)[number];
  tall?: boolean;
}) {
  return (
    <Link
      to="/community"
      className={`group relative block overflow-hidden rounded-3xl ${tall ? "min-h-72 lg:min-h-full" : "h-48"}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <p className="truncate font-display text-lg text-white">{project.title}</p>
          <p className="text-xs text-white/75">by {project.maker}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-xs text-white/85">
          <Heart className="h-3.5 w-3.5" /> {project.likes}
        </span>
      </div>
    </Link>
  );
}

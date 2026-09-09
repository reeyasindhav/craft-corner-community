import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Star, Trophy } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TutorialCard } from "@/components/TutorialCard";
import { DifficultyBadge } from "@/components/TutorialCard";
import { inProgress, tutorials, communityProjects } from "@/lib/data";
import { useAuth, initials } from "@/lib/auth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Craftroom" },
      { name: "description", content: "Your personal craftroom dashboard." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const current = tutorials.find((t) => t.slug === inProgress.slug) ?? tutorials[0];
  const saved = tutorials.slice(0, 3);

  return (
    <AppShell>
      <div className="space-y-10">
        <div className="rise">
          <p className="eyebrow">Your dashboard</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">
            Hello, {user?.name?.split(" ")[0] || "maker"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here&apos;s what&apos;s happening in your craftroom today.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["In progress", `${inProgress.step} of ${current.steps.length} steps`],
            ["Saved tutorials", saved.length.toString()],
            ["Community likes", communityProjects.reduce((s, p) => s + p.likes, 0).toString()],
            ["Streak", "3 days"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className="card-soft fade-up p-5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="mt-1 font-display text-2xl">{value}</p>
            </div>
          ))}
        </div>

        <section className="card-soft p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Continue where you left off</p>
              <h2 className="mt-1 text-xl sm:text-2xl">{current.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {inProgress.step} of {current.steps.length} steps ·{" "}
                {Math.round((inProgress.step / current.steps.length) * 100)}% complete
              </p>
            </div>
            <Link
              to={`/tutorials/${current.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${Math.round((inProgress.step / current.steps.length) * 100)}%`,
              }}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {current.steps.slice(0, 3).map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border/70 bg-background p-4">
                <p className="text-xs text-muted-foreground">Step {i + 1}</p>
                <p className="mt-1 text-sm font-medium">{s.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.minutes} min</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Pick up something new</p>
              <h2 className="mt-1 text-2xl">Recommended for you</h2>
            </div>
            <Link to="/explore" className="text-sm text-primary">
              Browse all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((t, i) => (
              <TutorialCard key={t.slug} tutorial={t} index={i} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

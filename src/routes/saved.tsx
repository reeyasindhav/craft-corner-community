import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Clock, Star } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TutorialCard } from "@/components/TutorialCard";
import { tutorials } from "@/lib/data";

export const Route = createFileRoute("/saved")({
  head: () => ({
    meta: [
      { title: "Saved tutorials — Craftroom" },
      { name: "description", content: "Your saved craft tutorials." },
    ],
  }),
  component: Saved,
});

function Saved() {
  const saved = tutorials.slice(0, 4);

  return (
    <AppShell>
      <div className="space-y-10">
        <div className="rise">
          <p className="eyebrow">Saved</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Your saved tutorials</h1>
          <p className="mt-2 text-muted-foreground">
            Come back to these whenever you&apos;re ready to make.
          </p>
        </div>

        {saved.length === 0 ? (
          <div className="card-soft p-10 text-center">
            <p className="text-sm text-muted-foreground">
              You haven&apos;t saved any tutorials yet.
            </p>
            <Link
              to="/explore"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Explore tutorials
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((t, i) => (
              <TutorialCard key={t.slug} tutorial={t} index={i} />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}

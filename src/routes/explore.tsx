import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { TutorialCard } from "@/components/TutorialCard";
import { categories, tutorials, type Difficulty } from "@/lib/data";

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "Explore craft tutorials — Craftroom" },
      {
        name: "description",
        content:
          "Browse handcraft tutorials by category and difficulty — candle making, fiber arts, pottery, paper craft and more.",
      },
      { property: "og:title", content: "Explore craft tutorials — Craftroom" },
      { property: "og:description", content: "Filter tutorials by craft and difficulty level." },
    ],
  }),
  component: Explore,
});

const levels: Difficulty[] = ["Beginner", "Easy", "Intermediate", "Advanced"];

function Explore() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q);
  const [category, setCategory] = useState<string | null>(null);
  const [level, setLevel] = useState<Difficulty | null>(null);

  const results = useMemo(
    () =>
      tutorials.filter(
        (t) =>
          (!category || t.category === category) &&
          (!level || t.difficulty === level) &&
          (t.title + t.maker + t.category).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category, level],
  );

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-colors ${
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-card text-muted-foreground hover:text-foreground"
    }`;

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="rise">
          <p className="eyebrow">Explore</p>
          <h1 className="mt-2 text-4xl">Find your next make</h1>
          <p className="mt-3 max-w-lg text-muted-foreground">
            {tutorials.length} tutorials, each with timed steps, a difficulty badge and a shoppable
            materials list.
          </p>
        </div>

        <div className="card-soft mt-8 flex items-center gap-3 px-5 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tutorials, materials, makers…"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => setCategory(null)} className={chip(!category)}>
            All crafts
          </button>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={chip(category === c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setLevel(null)} className={chip(!level)}>
            Any level
          </button>
          {levels.map((l) => (
            <button key={l} onClick={() => setLevel(l)} className={chip(level === l)}>
              {l}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t, i) => (
            <TutorialCard key={t.slug} tutorial={t} index={i} />
          ))}
        </div>
        {results.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            Nothing here yet — try a different craft or level.
          </p>
        )}
      </div>
    </SiteShell>
  );
}

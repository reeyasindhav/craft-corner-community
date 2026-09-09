import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { communityProjects, categories } from "@/lib/data";

export const Route = createFileRoute("/community/")({
  head: () => ({
    meta: [
      { title: "Community — Craftroom" },
      { name: "description", content: "See what the Craftroom community is making." },
    ],
  }),
  component: CommunityIndex,
});

function CommunityIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase();
    return communityProjects.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.maker.toLowerCase().includes(q) ||
        p.note.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="rise">
        <p className="eyebrow">Community</p>
        <h1 className="mt-2 text-4xl">What makers are making</h1>
        <p className="mt-3 max-w-lg text-muted-foreground">
          A cosy gallery of finished projects, gentle notes, and inspiration from fellow crafters.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="card-soft flex flex-1 items-center gap-3 px-5 py-3 sm:max-w-md">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, makers, notes…"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory(null)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              !category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p, i) => (
          <Link
            key={p.id}
            to="/community/$id"
            params={{ id: p.id }}
            className="block card-soft fade-up overflow-hidden"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent p-4">
                <p className="font-display text-lg text-white">{p.title}</p>
                <p className="text-xs text-white/80">by {p.maker}</p>
              </span>
            </div>
            <div className="p-5">
              <p className="eyebrow">{p.category}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              <div className="mt-4 flex items-center gap-4 border-t border-border/70 pt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5" /> {p.likes} likes
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {results.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No projects match your search yet.
        </p>
      )}
    </div>
  );
}

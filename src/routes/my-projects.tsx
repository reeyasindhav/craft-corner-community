import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Image, Plus, Trash2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { communityProjects } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/my-projects")({
  head: () => ({
    meta: [
      { title: "My projects — Craftroom" },
      { name: "description", content: "Manage your craft projects." },
    ],
  }),
  component: MyProjects,
});

type Project = {
  id: string;
  title: string;
  maker: string;
  likes: number;
  image: string;
  category: string;
  note: string;
};

function MyProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>(communityProjects.slice(0, 2));
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const next: Project = {
      id: crypto.randomUUID(),
      title: title.trim(),
      maker: user?.name || "Maker",
      likes: 0,
      image: communityProjects[0].image,
      category: category || "General",
      note: note.trim() || "My latest make.",
    };
    setProjects((p) => [next, ...p]);
    setTitle("");
    setNote("");
    setCategory("");
  };

  const remove = (id: string) => setProjects((p) => p.filter((x) => x.id !== id));

  return (
    <AppShell>
      <div className="space-y-10">
        <div className="rise">
          <p className="eyebrow">My projects</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Your finished makes</h1>
          <p className="mt-2 text-muted-foreground">
            Showcase what your hands made and inspire other makers.
          </p>
        </div>

        <form
          onSubmit={add}
          className="card-soft fade-up space-y-4 p-5 sm:p-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4"
        >
          <div>
            <label className="text-sm font-medium">Project title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What did you make?"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Fiber arts"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Share a gentle note about your process…"
              rows={2}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Plus className="h-4 w-4" />
              Add project
            </button>
          </div>
        </form>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="card-soft fade-up overflow-hidden"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-1.5 text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">by {p.maker}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3">
                  <span className="text-xs text-muted-foreground">{p.likes} likes</span>
                  <button
                    onClick={() => remove(p.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-clay-foreground"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

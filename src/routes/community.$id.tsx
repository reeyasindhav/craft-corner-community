import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Heart, MessageCircle, Send } from "lucide-react";
import type { Project } from "@/lib/data";
import { getProject } from "@/lib/data";
import { useComments } from "@/lib/comments";
import { useToast } from "@/lib/toast";
import { useState } from "react";

export const Route = createFileRoute("/community/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Craftroom" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Craftroom community` },
        { name: "description", content: p.note },
        { property: "og:title", content: `${p.title} — Craftroom community` },
        { property: "og:description", content: p.note },
        { property: "og:image", content: p.image },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData<{ project: Project }>();
  const { getByProject, add, remove } = useComments();
  const { addToast } = useToast();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const comments = getByProject(project.id);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    add(project.id, author || "Anonymous", text);
    setText("");
    addToast("Comment added");
  };

  return (
    <div>
      <Link
        to="/community"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to community
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="fade-up">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="fade-up space-y-6" style={{ animationDelay: "120ms" }}>
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-2 text-3xl sm:text-4xl">{project.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">by {project.maker}</p>
          </div>

          <div className="card-soft p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">{project.note}</p>
            <div className="mt-5 flex items-center gap-4 border-t border-border/70 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4" /> {project.likes} likes
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4" /> {comments.length} comments
              </span>
            </div>
          </div>

          <div className="card-soft p-6">
            <p className="eyebrow">About this make</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This finished project was shared by {project.maker} in the {project.category}{" "}
              category. It&apos;s part of the Craftroom community gallery, where makers post
              completed works to inspire others and share gentle process notes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you&apos;d like to make something similar, explore tutorials in the{" "}
              <Link to="/explore" className="text-primary underline-offset-4 hover:underline">
                Explore
              </Link>{" "}
              section or browse materials in the{" "}
              <Link to="/materials" className="text-primary underline-offset-4 hover:underline">
                Materials
              </Link>{" "}
              shop.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12 card-soft p-6 sm:p-8">
        <p className="eyebrow">Comments</p>
        <h2 className="mt-1 text-2xl">What makers are saying</h2>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a kind comment..."
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
          >
            <Send className="h-4 w-4" />
            Post comment
          </button>
        </form>

        <div className="mt-8 divide-y divide-border/70">
          {comments.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No comments yet. Be the first to share some encouragement.
            </p>
          )}
          {comments.map((c) => (
            <div key={c.id} className="flex items-start justify-between gap-4 py-4">
              <div>
                <p className="text-sm font-medium">{c.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {new Date(c.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => remove(project.id, c.id)}
                className="text-xs text-muted-foreground transition-colors hover:text-clay-foreground"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

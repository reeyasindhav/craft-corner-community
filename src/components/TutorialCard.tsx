import { Link } from "@tanstack/react-router";
import { Bookmark, Clock, Star } from "lucide-react";
import { difficultyStyles, type Difficulty, type Tutorial } from "@/lib/data";

export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${difficultyStyles[level]}`}
    >
      {level}
    </span>
  );
}

export function TutorialCard({ tutorial, index = 0 }: { tutorial: Tutorial; index?: number }) {
  return (
    <Link
      to="/tutorials/$slug"
      params={{ slug: tutorial.slug }}
      className="card-soft lift fade-up group block overflow-hidden"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={tutorial.image}
          alt={tutorial.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground">
          <Bookmark className="h-4 w-4" />
        </span>
        <span className="absolute bottom-3 left-3">
          <DifficultyBadge level={tutorial.difficulty} />
        </span>
      </div>
      <div className="p-5">
        <p className="eyebrow">{tutorial.category}</p>
        <h3 className="mt-1.5 text-lg">{tutorial.title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">by {tutorial.maker}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-border/70 pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {tutorial.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {tutorial.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

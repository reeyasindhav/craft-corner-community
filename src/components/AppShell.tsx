import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import {
  Home,
  Compass,
  Layers,
  Users,
  Bookmark,
  ShoppingBasket,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import { useAuth, initials } from "@/lib/auth";
import { Logo } from "@/components/SiteShell";

const main = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/my-projects", label: "My projects", icon: Layers },
  { to: "/community", label: "Community", icon: Users },
] as const;

const space = [
  { to: "/saved", label: "Saved tutorials", icon: Bookmark },
  { to: "/materials", label: "Materials list", icon: ShoppingBasket },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const { user, ready, signOut } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  if (!ready || !user) {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">
        Opening your craftroom…
      </div>
    );
  }

  const item = (to: string) =>
    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
      pathname === to
        ? "bg-clay/70 font-medium text-clay-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/70 bg-card/70 px-4 py-6 lg:flex">
        <div className="px-2">
          <Logo />
        </div>
        <nav className="mt-8 space-y-1">
          {main.map((n) => (
            <Link key={n.to} to={n.to} className={item(n.to)}>
              <n.icon className="h-4 w-4 shrink-0" />
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="eyebrow mt-8 px-3">Your space</p>
        <nav className="mt-3 space-y-1">
          {space.map((n) => (
            <Link key={n.to} to={n.to} className={item(n.to)}>
              <n.icon className="h-4 w-4 shrink-0" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3">
          <div className="rounded-2xl bg-sage/70 p-4">
            <p className="text-sm font-medium text-sage-foreground">Make time for making.</p>
            <p className="mt-1 text-xs text-sage-foreground/80">
              A little progress is still progress.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-clay text-xs font-medium text-clay-foreground">
              {initials(user.name)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium capitalize">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">Maker since 2022</p>
            </div>
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/" });
              }}
              aria-label="Sign out"
              className="ml-auto text-muted-foreground transition-colors hover:text-primary"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
            <div className="flex min-w-0 items-center gap-3 lg:hidden">
              <Logo />
            </div>
            <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 text-sm text-muted-foreground sm:flex">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">Search tutorials, materials, makers…</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 shrink-0 text-muted-foreground" />
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-clay text-xs font-medium text-clay-foreground">
                {initials(user.name)}
              </span>
            </div>
          </div>
          <nav className="flex gap-4 overflow-x-auto border-t border-border/70 px-5 py-2 text-sm lg:hidden">
            {[...main, ...space].map((n) => (
              <Link key={n.to} to={n.to} className="whitespace-nowrap text-muted-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
        </header>
        <div className="mx-auto max-w-5xl px-5 py-8">{children}</div>
      </div>
    </div>
  );
}

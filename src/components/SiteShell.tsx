import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useAuth, initials } from "@/lib/auth";

const nav = [
  { to: "/explore", label: "Explore" },
  { to: "/materials", label: "Materials" },
  { to: "/community", label: "Community" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-base">
        c
      </span>
      <span className="font-display text-xl tracking-tight">craftroom</span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm sm:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-full border border-border bg-card px-2 py-1.5 pr-3 text-sm transition-colors hover:bg-muted"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-clay text-xs font-medium text-clay-foreground">
                  {initials(user.name)}
                </span>
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Join free
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-border/70 px-5 py-2 text-sm sm:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="whitespace-nowrap text-muted-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Made for slow days and curious hands. Tutorials, materials and makers in one cosy room.
          </p>
        </div>
        <FooterCol
          title="Make"
          links={[
            { to: "/explore", label: "Explore tutorials" },
            { to: "/materials", label: "Materials shop" },
            { to: "/saved", label: "Saved tutorials" },
          ]}
        />
        <FooterCol
          title="Community"
          links={[
            { to: "/community", label: "Project gallery" },
            { to: "/my-projects", label: "My projects" },
            { to: "/dashboard", label: "Dashboard" },
          ]}
        />
        <FooterCol
          title="Account"
          links={[
            { to: "/login", label: "Log in" },
            { to: "/signup", label: "Create account" },
          ]}
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border/70 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>Craftroom © 2026</span>
        <span>Made for slow days and curious hands.</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

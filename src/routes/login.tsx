import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Palette } from "lucide-react";
import { SiteShell, Logo } from "@/components/SiteShell";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Craftroom" },
      { name: "description", content: "Welcome back to your craftroom." },
    ],
  }),
  component: Login,
});

function Login() {
  const { signIn, ready } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Enter your email to continue.");
      return;
    }
    signIn(email.trim(), name.trim() || undefined);
    navigate({ to: "/dashboard" });
  };

  if (!ready) {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <SiteShell showFooter={false} showHeader={false}>
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-4 lg:pt-10">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div className="rise">
          <p className="eyebrow">Welcome back</p>
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Your craftroom
            <br />
            is waiting.
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Pick up where you left off, save new tutorials, and share what your hands made with the
            community.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sage text-sage-foreground">
              <Palette className="h-5 w-5" />
            </span>
            <span>Free to join. No credit card needed.</span>
          </div>
        </div>

        <div className="card-soft fade-up p-8 sm:p-10">
          <h2 className="text-2xl">Log in</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter your email and we&apos;ll sign you straight in.
          </p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            {error && (
              <p className="rounded-xl bg-clay/70 px-4 py-2 text-sm text-clay-foreground">
                {error}
              </p>
            )}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="How should we call you?"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
            >
              Continue
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/signup" className="text-primary transition-colors hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </SiteShell>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteShell, Logo } from "@/components/SiteShell";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Join Craftroom — Sign up" },
      { name: "description", content: "Create your free Craftroom account." },
    ],
  }),
  component: Signup,
});

function Signup() {
  const { signIn, ready } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please enter both your name and email.");
      return;
    }
    signIn(email.trim(), name.trim());
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
          <p className="eyebrow">Join the craftroom</p>
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Make time
            <br />
            for making.
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Save tutorials, track your progress, shop materials, and share finished projects with a
            supportive community.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Structured tutorials", "Follow step-by-step guides with difficulty badges."],
              ["Shoppable lists", "Add exactly what you need to your basket."],
              ["Progress tracking", "See how far you&apos;ve come and keep going."],
              ["Community", "Share finished makes and get gentle feedback."],
            ].map(([t, b]) => (
              <div key={t} className="card-soft p-5">
                <p className="text-sm font-medium">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-soft fade-up p-8 sm:p-10">
          <h2 className="text-2xl">Create your account</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            It&apos;s free and takes about 10 seconds.
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
                placeholder="Your maker name"
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
              Start crafting
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary transition-colors hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </SiteShell>
  );
}

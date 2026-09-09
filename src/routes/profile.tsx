import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AppShell } from "@/components/AppShell";
import { useAuth, initials } from "@/lib/auth";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Craftroom" },
      { name: "description", content: "Your Craftroom profile." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="rise">
          <p className="eyebrow">Your account</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Profile</h1>
          <p className="mt-2 text-muted-foreground">Manage your account details and preferences.</p>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <div className="flex flex-wrap items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-clay text-xl font-medium text-clay-foreground">
              {initials(user?.name || "")}
            </span>
            <div>
              <h2 className="text-2xl">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="card-soft p-6">
            <p className="eyebrow">Account</p>
            <h3 className="mt-2 text-xl">Profile details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase text-muted-foreground">Name</dt>
                <dd className="mt-1 font-medium">{user?.name}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-muted-foreground">Email</dt>
                <dd className="mt-1 font-medium">{user?.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-muted-foreground">Member since</dt>
                <dd className="mt-1 font-medium">2022</dd>
              </div>
            </dl>
          </div>

          <div className="card-soft p-6">
            <p className="eyebrow">Preferences</p>
            <h3 className="mt-2 text-xl">Craftroom settings</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Dark mode coming soon</li>
              <li>• Notifications coming soon</li>
              <li>• Saved preferences coming soon</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign out?</AlertDialogTitle>
                <AlertDialogDescription>
                  You&apos;ll need to sign in again to access your account and cart.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    signOut();
                    navigate({ to: "/" });
                  }}
                >
                  Sign out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Back to craftroom
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

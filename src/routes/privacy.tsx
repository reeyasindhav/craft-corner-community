import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Craftroom" },
      {
        name: "description",
        content: "How Craftroom collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy policy — Craftroom" },
      {
        property: "og:description",
        content:
          "Learn what data Craftroom collects, why we collect it, and how you can manage or delete it.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="rise">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-3 text-4xl">Privacy policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: September 2026</p>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Craftroom is built for people who like making things slowly. We keep data collection to
            a minimum, explain what we store, and give you simple ways to remove it. If something in
            this policy feels unnecessary, it probably is.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <Section title="What we collect">
            <h3>Account information</h3>
            <p>
              When you create an account, we store your name and email address in your browser’s
              local storage. We do not maintain a separate backend user database. If you clear your
              browser data, your account information will be removed from your device.
            </p>
            <p>
              Your name is used to personalise the dashboard and community gallery. Your email is
              used only for optional account recovery if we add that feature in future.
            </p>

            <h3>Usage data</h3>
            <p>
              We record basic, non-personal usage signals such as which tutorials you view, which
              materials you save, and how long you spend on steps. This data is stored locally in
              your browser and is not transmitted to any server.
            </p>

            <h3>Tutorial and project content</h3>
            <p>
              Community projects you publish are stored in local application state and, if you are
              signed in, remain available on your device until you delete them. Tutorial metadata is
              pre-loaded for browsing and is not user-generated.
            </p>

            <h3>Images and media</h3>
            <p>
              Tutorial images are loaded from Unsplash. Unsplash may collect standard log data when
              images are fetched. We do not embed additional trackers on image assets.
            </p>
          </Section>

          <Section title="How we use your data">
            <p>
              We use your information only to provide the core Craftroom experience: showing your
              saved tutorials, keeping you signed in between visits, and personalising community
              content. We do not sell, rent, or share your data with advertisers.
            </p>
            <p>
              Because Craftroom is currently a client-side application, most data stays on your
              device. In future, if we introduce server-side features, this policy will be updated
              before any data moves off-device.
            </p>
          </Section>

          <Section title="Cookies and local storage">
            <p>
              Craftroom uses local storage to persist your account session and saved tutorials. We
              do not use cookies for tracking, advertising, or analytics. Clearing your browser’s
              local storage will log you out and remove your saved data.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              Craftroom uses the following external services, which have their own privacy policies:
            </p>
            <ul>
              <li>
                <strong>Unsplash</strong> — supplies tutorial and community images. Unsplash may
                process basic request logs.
              </li>
              <li>
                <strong>Lucide icons</strong> — icon library loaded from a CDN. No personal data is
                collected.
              </li>
            </ul>
            <p>
              We aim to minimise external dependencies and will always disclose new integrations
              here before they go live.
            </p>
          </Section>

          <Section title="Your rights">
            <p>You have full control over the data stored by Craftroom. You can:</p>
            <ul>
              <li>Sign out at any time to remove your account from local storage.</li>
              <li>Clear your browser data to delete all locally stored Craftroom information.</li>
              <li>
                Remove individual saved tutorials from the Saved page without affecting other data.
              </li>
            </ul>
            <p>
              If we introduce server-side storage in future, you will be given tools to export and
              permanently delete your account data before any migration takes place.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              Currently, all user data is stored only in your browser. When you clear local storage
              or switch browsers, that data is gone. If server-side features are added, we will
              state retention periods clearly in this policy.
            </p>
          </Section>

          <Section title="Children’s privacy">
            <p>
              Craftroom is designed for general audiences. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with
              personal information, contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as Craftroom evolves. When we make material changes, we will
              update the date at the top of this page and, if the app includes notification
              infrastructure, we will notify active users. Continued use of Craftroom after changes
              become effective constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              If you have questions about this privacy policy or about how Craftroom handles your
              data, please reach out at{" "}
              <a
                href="mailto:hello@craftroom.app"
                className="text-primary underline-offset-4 hover:underline"
              >
                hello@craftroom.app
              </a>
              .
            </p>
          </Section>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to craftroom
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Join free
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

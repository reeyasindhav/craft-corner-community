import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of service — Craftroom" },
      {
        name: "description",
        content: "Terms and conditions for using Craftroom.",
      },
      { property: "og:title", content: "Terms of service — Craftroom" },
      {
        property: "og:description",
        content: "Please read these terms carefully before using Craftroom.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="rise">
          <p className="eyebrow">Terms</p>
          <h1 className="mt-3 text-4xl">Terms of service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: September 2026</p>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <p className="text-sm leading-relaxed text-muted-foreground">
            These terms govern your use of Craftroom. By using the app, you agree to these
            conditions. If you do not agree, please do not use Craftroom.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <Section title="Acceptance of terms">
            <p>
              By accessing or using Craftroom, you agree to be bound by these terms. If you are
              using Craftroom on behalf of an organisation, you confirm that you have authority to
              bind that organisation to these terms.
            </p>
          </Section>

          <Section title="Use of the service">
            <p>
              Craftroom is provided for personal, non-commercial use. You may browse tutorials, save
              materials, share projects, and participate in the community. You agree not to misuse
              the service, attempt unauthorised access, or use Craftroom for any unlawful purpose.
            </p>
          </Section>

          <Section title="Accounts">
            <p>
              You are responsible for maintaining the confidentiality of your account credentials.
              You are responsible for all activity that occurs under your account. If you suspect
              unauthorised access, please clear your local data or sign out.
            </p>
          </Section>

          <Section title="Content">
            <p>
              Tutorials, materials, and community content are provided for inspiration and
              educational purposes. Craftroom does not guarantee the accuracy, completeness, or
              usefulness of any content. Always follow safety guidelines and manufacturer
              instructions when working with materials.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              Craftroom’s design, text, graphics, and code are owned by Craftroom or its licensors.
              Community projects remain the property of their creators. By sharing content, you
              grant Craftroom a worldwide, non-exclusive licence to display and distribute that
              content within the app.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              Craftroom is provided on an as-is basis. To the fullest extent permitted by law,
              Craftroom shall not be liable for any indirect, incidental, special, or consequential
              damages arising from your use of the service.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may revise these terms as Craftroom evolves. When we make material changes, we will
              update the date at the top of this page. Continued use of Craftroom after changes
              become effective constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about these terms, please contact us at{" "}
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
            to="/privacy"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Privacy policy
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Heart } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Craftroom" },
      {
        name: "description",
        content: "Learn why Craftroom exists and who makes it.",
      },
      { property: "og:title", content: "About — Craftroom" },
      {
        property: "og:description",
        content: "A cosy corner for makers, tutorials, and materials.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="rise">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl">Slow making, together</h1>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Craftroom started from a simple belief: making things by hand should feel calm, not
            overwhelming. We built a place where tutorials are clear, materials are easy to find,
            and the community is kind.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <Section title="Our mission">
            <p>
              We want more people to experience the joy of making. Whether it is your first candle
              or your tenth weaving project, Craftroom meets you where you are. No fancy tools
              required. No pressure to be perfect. Just quiet progress and a little pride in what
              your hands can do.
            </p>
          </Section>

          <Section title="What we offer">
            <ul>
              <li>Structured tutorials with timed steps and honest difficulty badges.</li>
              <li>Shoppable materials lists so you can buy exactly what you need.</li>
              <li>A community gallery for finished projects and gentle feedback.</li>
              <li>A personal dashboard to track progress and save favourites.</li>
            </ul>
          </Section>

          <Section title="Who we are">
            <p>
              Craftroom is made by a small team of makers and designers. We work remotely, test
              every tutorial ourselves, and keep the platform simple on purpose. If something feels
              unnecessary, we probably do not build it.
            </p>
          </Section>

          <Section title="Get in touch">
            <p>
              We love hearing from makers. Questions, ideas, or just want to say hello — reach out
              at{" "}
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

        <div className="mt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to craftroom
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

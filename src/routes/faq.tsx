import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Craftroom" },
      {
        name: "description",
        content: "Frequently asked questions about Craftroom.",
      },
      { property: "og:title", content: "FAQ — Craftroom" },
      {
        property: "og:description",
        content: "Quick answers to common questions about tutorials, materials, and the community.",
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "Do I need special tools or experience?",
    a: "Not at all. Every tutorial lists the exact materials and tools you need, and most are designed for beginners. If a project needs advanced skills, the difficulty badge will say so.",
  },
  {
    q: "Can I sell what I make?",
    a: "Yes. You own what you create with your hands. Craftroom does not claim any rights to your finished projects.",
  },
  {
    q: "How do I save tutorials?",
    a: "Tap the bookmark icon on any tutorial card. You can find all saved tutorials in the Saved section of your account.",
  },
  {
    q: "Are the material lists accurate?",
    a: "We try to be precise, but always double-check quantities against the tutorial steps. If something looks wrong, let us know and we will fix it.",
  },
  {
    q: "How do I reset my data?",
    a: "You can sign out from your profile page, which clears your local account data. If you want a full reset, clear your browser local storage for this site.",
  },
  {
    q: "Is Craftroom free?",
    a: "Yes. Craftroom is free to use. We may add optional paid features in future, but the core experience will always remain free.",
  },
];

function FAQ() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="rise">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 text-4xl">Frequently asked questions</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Quick answers to common questions about tutorials, materials, and the community.
          </p>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div key={i} className={i > 0 ? "border-t border-border/70 pt-6" : ""}>
                <h3 className="text-base font-medium">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Still have questions?
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}

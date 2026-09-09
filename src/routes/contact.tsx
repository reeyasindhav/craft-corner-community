import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Craftroom" },
      {
        name: "description",
        content: "Get in touch with the Craftroom team.",
      },
      { property: "og:title", content: "Contact — Craftroom" },
      {
        property: "og:description",
        content: "Questions, ideas, or feedback? We'd love to hear from you.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="rise">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl">Get in touch</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Questions, ideas, or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          {sent ? (
            <div className="text-center">
              <Mail className="mx-auto h-10 w-10 text-muted-foreground" />
              <h2 className="mt-4 text-2xl">Message sent</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out! This is a demo — no message was actually sent.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="What's this about?"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                This is a demo — no message will actually be sent.
              </p>
            </form>
          )}
        </div>

        <div className="card-soft mt-10 p-8 sm:p-10 fade-up">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-2 text-sm text-muted-foreground">
                <a
                  href="mailto:hello@craftroom.app"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  hello@craftroom.app
                </a>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                We usually reply within a day or two.
              </p>
            </div>
            <div>
              <p className="eyebrow">Support hours</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday to Friday, 9am – 5pm (UTC)
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Outside these hours, we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
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

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Banknote, CheckCircle2, CreditCard, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Craftroom" },
      { name: "description", content: "Complete your materials order." },
    ],
  }),
  component: Checkout,
});

type PaymentMethod = "card" | "cod";

function Checkout() {
  const { items, clear, total, count } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <AppShell>
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="card-soft mt-10 p-10 text-center fade-up">
            <ShoppingBasket className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">Your cart is empty.</p>
            <Link
              to="/materials"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Browse materials
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  const shipping = total > 50 ? 0 : 5.99;
  const grandTotal = total + shipping;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      clear();
      navigate({ to: "/materials" });
    }, 2000);
  };

  if (submitted) {
    return (
      <AppShell>
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="card-soft mt-10 p-10 text-center fade-up">
            <CheckCircle2 className="mx-auto h-12 w-12 text-sage-foreground" />
            <h2 className="mt-4 text-2xl">Order placed successfully</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you, {name || "maker"}! This is a demo order. Redirecting you back to
              materials...
            </p>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="rise">
          <p className="eyebrow">Checkout</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Complete your order</h1>
          <p className="mt-2 text-muted-foreground">
            Enter your shipping details and choose a payment method.
          </p>
        </div>

        <form onSubmit={placeOrder} className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="card-soft p-6">
              <h2 className="text-xl">Shipping details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Full name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Phone number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+1 234 567 890"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Address</label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Street address"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">City</label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="City"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">ZIP code</label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    placeholder="ZIP / Postal code"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="card-soft p-6">
              <h2 className="text-xl">Payment method</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPayment("card")}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                    payment === "card"
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Card</p>
                    <p className="text-xs text-muted-foreground">Pay with credit / debit</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setPayment("cod")}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                    payment === "cod"
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Banknote className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Cash on delivery</p>
                    <p className="text-xs text-muted-foreground">Pay when you receive</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-soft p-5">
              <p className="eyebrow">Order summary</p>
              <h2 className="mt-1 text-xl">Your items</h2>
              <div className="mt-4 divide-y divide-border/70">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 py-2.5 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ${item.price.toFixed(2)} × {item.qty}
                      </p>
                    </div>
                    <span className="shrink-0 font-medium">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-medium">Total</span>
                  <span className="font-display text-lg">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
              >
                Place order
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                This is a demo — no real payment will be processed.
              </p>
            </div>
          </div>
        </form>
      </div>
    </AppShell>
  );
}

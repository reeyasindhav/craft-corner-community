import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ShoppingBasket, Trash2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/my-cart")({
  head: () => ({
    meta: [
      { title: "My cart — Craftroom" },
      { name: "description", content: "Review your materials cart and checkout." },
    ],
  }),
  component: MyCart,
});

function MyCart() {
  const { items, add, remove, clear, total, count } = useCart();
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="rise">
          <p className="eyebrow">Your space</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">My cart</h1>
          <p className="mt-2 text-muted-foreground">
            Review your materials, adjust quantities, and checkout when you&apos;re ready.
          </p>
        </div>

        {items.length === 0 ? (
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
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="card-soft overflow-hidden">
              <div className="border-b border-border/70 px-5 py-4">
                <p className="eyebrow">Items</p>
                <h2 className="mt-1 text-xl">Materials list</h2>
              </div>
              <div className="divide-y divide-border/70">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 w-10 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          ${item.price.toFixed(2)} × {item.qty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => remove(item.id)}
                          className="grid h-7 w-7 place-items-center rounded-full border border-border text-xs hover:bg-muted"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium">{item.qty}</span>
                        <button
                          onClick={() => add(item)}
                          className="grid h-7 w-7 place-items-center rounded-full border border-border text-xs hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-muted-foreground transition-colors hover:text-clay-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-soft p-5">
                <p className="eyebrow">Summary</p>
                <h2 className="mt-1 text-xl">Order summary</h2>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <span className="font-medium">Total</span>
                    <span className="font-display text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate({ to: "/checkout" })}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
                >
                  Checkout
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

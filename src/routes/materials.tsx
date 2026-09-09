import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ShoppingBasket } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { shopMaterials } from "@/lib/data";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials — Craftroom" },
      { name: "description", content: "Browse craft materials and supplies." },
    ],
  }),
  component: Materials,
});

function Materials() {
  const { add, remove, items } = useCart();
  const [category, setCategory] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const categories = Array.from(new Set(shopMaterials.map((m) => m.tag)));
  const filtered = category ? shopMaterials.filter((m) => m.tag === category) : shopMaterials;
  const search = q
    ? filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.tag.toLowerCase().includes(q.toLowerCase()),
      )
    : filtered;

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="rise">
          <p className="eyebrow">Materials shop</p>
          <h1 className="mt-2 text-4xl">Supplies for every craft</h1>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Curated raw materials and tools. Add exactly what you need to your list.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            <div className="card-soft flex items-center gap-3 px-5 py-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search materials or tags…"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory(null)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  !category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {search.map((m, i) => {
                const inCart = items.find((c) => c.id === m.id);
                return (
                  <div
                    key={m.id}
                    className="card-soft fade-up overflow-hidden"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                        {m.tag}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base">{m.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        ${m.price.toFixed(2)} / {m.unit}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        {inCart ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => remove(inCart.id)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-border text-xs hover:bg-muted"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium">{inCart.qty}</span>
                            <button
                              onClick={() => add(m)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-border text-xs hover:bg-muted"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">Not added</span>
                        )}
                        <button
                          onClick={() => (inCart ? remove(inCart.id) : add(m))}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                            inCart
                              ? "bg-sage text-sage-foreground"
                              : "bg-primary text-primary-foreground hover:scale-[1.03]"
                          }`}
                        >
                          <ShoppingBasket className="h-3.5 w-3.5" />
                          {inCart ? "Added" : "Add"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-soft p-5">
              <p className="eyebrow">Need ideas?</p>
              <h3 className="mt-1 text-base">Popular bundles</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Candle starter kit</li>
                <li>• Fiber art essentials</li>
                <li>• Pottery basics</li>
                <li>• Paper craft pack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Material } from "@/lib/data";

export type CartItem = Material & { qty: number };

type CartValue = {
  items: CartItem[];
  add: (item: Material) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const KEY = "craftroom.cart";
const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add = (item: Material) =>
    setItems((c) => {
      const next = [...c];
      const idx = next.findIndex((x) => x.id === item.id);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
      else next.push({ ...item, qty: 1 });
      return next;
    });

  const remove = (id: string) =>
    setItems((c) => {
      const next = [...c];
      const idx = next.findIndex((x) => x.id === id);
      if (idx < 0) return c;
      const updated = { ...next[idx], qty: Math.max(0, next[idx].qty - 1) };
      if (updated.qty === 0) next.splice(idx, 1);
      else next[idx] = updated;
      return next;
    });

  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const value = useMemo<CartValue>(
    () => ({
      items,
      add,
      remove,
      clear,
      total,
      count,
    }),
    [items, total, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

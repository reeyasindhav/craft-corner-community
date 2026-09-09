import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Toast = {
  id: string;
  message: string;
  type?: "info" | "success" | "error";
};

type ToastValue = {
  toasts: Toast[];
  addToast: (message: string, type?: Toast["type"]) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: Toast["type"] = "info") => {
    const id = crypto.randomUUID();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };

  const removeToast = (id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  };

  const value = useMemo<ToastValue>(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

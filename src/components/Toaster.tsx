import { useToast } from "@/lib/toast";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-2 px-4 sm:left-auto sm:right-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="card-soft flex items-center justify-between gap-3 px-4 py-3 fade-up"
        >
          <p className="text-sm text-foreground">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Close
          </button>
        </div>
      ))}
    </div>
  );
}

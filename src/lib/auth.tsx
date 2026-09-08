import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type User = { name: string; email: string };

type AuthValue = {
  user: User | null;
  ready: boolean;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
};

const KEY = "craftroom.user";
const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const value = useMemo<AuthValue>(
    () => ({
      user,
      ready,
      signIn: (email, name) => {
        const next: User = {
          email,
          name: name?.trim() || email.split("@")[0].replace(/[._-]/g, " ") || "Maker",
        };
        localStorage.setItem(KEY, JSON.stringify(next));
        setUser(next);
      },
      signOut: () => {
        localStorage.removeItem(KEY);
        setUser(null);
      },
    }),
    [user, ready],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

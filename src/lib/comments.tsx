import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Comment = {
  id: string;
  projectId: string;
  author: string;
  text: string;
  createdAt: number;
};

type CommentsValue = {
  comments: Record<string, Comment[]>;
  add: (projectId: string, author: string, text: string) => Comment;
  remove: (projectId: string, id: string) => void;
  getByProject: (projectId: string) => Comment[];
};

const KEY = "craftroom.comments";
const CommentsContext = createContext<CommentsValue | null>(null);

export function CommentsProvider({ children }: { children: ReactNode }) {
  const [comments, setComments] = useState<Record<string, Comment[]>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setComments(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(comments));
  }, [comments]);

  const add = useCallback((projectId: string, author: string, text: string) => {
    const comment: Comment = {
      id: crypto.randomUUID(),
      projectId,
      author: author?.trim() || "Anonymous",
      text: text.trim(),
      createdAt: Date.now(),
    };
    setComments((c) => ({
      ...c,
      [projectId]: [...(c[projectId] || []), comment],
    }));
    return comment;
  }, []);

  const remove = useCallback((projectId: string, id: string) => {
    setComments((c) => ({
      ...c,
      [projectId]: (c[projectId] || []).filter((x) => x.id !== id),
    }));
  }, []);

  const getByProject = useCallback((projectId: string) => comments[projectId] || [], [comments]);

  const value = useMemo<CommentsValue>(
    () => ({
      comments,
      add,
      remove,
      getByProject,
    }),
    [comments, add, remove, getByProject],
  );

  return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>;
}

export function useComments() {
  const ctx = useContext(CommentsContext);
  if (!ctx) throw new Error("useComments must be used inside CommentsProvider");
  return ctx;
}

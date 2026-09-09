import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Craftroom" },
      { name: "description", content: "See what the Craftroom community is making." },
    ],
  }),
  component: CommunityLayout,
});

function CommunityLayout() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Outlet />
      </div>
    </SiteShell>
  );
}

import { createLazyFileRoute } from "@tanstack/react-router";

function Index() {
  return (
    <div className="p-2">
    </div>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Index,
});

import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/showcase")({
  component: ShowcasePage,
});

function ShowcasePage() {
  return (
    <div className="h-dvh overflow-hidden bg-neutral-50">
      <div className="flex min-h-dvh flex-col">
        <Navbar />

        <div className="container flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-bold">Showcase</h1>
          <p className="text-muted-foreground text-lg">
            Coming soon... Stay tuned for amazing emoji creations!
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

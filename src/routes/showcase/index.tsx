import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ShowcaseSection from "@/components/showcase/showcase-section";
import showcaseData from "@/data/showcase/showcase-data.json";

export const Route = createFileRoute("/showcase/")({
  component: ShowcasePage,
});

function ShowcasePage() {
  return (
    <div className="min-h-dvh">
      <div className="flex min-h-dvh flex-col">
        <Navbar />

        <div className="container flex-1">
          <div className="mb-8 text-center">
            <div className="font-title-sans text-4xl font-bold tracking-wide lg:text-5xl">Showcase</div>
            <div className="mt-2 text-muted-foreground text-lg  lg:text-xl">
              Explore creative emoji color variations
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {showcaseData.sections.map((section) => (
              <ShowcaseSection
                key={section.emoji}
                emoji={section.emoji}
                variants={section.variants}
                className={section.variants.length > 1 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

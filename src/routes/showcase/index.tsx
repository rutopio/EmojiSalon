/**
 * @fileoverview Showcase page route for displaying emoji color variations.
 * Displays a collection of customized emoji variants from showcase data.
 */

import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/layout";

import ShowcaseSection from "@/components/showcase/showcase-section";

import showcaseData from "@/data/showcase/showcase-data.json";

/**
 * Showcase page route configuration.
 */
export const Route = createFileRoute("/showcase/")({
  component: ShowcasePage,
  head: () => ({
    meta: [
      {
        title: "Showcase | Emoji Salon - Coloring Your Emoji",
        description: "Explore creative emoji color variations",
      },
    ],
  }),
});

/**
 * Showcase page component.
 * Displays a grid of emoji variants from the showcase data.
 * Each section shows original and customized emoji variations.
 *
 * @returns Showcase page component.
 */
function ShowcasePage() {
  return (
    <PageLayout>
      <div className="container flex-1 lg:py-16">
        <div className="mb-8 lg:text-center">
          <div className="font-title-sans text-4xl font-bold tracking-wide lg:text-5xl">
            Showcase
          </div>
          <div className="text-muted-foreground mt-2 text-lg lg:text-xl">
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
    </PageLayout>
  );
}

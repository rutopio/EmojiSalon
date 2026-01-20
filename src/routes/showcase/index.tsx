/**
 * @fileoverview Showcase page route for displaying emoji color variations.
 * Displays a collection of customized emoji variants from showcase data.
 */

import { createFileRoute } from "@tanstack/react-router";
import { MagicWandIcon } from "@phosphor-icons/react";
import PageLayout from "@/layout";

import ShowcaseSection from "@/components/showcase/showcase-section";
import { Button } from "@/components/ui/button";
import { GITHUB_ISSUE_BASE_URL } from "@/lib/constants";

import showcaseData from "@/data/showcase/showcase-data.json";

/**
 * Showcase page route configuration.
 */
export const Route = createFileRoute("/showcase/")({
  component: ShowcasePage,
  head: () => ({
    meta: [
      {
        title: "Showcase | EmojiSalon - Coloring Your Emoji",
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
        <div className="flex flex-col items-start gap-4 lg:items-center">
          <h1 className="font-title-sans text-4xl font-bold tracking-wide text-balance lg:text-5xl">
            Showcase
          </h1>
          <p className="text-muted-foreground text-lg text-pretty lg:text-xl">
            Explore creative emoji color variations
          </p>
          <div className="py-8">
            <a href={GITHUB_ISSUE_BASE_URL}>
              <Button className="">
                <MagicWandIcon className="mr-2 size-4" />
                Submit Your Own
              </Button>
            </a>
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

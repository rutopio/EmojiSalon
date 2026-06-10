/**
 * @fileoverview About page route for EmojiSalon.
 * Provides information about the application, how it works, accessibility,
 * copyright, and open source details.
 */

import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/layout";

import { SITE_URL } from "@/lib/constants";

/**
 * About page route configuration.
 */
export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About | EmojiSalon - Coloring Your Emoji",
      },
      {
        name: "description",
        content:
          "Learn about EmojiSalon, how it works, accessibility features for visually impaired users, and open source licensing.",
      },
      {
        property: "og:title",
        content: "About | EmojiSalon - Coloring Your Emoji",
      },
      {
        property: "og:description",
        content:
          "Learn about EmojiSalon, how it works, accessibility features for visually impaired users, and open source licensing.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/about`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/social.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
});

/**
 * About page component.
 * Displays information about EmojiSalon including how it works,
 * accessibility features, copyright information, and open source details.
 *
 * @returns About page component.
 */
function AboutPage() {
  return (
    <PageLayout>
      <div className="container flex flex-1 flex-col lg:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Hero section */}
          <section className="space-y-4 lg:text-center">
            <h1 className="text-balance font-bold font-title-sans text-4xl lg:text-5xl">
              About EmojiSalon
            </h1>
            <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
              EmojiSalon allows you to customize the colors of emojis, just like
              dressing them up with various cosmetics or coloring them with
              different paints.
            </p>
          </section>

          {/* How it works section */}
          <section className="space-y-4">
            <h2 className="text-balance font-bold font-title-sans text-2xl lg:text-3xl">
              How It Works
            </h2>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              EmojiSalon uses Twemoji SVG data for emoji rendering. You can
              select any emoji, customize its colors using an intuitive color
              palette system, and download your creation as SVG or PNG for
              personal or commercial use. The tool provides full creative
              control over each color component of the emoji, allowing for
              endless customization possibilities.
            </p>
          </section>

          {/* Accessibility section */}
          <section className="space-y-6">
            <h2 className="text-balance font-bold font-title-sans text-2xl lg:text-3xl">
              Accessibility
            </h2>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Emoji accessibility is not just a binary between being able to see
              emoji perfectly and not being able to see them at all — it is a
              spectrum that accounts for multiple experiences.
            </p>

            {/* Challenges */}
            <div className="space-y-3">
              <h3 className="font-semibold font-title-sans text-xl">
                Challenges for Visually Impaired Users
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For people with color vision deficiencies, color blindness, or
                low vision, identifying certain emojis can be challenging:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-muted-foreground">
                <li>
                  <strong>Similar colors:</strong> Emoji may appear blurry or
                  distorted, making it difficult to distinguish between
                  similar-looking icons
                </li>
                <li>
                  <strong>Color-based identification:</strong> Many users
                  identify emoji by color or general shape rather than fine
                  details
                </li>
                <li>
                  <strong>Multiple emoji in sequence:</strong> When several
                  emoji appear in a row, they can be hard to tell apart,
                  especially with similar colors
                </li>
                <li>
                  <strong>Small keyboard icons:</strong> Emoji keyboards have
                  small icons arranged closely together, making selection
                  difficult
                </li>
              </ul>
            </div>

            {/* Commonly Confused Emoji */}
            <div className="space-y-3">
              <h3 className="font-semibold font-title-sans text-xl">
                Commonly Confused Emoji
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Flag emoji</strong> with similar color schemes are
                  particularly problematic:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2">
                  <li>🇮🇹 Italy / 🇮🇪 Ireland</li>
                  <li>🇷🇴 Romania / 🇹🇩 Chad</li>
                  <li>🇱🇻 Latvia / 🇦🇹 Austria</li>
                  <li>🇲🇨 Monaco / 🇮🇩 Indonesia</li>
                </ul>
                <p className="pt-2">
                  <strong>Heart emoji</strong> colors can also be easily
                  confused:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2">
                  <li>❤️ Red / 💜 Purple</li>
                  <li>💙 Blue / 💜 Purple</li>
                  <li>💚 Green / 🧡 Orange</li>
                </ul>
              </div>
            </div>

            {/* How EmojiSalon Helps */}
            <div className="space-y-3">
              <h3 className="font-semibold font-title-sans text-xl">
                How EmojiSalon Helps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most current emoji designs do not consider these accessibility
                needs. EmojiSalon provides a solution by allowing users to:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-muted-foreground">
                <li>Customize emoji colors for better personal distinction</li>
                <li>
                  Create high-contrast variants tailored to individual visual
                  needs
                </li>
                <li>
                  Generate easily distinguishable emoji for users with specific
                  color vision deficiencies
                </li>
              </ul>
            </div>

            {/* See more */}
            <div className="space-y-2 text-muted-foreground">
              <p>See more:</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>
                  <a
                    href="https://veroniiiica.com/emoji-and-low-vision/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Emoji And Low Vision - Veronica With Four Eyes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ColourBlindVision/posts/are-you-emoji-colour-blinda-strange-concept-to-say-nevertheless-how-many-times-h/678523570194699/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Are you emoji colour blind? - Colour Blind Vision
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Copyright section */}
          <section className="space-y-4">
            <h2 className="text-balance font-bold font-title-sans text-2xl lg:text-3xl">
              Copyright & License
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              {/* Graphics License */}
              <div className="space-y-3">
                <h3 className="font-semibold font-title-sans text-xl">
                  Graphics
                </h3>
                <div className="flex justify-center py-2">
                  <img
                    src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
                    alt="Creative Commons Attribution 4.0 International License badge"
                    className="h-8 w-auto"
                  />
                </div>
                <p>
                  Your creation is based on{" "}
                  <a
                    href="https://github.com/jdecked/twemoji"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Twemoji
                  </a>
                  , licensed under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    CC-BY 4.0
                  </a>{" "}
                  (graphic).
                </p>
                <p>
                  This license enables reusers to distribute, remix, adapt, and
                  build upon the material in any medium or format, so long as
                  attribution is given to the creator. The license allows for
                  commercial use.
                </p>
                <p className="font-medium">
                  The author does not own any copyright to your work.
                </p>
              </div>

              {/* Code License */}
              <div className="space-y-3 border-t pt-4">
                <h3 className="font-semibold font-title-sans text-xl">Code</h3>
                <p>
                  Code licensed under the{" "}
                  <a
                    href="http://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    MIT License
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Open source section */}
          <section className="space-y-4">
            <h2 className="text-balance font-bold font-title-sans text-2xl lg:text-3xl">
              Open Source
            </h2>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              EmojiSalon is open source and available on{" "}
              <a
                href="https://github.com/rutopio/EmojiSalon"
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4 hover:text-foreground"
              >
                GitHub
              </a>
              . Feel free to contribute, report issues, or suggest new features
              to help make this tool even better for everyone.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

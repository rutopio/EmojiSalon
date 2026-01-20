/**
 * @fileoverview About page route for Emoji Salon.
 * Provides information about the application, how it works, accessibility,
 * copyright, and open source details.
 */

import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/layout";

/**
 * About page route configuration.
 */
export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About | Emoji Salon - Coloring Your Emoji",
        description: "Learn more about Emoji Salon",
      },
    ],
  }),
});

/**
 * About page component.
 * Displays information about Emoji Salon including how it works,
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
            <h1 className="font-title-sans text-4xl font-bold tracking-wide lg:text-5xl">
              About Emoji Salon
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl">
              Emoji Salon allows you to customize the colors of emojis, just
              like dressing them up with various cosmetics or coloring them with
              different paints.
            </p>
          </section>

          {/* How it works section */}
          <section className="space-y-4">
            <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
              How It Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Emoji Salon uses Twemoji SVG data for emoji rendering. You can
              select any emoji, customize its colors using an intuitive color
              palette system, and download your creation as SVG or PNG for
              personal or commercial use. The tool provides full creative
              control over each color component of the emoji, allowing for
              endless customization possibilities.
            </p>
          </section>

          {/* Accessibility section */}
          <section className="space-y-4">
            <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
              Accessibility
            </h2>
            <div className="text-muted-foreground space-y-3 leading-relaxed">
              <p>
                For some people with color vision deficiencies or color
                blindness, it may be challenging to correctly identify certain
                emojis that are too similar in color or overly vibrant.
              </p>
              <p>
                For instance, the flags of 🇮🇹 Italy and 🇮🇪 Ireland; 🇷🇴 Romania
                and 🇹🇩 Chad; 🇱🇻 Latvia and 🇦🇹 Austria; 🇲🇨 Monaco and 🇮🇩
                Indonesia can be difficult to distinguish due to their similar
                color schemes.
              </p>
              <p>
                However, most current emoji designs do not take these
                accessibility concerns into consideration. Emoji Salon aims to
                provide a solution by allowing users to create easily
                distinguishable emoji variants tailored to individual needs,
                making digital communication more inclusive and accessible for
                everyone.
              </p>
              <p className="pt-2">See more:</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>
                  <a
                    href="https://veroniiiica.com/emoji-and-low-vision/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground underline underline-offset-4"
                  >
                    Emoji And Low Vision - Veronica With Four Eyes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ColourBlindVision/posts/are-you-emoji-colour-blinda-strange-concept-to-say-nevertheless-how-many-times-h/678523570194699/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground underline underline-offset-4"
                  >
                    Are you emoji colour blind? - Colour Blind Vision
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Copyright section */}
          <section className="space-y-4">
            <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
              Copyright & License
            </h2>
            <div className="text-muted-foreground space-y-3 leading-relaxed">
              <p>
                Your creations are based on{" "}
                <a
                  href="https://twemoji.twitter.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-foreground underline underline-offset-4"
                >
                  Twemoji
                </a>
                , licensed under{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-foreground underline underline-offset-4"
                >
                  CC-BY 4.0
                </a>{" "}
                (graphics).
              </p>
              <p>
                This license enables reusers to distribute, remix, adapt, and
                build upon the material in any medium or format, so long as
                attribution is given to the creator. The license allows for
                commercial use.
              </p>
              <p className="font-medium">
                I do not own any copyright to your work. You are free to use
                your customized emojis as you wish, following the CC-BY 4.0
                license terms.
              </p>
            </div>
          </section>

          {/* Open source section */}
          <section className="space-y-4">
            <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
              Open Source
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Emoji Salon is open source and available on{" "}
              <a
                href="https://github.com/rutopio/EmojiSalon"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-foreground underline underline-offset-4"
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

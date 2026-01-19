import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh">
      <div className="flex min-h-dvh flex-col items-center justify-between">
        <Navbar />

        <div className="container flex flex-1 flex-col gap-12 py-8 lg:py-16">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Hero Section */}
            <section className="space-y-4">
              <h1 className="font-title-sans text-4xl font-bold tracking-wide lg:text-5xl">
                About Emoji Salon
              </h1>
              <p className="text-lg text-muted-foreground lg:text-xl">
                Emoji Salon allows you to customize the colors of emojis, just
                like dressing them up with various cosmetics or coloring them
                with different paints.
              </p>
            </section>

            {/* How It Works */}
            <section className="space-y-4">
              <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
                How It Works
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Emoji Salon uses Twemoji SVG data for emoji rendering. You can
                select any emoji, customize its colors using an intuitive color
                palette system, and download your creation as SVG or PNG for
                personal or commercial use. The tool provides full creative
                control over each color component of the emoji, allowing for
                endless customization possibilities.
              </p>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
              <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
                Accessibility
              </h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  For some people with color vision deficiencies or color
                  blindness, it may be challenging to correctly identify certain
                  emojis that are too similar in color or overly vibrant.
                </p>
                <p>
                  For instance, the flags of 🇮🇹 Italy and 🇮🇪 Ireland; 🇷🇴
                  Romania and 🇹🇩 Chad; 🇱🇻 Latvia and 🇦🇹 Austria; 🇲🇨 Monaco
                  and 🇮🇩 Indonesia can be difficult to distinguish due to their
                  similar color schemes.
                </p>
                <p>
                  However, most current emoji designs do not take these
                  accessibility concerns into consideration. Emoji Salon aims to
                  provide a solution by allowing users to create easily
                  distinguishable emoji variants tailored to individual needs,
                  making digital communication more inclusive and accessible for
                  everyone.
                </p>
              </div>
            </section>

            {/* Copyright */}
            <section className="space-y-4">
              <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
                Copyright & License
              </h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  Your creations are based on{" "}
                  <a
                    href="https://twemoji.twitter.com/"
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

            {/* Open Source */}
            <section className="space-y-4">
              <h2 className="font-title-sans text-2xl font-bold tracking-wide lg:text-3xl">
                Open Source
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Emoji Salon is open source and available on{" "}
                <a
                  href="https://github.com/rutopio/EmojiSalon"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  GitHub
                </a>
                . Feel free to contribute, report issues, or suggest new
                features to help make this tool even better for everyone.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

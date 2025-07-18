import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, LoaderPinwheel } from "lucide-react";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/ui/galleryCarousel";

function Home() {
  return (
    <>
      <main className="bg-secondary px-6 py-30 pb-20">
        <section className="max-w-4xl mx-auto text-center flex justify-center flex-col items-center">
          <h1 className="text-6xl font-bold mb-4 text-[var(--text-dark)]">
            Üdvözöl a Szakralia
          </h1>
          <hr className="w-30 border-t-3 my-3 border-[var(--text)] opacity-40"></hr>
          <p className="text-2xl text-[var(--text)] mb-1">
            Egyedi események és különleges florisztikai készletek — a lelked
            ünnepére.
          </p>
          <iframe
            className="m-auto my-10 rounded-sm"
            width="800"
            height="415"
            src="https://www.youtube.com/embed/l-bTJH-WJzc?si=B_jVN-D8K-1dFoT-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Button className="bg-accent hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-xl max-w-50 transition-colors duration-200">
            Fedezd fel a kínálatot
          </Button>
          <a href="#services" className="mt-15">
            <ChevronDown
              className="stroke-[var(--accent)] hover:stroke-primary transition-colors duration-200 animate-bounce"
              size={48}
            />
          </a>
        </section>
      </main>
      {/* Reverse Triangle Notch Separator */}
      <div
        className="relative w-full leading-none bg-[var(--secondary)]"
        id="services"
      >
        <svg
          className="block w-full h-[100px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="top-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="2"
                floodColor="rgba(0,0,0,0.50 )"
              />
            </filter>
          </defs>
          <path
            d="M0,0 L0,100 Q50,0 100,100 L100,0 Z"
            fill="var(--soft-brown)"
            filter="url(#top-shadow)"
            transform="scale(1, -1) translate(0, -100)"
          />
        </svg>
      </div>
      {/**<div className="relative rotate-180">
        <svg
          viewBox="0 0 1440 100"
          className="absolute top-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            className="fill-[var(--background-1)]"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}

      <section className="bg-[var(--soft-brown)] shadow-[0_-8px_6px_rgba(0,0,0,0.1)] pt-15">
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--secondary)] mb-4">
            Our Approach
          </h2>
          <p className="text-[var(--secondary)] text-lg">
            A process rooted in strategy, creativity, and clarity — built to
            support your brand from concept to completion.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* IMAGE BLOCK */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/assets/city.jpeg"
              alt="Teamwork or creative planning"
              className="w-full h-full object-cover"
            />
          </div>
          {/* TEXT BLOCK */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-[var(--secondary)] mb-6">
              What We Bring to the Table
            </h2>
            <p className="text-[var(--secondary)] text-lg mb-6">
              We help you turn vision into execution — whether you're looking
              for strategy, creative direction, or ongoing support.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-3 mt-1">✔</span>
                <span className="text-[var(--secondary)]">
                  Tailored solutions, not templates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-3 mt-1">✔</span>
                <span className="text-[var(--secondary)]">
                  Collaborative, hands-on approach
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-3 mt-1">✔</span>
                <span className="text-[var(--secondary)]">
                  Sustainable, long-term support
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <Button className="bg-accent hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-xl max-w-50 transition-colors duration-200">
            Fedezd fel a kínálatot
          </Button>
        </div>
        {/* Triangle Notch Separator with Bottom Shadow */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-[100px]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="bottom-shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="4"
                  floodColor="rgba(0, 0, 0, 0.2)"
                />
              </filter>
            </defs>
            <path
              d="M0,0 L0,100 Q50,0 100,100 L100,0 Z"
              transform="scale(1, -1) translate(0, -100)"
              fill="var(--secondary)"
              filter="url(#bottom-shadow)"
            />
          </svg>
        </div>
      </section>

      {/* Third Section */}
      <section
        id="values"
        className="bg-[var(--secondary)] py-24 px-4 text-[var(--text)]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4 text-[var(--text-dark)]">
            What We Stand For
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12 opacity-80">
            Our core values that guide every project and relationship.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <LoaderPinwheel
                    className="m-auto mb-3 text-[var(--primary)]"
                    size={48}
                  />
                ),
                title: "Authenticity",
                desc: "We believe in honest design that reflects real stories and real people.",
              },
              {
                icon: (
                  <LoaderPinwheel
                    className="m-auto mb-3 text-[var(--primary)]"
                    size={48}
                  />
                ),
                title: "Sustainability",
                desc: "We value timeless work over trends — mindful of impact and materials.",
              },
              {
                icon: (
                  <LoaderPinwheel
                    className="m-auto mb-3 text-[var(--primary)]"
                    size={48}
                  />
                ),
                title: "Craftsmanship",
                desc: "Every detail matters. We approach every project with care and intention.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[var(--background)] p-6 py-10 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--text)]/10 "
              >
                {card.icon ? card.icon : null}
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80">{card.desc}</p>
                <Button className="bg-accent hover:bg-primary/80 text-white font-bold px-5 py-2 rounded-xl max-w-50 transition-colors duration-200 mt-5">
                  Fedezd fel a kínálatot
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Carousel Section */}
      <section
        id="gallery"
        className="bg-[var(--background-1)] py-20 text-[var(--secondary)]"
      >
        <GalleryCarousel></GalleryCarousel>
      </section>
      <section
        id="events"
        className="bg-[var(--secondary)] py-20 px-4 text-[var(--text)]"
      >
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Upcoming Event</h2>
          <p className="mt-2 text-base max-w-xl mx-auto">
            We regularly host gatherings, workshops, and curated experiences.
            Here’s what’s coming up next — don’t miss it.
          </p>
        </div>

        {/* Event Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden bg-[var(--background-1)] shadow-md border border-[var(--secondary)]/10">
            <div className="grid md:grid-cols-2">
              {/* Left: Event Image */}
              <div className="h-64 md:h-auto">
                <img
                  src="/src/assets/city.jpeg" // Replace with real image
                  alt="Upcoming Event"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Event Content */}
              <div className="p-6 flex flex-col justify-between text-left text-[var(--secondary)]">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Event Title Goes Here
                  </h3>
                  <p className="text-sm mb-4">
                    A short description of what the event is about. Just a few
                    lines to catch attention and add value.
                  </p>

                  <p className="text-sm text-[var(--secondary)]/70">
                    📍 Location • 📅 Date • 🕒 Time
                  </p>
                </div>

                <a
                  href="/events"
                  className="mt-6 inline-block text-[var(--accent)] hover:text-[var(--primary)] transition-colors font-medium"
                >
                  View All Events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Signup Section */}
      <section className="bg-[var(--accent)] text-white py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-medium text-center md:text-left">
            Stay in the loop — Get updates & invites
          </h3>

          <form className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-2 rounded-md text-[var(--text)] bg-white placeholder:text-[var(--text)]/60 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] hover:bg-[var(--text)] text-white px-4 py-2 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;

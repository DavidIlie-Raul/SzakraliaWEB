import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

function Home() {
  return (
    <>
      <main className="bg-secondary px-6 py-30">
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
            src="https://www.youtube.com/embed/Y8s1rJV3ut0?si=WWEJtUkV8ATmizPr"
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
      <div className="relative rotate-180">
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
      </div>
      <section
        id="services"
        className="bg-[var(--background-1)] shadow-[0_-8px_6px_rgba(0,0,0,0.1)] min-h-screen"
      >
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">
            Our Approach
          </h2>
          <p className="text-[var(--text)] text-lg">
            A process rooted in strategy, creativity, and clarity — built to
            support your brand from concept to completion.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT BLOCK */}
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              What We Bring to the Table
            </h2>
            <p className="text-[var(--text)] text-lg mb-6">
              We help you turn vision into execution — whether you're looking
              for strategy, creative direction, or ongoing support.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3 mt-1">✔</span>
                <span className="text-[var(--text)]">
                  Tailored solutions, not templates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3 mt-1">✔</span>
                <span className="text-[var(--text)]">
                  Collaborative, hands-on approach
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3 mt-1">✔</span>
                <span className="text-[var(--text)]">
                  Sustainable, long-term support
                </span>
              </li>
            </ul>
          </div>

          {/* IMAGE BLOCK */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/assets/city.jpeg"
              alt="Teamwork or creative planning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

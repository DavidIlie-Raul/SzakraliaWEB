import { LoaderPinwheel, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="bg-[var(--secondary)] text-[var(--text)]">
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/city.jpeg" // Replace with your image
            alt="About background"
            className="w-full h-full object-cover filter blur-sm brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-black/30" />{" "}
          {/* Optional extra dark layer */}
        </div>

        {/* Overlay Text */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center text-white">
          <div className="max-w-2xl flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between items-end gap-5 ">
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-32 h-32 rounded-full object-cover my-5 border-3 border-primary"
              />
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-42 h-42 mb-15 rounded-full object-cover my-5 border-3 border-primary"
              />
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-32 h-32 rounded-full object-cover my-5 border-3 border-primary"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ismerj meg minket
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Egy közösség, ahol a hagyomány, a művészet és a kultúra életre
              kel.
            </p>
            <a href="#about" className="mt-15">
              <ChevronDown
                className="stroke-[var(--accent)] hover:stroke-primary transition-colors duration-200 animate-bounce"
                size={48}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Header */}
      <div id="about" className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
          Rólunk
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Egy közösség, amely a hagyományokat, kultúrát és közösségi élményeket
          ünnepli.
        </p>
      </div>

      {/* Two-Column Section V2 */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-start">
        <img
          src="src/assets/city.jpeg"
          alt="Rólunk"
          className="rounded-xl shadow-lg w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">
            Kik vagyunk?
          </h2>
          <p className="leading-relaxed opacity-90">
            Több mint egy évtizede szervezünk eseményeket, amelyek célja a
            magyar hagyományok megőrzése és közösségi élmények teremtése. Legyen
            szó táncházról, kézműves foglalkozásról vagy ünnepi rendezvényekről,
            nálunk mindenki otthon érezheti magát.
          </p>
        </div>
      </div>

      {/* Mission / Values */}
      <div className="bg-[var(--soft-brown)] text-white py-16 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-3xl font-bold">Küldetésünk</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-32 h-32 rounded-full object-cover my-5 border-3 border-primary"
              />
              <h3 className="text-xl font-semibold mb-2">Kultúra</h3>
              <p className="opacity-90">
                A magyar népi örökség továbbvitele élmények és közösség által.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-32 h-32 rounded-full object-cover my-5 border-3 border-primary"
              />
              <h3 className="text-xl font-semibold mb-2">Kultúra</h3>
              <p className="opacity-90">
                A magyar népi örökség továbbvitele élmények és közösség által.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="src/assets/city.jpeg"
                alt="kultura kep"
                className="w-32 h-32 rounded-full object-cover my-5 border-3 border-primary"
              />
              <h3 className="text-xl font-semibold mb-2">Kultúra</h3>
              <p className="opacity-90">
                A magyar népi örökség továbbvitele élmények és közösség által.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlight Section */}
      <div className="bg-[var(--secondary)] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="src/assets/city.jpeg" // Replace with product-related image
            alt="Termékeink"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
              Termékeink
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              Kézzel készített, autentikus magyar termékek – dísztárgyak,
              viseletek, ajándékok, amelyek a kultúránkat tükrözik és örömet
              hoznak otthonodba.
            </p>
            <a
              href="/products"
              className="inline-block bg-[var(--accent)] hover:bg-[var(--primary)] text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Fedezd fel a termékeket
            </a>
          </div>
        </div>
      </div>

      {/* Events Highlight Section */}
      <div className="bg-[var(--soft-brown)] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Eseményeink</h2>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              Évente számos eseményt szervezünk – táncházakat, kézműves
              foglalkozásokat, fesztiválokat – melyek összehozzák a közösséget
              és életre keltik hagyományainkat.
            </p>
            <a
              href="/events"
              className="inline-block bg-white text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Nézd meg az eseményeinket
            </a>
          </div>
          <img
            src="src/assets/city.jpeg" // Replace with event-related image
            alt="Események"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* CTA / Join Us */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
          Csatlakozz hozzánk!
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Kövess minket eseményeinken, jelentkezz önkéntesnek vagy támogasd
          munkánkat.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[var(--accent)] hover:bg-[var(--primary)] text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Kapcsolatfelvétel
        </a>
      </div>
    </section>
  );
}
export default About;

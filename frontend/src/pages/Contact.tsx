import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

function Contact() {
  return (
    <>
      <main className="bg-secondary px-6 py-24 text-[var(--text)]">
        {/* HERO */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--text-dark)] mb-4">
            Kapcsolat
          </h1>
          <p className="text-lg opacity-80">
            Kérdésed van, eseményt szervezel, vagy csak érdeklődnél? Írj nekünk —
            örömmel segítünk.
          </p>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT - CONTACT INFO */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-2">
                Elérhetőségek
              </h2>
              <p className="opacity-80">
                Vedd fel velünk a kapcsolatot az alábbi elérhetőségek egyikén.
              </p>
            </div>

            <div className="space-y-3">
              <p>📞 +36 30 123 4567</p>
              <p>📧 info@szakralia.hu</p>
              <p>📍 Budapest, Magyarország</p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">
                Nyitvatartás
              </h3>
              <p className="opacity-80">
                Hétfő - Péntek: 09:00 - 18:00
              </p>
              <p className="opacity-80">
                Hétvége: Egyeztetés alapján
              </p>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <form className="bg-[var(--background)] p-8 rounded-2xl shadow-md space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Név
              </label>
              <input
                type="text"
                placeholder="Teljes neved"
                className="w-full px-4 py-2 rounded-md bg-white text-[var(--text)] border border-[var(--text)]/20 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-white text-[var(--text)] border border-[var(--text)]/20 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Üzenet
              </label>
              <textarea
                rows={5}
                placeholder="Írd le röviden, miben segíthetünk..."
                className="w-full px-4 py-2 rounded-md bg-white text-[var(--text)] border border-[var(--text)]/20 focus:outline-none"
              />
            </div>

            <Button className="w-full bg-accent hover:bg-primary/80 text-white font-bold py-3 rounded-xl transition-colors duration-200">
              Üzenet küldése
            </Button>
          </form>
        </section>
      </main>

      {/* MAP / EXTRA SECTION (OPTIONAL) */}
      <section className="bg-[var(--background-1)] py-16 px-4 text-center text-[var(--secondary)]">
        <h2 className="text-2xl font-semibold mb-4">
          Hol találsz meg minket?
        </h2>
        <p className="mb-6 opacity-80">
          Budapest központjában, előzetes egyeztetés alapján.
        </p>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps?q=Budapest&output=embed"
            className="w-full h-[300px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
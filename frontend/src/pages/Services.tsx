import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

function Services() {
  const services = [
    {
      title: "Események",
      desc: "Különleges alkalmak megtervezése és kivitelezése egyedi florisztikai megoldásokkal.",
    },
    {
      title: "Workshopok",
      desc: "Kreatív foglalkozások, ahol saját kompozíciókat készíthetsz vezetett formában.",
    },
    {
      title: "Egyedi kompozíciók",
      desc: "Személyre szabott virágköltemények otthonra vagy ajándékba.",
    },
  ];

  return (
    <>
      <main className="bg-secondary px-6 py-24 text-[var(--text)]">
        
        {/* HERO */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--text-dark)] mb-4">
            Szolgáltatások
          </h1>
          <p className="text-lg opacity-80">
            Fedezd fel, hogyan segítünk különlegessé tenni az eseményeidet és a mindennapokat.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[var(--background)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--text)]/10"
            >
              <h2 className="text-xl font-semibold text-[var(--text-dark)] mb-3">
                {service.title}
              </h2>
              <p className="opacity-80 mb-4">{service.desc}</p>

              <Button className="bg-accent hover:bg-primary/80 text-white rounded-xl">
                Tovább
              </Button>
            </div>
          ))}
        </section>

        {/* FEATURE SECTION (like your homepage style) */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* IMAGE */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
            <img
              src="/src/assets/city.jpeg"
              alt="Service preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">
              Miért válassz minket?
            </h2>
            <p className="opacity-80 mb-6">
              Minden projektet egyedileg kezelünk — nincs sablon, csak valódi
              odafigyelés és kreativitás.
            </p>

            <ul className="space-y-3">
              <li>✔ Egyedi megoldások</li>
              <li>✔ Minőségi alapanyagok</li>
              <li>✔ Személyes megközelítés</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--text-dark)]">
            Készen állsz elkezdeni?
          </h2>
          <p className="opacity-80 mb-6">
            Vedd fel velünk a kapcsolatot, és valósítsuk meg az elképzeléseidet.
          </p>

          <Button className="bg-accent hover:bg-primary/80 text-white px-6 py-3 rounded-xl">
            Kapcsolatfelvétel
          </Button>
        </section>

      </main>

    </>
  );
}

export default Services;
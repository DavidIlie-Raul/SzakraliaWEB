import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

function Account() {
  // Dummy data (replace later with DB)
  const user = {
    name: "Teszt Elek",
    email: "teszt@example.com",
    phone: "+36 30 123 4567",
  };

  const orders = [
    { id: "#001", date: "2026-04-01", total: "12 500 Ft" },
    { id: "#002", date: "2026-03-20", total: "8 200 Ft" },
  ];

  return (
    <>
      <main className="bg-secondary px-6 py-24 text-[var(--text)]">
        {/* HEADER */}
        <section className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-[var(--text-dark)] mb-2">
            Fiókom
          </h1>
          <p className="opacity-80">
            Kezeld adataidat, rendeléseidet és beállításaidat egy helyen.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* LEFT SIDEBAR */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-md space-y-4">
            <h2 className="text-lg font-semibold text-[var(--text-dark)]">
              Menü
            </h2>

            <ul className="space-y-2">
              <li className="hover:text-[var(--accent)] cursor-pointer">
                Profil
              </li>
              <li className="hover:text-[var(--accent)] cursor-pointer">
                Rendelések
              </li>
              <li className="hover:text-[var(--accent)] cursor-pointer">
                Beállítások
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Kijelentkezés
              </li>
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 space-y-8">

            {/* PROFILE CARD */}
            <div className="bg-[var(--background)] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-[var(--text-dark)] mb-4">
                Profil adatok
              </h2>

              <div className="space-y-2">
                <p><strong>Név:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefon:</strong> {user.phone}</p>
              </div>

              <Button className="mt-4 bg-accent hover:bg-primary/80 text-white rounded-xl">
                Szerkesztés
              </Button>
            </div>

            {/* ORDERS */}
            <div className="bg-[var(--background)] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-[var(--text-dark)] mb-4">
                Rendelések
              </h2>

              {orders.length > 0 ? (
                <div className="space-y-3">
                  {orders.map((order, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-[var(--text)]/10 pb-2"
                    >
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm opacity-70">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p>{order.total}</p>
                        <button className="text-sm text-[var(--accent)] hover:underline">
                          Részletek
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="opacity-70">Nincsenek rendeléseid még.</p>
              )}
            </div>

            {/* SETTINGS */}
            <div className="bg-[var(--background)] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-[var(--text-dark)] mb-4">
                Beállítások
              </h2>

              <div className="space-y-3">
                <Button className="w-full bg-accent hover:bg-primary/80 text-white rounded-xl">
                  Jelszó módosítása
                </Button>

                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--text)] text-white rounded-xl">
                  Fiók törlése
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Account;
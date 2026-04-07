import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Event Entry – Budapest Gala",
    quantity: 2,
    price: 12000,
    image: "src/assets/city.jpeg",
  },
  {
    id: 2,
    title: "Workshop Pass – Folk Dance",
    quantity: 1,
    price: 8500,
    image: "src/assets/city.jpeg",
  },
];

function Cart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <section className="max-w-5xl h-screen min-h-[40vw] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-8">Kosár</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-[var(--text)]">
          A kosarad üres.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-[var(--secondary)] rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[var(--text)]">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[var(--text)] opacity-80">
                    Ár: {item.price.toLocaleString()} Ft
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-sm text-[var(--text)]">
                      Mennyiség:
                    </label>
                    <Input
                      type="number"
                      defaultValue={item.quantity}
                      min={1}
                      className="w-20"
                    />
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-red-500 hover:bg-red-100"
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-[var(--background-1)] p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-[var(--secondary)]">
              Összegzés
            </h3>
            <div className="flex justify-between text-[var(--secondary)]">
              <span>Összesen:</span>
              <span className="font-bold">{total.toLocaleString()} Ft</span>
            </div>
            <Button className="w-full bg-[var(--accent)] hover:bg-[var(--primary)] text-white mt-4">
              Fizetés
            </Button>
            <Link
              to="/events"
              className="block text-center text-sm text-[var(--secondary)] hover:underline"
            >
              Vissza az eseményekhez
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;

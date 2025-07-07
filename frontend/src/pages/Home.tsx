import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-rose-200 py-20 px-8 text-center">
        <h1 className="text-5xl font-serif font-semibold text-rose-800 mb-4">
          Welcome to Szakralia
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Sacred moments, curated with floral beauty and timeless rituals.
          Explore our event magic and signature kits.
        </p>
        <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-6 py-3 rounded-full">
          Discover the Collection
        </Button>
      </section>

      {/* About Snippet */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">What is Szakralia?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A unique blend of ceremony, celebration, and sacred craft. We design
          soulful events and create handcrafted floristical kits to elevate
          life’s meaningful moments.
        </p>
      </section>

      {/* Featured Kits */}
      <section className="py-16 px-8 bg-rose-50">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Sacred Bloom", "Ceremony Starter", "Floral Altar Kit"].map(
            (kit, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="h-40 bg-pink-100 rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold">{kit}</h3>
                  <p className="text-gray-500 mt-2">
                    A beautiful kit for your rituals and celebrations.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <p className="text-gray-600 mb-8">
          Join us for immersive, heart-centered gatherings.
        </p>
        <ul className="space-y-4 max-w-md mx-auto text-left">
          <li>🌸 August 20 – Floral Ceremony Workshop (Budapest)</li>
          <li>🌕 September 6 – Full Moon Ritual Gathering</li>
          <li>🕯 October 1 – Sacred Space Creation Masterclass</li>
        </ul>
      </section>

      {/* Testimonial / Vibe Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-rose-100 to-white text-center">
        <blockquote className="text-2xl italic text-gray-700 max-w-2xl mx-auto">
          “There is a sacred thread running through every flower and every
          moment. Szakralia helps me see and feel it.”
        </blockquote>
        <p className="mt-4 text-gray-500">– A satisfied customer</p>
      </section>

      {/* Newsletter or Contact */}
      <section className="py-16 px-8 bg-rose-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Sacred Loop</h2>
        <p className="text-gray-700 mb-6">
          Get news about events, kits, and seasonal rituals.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-3">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Home;

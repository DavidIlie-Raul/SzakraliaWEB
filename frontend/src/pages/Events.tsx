import { Link } from "react-router-dom";
import EventModal from "@/components/ui/EventModal";

function Events() {
  // Placeholder data — replace with actual dynamic content later
  const events = [
    {
      title: "Nyári Virágkötészeti Workshop",
      date: "2025. augusztus 14.",
      location: "Budapest, Magyarország",
      description:
        "Tanulj meg egyedi csokrokat készíteni tradicionális magyar stílusban.",
      time: "8:00PM",
      image: "./src/assets/city.jpeg",
    },
    {
      title: "Őszi Lélekünnep",
      date: "2025. szeptember 22.",
      location: "Szeged",
      description: "Egy nap az önismeret, művészet és közösség jegyében.",
      time: "8:00PM",
    },
  ];

  return (
    <section className="min-h-screen bg-[var(--secondary)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-black">Események</h1>
        <p className="text-lg">Csatlakozz hozzánk közelgő rendezvényeinken!</p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {events.map((event, index) => (
          <div className="grid md:grid-cols-2 bg-[var(--background-1)] rounded-xl">
            {/* Left: Event Image */}
            <div className="h-64 md:h-auto">
              <img
                src="/src/assets/city.jpeg" // Replace with real image
                alt="Upcoming Event"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right: Event Content */}
            <div className="p-6 flex flex-col justify-between text-left text-[var(--secondary)]">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm mb-4">{event.description}</p>

                <p className="text-sm text-[var(--secondary)]/70">
                  📍 {event.location} • 📅 {event.date} • 🕒 {event.time}
                </p>
              </div>

              <EventModal event={event} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;

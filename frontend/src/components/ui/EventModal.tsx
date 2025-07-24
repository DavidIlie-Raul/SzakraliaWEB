import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function EventModal({ event }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mt-4 bg-accent">
          Részletek megtekintése
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-[50%] max-h-full max-w-full min-h-[50%] p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar: Image + Location */}
          <div className="space-y-4 col-span-1">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-xl shadow-md w-full h-48 object-cover"
            />
            <div className="text-sm text-[var(--text)] bg-[var(--background-1)] p-3 rounded-md shadow">
              <p className="font-semibold text-[var(--secondary)]">
                📍 Helyszínek:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {event.locations?.map((loc, idx) => (
                  <li key={idx}>{loc}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-[var(--secondary)] bg-[var(--background-1)] p-3 rounded-md shadow">
              <p className="font-semibold text-[var(--secondary)]">Date:</p>
              {event.date}
            </div>
          </div>

          {/* Main Content: Title + Date + Description */}
          <div className="col-span-2 flex flex-col justify-baseline">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[var(--primary)]">
                {event.title}
              </DialogTitle>
              <DialogDescription className="text-[var(--text)] mt-1">
                📅 {event.date}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 text-[var(--text)] text-sm leading-relaxed">
              {event.description}
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full">
          <DialogFooter className="mt-6">
            <Button className="bg-[var(--accent)] hover:bg-[var(--primary)] text-white w-full md:w-auto">
              Jelentkezem az eseményre
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EventModal;

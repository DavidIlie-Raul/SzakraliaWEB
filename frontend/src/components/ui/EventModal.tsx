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
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[var(--primary)]">
            {event.title}
          </DialogTitle>
          <DialogDescription className="text-[var(--text)]">
            📅 {event.date} <br />
            📍 {event.location}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-[var(--text)] leading-relaxed">
          {event.description}
        </div>
        <DialogFooter className="mt-6">
          <Button className="bg-[var(--accent)] hover:bg-[var(--primary)] text-white">
            Jelentkezem az eseményre
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EventModal;

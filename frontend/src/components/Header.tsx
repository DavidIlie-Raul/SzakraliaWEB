import { Link } from "react-router-dom";
import { User } from "lucide-react"; // Lucide icon library (install if needed)

function Header() {
  return (
    <header className="bg-[var(--primary)] text-white shadow-md">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">Logo</Link>
        </div>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 text-base">
          <Link
            to="/"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Services
          </Link>
          <Link
            to="/events"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:underline hover:text-[var(--accent)] transition"
          >
            Home
          </Link>
        </div>

        {/* Right: Profile + Login */}
        <div className="hidden md:flex items-center gap-4">
          {/* Profile icon */}
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
            <User size={20} />
          </button>

          {/* Login button */}
          <Link
            to="/login"
            className="bg-[var(--accent)] hover:bg-white text-white hover:text-[var(--text)] px-4 py-1.5 rounded-md font-semibold transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

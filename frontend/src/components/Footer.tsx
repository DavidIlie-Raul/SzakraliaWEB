function Footer() {
  return (
    <footer className="bg-[var(--dark-brown)] text-[var(--secondary)] py-10 px-4 border-t border-[var(--secondary)]/10">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-sm">
        {/* Left: Brand/Logo */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">YourBrand</h2>
          <p className="max-w-xs text-[var(--footer-muted)]">
            A short tagline or mission statement goes here. Keep it human and
            grounded.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col gap-2">
          <a
            href="#services"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Services
          </a>
          <a
            href="#events"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Events
          </a>
          <a
            href="#gallery"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right: Contact or Social */}
        <div className="flex flex-col gap-2">
          <p>hello@yourdomain.com</p>
          <p>+1 (123) 456-7890</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-[var(--accent)]">
              Instagram
            </a>
            <a href="#" className="hover:text-[var(--accent)]">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-xs text-[var(--secondary)]/60">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

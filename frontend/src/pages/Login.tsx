import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useState } from "react";

function Login() {
  // 👇 Placeholder state (you’ll wire this to backend later)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 👇 Placeholder submit handler
  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Replace with real auth logic
    console.log("Login attempt:", { email, password });

    // Example:
    // await loginUser(email, password)
    // redirect("/account")
  };

  return (
    <>
      <main className="bg-secondary min-h-screen flex items-center justify-center px-4 text-[var(--text)]">
        
        <div className="w-full max-w-md bg-[var(--background)] p-8 rounded-2xl shadow-md">
          
          {/* HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[var(--text-dark)] mb-2">
              Bejelentkezés
            </h1>
            <p className="opacity-80 text-sm">
              Jelentkezz be a fiókodba a folytatáshoz.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* EMAIL */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-[var(--text)] border border-[var(--text)]/20 focus:outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Jelszó
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-[var(--text)] border border-[var(--text)]/20 focus:outline-none"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between items-center text-sm">
              <a
                href="/forgot-password"
                className="text-[var(--accent)] hover:underline"
              >
                Elfelejtetted a jelszót?
              </a>
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-primary/80 text-white font-bold py-3 rounded-xl transition-colors duration-200"
            >
              Bejelentkezés
            </Button>
          </form>

          {/* DIVIDER */}
          <div className="my-6 text-center text-sm opacity-60">
            vagy
          </div>

          {/* REGISTER LINK */}
          <div className="text-center text-sm">
            <span className="opacity-80">
              Nincs még fiókod?{" "}
            </span>
            <a
              href="/register"
              className="text-[var(--accent)] font-medium hover:underline"
            >
              Regisztráció
            </a>
          </div>
        </div>

      </main>
    </>
  );
}

export default Login;
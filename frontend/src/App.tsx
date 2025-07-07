import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

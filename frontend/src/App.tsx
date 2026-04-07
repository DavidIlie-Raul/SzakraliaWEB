import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/hooks/scrollToTop";
import Account from "./pages/Account";
import Services from "./pages/Services";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop />
      <Header></Header>
      {/*Adding a Div with Top margin to compensate for the loss of space cause by making the header Absolute for Animation. */}
      <div className="mt-16"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

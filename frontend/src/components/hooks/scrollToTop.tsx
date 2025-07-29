import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Use "smooth" if you want animation
  }, [pathname]);

  return null;
}

export default ScrollToTop;

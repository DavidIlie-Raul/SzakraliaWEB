import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentY - lastY) > 10) {
        setScrollDir(direction);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);

  return scrollDir;
}
export default useScrollDirection;

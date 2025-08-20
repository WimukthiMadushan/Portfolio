"use client";
import { useEffect } from "react";

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "click-effect";

      // Set position
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);

      // Remove after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything itself
}

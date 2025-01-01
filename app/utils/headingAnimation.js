// app/utils/headingAnimation.js
import gsap from "gsap";

export default function headingAnimation() {
  const headings = document.querySelectorAll("[data-heading]");

  if (headings.length) {
    gsap.from(headings, {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      delay: 0.5,
      duration: 0.9,
    });
  }

  // Optional cleanup logic, if needed in other animations
  return () => {
    gsap.killTweensOf(headings); // Removes any ongoing animations
  };
}

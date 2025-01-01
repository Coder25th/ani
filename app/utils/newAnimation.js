import gsap from "gsap";

export default function newAnimation() {
  const box = document.querySelector("[data-box]");
  if (box) {
    gsap.to(box, {
      x: 1000,
      duration: 2,
      delay: 1,
    });
  }
  // Optional cleanup logic
  return () => {
    gsap.killTweensOf(box); // Clean up GSAP animations on unmount
  };
}

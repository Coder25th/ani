import gsap from "gsap";

export default function initPlayerAnimations() {
  const videoContainer = document.querySelector("[data-video-container]");
  const playButton = document.querySelector("[data-play-button]");

  if (videoContainer && playButton) {
    const handleMouseEnter = () => {
      gsap.to(playButton, { scale: 1, opacity: 1 });
    };

    const handleMouseLeave = () => {
      gsap.to(playButton, { scale: 0, opacity: 0 });
    };

    const handleMouseMove = (e) => {
      const rect = videoContainer.getBoundingClientRect(); // Get container bounds
      const x = e.clientX - rect.left; // Adjust X position relative to container
      const y = e.clientY - rect.top; // Adjust Y position relative to container

      gsap.to(playButton, { left: x - 50, top: y - 50 }); // Offset for centering
    };

    videoContainer.addEventListener("mouseenter", handleMouseEnter);
    videoContainer.addEventListener("mouseleave", handleMouseLeave);
    videoContainer.addEventListener("mousemove", handleMouseMove);

    // Apply animation using `transform` instead of directly moving the container
    gsap.from(videoContainer, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      ease: "power3.out",
    });

    // Cleanup function
    return () => {
      videoContainer.removeEventListener("mouseenter", handleMouseEnter);
      videoContainer.removeEventListener("mouseleave", handleMouseLeave);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }
}

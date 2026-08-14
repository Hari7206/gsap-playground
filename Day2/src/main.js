import gsap from "gsap";
import "./style.css";

document.querySelectorAll(".marquee").forEach((marquee, index) => {
  const track = marquee.querySelector(".marquee-track");
  const content = track.querySelector(".marquee-text");

  track.appendChild(content.cloneNode(true));

  const duration = index === 0 ? 12 : 18;

  const animation = gsap.to(track.querySelectorAll(".marquee-text"), {
    xPercent: -100,
    duration: duration,
    repeat: -1,
    ease: "none",
  });

  marquee.addEventListener("mouseenter", () => {
    animation.pause();
  });

  marquee.addEventListener("mouseleave", () => {
    animation.play();
  });
});
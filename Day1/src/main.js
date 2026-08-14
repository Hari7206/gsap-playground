import gsap from "gsap";
import "./style.css";

gsap.to(".box", {
  xPercent: -50,
  duration: 10,
  repeat: -1,
  ease: "none",
});
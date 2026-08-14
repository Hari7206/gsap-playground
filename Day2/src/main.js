import gsap from 'gsap'
import './style.css'



gsap.to(".box", {
  x: 500,
  y: 200,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "bounce.inOut"
});
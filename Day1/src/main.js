import gsap from 'gsap'
import './style.css'


gsap.fromTo(".box", {
  x: 0,
},
  {
    x: 500,
    y: 200,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "ease out"
  });
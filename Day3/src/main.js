import gsap from "gsap";
import "./style.css";

// gsap.to(".box", {
//   x: 500,
//   duration: 1.5,
//   repeat: -1,
//   yoyo: true,
//   ease: "none",
//   delay: 0.5,
//   stagger: {
//     each:0.1,
//     from: 'center'
//   }


// });


gsap.from('h1 span' , {
  yPercent: 100,
  opacity:0,
  duration: 1.5 ,
  ease: 'expo.out',
  stagger: {
    each: 0.08,
    from: 'center'
  }
})
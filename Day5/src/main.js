import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {Draggable} from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import "./style.css";

gsap.registerPlugin(ScrollTrigger , SplitText, Draggable, InertiaPlugin);


//  so here we can give stragger as the line by line by the type line or word or char by giving the type as char or word or line in the split text and then we can give the stagger as the each and from center or start or end
// const split = new SplitText(".title h1" , {
//       type: "chars" ,
//       wordClass: "titleWord" ,
// })
// const splits = new SplitText(".title p" , {
//       type: "lines" 
// })


// gsap.from(split.chars, {
//       ypercent: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "ease.out",
//       stagger: {
//             each: 0.09,
//             from: 'center'
//       }
// })


// gsap.from(splits.lines, {
//       ypercent: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "expo.out",
//       stagger: {
//             each: 1,
//             from: 'start'
//       }
// })



//  so this is simple to use the gsap and split text and draggable plugin to create the animation and draggable element in the webpage.
Draggable.create(".box", {
      bounds: "#app",
      inertia: true,
})

// inercia plugin is used to create the inertia effect when the element is dragged and released. It will continue to move in the direction of the drag and then slow down and stop.
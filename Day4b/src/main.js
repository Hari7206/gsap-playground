import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);


gsap.set('.imageDiv', {
    scale: 0.3,
})

gsap.set('.content' , {
      gap: "60rem",
})


const tl = gsap.timeline({
  scrollTrigger: {
        trigger: ".page2",
        start: "top top" ,
        end: "top -30%" ,
        scrub: true,   // this is using for the scroll animation 
        pin: true,     // use for the fix 
    }
})
tl.to(".imageDiv" , {
    scale: 1,
    // duration: 1.3,
    ease: "power4.inOut",
  
}).to('.content' , {
    gap: "7rem"
}, "<"
) 


//  so scroll trigger is use for the if the user is scrolled or not without that not showing the animation that whould be unsssary if we do that 
/*
three thing we need for the scrollTrigger 
start -> when to start 
triggering element -> which element we are triggring 
end -> when to end 


so there is pattern to write from start to end 
"_ _" -> so we will have 2 dash here
*    _ -> for the first we will wrote top bottom center 
*    _ -> top bottom center + 0% to 100% value can also be written here 
 so whom this for written 

 first dash is for the triggering element 
 second dash is for 
*/



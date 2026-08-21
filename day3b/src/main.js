import gsap from "gsap";
import "./style.css";

// timeline 

//  we have differnt types for setting the timeline 
//  < same time of upper element 
//  -=0.2  so its means it is subtract to this much of time then wding time 
//  += this will work as delay





//  lables -> so here we can give name to 2 same name to the element and if they both have same name then they will eventually work together

const tl = gsap.timeline();


tl.to('.box', {
  x: 1200,
  duration: 1.3,
  ease: "power4.out",
  delay: 0.6,
}).to('.box1', {
  x: 1200,
  duration: 1.3,
  ease: "power4.out",
} ,
"<"   //this means it make the first and this same timing 
).to('.box2', {
  x: 1200,
  duration: 1.3,
  ease: "power4.out",
}).to('.box3', {
  x: 1200,
  duration: 1.3,
  ease: "power4.out",
} ,
"< 0.1"   // this means with its time add this 0.1 time also 
)



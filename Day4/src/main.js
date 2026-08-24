import gsap from "gsap";
import "./style.css";

// const tl = gsap.timeline({paused: true});

// tl.to(".box", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 0.6
// })
// .to(".box1", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out"
// }, "<").addLabel('animateThis')
// .to(".box2", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out"
// })   // so this we add the lable for the timeline controller 
// .to(".box3", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out"
// }, "< 0.1");

// // timeline controller 




// const play = document.querySelector('.play')
// const pause = document.querySelector('.pause')
// const restart = document.querySelector('.restart')
// const reverse = document.querySelector('.reverse')
// const seek = document.querySelector('.seek')



// play.addEventListener("click" , ()=> {
//   tl.play();
  
// })

// pause.addEventListener("click" , ()=> {
//   tl.pause();
  
// })

// restart.addEventListener("click" , ()=> {
//   tl.restart();
  
// })

// reverse.addEventListener("click" , ()=> {
//   tl.reverse();
  
// })

// //  wo here we work with the seek when we want to give the timeline duration system means total duration we have on the timeline of all element so accrding to that we can change the timeline stuff with the help of seek  so here the 2 means it will go to the 2 seocond of our timeline means in where the elemnt would be in 2 sec it will let us there 
// seek.addEventListener("click" , ()=> {
//   // tl.seek(2); 
//   tl.seek("animateThis");   // or the add lable animation of timline controller 
// })







// so from here we will learn to do its more in efficicent way




// so this is loading timeline 
const loadingTimeline = () => {
  return gsap.timeline().to(Element , {})
}


// navBar timeline 
const navbarTimeline = () => {
  return gsap.timeline()
}

//  so likewise our timeline for differnt section will be create 



// Master Timeline 
// so this masterimeline is for the nestedTimeline means function will retunr and then in mastertimeline controol all timeline at once so its make the differnt chunk of code for its readability 
const master = gsap.timeline()
master.add(loadingTimeline).add(navbarTimeline)

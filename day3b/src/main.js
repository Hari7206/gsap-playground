import gsap from "gsap";
import "./style.css";

// timeline 

//  we have differnt types for setting the timeline 
//  < same time of upper element 
//  -=0.2  so its means it is subtract to this much of time then wding time 
//  += this will work as delay





//  lables -> so here we can give name to 2 same name to the element and if they both have same name then they will eventually work together

// const tl = gsap.timeline();


// tl.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 0.6,
// }).to('.box1', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out",
// } ,
// "<"   //this means it make the first and this same timing 
// ).to('.box2', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out",
// }).to('.box3', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.out",
// } ,
// "< 0.1"   // this means with its time add this 0.1 time also 
// )




const loaderCount = document.querySelector('.loader-count h1')
let count = 0
const intverval = setInterval(() => {
  count++;
  loaderCount.innerHTML = `${count}%`

  if (count === 100) {

    clearInterval(intverval)
    landingAnimtion()
  }
}, 20);


function landingAnimtion() {
  const tl = gsap.timeline()

  tl.to('.loader-count' , {
    opacity: 0,
    duration: 1.6,
    ease: 'power3.out'
  }).to('.loader' , {
    yPercent: -100,
    duration: 1.2,
    ease: 'expo.out'
  },
    "-=1.1"
).from('.background img' , {
    scale:1.2,
    duration: 1.3 ,
    ease: 'expo.out'
  },
  "-=0.98"
).from('.heading h1' , {
    yPercent: 100,
    duration: 1.2,
    ease: 'expo.out'
  } , "-=0.6").from('.subheading h2 ' , {
    yPercent: 100,
    duration: 1.2,
    ease: 'expo.out'
  },  "-=0.7")
}
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";

import "./style.css";

gsap.registerPlugin(
      ScrollTrigger,
      SplitText,
      Draggable,
      InertiaPlugin,
      Flip
);


// Flip

const specialImg = document.querySelector(".specialImg");
const specialImg2 = document.querySelector(".specialImg2");
const imgShow = document.querySelector(".imgShow");

specialImg.addEventListener("click", () => {

      const state = Flip.getState([specialImg, specialImg2]);
      const imgGallery = document.querySelector(".imgGallery");

      imgShow.appendChild(specialImg);
      imgGallery.appendChild(specialImg2);

      Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
      });
      

});
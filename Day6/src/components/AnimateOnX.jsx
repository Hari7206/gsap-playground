import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AnimateOnX({ children }) {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 700,
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
    });
  });

  return (
    <div ref={boxRef}>
      {children}
    </div>
  );
}

export default AnimateOnX;
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./App.css";
import AnimateOnX from "./components/AnimateOnX";

function App() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: 700,
        rotation: 360,
        duration: 2,
        ease: "power2.inOut",
      });
    },
    {
      scope: containerRef,
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={containerRef}>
 
      <div className="box box1" ref={boxRef}></div>

      <button
        onClick={contextSafe(() => {
          gsap.to(boxRef.current, {
            x: 700,
            rotation: 360,
            duration: 2,
            ease: "power2.inOut",
          });
        })}
      >
        Click me
      </button>
      <AnimateOnX>
        <div className="box box2"></div>
      </AnimateOnX>

    </div>
  );
}

export default App;
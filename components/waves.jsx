"use client";

import React from "react";

const Waves = () => {
  return (
    <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 60%)",
          }}
        >
      <div className="waves">
        <div className="bubbles">
          {[...Array(228)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${4 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${6 + Math.random() * 2}s`,
                "--delay": `${-6 * (2 + Math.random() * 2)}s`,
                "--opacity": `${0.5 + Math.random() * 0.5}`,
              }}
            ></div>
          ))}
        </div>
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 6 -5"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Waves;
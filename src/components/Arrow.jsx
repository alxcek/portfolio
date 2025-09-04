import React from "react";

const Arrow = () => (
  <div className="relative">
    <span
      className="block w-5 h-5 border-b-2 border-r-2 border-gray-400 transform rotate-45 -m-2.5 animate-[arrowBounce_2s_infinite] pointer-events-none"
      style={{
        animationDelay: '0s'
      }}
    />
    <span
      className="block w-5 h-5 border-b-2 border-r-2 border-gray-400 transform rotate-45 -m-2.5 animate-[arrowBounce_2s_infinite] pointer-events-none"
      style={{
        animationDelay: '-0.2s'
      }}
    />
    <span
      className="block w-5 h-5 border-b-2 border-r-2 border-gray-400 transform rotate-45 -m-2.5 animate-[arrowBounce_2s_infinite] pointer-events-none"
      style={{
        animationDelay: '-0.4s'
      }}
    />
    <style jsx>{`
      @keyframes arrowBounce {
        0% {
          opacity: 0;
          transform: rotate(45deg) translate(-20px, -20px);
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: rotate(45deg) translate(20px, 20px);
        }
      }
    `}</style>
  </div>
);

export default Arrow;
import React from "react";

export const Ball = ({ coords }) => {
  return (
    <div
      className="Ball"
      style={{ height: `${coords}px`, width: `${coords}px` }}
    >
      <div className="line" style={{ transform: `rotate(${coords}deg)` }}></div>
    </div>
  );
};

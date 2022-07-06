import { Diver } from "./diver";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [coords, setCoords] = useState(0);
  const checkCoords = (e) => {
    setCoords(() => e.screenY);
  };
  return (
    <div className="App">
      <Diver coords={coords} checkCoords={(e) => checkCoords(e)} />
      <div
        className="Ball"
        style={{ height: `${coords}px`, width: `${coords}px` }}
      >
        <div
          className="line"
          style={{ transform: `rotate(${coords}deg)` }}
        ></div>
      </div>
    </div>
  );
}

export default App;

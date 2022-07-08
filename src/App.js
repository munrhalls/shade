import { Diver } from "./diver";
import { Ball } from "./Ball";
import React, { useState, useEffect, useRef } from "react";
import { useInterval } from "./useInterval";
import "./App.css";

const event = new Event("build");

function App() {
  const [coords, setCoords] = useState(0);
  const [up, setUp] = useState(true);
  useInterval(() => {
    // Your custom logic here
    if (coords > 250) {
      setUp(false);
    }
    if (coords < 100) {
      setUp(true);
    }
    if (up) {
      setCoords(coords + 50);
    }
    if (!up) {
      setCoords(coords - 50);
    }
  }, 125);

  return (
    <div className="App">
      <Diver coords={coords} />
      <Ball coords={coords / 1024} />
      <Ball coords={coords / 512} />
      <Ball coords={coords / 256} />
      <Ball coords={coords / 128} />
      <Ball coords={coords / 64} />
      <Ball coords={coords / 32} />
      <Ball coords={coords / 16} />
      <Ball coords={coords / 8} />
      <Ball coords={coords / 4} />
      <Ball coords={coords / 2} />
      <Ball coords={coords} />
    </div>
  );
}

export default App;

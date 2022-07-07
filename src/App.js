import { Diver } from "./diver";
import { Ball } from "./Ball";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coords, setCoords] = useState(0);
  function updateCoords() {
    console.log("UPDATE");
    setCoords((coords) => coords + 100);
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateCoords();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

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

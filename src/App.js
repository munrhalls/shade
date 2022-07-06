import { Diver } from "./diver";
import { Ball } from "./Ball";
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
      <Ball coords={coords / 512} />
      <Ball coords={coords / 256} />
      <Ball coords={coords / 128} />
      <Ball coords={coords / 64} />
      <Ball coords={coords / 32} />
      <Ball coords={coords / 16} />
      <Ball coords={coords / 8} />
      <Ball coords={coords / 4} />
      <Ball coords={coords / 2} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

import "./App.css";
import Fishbowl from "./components/Fishbowl";
import WaterPipe from "./components/WaterPipe";
import fish from "./assets/headFish.png";

function App() {
  const [waterLevel, setWaterLevel] = useState(150);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (waterLevel <= 225) {
        setWaterLevel((prevWaterLevel) => prevWaterLevel + 10);
      } else {
        clearInterval(intervalId);
        console.log("clear");
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [waterLevel]);

  return (
    <div>
      <div style={{ display: "flex", paddingLeft: 40 }}>
        <h1 style={{ color: "" }}>Save the fish</h1>

        <img src={fish} alt="" style={{ width: 100, paddingBottom: 100 }} />
      </div>

      <div style={{ display: "flex" }}>
        <WaterPipe waterLevel={waterLevel} setWaterLevel={setWaterLevel} />
        <Fishbowl waterLevel={waterLevel} setWaterLevel={setWaterLevel} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const WaterPipe = ({ waterLevel, setWaterLevel }) => {
  const [waterMargin, setWaterMargin] = useState(-100);
  const [display, setDisplay] = useState("flex");
  const [isRotated, setRotated] = useState(false);
  const handleButton = () => {
    setRotated(!isRotated);
    setWaterMargin(110);
    setTimeout(() => {
      setWaterMargin(-100);
      setDisplay("none");
    }, 500);
    setTimeout(() => {
      setDisplay("flex");
    }, 600);
    setTimeout(() => {
      if (waterLevel >= 60) {
        setWaterLevel(waterLevel - 25);
      }
    }, 1000);
  };
  console.log(waterLevel);
  return (
    <div>
      <div className="pipeTop"></div>
      <div className="pipeTopTap"></div>
      <div className="waterPour">
        <div
          className="waterDrops"
          style={{
            marginTop: `${waterMargin}px`,
            display: `${display}`,
          }}
        ></div>
      </div>
      <div className="pipe">
        <button
          className={`waterButton ${isRotated ? "rotate" : ""}`}
          onClick={handleButton}
        >
          <div className="BlueDot"></div>
        </button>
      </div>
    </div>
  );
};

export default WaterPipe;

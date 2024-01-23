import React from "react";
import water from "../assets/water.png";
import fish from "../assets/fish.png";

const Fishbowl = ({ waterLevel }) => {
  return (
    <div className="fishbowlComp">
      <div className="fishbowl">
        <div className="cap">
          <div className="capCircle"></div>
        </div>
        <div className="circle">
          <div className="waterLevel" style={{ marginTop: `${waterLevel}px` }}>
            <div className="waterPourWay"></div>
            <img src={fish} alt="" className="fish" />
            <div className="tapWaterTop"></div>
            <div className="tapWater"></div>
          </div>
        </div>
        <div className="water">
          <img src={water} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fishbowl;

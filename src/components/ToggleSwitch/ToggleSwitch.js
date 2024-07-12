import React, { useState } from "react";
import "./ToggleSwitch.scss"; // Make sure to create this CSS file
import Sun from "../../assets/images/sun.png";
import Moon from "../../assets/images/moon.png";

const ToggleSwitch = ({ isOn, toggleSwitch }) => {
  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={toggleSwitch}
    >
      <div className="toggle-handle">
        <div className="toggle-icon">
          {isOn ? (
            <img src={Moon} alt="Moon" width={20} />
          ) : (
            <img src={Sun} alt="Sun" width={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;

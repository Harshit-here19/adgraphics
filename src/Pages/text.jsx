import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const text = () => {
  return (
    <div>
      <h1>Toggle Switch</h1>
      <ToggleSwitch
        option1="Materials"
        option2="Work Types"
        onChange={console.log("changed")}
      />
    </div>
  );
};

export default text;

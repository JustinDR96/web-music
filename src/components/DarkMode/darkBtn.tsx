import React from "react";

export default function DarkBtn() {
  return (
    <label className="ui-switch">
      <input type="checkbox" id="dark_toggle" />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

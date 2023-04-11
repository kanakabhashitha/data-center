import React from "react";
import Wrapper from "../assets/wrappers/LEDStyle";

const LED = ({ lightStatus }) => {
  return (
    <Wrapper className="led-box">
      <div className={lightStatus ? "led-red-blink" : "led-green"}></div>
    </Wrapper>
  );
};

export default LED;

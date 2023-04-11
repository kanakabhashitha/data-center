/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Wrapper from "../assets/wrappers/HeaderStyle";

const Header = () => {
  return (
    <Wrapper>
      <div className="logoContainer">
        <img
          className="logo"
          src={require("../assets/images/n able logo.png")}
        />
        {/* <h1>DC</h1> */}
      </div>

      <div className="titleContainer">
        <h1 className="title">Data Center Monitoring Solution</h1>
      </div>
    </Wrapper>
  );
};

export default Header;

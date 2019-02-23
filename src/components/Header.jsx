import React from "react";
import avatar from "../images/slep.jpg";
import styles from "../css/global.css";


function Header() {

    return (
      <div>
        <p id="header-text">Miles Bradt</p>
        <img id="avatar-img" src={avatar} />
      </div>
    );
}

export default Header;

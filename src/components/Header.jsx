import React from "react";
import avatar from "../images/slep.jpg";



function Header() {

    return (
      <div>
        <h1>Miles' Portfolio</h1>
        <img id="avatar-img" src={avatar} />
      </div>
    );
}

export default Header;

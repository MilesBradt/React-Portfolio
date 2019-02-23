import React from "react";
import avatar from "../images/slep.jpg";
import styles from "../css/global.css";
import { Card, CardTitle} from 'react-materialize';


function Header() {

  return (
    <div>
      <p id="header-name"><span id="header-first-name">Miles </span><span id="header-last-name">Bradt</span></p>
      <Card id="card-style" horizontal
      header={<CardTitle image={avatar}></CardTitle>}>
      smbradtmichael@gmail.com | @placeholder | linkdin.com/placeholder
      <br/>
      </Card>

    </div>
  );
}

export default Header;

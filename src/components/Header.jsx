import React from "react";
import avatar from "../images/slep.jpg";
import styles from "../css/global.css";
import { Card, CardTitle} from 'react-materialize';


function Header() {

  return (
    <div>
      <Card id="card-style" horizontal
      header={<CardTitle image={avatar}></CardTitle>}>
      smbradtmichael@gmail.com | @placeholder | linkdin.com/placeholder

      </Card>

    </div>
  );
}

export default Header;

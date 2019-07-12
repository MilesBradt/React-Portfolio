import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from "../css/global.css";
import { Card, CardTitle } from 'react-materialize';


function Header() {

  return (

    <div id="header-col" class='col'>
      <p id="header-name"><span id="header-first-name">Miles </span><span id="header-last-name">Bradt</span></p>
      <p><span id="about-text">Jr. Full-Stack developer</span></p>
      <p id='contact-links'><a href="https://docs.google.com/document/d/1YnqG4Ryx30Q5-VxLgsBPPbMeorreZIgAwYZvdi-a75g/edit?usp=sharing" target="_blank">resume</a> |
      <a href="https://github.com/MilesBradt" target="_blank"> github</a> |
      <a href="https://www.linkedin.com/in/michael-bradt-1b1888142/" target="_blank"> linkedin</a> |
    <CopyToClipboard text="smbradtmichael@gmail.com"><span id="email-text"> copy email to clipboard</span></CopyToClipboard></p>
    </div>

  );
}

export default Header;

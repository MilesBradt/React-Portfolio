import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ResumeButtons  from './ResumeButtons';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";

function Header() {

  return (

    <div id="header-col" class='col'>
      <p id="header-name"><span id="header-first-name">Miles </span><span id="header-last-name">Bradt</span></p>
      <p><span id="about-text">Jr. Full-Stack developer</span></p>
      <p id='contact-links'>
        <a href="https://github.com/MilesBradt" target="_blank"> github</a> |
        <a href="https://www.linkedin.com/in/michael-bradt-1b1888142/" target="_blank"> linkedin</a> |
        <CopyToClipboard text="smbradtmichael@gmail.com"><span id="email-text"> copy email </span></CopyToClipboard>
      </p>
      <ResumeButtons></ResumeButtons>
    </div>

  );
}

export default Header;

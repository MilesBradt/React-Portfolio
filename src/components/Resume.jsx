import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';


function Resume() {

  return (
    <div class='col' id="about-div">
      <p><span class='resume-type-of-experience'> Education:</span></p>
      <p><span class='resume-experience'>Epicodus </span> - Ruby/React Track - 2018</p>
      <ul class="resume-list">
        <li>&bull; Completed full-time, 27 week program in web development</li>
        <li>&bull; Studied and built projects using Angular, Ruby on Rails, and React</li>
        <li>&bull; Used command line and Git since day one</li>
        <li>&bull; Further developed interpersonal skills through pair programming and group projects</li>
      </ul>
      <p><span class='resume-type-of-experience'> Work Experience:</span></p>
      <p><span class='resume-experience'>Merchandising Execution Team </span> - The Home Depot  - 2017</p>
      <ul class="resume-list">
        <li>&bull; Report and correct various issues that prevent the store from maintaining appropriate appearance for vendors and customers</li>
        <li>&bull; Ensure store files for number of products on hand are correct and are recorded to be in the proper location</li>
        <li>&bull; Complete projects that update new plans for store appearance</li>
        <li>&bull; Assist customers with finding products and any questions they may have</li>
      </ul>
      <p><span class='resume-experience'>Cell Phone Sales Representative </span> - Target Electronic - 2012 to 2013</p>
      <ul class="resume-list">
        <li>&bull; Started and extended wireless contracts with AT&T, Verizon, and T-Mobile</li>
        <li>&bull; Helped customers find products throughout the store and assisted with questions they may have</li>
        <li>&bull; Opened and closed the kiosk during each shift</li>
      </ul>
      <p><span class='resume-type-of-experience'> Other Experience/Volunteer Work:</span></p>
      <p><span class='resume-experience'>Twitch/Discord Channel Mod or Admin </span></p>
      <ul class="resume-list">
        <li>&bull; Debate and enforce rules to ensure a comfortable environment for the community and streamer</li>
        <li>&bull; Represent communities</li>
        <li>&bull; Update Discord channels to be accessible for the community and keep them free of harassment, abusive language, and disturbing content</li>
      </ul>
      <p><span class='resume-experience'>Bug Hunter </span> – Discord</p>
      <ul class="resume-list">
        <li>&bull; Test latest builds for various bugs and create reports for staff to review</li>
        <li>&bull; Approve or deny submitted tickets based on duplicates, features mistaken for bugs, reports asked to be rewritten, and spam</li>
        <li>&bull; Assist new bug hunters</li>
      </ul>
      <p><span class='resume-experience'>Mini-boss/Volunteer </span> - Portland Retro Gaming Expo</p>
      <ul class="resume-list">
        <li>&bull; Promote a fun and enjoyable environment for attendees to enjoy retro games</li>
        <li>&bull; Check up on other volunteers to make sure they're comfortable in their position and schedule breaks</li>
        <li>&bull; Helped vendors during tear-down and enforced stray attendees to dismiss from the venue during closed hours</li>
      </ul>
      <p><span class='resume-type-of-experience'> Skills:</span></p>
      <ul class="resume-list">
        <li>&bull; Web development</li>
        <li>&bull; Community management</li>
        <li>&bull; Customer service</li>
      </ul>
    </div>
  );
}

export default Resume;

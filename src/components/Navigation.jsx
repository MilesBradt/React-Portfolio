import React from "react";
import { Link } from 'react-router-dom';
import { Icon, Button, Navbar, NavItem } from 'react-materialize';



function Navigation() {

    return (
        <div>
        <Navbar id="navbar" left>
          <Link to="/"><NavItem>About</NavItem></Link>
          <Link to="/projects"><NavItem>Projects</NavItem></Link>
        </Navbar>
        </div>
    );
}

export default Navigation;

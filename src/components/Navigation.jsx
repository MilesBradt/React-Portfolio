import React from "react";
import { Link } from 'react-router-dom';
import { Icon, Button, Navbar, NavItem } from 'react-materialize';
import styles from '../css/navigation-styles.css';

function Navigation() {

    return (
        <div>
        <style jsx>{styles}</style>
        <Navbar id="navbar" left>
          <Link to="/"><NavItem>Home</NavItem></Link>
          <Link to="/about"><NavItem>About</NavItem></Link>
          <Link to="/projects"><NavItem>Projects</NavItem></Link>
        </Navbar>
        </div>
    );
}

export default Navigation;

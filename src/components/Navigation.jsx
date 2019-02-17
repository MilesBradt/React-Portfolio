import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div class="transparent-nav">
            <div id="nav-body">
                <style jsx global>{`
        
        .transparent-nav {
            background-color: rgba(0, 0, 0, 0.75) !important;
            width: 250px;
            height: 50px;
            text-align: center;
         }
            
        #nav-body {
            color: #D6D6D6;
            font-size: 14px;
         }

            `}</style>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    );
}

export default Navigation;
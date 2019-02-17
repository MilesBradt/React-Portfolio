import React from "react";


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
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
            </div>
        </div>
    );
}

export default Navigation;
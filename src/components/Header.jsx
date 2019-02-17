import React from "react";
import avatar from "../images/slep.jpg";



function Header() {

    return (
        <div class="transparent">
            <div id="header-body">
                <style jsx global>{`
        body {
            background-color: #242424;
            background-image: url("https://www.transparenttextures.com/patterns/cardboard-flat.png");
        }

        .transparent {
            background-color: rgba(0, 0, 0, 0.75) !important;
            width: 75%;
            margin: 0 auto;
         }
            
        #header-body {
            text-align: center;
            color: #D6D6D6;
            font-size: 40px;
         }
            
        #avatar-img {
            border-radius: 15%;
        }
            `}</style>
                <h1>Miles' Portfolio</h1>
                <img id="avatar-img" src={avatar} />
            </div>
        </div>
    );
}

export default Header;
import React from "react";
import {GoogleLogin} from "@react-oauth/google";

function Navbar({loginHandler}){

    function handler(response){
        loginHandler(response.credential);
    };

    return(
        <nav className="navbar">
            <h2>The Memories App</h2>
            <GoogleLogin onSuccess={handler} />
        </nav>
    )
};

export default Navbar;
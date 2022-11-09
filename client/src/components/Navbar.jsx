import React from "react";
import {GoogleLogin} from "@react-oauth/google";
import {useSelector} from "react-redux"

function Navbar({loginHandler, authState, auth}){

    let userData = useSelector(state => state.user)

    function handler(response){
        console.log(response.credential);
        loginHandler(response.credential);
        authState(true)
    };

    function logoutHandler(){
        localStorage.clear();
        authState(false)
    }

    function Profile(){
        console.log(userData);
        return(
            <div className="profile">
                <span className="profile-name"><b>{userData ? userData.userInfo.name : "data not here"}</b></span>
                <span onClick={logoutHandler} className="profile-name"> Logout</span>
            </div>
        )
    }
    
    return(
        <nav className="navbar">
            <h2>The Memories App</h2>
            {auth ? <Profile />: <GoogleLogin onSuccess={handler} />}
        
        </nav>
    )
};

export default Navbar;
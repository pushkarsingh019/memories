import React from "react";
import { useNavigate} from "react-router-dom";

function ProfileScreen(){

    const navigate = useNavigate();

    function logoutHandler(){
        localStorage.clear();
        navigate("/");
    }


    return(
        <div className="section">
            <a href="/" className="link">Go back</a>
            <h1>Profile Section</h1>
            <button onClick={logoutHandler}>Log out</button>
        </div>
    )
};

export default ProfileScreen;
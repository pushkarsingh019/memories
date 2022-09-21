import React from "react";

function Post({title, message, creator}){
    return(
        <div className="post-card">
            <h2 style={{fontWeight : 800}}>{title}</h2>
            <small>{creator}</small>
            <p>{message}</p>
        </div>
    )
};

export default Post;
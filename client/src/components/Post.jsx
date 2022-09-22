import React from "react";
import moment from "moment"
import axios from "axios";
import {backendUrl} from "../actions/postActions"

function Post({title, message, creator, tags, likes, createdAt, id}){


    async function deletePost(){
        console.log(`post to be deleted -> ${id}`)
        console.log(`${backendUrl}/posts/${id}`);
        await axios.delete(`${backendUrl}/posts/${id}`);
        window.location.reload();
    }

    return(
        <div className="post-card">
            <h2>{title}</h2>
            <div className="internal-section">
                <small>{`#${tags}`}</small>
                <small>{moment(createdAt).fromNow()}</small>
            </div>
            <p>{message}</p>
            <p>{creator}</p>
            <div className="cta-section">
                <button className="button">{likes} Like</button>
                <button className="button" onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
};

export default Post;
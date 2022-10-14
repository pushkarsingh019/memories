import React from "react";
import moment from "moment"

function Post({title, message, creator, tags, likes, createdAt, id, onDelete, onEdit, post}){

    function editHandler(){
        onEdit(post);
    }

    return(
        <div className="post-card">
            <div className="title-section">
                <h2>{title}</h2>
                <small onClick={editHandler} className="edit-button">◦ ◦ ◦</small>
            </div>
            <div className="internal-section">
                <small>{`#${tags}`}</small>
                <small>{moment(createdAt).fromNow()}</small>
            </div>
            <p>{message}</p>
            <p>{creator}</p>
            <div className="cta-section">
                <button className="button">{likes} Like</button>
                <button className="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
};

export default Post;
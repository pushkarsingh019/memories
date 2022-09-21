import React from "react";
import {useSelector} from "react-redux"

function Post({title}){
    const posts = useSelector((state) => state.posts);
    return(
        <h3>{title}</h3>
    )
};

export default Post;
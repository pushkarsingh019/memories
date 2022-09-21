import React, {useState} from "react";
import {useDispatch} from "react-redux"
import {  createPost } from "../actions/postActions";

// form schema -> create a memory -> title -> message -> creator -> tags -> submit -> clear

function Form(){

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [creator, setCreator] = useState("");
    const [tags, setTags] = useState("");

    const dispatch = useDispatch();

    function formHandler(event){
        event.preventDefault();
        let post = {
            title,
            message,
            creator,
            tags
        };

        dispatch(createPost(post));

    }


    return(
        <form onSubmit={formHandler}>
            <h2>Create A Memory</h2>
            <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
            <br />
            <input type="text" placeholder="Message" onChange={(event) => setMessage(event.target.value)} />
            <br />
            <input type="text" placeholder="Creator" onChange={(event) => setCreator(event.target.value)} />
            <br />
            <input type="text" placeholder="Tags" onChange={(event) => setTags(event.target.value)} />
            <br />
            <button type="submit">Create Memory</button>
            <button>Clear</button>
        </form>
    )
};

export default Form;
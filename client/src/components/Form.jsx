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

        setTimeout(function reload(){
            window.location.reload()
        },1000)
    }


    return(
        <form onSubmit={formHandler}>
            <h2>Create A Memory</h2>
            <input type="text" placeholder="Title" required onChange={(event) => setTitle(event.target.value)} />
            <br />
            <input type="text" placeholder="Message" required onChange={(event) => setMessage(event.target.value)} />
            <br />
            <input type="text" placeholder="Creator" required onChange={(event) => setCreator(event.target.value)} />
            <br />
            <input type="text" placeholder="Tags" onChange={(event) => setTags(event.target.value)} />
            <br />
            <button className="button" type="submit">Create Memory</button>
            <button className="button">Clear</button>
        </form>
    )
};

export default Form;
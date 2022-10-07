import React, {useState} from "react";

// form schema -> create a memory -> title -> message -> creator -> tags -> submit -> clear

function Form({formData}){

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [creator, setCreator] = useState("");
    const [tags, setTags] = useState("");

    function formHandler(event){
        event.preventDefault();
        let post = {
            title,
            message,
            creator,
            tags
        };

        formData(post)
        clearForm();
    }

    function clearForm(){
        setTitle("");
        setMessage("");
        setCreator("");
        setTags("");
    }

    return(
        <form onSubmit={formHandler}>
            <h2>Create A Memory</h2>
            <input value={title} type="text" placeholder="Title" required onChange={(event) => setTitle(event.target.value)} />
            <br />
            <input value={message} type="text" placeholder="Message" required onChange={(event) => setMessage(event.target.value)} />
            <br />
            <input value={creator} type="text" placeholder="Creator" required onChange={(event) => setCreator(event.target.value)} />
            <br />
            <input value={tags} type="text" placeholder="Tags" onChange={(event) => setTags(event.target.value)} />
            <br />
            <button className="button" type="submit">Create Memory</button>
            <button className="button" onClick={() => clearForm()}>Clear</button>
        </form>
    )
};

export default Form;
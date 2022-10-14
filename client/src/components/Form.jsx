import React, {useState} from "react";

// form schema -> create a memory -> title -> message -> creator -> tags -> submit -> clear

function Form({formData, editingState, editPost, onChange}){

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState();
    const [creator, setCreator] = useState("");
    const [tags, setTags] = useState("");

    let formContent;

    function formHandler(event){
        event.preventDefault();
        let post = {
            title,
            message,
            creator,
            tags
        };

        formData(post);
        clearForm();
    };

    function editFormHandler(event){
        event.preventDefault();
        let newPost = {...editPost, title, message, creator, tags};

        onChange(newPost);
        clearForm();
    }

    function clearForm(){
        setTitle("");
        setMessage("");
        setCreator("");
        setTags("");
    }

        formContent = (
            <form onSubmit={editingState ? editFormHandler : formHandler}>
            {editingState === true ? <h2>Edit a Memory</h2> : <h2>Create a Memory</h2>} 
            <input value={title} type="text" placeholder="Title" required onChange={(event) => setTitle(event.target.value)} />
            <br />
            <input value={message} type="text" placeholder="Message" required onChange={(event) => setMessage(event.target.value)} />
            <br />
            <input value={creator} type="text" placeholder="Creator" required onChange={(event) => setCreator(event.target.value)} />
            <br />
            <input value={tags} type="text" placeholder="Tags" onChange={(event) => setTags(event.target.value)} />
            <br />
            <button className="button" type="submit">{editingState === true ? "Edit Memory" : "Create Memory"}</button>
            <button className="button" onClick={() => clearForm()}>Clear</button>
        </form>
        )

    return(
        <section>
            {formContent}
        </section>
    )
};

export default Form;
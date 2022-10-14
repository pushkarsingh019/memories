import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAutoAnimate } from '@formkit/auto-animate/react'

// importing components
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Post from "./components/Post";

// importing styles
import "./styles.css";

// importing redux actions
import {getPosts, createPost, deletePost, updatePostHandler} from "./actions/postActions";


function Loading(){
    return(
        <p>loading...</p>
    )
};

function HeroSection(){


    const dispatch = useDispatch();
    let {postData} = useSelector((state) => state.posts);
    const [stateDependency, setStateDependency] = useState(postData);
    const [isEditing, setIsEditing] = useState(false)
    const [editPost, setEditPost] = useState({});
    const [parent] = useAutoAnimate();

    useEffect(() => {
        dispatch(getPosts());
        console.log(stateDependency)
    }, [dispatch, stateDependency])


    async function formHandler(post, state){
        console.log(`state -> ${state}`);
        await dispatch(createPost(post));
        setStateDependency(postData);
    };

    async function deletePostHandler(id){
        await dispatch(deletePost(id));
        setStateDependency(postData)
    }

    async function editCommunication(post){
        setIsEditing(true);
        setEditPost(post);
    };

    async function editPostHandler(post){
        await dispatch(updatePostHandler(post));
        setIsEditing(false);
        setStateDependency(postData);
    }

    return(
        <section className="hero-section">
            <div className="post-section" ref={parent}>
                {!postData ? <Loading /> : postData.reverse().map((post) => {
                    return <Post onEdit={editCommunication} key={post._id} title={post.title} message={post.message} creator={post.creator} tags={post.tags} likes={post.likes} createdAt={post.createdAt} id={post._id} onDelete={deletePostHandler} post={post} />
                })}
            </div>
            <div className="form-section">
                <Form editingState={isEditing} formData={formHandler} editPost={editPost} onChange={editPostHandler} />
            </div>
        </section>
    )
} 

export default function App(){

    return(
        <div className="App">
            <Navbar />
            <HeroSection />
        </div>
    )
};
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
import {getPosts, createPost, deletePost} from "./actions/postActions";


function Loading(){
    return(
        <p>loading...</p>
    )
};

function HeroSection(){


    const dispatch = useDispatch();
    let {postData} = useSelector((state) => state.posts);
    const [stateDependency, setStateDependency] = useState(postData);
    const [parent] = useAutoAnimate();

    useEffect(() => {
        dispatch(getPosts());
        console.log(stateDependency)
    }, [dispatch, stateDependency])


    async function formHandler(post){
        await dispatch(createPost(post));
        setStateDependency(postData);
    };

    async function deletePostHandler(id){
        await dispatch(deletePost(id));
        setStateDependency(postData)
    }

    return(
        <section className="hero-section">
            <div className="post-section" ref={parent}>
                {!postData ? <Loading /> : postData.reverse().map((post) => {
                    return <Post key={post._id} title={post.title} message={post.message} creator={post.creator} tags={post.tags} likes={post.likes} createdAt={post.createdAt} id={post._id} onDelete={deletePostHandler} />
                })}
            </div>
            <div className="form-section">
                <Form formData={formHandler} />
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
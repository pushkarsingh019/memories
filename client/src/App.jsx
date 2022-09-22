import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

// importing components
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Post from "./components/Post";

// importing styles
import "./styles.css";

// importing redux actions
import {getPosts} from "./actions/postActions";

function Loading(){
    return(
        <p>loading...</p>
    )
};

function HeroSection(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    let {posts} = useSelector((state) => state.posts);

    return(
        <section className="hero-section">
            <div className="post-section">
                {!posts ? <Loading /> : posts.reverse().map((post) => {
                    return <Post key={post._id} title={post.title} message={post.message} creator={post.creator} tags={post.tags} likes={post.likes} createdAt={post.createdAt} id={post._id} />
                })}
            </div>
            <div className="form-section">
                <Form />
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
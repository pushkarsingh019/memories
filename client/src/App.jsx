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

function HeroSection(){
    return(
        <section className="hero-section">
            <div className="post-section">
                <Post />
                <Post />
                <Post />    
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
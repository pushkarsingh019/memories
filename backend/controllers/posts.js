import postMessage from "../models/postModels.js";

export const getPosts =  (req, res) => {
    try {
        const posts =  postMessage.find();
        // console.log(posts);
        res.send("This is the finding the posts route");
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = (req, res) => {
    res.send("CREATE POST");
}
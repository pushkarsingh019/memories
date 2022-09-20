import postMessage from "../models/postModels.js";

export const getPosts =  async (req, res) => {
    try {
        const posts =  await postMessage.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = (req, res) => {
    res.status(200).json({message : "Create Post Route is set up"})
}
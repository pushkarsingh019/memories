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
    let {title, message, creator, tags} = req.body;
    tags = tags.split(",");
    let newPost = new postMessage({
        title,
        message,
        creator,
        tags
    }); 
    try {
        newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(404).json({message : error.message});
    }
}
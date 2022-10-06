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
        console.log(newPost)
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(404).json({message : error.message});
    }
};

export const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        const message = await postMessage.deleteOne({_id : id});
        res.status(200).json({message});
    } catch (error) {
        res.status(404).send(error);
    }
};

export const updatePost = async(req, res) => {
    const id = req.params.id;
    // const {post} = req.body;
    console.log(req.body);
    try {
        // const message = await postMessage.updateOne({_id : id}, updatedPost)
        res.status(200).send("cool")
    } catch (error) {
        res.status(500).send(error.message);
    }
}
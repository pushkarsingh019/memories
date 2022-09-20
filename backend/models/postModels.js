import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    likes : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
})

let postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
import express from "express";

const router = express.Router();

// importing all the controllers
import {getPosts, createPost, deletePost, updatePost} from '../controllers/posts.js'

router.get('/', getPosts);
router.post('/create', createPost);
router.delete(`/:id`, deletePost);
router.put(`/:id`, updatePost)

export default router;

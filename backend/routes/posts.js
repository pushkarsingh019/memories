import express from "express";

const router = express.Router();

// importing all the controllers
import {getPosts, createPost, deletePost} from '../controllers/posts.js'

router.get('/', getPosts);
router.post('/create', createPost);
router.delete(`/:id`, deletePost);

export default router;

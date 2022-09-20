import express from "express";

const router = express.Router();

// importing all the controllers
import {getPosts, createPost} from '../controllers/posts.js'

router.get('/', getPosts);
router.post('/create', createPost);

export default router;
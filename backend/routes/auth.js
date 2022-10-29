import express from "express";


const router = express.Router();

// importing controllers
import {verifyUser} from "../controllers/authControllers.js";

router.post("/verify", verifyUser)

export default router;

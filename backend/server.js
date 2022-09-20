import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;




// importing routes
import postRoutes from "./routes/posts.js";

// setting up the routes
app.use('/posts', postRoutes);

// setting up middlewares
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());


// setting up database
mongoose.connect("mongodb://localhost/socialmedia")
.then(() => app.listen(PORT, console.log("server is connected to database and running.")))
.catch(() => {console.log(error.message)});


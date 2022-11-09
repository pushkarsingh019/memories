import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8080;

// Getting the main app
app.get('/', (req, res) => {
    res.send("Api is up and running");
})

// importing routes
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

const MONGO_URI = "mongodb+srv://pushkarsingh019:72087protecteD%4019_database@cluster0.a6cxzjv.mongodb.net/memories";

const localDatabaseUrl = "mongodb://localhost/somethingunique";


// setting up middlewares
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());

// setting up the routes
app.use('/posts', postRoutes);
app.use('/auth', authRoutes)


// setting up database
mongoose.connect(localDatabaseUrl)
.then(() => app.listen(PORT, console.log(`Server up and running on port ${PORT}`)))
.catch((error) => console.log(error.message));


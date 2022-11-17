import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = process.env.URL;
//Middleware

//DB Config
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));

//Listener
app.listen(port, () => console.log(`listeing on ${port}`));

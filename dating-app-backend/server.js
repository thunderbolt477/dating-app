import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cards from "./dbCards.js";
import Cors from "cors";
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 8001;
const uri = process.env.URL;
//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listeing on ${port}`));

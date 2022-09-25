const axios = require('axios')

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/pokemon_data", async (req, res) => {
  const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')

  res.send(data.results);
});

app.listen(4000, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log("Microservice listening...");
});

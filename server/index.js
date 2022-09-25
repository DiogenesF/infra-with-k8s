const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS records (name VARCHAR(255))")
    .catch((err) => console.error(err));
});

// Express route handlers
app.post("/create", (req, res) => {
  const recordName = req.body.recordName;

  pgClient.query("INSERT INTO records(name) VALUES($1)", [recordName]);

  res.status(201).send({ message: "Record successfully created" });
});

app.get("/records", async (req, res) => {
  const values = await pgClient.query("SELECT * from records");

  res.send(values.rows);
});

app.listen(5000, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log("Server listening...");
});

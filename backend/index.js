import express from "express";
import env from "dotenv";
import dbConnection from "./db/dbConnection.js";

env.config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  dbConnection();
  console.log(`Server is connected to port ${port}`);
});

import express, { Router } from "express";
import env from "dotenv";
import dbConnection from "./db/dbConnection.js";
import router from "./routers/route.js";

env.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api", router)

app.listen(port, () => {
  dbConnection();
  console.log(`Server is connected to port ${port}`);
});

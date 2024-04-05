import mongoose from "mongoose";

async function dbConnection() {
  try {
    const dbUrl = process.env.MONGO_DB_URL;

    await mongoose.connect(dbUrl);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Disconnected", error.message);
  }
}

export default dbConnection;

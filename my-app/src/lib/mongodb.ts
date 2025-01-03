"use server"

import mongoose from "mongoose"

let isConnected: boolean = false;

export const connectToDatabase = async () => {
   if (!process.env.MONGDB_URL) {
    throw new Error("MONGODB_URL is not set");
  }
  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }


  try {
    await mongoose.connect(process.env.MONGDB_URL, {
      dbName: "ELearning",
    });

        isConnected = true;
        console.log("Using new database connection");

  } catch (error) {
        console.log("Error while connecting to database");
  }
}
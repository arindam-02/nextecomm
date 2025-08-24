import mongoose from "mongoose";

// const MONGODB_URI =
//   process.env.MONGO_URI || "mongodb://localhost:27017/NEXT_ECOMM";
const MONGODB_URI = process.env.MONGO_URI_LOCAL;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "NEXT_ECOMM",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

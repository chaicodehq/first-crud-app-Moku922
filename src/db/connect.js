import mongoose from "mongoose";

/**
 * TODO: Connect to MongoDB
 *
 * 1. Check if uri is provided (throw error if not: "MongoDB URI is required")
 * 2. Connect using mongoose.connect(uri)
 * 3. Return mongoose.connection
 */
export async function connectDB(uri) {
    // Your code here
    if (!uri) {
        throw new Error("MongoDB URI is required");
    }
    try {
        const connectionInstance = await mongoose.connect(uri);
        // console.log(
        //     `db is connected on HOST: ${connectionInstance.connection.host}`,
        // );
        // console.log(
        //     `db is connected on DB: ${connectionInstance.connection.db.databaseName}`,
        // );
        return connectionInstance.connection;
    } catch (error) {
        console.error("MongoDB connection failed: ", error);
        process.exit(1);
    }
}

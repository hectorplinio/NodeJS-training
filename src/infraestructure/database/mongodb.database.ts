import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let database: Mongoose.Connection;
export const mongodbConnect = () => {
    // add your own uri below
    const uri = process.env.MONGODB_URI;
    if (database) {
        return;
    }
    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as Mongoose.ConnectOptions);
    database = Mongoose.connection;
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};
export const mongodbDisconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};

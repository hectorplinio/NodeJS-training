import Mongoose from "mongoose";
let database: Mongoose.Connection;
export const mongodbConnect = () => {
    // add your own uri below
    const uri = "mongodb://localhost:27017/AppFilms";
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

import { mongodbConnect, mongodbDisconnect } from "./mongodb.database";

const database = () => {
    const connect = () => {
        try {
            return mongodbConnect();
        } catch (error) {
            console.log(error);
        }
    };
    const disconnect = () => {
        try {
            return mongodbDisconnect();
        } catch (error) {
            console.log(error);
        }
    };
    return {
        connect,
        disconnect,
    };
};
export default database;

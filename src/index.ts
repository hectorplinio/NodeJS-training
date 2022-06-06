import express from "express";
const app = express();
const port = Number(process.env.PORT) | 3000;
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
console.log("Hello World!");

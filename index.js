import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req, res) => {
    res.send("Hello, this is your Express server!");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
import express, { Request, Response } from "express";
import 'dotenv/config';
import router from "./routes/Routes";
const port = process.env.DB_PORT;
const appName = process.env.APP_NAME;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response: "hello word Typescript"
    })
})

app.use(router);

app.listen(port, () => {
    console.log(`${appName} running port ${port}`)
});
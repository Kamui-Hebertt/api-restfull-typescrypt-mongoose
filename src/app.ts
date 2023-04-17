import express from "express";
import config from "config";
import connectDb from '../config/db';


const app = express();


app.use(express.json())

//app port 
const port = config.get<number>("port");


//ROUTES

import router from "./router";

app.use("/api/", router);

app.listen(port, async () => {
  await connectDb();
  console.log(`server is running at port ${port}`)
})
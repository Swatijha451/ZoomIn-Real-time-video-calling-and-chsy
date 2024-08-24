// require ("dotenv").config();
import express from "express";
import {createServer} from "node:http";
// import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";
import { connectToSocket } from "./controller/socketManager.js";
import userRoutes from "./routes/userRouter.js";

const app = express();
const server = createServer(app);
const io= connectToSocket(server);

app.set("port",(process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.use("/api/v1/users", userRoutes);



const  start= async()=>{
    const connectionDB= await mongoose.connect("mongodb+srv://swatijha451:swatijha451@zoomin.bw18mzs.mongodb.net/?retryWrites=true&w=majority&appName=zoomIn");

    console.log(`MOngo Connected DB host: ${connectionDB.connection.host}`);

    server.listen(app.get ("port"),()=>{
    console.log("listening on port 8080");
    });
}
start();
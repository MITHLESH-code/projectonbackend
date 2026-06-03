import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();


// we use app.use to configure the packages

app.use(express.cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit="16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
//   configuration finished







export default app
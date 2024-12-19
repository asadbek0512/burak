import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan"; //morgan - serveriga kelayotgan barcha so‘rovlarni kuzatish monitoringni osonlashtiradi.
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT))

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // ejs farmatda render qilishini 

/** 4-ROUTERS **/
app.use("/admin", routerAdmin) // SSR :EJS ==> Admin 
app.use("/", router);  //SPA: REACT  // Middleweare Design Pattern ==> user / admin / all

export default app;

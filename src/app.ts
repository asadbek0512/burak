import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan"; //morgan - serveriga kelayotgan barcha so‘rovlarni kuzatish monitoringni osonlashtiradi.
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);   //connect-mongodb-session va express-session modullarini birlashtirib, class yaratayapti
const store = new MongoDBStore({                //bu klassdan obyekt yaratib MongoDBStore orqali sessiya ma'lumotlarini saqlash uchun konfiguratsiya qilinadi.
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',            //Sessiyalarni saqlash uchun sessions nomli MongoDB kolleksiyasi belgilanadi.
});

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(          // Sessiyalarni barcha foydalanuvchi so‘rovlarida boshqarish uchun middleware qo‘shiladi.
    session({     //  express-session Modulining  funksiyasi orqali  sessiya boshqaruvini sozlash uchun ishlatiladi. 
        secret: (process.env.SESSION_SECRET as string), // Sessiyani himoya qilish uchun maxfiy kalit.
        cookie: {
            maxAge: 1000 * 3600 * 3 // 3h
        },
        store: store,                   // Sessiyalarni MongoDB da saqlash.
        resave: true,                   // Har bir so‘rovda sessiyani qayta saqlaydi.
        saveUninitialized: true      // 
    })
);
app.use(function (req, res, next) { // ???? 
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // ejs farmatda render qilishini 

/** 4-ROUTERS **/
app.use("/admin", routerAdmin) // SSR :EJS ==> Admin 
app.use("/", router);  //SPA: REACT  // Middleweare Design Pattern ==> user / admin / all

export default app;

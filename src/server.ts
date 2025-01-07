import dotenv from "dotenv";
dotenv.config();
// bu dotenv modulini import qiladi, 
//bu modul .env faylidan o‘zgaruvchilarni o‘qish uchun ishlatiladi.
///dotenv.config(); — bu metod dotenv modulini ishga tushiradi va .env faylini o‘qib, 
//undagi o‘zgaruvchilarni process.env obyekti orqali foydalanishga imkon beradi.

import mongoose from "mongoose";
import app from "./app";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        /// TCP 1
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.info(`The server is running successfully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`)
        });
    })
    .catch((err) => {
        console.log("ERROR on connection MongoDB", err);
    })


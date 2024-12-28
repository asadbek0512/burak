import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/* Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin) // get serverga malumot olib kiradi
    .post("/login", restaurantController.processLogin);// serverdan databasega olib kiradi
routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post(
        "/signup",
        makeUploader("members").single("memberImage"),
        restaurantController.processSignup
    );
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get(
    "/product/all",
    restaurantController.verifyRestaurant, // midelwear yani oraliq mantiq
    productController.getAllProducts
);
routerAdmin.post(
    "/product/create",
    restaurantController.verifyRestaurant,// ozoruzeshin
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct
);
routerAdmin.post(
    "/product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct
);

/** User */
routerAdmin.get(
    "/user/all",
    restaurantController.verifyRestaurant,
    restaurantController.getUsers
);
routerAdmin.post(
    "/user/edit",
    restaurantController.verifyRestaurant,
    restaurantController.updateChosenUser);

export default routerAdmin;

import express from "express";
import ProductsController from "../controllers/ProductsController";

const productsRoute = express.Router();

productsRoute.get("/list", ProductsController.list);

productsRoute.get("/:id", ProductsController.get);

productsRoute.post("/create", ProductsController.post);

productsRoute.put("/update", ProductsController.put);

export default productsRoute;

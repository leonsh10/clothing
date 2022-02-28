import express from "express";
import ProductsController from "../controllers/ProductsController";
const { validate } = require("../utils/functions/validate");

const productsRoute = express.Router();

productsRoute.get("/list", ProductsController.list);

productsRoute.get("/:id", ProductsController.get);

productsRoute.post("/create", ProductsController.post);

productsRoute.put("/update", ProductsController.put);

productsRoute.put("/:id/uploadFile", ProductsController.uploadFile);

productsRoute.put(
  "/:productId/removeFile/:filename",
  ProductsController.deleteFile
);

export default productsRoute;

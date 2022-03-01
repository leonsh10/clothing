import express from "express";
import ProductsController from "../controllers/ProductsController";
import productsSchema from "../validators/productsSchema";
import validate from "../utils/functions/validate";

const productsRoute = express.Router();

productsRoute.get("/list", ProductsController.list);

productsRoute
  .route("/:id")
  .get(validate(productsSchema.validateId), ProductsController.get);

productsRoute
  .route("/create")
  .post(validate(productsSchema.post), ProductsController.post);

productsRoute
  .route("/update")
  .put(validate(productsSchema.put), ProductsController.put);

productsRoute
  .route("/:id/uploadFile")
  .put(validate(productsSchema.validateId), ProductsController.uploadFile);

productsRoute
  .route("/:id/removeFile/:filename")
  .put(
    validate(productsSchema.validateProductId),
    ProductsController.deleteFile
  );

export default productsRoute;

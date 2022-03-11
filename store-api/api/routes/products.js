import express from "express";
import productsController from "../controllers/products";
import productsSchema from "../validators/products";
import validate from "../utils/functions/validate";

const productsRoute = express.Router();

productsRoute.get("/list", productsController.list);

productsRoute
  .route("/:id")
  .get(validate(productsSchema.validateId), productsController.get);

productsRoute
  .route("/create")
  .post(validate(productsSchema.post), productsController.post);

productsRoute
  .route("/update")
  .put(validate(productsSchema.put), productsController.put);

productsRoute
  .route("/delete/:id")
  .delete(validate(productsSchema.validateId), productsController.delete);

productsRoute
  .route("/:id/uploadFile")
  .put(validate(productsSchema.validateId), productsController.uploadFile);

productsRoute
  .route("/:id/removeFile/:filename")
  .put(validate(productsSchema.validateRemove), productsController.deleteFile);

export default productsRoute;

import express from "express";
import contactController from "../controllers/contact";

const contactRoute = express.Router();

contactRoute.get("/list", contactController.list);
contactRoute.get("/get", contactController.get);
contactRoute.post("/create", contactController.post);
contactRoute.put("/update", contactController.put);

export default contactRoute;

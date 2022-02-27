import express from "express";
import ContactController from "../controllers/ContactController";

const contactRoute = express.Router();

contactRoute.get("/list", ContactController.list);
contactRoute.get("/get", ContactController.get);
contactRoute.post("/create", ContactController.post);
contactRoute.put("/update", ContactController.put);

export default contactRoute;
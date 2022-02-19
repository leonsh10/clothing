import express from "express";
import AboutController from "../controllers/AboutController";

const aboutRoute = express.Router();

aboutRoute.get("/list", AboutController.list);
aboutRoute.get("/get", AboutController.get);
aboutRoute.post("/create", AboutController.post);
aboutRoute.put("/update", AboutController.put);

export default aboutRoute;

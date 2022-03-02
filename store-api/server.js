import express from "express";
import mongoose from "mongoose";
import getAuthToken from "./api/middlewares/getAuthToken";
import userRouter from "./api/routes/users";
import cors from "cors";
import helmet from "helmet";
import contactRoute from "./api/routes/contact";
import productsRoute from "./api/routes/products";
import aboutRoute from "./api/routes/about";
import fileupload from "express-fileupload";
import genericErrorHandler from "./api/middlewares/genericErrorHandler";
import errorHandler from "./api/middlewares/errorHandler";

mongoose.connect("mongodb://localhost:27017/clothing-store-db").then(() => {
  console.log("Mongodb is connected, port: 27017");
});

const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static(`${__dirname}/public/files`));

app.use(helmet());

app.use(fileupload());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(getAuthToken);

app.use("/users", userRouter);
app.use("/contact", contactRoute);
app.use("/products", productsRoute);
app.use("/about", aboutRoute);

app.use(errorHandler);
app.use(genericErrorHandler);

app.listen(port, () => {
  console.log(`Store app listening on ${port}`);
});

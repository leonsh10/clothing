import express from "express";
import mongoose from "mongoose";
import getAuthToken from "./api/middlewares/getAuthToken";
import usersRoute from "./api/routes/usersRoute";
import cors from "cors";
import helmet from "helmet";
import contactRoute from "./api/routes/contactRoute";
import productsRoute from "./api/routes/productsRoute";

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

app.use(helmet());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(getAuthToken);

app.use("/users", usersRoute);
app.use("/contact", contactRoute);
app.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`Store app listening on ${port}`);
});

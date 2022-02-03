import express from "express";
import getAuthToken from "./api/middlewares/getAuthToken";
import usersRoute from "./api/routes/usersRoute";
import cors from 'cors';
import helmet from 'helmet';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
    origin: "*",
}));

app.use(helmet());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(getAuthToken);


app.use('/users', usersRoute);

app.listen(port, () => {
    console.log(`Store app listening on ${port}`);
});
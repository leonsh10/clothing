import express from "express";
import userController from "../controllers/UserController";
import checkIfAdmin from "../middlewares/checkIfAdmin";

const userRouter = express.Router({
    mergeParams: true
});

userRouter.post('/register', userController.register);

userRouter.use(checkIfAdmin);

// userRouter.get('/list', userController.list);

export default userRouter;
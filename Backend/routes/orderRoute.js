import express from "express";
import authmiddlewares from "../middlewares/auth.js";
import { listOrders, placeorder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authmiddlewares, placeorder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authmiddlewares,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;
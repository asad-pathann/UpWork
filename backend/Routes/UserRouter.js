import express from "express";
import { RegisterUser } from "../Controller/UserController.js";

export const UserRouter = express.Router();

UserRouter.post("/register", RegisterUser);

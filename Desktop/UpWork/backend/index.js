import dotenv from "dotenv";
dotenv.config();
import express from "express";
import colors from "colors";
import { authHandler } from "./middlewares/AuthHandler.js";
import { UserRouter } from "./Routes/UserRouter.js";
import { Connect } from "./Connect/ConnectDB.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
Connect();
app.use("/api/users", UserRouter);
app.use(authHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server Started On Port:${process.env.PORT.rainbow}`)
);

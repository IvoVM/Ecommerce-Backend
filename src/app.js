import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors"

import authRoutes from "./routes/auth";
import indexRoutes from "./routes/index";
import tasksRoutes from "./routes/tasks";
import productsRoutes from "./routes/products";


const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use(tasksRoutes);
app.use(productsRoutes);


export default app;

import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js"
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const app = express();
app.use(express.json());
app.use(cors()
);
mongoose.connect("mongodb://127.0.0.1:27017/kanbas")
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
UserRoutes(app)
app.listen(process.env.PORT || 4000);
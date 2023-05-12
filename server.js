import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import applyRoute from "./routes/applyRoute.js";
import jobRoute from "./routes/jobRout.js";
import cors from "cors";
import formidableMiddleware from "express-formidable";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(formidableMiddleware());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", formidableMiddleware(), applyRoute);
app.use("/api/v1/admin", jobRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.MODE} mode on port ${PORT}`.bgCyan.white
  );
});

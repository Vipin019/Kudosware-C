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
import path from "path"; //supports up to es5 does not support in es6 || built in node
import { fileURLToPath } from "url"; //built in node || use for es6

//configure env
dotenv.config();

//es module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(formidableMiddleware());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("*", function (req, res) {
  res.sendFile(__dirname, path.join("./client/build/index.html"));
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", formidableMiddleware(), applyRoute);
app.use("/api/v1/admin", jobRoute);

//rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.MODE} mode on port ${PORT}`.bgCyan.white
  );
});

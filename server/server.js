import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js";
import { CustomerRoute } from "./routes/customer.route.js";
import { AdminRoute } from "./routes/admin.route.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
app.use("/api/customer", CustomerRoute);
app.use("/api/admin", AdminRoute);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
  connectDB();
});

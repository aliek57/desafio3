import express from "express";
import tourRoutes from "./routes/tourRoutes";

const app = express();

app.use(express.json());
app.use("/api", tourRoutes);

app.use("/tours", tourRoutes);

export default app;
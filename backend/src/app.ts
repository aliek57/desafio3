import express from "express";
import tourRoutes from "./routes/tourRoutes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));

app.use("/tours", tourRoutes);

export default app;
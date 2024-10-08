import express from "express";
import tourRoutes from "./routes/tourRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));

app.use("/tours", tourRoutes);
app.use("/categories", categoryRoutes);
app.use("/reviews", reviewRoutes);

export default app;
import express from "express";
import cors from "cors";
import path from "path";

import uploadRoutes from "./routes/upload.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.use("/api/upload", uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

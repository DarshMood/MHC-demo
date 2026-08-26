import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

import { RegisterRoutes } from "./generated/routes.js";

const app = express();
const PORT = 3000;

const swaggerDocument = JSON.parse(
    fs.readFileSync(
        path.resolve("src/generated/swagger.json"),
        "utf-8"
    )
);

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// tsoa generated routes
RegisterRoutes(app);

// Swagger UI
app.use(
    "/api-swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-swagger`);
});
import express from "express";
import cors from "cors";
import { pool } from "./db/database.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.get("/api/repair-orders", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM repair_orders ORDER BY id"
        );

        res.json(result.rows);
    } catch (error) {
        console.error("Failed to retrieve repair orders:", error);

        res.status(500).json({
            message: "Failed to retrieve repair orders"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
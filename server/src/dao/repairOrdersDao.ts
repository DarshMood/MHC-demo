import { pool } from "../db/database.js";
import { RepairOrder } from "../domain/RepairOrder.js";

export async function getAllRepairOrders(): Promise<RepairOrder[]> {
    const result = await pool.query<RepairOrder>(
        `
            SELECT id, customer_name, technician_name,
            status, priority, description, created_at
            FROM repair_orders;  
        `
    );

    return result.rows;
}
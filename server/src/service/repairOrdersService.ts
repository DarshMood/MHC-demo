import { RepairOrder } from "../domain/RepairOrder.js";
import * as repairOrdersDao from "../dao/repairOrdersDao.js";

export async function getAllRepairOrders(): Promise<RepairOrder[]> {
    return await repairOrdersDao.getAllRepairOrders();
}
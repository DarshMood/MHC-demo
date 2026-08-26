import type { RepairOrder } from "../domain/RepairOrder";

// TODO: Eventually dynamic from a property source
const API_BASE_URL = "http://localhost:3000";

export async function getAllRepairOrders(): Promise<RepairOrder[]> {
    const response = await fetch(
        `${API_BASE_URL}/api/repair-orders/all`
    );

    if (!response.ok) {
        throw new Error(
            `Failed to retrieve repair orders: ${response.status}`
        );
    }

    return response.json();
}
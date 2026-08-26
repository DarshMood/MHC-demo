export interface RepairOrder {
    id: number;
    customer_name: string;
    technician_name: string | null;
    status: string;
    priority: string;
    description: string | null;
    created_at: string;
}
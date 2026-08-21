import { Status } from "./enums/Status.js";
import { Priority } from "./enums/Priority.js";


export interface RepairOrder {
    id: number;
    customer_name: string;
    technician_name: string | null;
    status: Status;
    priority: Priority;
    description: string | null;
    created_at: Date;
}
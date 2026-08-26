import {
    Controller,
    Get,
    Route,
    Tags,
    SuccessResponse
} from "tsoa";

import { RepairOrder } from "../domain/RepairOrder.js";
import * as repairOrdersService from "../service/repairOrdersService.js";

@Route("api/repair-orders")
@Tags("Repair Orders")
export class RepairOrderController extends Controller {

    @Get("/all")
    @SuccessResponse("200", "Success")
    public async getAllRepairOrders(): Promise<RepairOrder[]> {
        return repairOrdersService.getAllRepairOrders();
    }
}
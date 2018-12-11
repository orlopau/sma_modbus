import {BasicSMADevice} from "../sma_device";
import {ModbusDatatype} from "../modbus_typings";

export class SunnyIsland extends BasicSMADevice {
    constructor(ipAddress: string, modbusPort: number) {
        super(ipAddress, modbusPort);
    }

    async getBatteryPercentage(): Promise<number> {
        return await super.readModbus(40378, ModbusDatatype.uint16);
    }

}
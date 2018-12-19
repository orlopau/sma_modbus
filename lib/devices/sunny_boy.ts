import {BasicSMADevice} from "../sma_device";
import {ModbusDatatype} from "../modbus_typings";

export class SunnyBoy extends BasicSMADevice{
    constructor(ipAddress: string, modbusPort: number) {
        super(ipAddress, modbusPort);
    }

    async getLifetimeWh(): Promise<number> {
        return await super.readModbus(40303, ModbusDatatype.acc64) / 1000;
    }

}
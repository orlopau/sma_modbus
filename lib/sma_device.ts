import {ModbusDatatype} from "./modbus_typings";
import {readModbus} from "./modbus_util";
import {DeviceTypes} from "./sma_constants";

interface SMADevice {
    readModbus(register: number, datatype: ModbusDatatype): Promise<any>;

    getIpAddress(): string;

    getDeviceType(): Promise<string>;
}

export abstract class BasicSMADevice implements SMADevice{
    private readonly ipAddress: string;
    private readonly modbusPort: number;

    constructor(ipAddress: string, modbusPort = 502) {
        this.ipAddress = ipAddress;
        this.modbusPort = modbusPort;
    }

    async getDeviceType(): Promise<string> {
        let id: number = await readModbus(this.ipAddress, 40037, ModbusDatatype.string, 8, this.modbusPort);
        return DeviceTypes[id];
    }

    getIpAddress(): string {
        return this.ipAddress;
    }

    async readModbus(register: number, datatype: ModbusDatatype, length?: number): Promise<any> {
        return readModbus(this.ipAddress, register, datatype, length, this.modbusPort);
    }

    async getPower(): Promise<number> {
        return await this.readModbus(40200, ModbusDatatype.int16);
    }
}
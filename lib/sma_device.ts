import {ModbusDatatype} from "./modbus_typings";
import {ModbusConnection} from "./modbus_util";
import {DeviceTypes} from "./sma_constants";

interface SMADevice {
    readModbus(register: number, datatype: ModbusDatatype): Promise<any>;

    getIpAddress(): string;

    getDeviceType(): Promise<string>;
}

export abstract class BasicSMADevice implements SMADevice{
    private connection: ModbusConnection;
    private ipAddress: string;

    constructor(ipAddress: string, modbusPort = 502) {
        this.connection = new ModbusConnection(ipAddress, modbusPort, 126);
        this.ipAddress = ipAddress;
    }

    async getDeviceType(): Promise<string> {
        let id: string = await this.connection.readModbus(40037, ModbusDatatype.string, 8);
        console.log(id.split(""));
        return DeviceTypes[Number(id)];
    }

    getIpAddress(): string {
        return this.ipAddress;
    }

    async readModbus(register: number, datatype: ModbusDatatype, length?: number): Promise<any> {
        return this.connection.readModbus(register, datatype, length);
    }

    async getPower(): Promise<number> {
        return await this.readModbus(40200, ModbusDatatype.int16);
    }

    close(){
        this.connection.close();
    }
}
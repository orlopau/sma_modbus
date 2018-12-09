import ModbusRTU from "modbus-serial"
import "buffer";
import {ModbusDatatype} from "./modbus_typings";
import log from "loglevel";

log.setLevel(log.levels.TRACE);

export async function readModbus(ipAddress: string, register: number, dtype: ModbusDatatype, length?: number, port = 502, clientId = 126): Promise<any> {
    const client = new ModbusRTU();
    let words = ModbusDatatype.words(dtype);
    if (length != undefined) {
        words = length;
    }
    if (words == undefined) {
        throw new Error("A dtype with undefined length cant be used without passing a custom length!")
    }
    try {
        await client.connectTCP(ipAddress, {port: port});
        client.setID(clientId);
        // TODO hardcoded offset
        log.info("Length: " + words);
        let answer = await client.readHoldingRegisters(register - 1, words);
        // @ts-ignore
        log.info(client.isOpen);
        return ModbusDatatype.fromBuffer(dtype, answer.buffer);
    } catch (e) {
        log.warn("Error while communicating with " + ipAddress + ": " + e);
    } finally {
        // @ts-ignore
        client.close();
    }
}

import {readModbus} from "../lib/modbus_util"
import {ModbusDatatype} from "../lib/modbus_typings";

readModbus("192.168.188.60", 40037, ModbusDatatype.string, 8).then(result => console.log(result));
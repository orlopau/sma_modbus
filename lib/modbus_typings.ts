export enum ModbusDatatype {
    acc32,
    acc64,
    bitfield16,
    bitfield32,
    enum16,
    int16,
    int32,
    string,
    sunssf,
    uint16,
    uint32,
    uint64
}
export namespace ModbusDatatype {
    export function words(dtype: ModbusDatatype): number | undefined{
        switch (dtype) {
            case ModbusDatatype.acc32: return 2;
            case ModbusDatatype.acc64: return 4;
            case ModbusDatatype.bitfield16: return 1;
            case ModbusDatatype.bitfield32: return 2;
            case ModbusDatatype.enum16: return 1;
            case ModbusDatatype.int16: return 1;
            case ModbusDatatype.int32: return 2;
            case ModbusDatatype.string: return undefined;
            case ModbusDatatype.sunssf: return undefined;
            case ModbusDatatype.uint16: return 1;
            case ModbusDatatype.uint32: return 2;
            case ModbusDatatype.uint64: return 4;
        }
    }
}

export enum ModbusPermission {
    RW,
    RO
}

export interface ModbusDefinition {
    address: number,
    datatype: ModbusDatatype,
    permission: ModbusPermission
}
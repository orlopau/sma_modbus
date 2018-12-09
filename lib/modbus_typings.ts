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

export enum ModbusPermission {
    RW,
    RO
}

export interface ModbusDefinition {
    address: number,
    datatype: ModbusDatatype,
    permission: ModbusPermission
}
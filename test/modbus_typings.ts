// Test typings conversion
import {expect} from "chai";
import "mocha";
import "buffer";

import {ModbusDatatype} from "../lib/modbus_typings";
import {Uint64BE} from "int64-buffer";


describe("Modbus typings", () => {
    it("Should convert int16", () => {
        let buffer = Buffer.alloc(2);
        buffer.writeInt16BE(-32768, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.int16, buffer)).to.eql(-32768);
        buffer = Buffer.alloc(2);
        buffer.writeInt16BE(32767, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.int16, buffer)).to.eql(32767);
    });

    it("Should convert int32", () => {
        let buffer = Buffer.alloc(4);
        buffer.writeInt32BE(-2147483648, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.int32, buffer)).to.eql(-2147483648);
        buffer = Buffer.alloc(4);
        buffer.writeInt32BE(2147483647, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.int32, buffer)).to.eql(2147483647);
    });

    it("Should convert uint16", () => {
        let buffer = Buffer.alloc(2);
        buffer.writeUInt16BE(65535, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.uint16, buffer)).to.eql(65535);
    });

    it("Should convert uint32", () => {
        let buffer = Buffer.alloc(4);
        buffer.writeUInt32BE(4294967295, 0);
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.uint32, buffer)).to.eql(4294967295);
    });

    it("Should convert uint64", () => {
        let buffer = new Uint64BE(1844674407370951615).toBuffer();
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.uint64, buffer)).to.eql(1844674407370951615);
    });

    it("Should convert string", () => {
        let buffer = Buffer.alloc(16);
        buffer.write("123456789abcdefg");
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.string, buffer)).to.eql("123456789abcdefg");

        buffer = Buffer.alloc(1);
        buffer.write("a");
        expect(ModbusDatatype.fromBuffer(ModbusDatatype.string, buffer)).to.eql("a");
    });
});
# SMA Modbus
[![NPM](https://nodei.co/npm/sma_modbus.png)](https://nodei.co/npm/sma_modbus/)

## Introduction

The module provides easy access to the data provided by SMA devices with ModBus support.

It automatically establishes a new connection on disconnect, and parses incoming byte data to their respective format.

##### Typescript definitions are included out-of-the-box.

## Usage

Common requests are included for some devices, such as:

* current battery percentage of Sunny Island devices
* power of Sunny Boy devices
* total production of Sunny Boy devices
* etc.

If more advanced requests are required, the library provides a easy method to access **all registers** with **automatic
data parsing**. 

The register values can be found on [SMAs website](https://www.sma.de/produkte/monitoring-control/modbus-protokoll-schnittstelle.html)
under "Downloads" -> "Technical Information" -> "Modbus Interface". An Excel file containing all registers with datatype and description can be downloaded.

## Examples

```javascript
// require or import can be used to acquire the package
const SMA = require('sma_modbus');
let sunnyIsland = new SMA.SunnyIsland("192.168.188.60", 502);
sunnyIsland.getPower().then((x) => {
        console.log("Power: " + x + " W");
});

// Modbus addresses and datatypes can be found in the SMA docs
sunnyIsland.readModbus(40073, SMA.ModbusDatatype.uint16).then((x) => {
    console.log("Interface speed: " + x + " Mb/s");
});
```
# SMA Modbus

## Introduction

The module provides easy access to the data provided by SMA devices with ModBus support.

It automatically establishes a new connection on disconnect, and parses incoming byte data to their respective format.

**Typescript** definitions are included out-of-the-box.

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

Detailed examples can be found in the examples folder on GitHub.
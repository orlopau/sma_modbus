import sma from "../index"

let device = new sma.Devices.SunnyIsland("192.168.188.60", 502);

setInterval(() => {
    device.getBatteryPercentage().then((data) => {
        console.log(data);
    });

}, 1000);
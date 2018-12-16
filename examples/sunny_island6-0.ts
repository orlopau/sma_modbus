import {SunnyIsland} from "../lib/devices/sunny_island";

let device = new SunnyIsland("192.168.188.60", 502);

setInterval(() => {
    device.getBatteryPercentage().then((data) => {
        console.log(data);
    });

}, 1000);

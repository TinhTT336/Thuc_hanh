class Battery {
    constructor() {
        // this.energy = energy;
        this.setEnergy = (energy) => {
            this.energy = energy;
        }
        this.getEnergy = () => {
            return this.energy;
        }
        this.decreaseEnergy = () => {
            if (energy > 0) {
                this.energy--;
            }
        }
    }
}

class FlashLamp {
    constructor() {
        this.setBattery = (battery) => {
            this.battery = battery;
        }
        this.getBatteryInfo = () => {
            return this.battery.getEnergy();
        }
        this.light = () => {
            if (this.status) {
                console.log("lightning");
            } else {
                console.log("not lightning");

            }
        }
        this.turnOn = () => {
            this.status = true;
        }
        this.turnOff = () => {
            this.status = false;
        }
    }
}
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();
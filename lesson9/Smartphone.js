import {Gadget} from "./gadget.js";

export class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    getInfo() {
        return `${super.getInfo()}, Operating System: ${this.operatingSystem}`;
    }
    get getOperatingSystem() {
        return this.operatingSystem;
    }
    set getOperatingSystem(value) {
        if (value === "iOS" || value === "Android" || value === "HarmonyOS") {
            this.operatingSystem = value;
        } else {
            console.error("Unavailable operating system");
        }
    }
}

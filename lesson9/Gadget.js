export class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this._year = year;
    }
    getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this._year}`;
    }
    get getYear() {
        return this._year;
    }
    set getYear(value) {
        if (value > 2000 && value <= new Date().getFullYear()) {
            this._year = value;
        } else {
            console.error("Invalid year");
        }
    }
    static getOldestGadget(gadgetsArray) {
        if (!Array.isArray(gadgetsArray) || gadgetsArray.length === 0) {
            console.error("Invalid input: Please provide a non-empty array of gadgets.");
            return null;
        }
        let oldestGadget = gadgetsArray[0];
        for (let i = 1; i < gadgetsArray.length; i++) {
            if (gadgetsArray[i].getYear < oldestGadget.getYear) {
                oldestGadget = gadgetsArray[i];
            }
        }
        return oldestGadget;
    }
}

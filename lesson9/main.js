import {Smartphone} from "./smartphone.js";
import {Gadget} from "./gadget.js";
const smart1 = new Smartphone("Apple", "iPhone 13", 2021, "OS");
console.log(smart1.getInfo());
console.log(smart1.getOperatingSystem);
const smart2 = new Smartphone("Samsung", "Galaxy S24+", 2024, "Android");
console.log(smart2.getInfo());

const gadget1 = new Gadget("Apple", "iPad Pro", 2020);
const gadget2 = new Gadget("Samsung", "Galaxy Tab S7", 1990);
console.log(gadget1.getInfo());
console.log(gadget1.getYear);
console.log(gadget2.getInfo());
console.log(gadget2.getYear);
console.log((gadget1.brand = "Apple Inc."));
gadget1.getYear = 2022;
console.log(gadget1.getYear);

const gadgetsArray = [smart1, smart2, gadget1, gadget2];
const oldestGadget = Gadget.getOldestGadget(gadgetsArray);
console.log(`Oldest Gadget: ${oldestGadget.getInfo()}`);
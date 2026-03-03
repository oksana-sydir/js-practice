const min = 10;
const max = 30;

let age = Math.floor(Math.random() * (max - min + 1) + min);
console.log(age);
let isAdult = false;
if (age >= 18) {
    isAdult = true;
}
console.log(isAdult);

const min = 0;
const max = 23;
let hour = Math.floor(Math.random() * (max - min + 1) + min);
console.log(hour);
// switch (true) {
//     case hour >= 0 && hour <= 5:
//         console.log("Good night!");
//         break;
//     case hour >= 6 && hour <= 11:
//         console.log("Good morning!");
//         break;
//     case hour >= 12 && hour <= 17:
//         console.log("Good day!");
//         break;
//     case hour >= 18 && hour <= 23:
//         console.log("Good evening!");
//         break;
// }

if (hour >= 0 && hour <= 5) {
    console.log("Good night!");
} else if (hour >= 6 && hour <= 11) {
    console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good day!");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good evening!");
}
  
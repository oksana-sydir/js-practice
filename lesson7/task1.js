const numbers = [1, 4, -4, 7, 0, -2, 5, 0, -1];
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers++;
    } else if (numbers[i] < 0) {
        negativeNumbers++;
    } else {
        zeroNumbers++;
    }
}
console.log(`Positive numbers: ${positiveNumbers}`);
console.log(`Negative numbers: ${negativeNumbers}`);
console.log(`Zero numbers: ${zeroNumbers}`);

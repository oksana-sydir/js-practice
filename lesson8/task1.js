const calculator = {
    lastResult: 0,
    operationsCount: 0,
    add(a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return this.lastResult;
    },
    subtract(a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        return this.lastResult;
    },
    multiply(a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        return this.lastResult;
    },
    divide(a, b) {
        if (b === 0) {
            console.log("Cannot divide by zero");
            return null;
        }
        this.lastResult = a / b;
        this.operationsCount++;
        return this.lastResult;
    },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(6, 7)); // 42
console.log(calculator.divide(20, 5)); // 4
console.log(calculator.divide(10, 0)); // Cannot divide by zero
console.log(calculator.add(5, 0)); // 5
console.log(`Last result: ${calculator.lastResult}`); // Last result: 5
console.log(`Operations count: ${calculator.operationsCount}`); // Operations count: 5

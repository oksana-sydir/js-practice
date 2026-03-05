function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        return handleEven(num);
    } else {
        return handleOdd(num);
    }
}

function handleEven(num) {
    console.log(`Number ${num} is even`);
}
function handleOdd(num) {
    console.log(`Number ${num} is odd`);
}

handleNum(4, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);

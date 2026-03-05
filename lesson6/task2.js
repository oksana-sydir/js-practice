function countDown(num) {
    if (num <= 0) {
        return console.log("Done!");
    } else {
        console.log(`${num}`);
        countDown(num - 1);
    }
}

countDown(5);
countDown(0);
countDown(-5);

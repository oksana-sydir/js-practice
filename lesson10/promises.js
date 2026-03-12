const newPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 7000);
});

newPromise.then((value) => console.log(value * 5));
console.log(newPromise);

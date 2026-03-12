function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
        }, delay);
    });
}
delayedLog("Привіт, світ!", 2000)
.then();
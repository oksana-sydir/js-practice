 const delayedLog = (message, delay) => {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(message);
     }, delay);
   });
 }

 delayedLog("Привіт, світ!", 2000).then((message) => console.log(message));
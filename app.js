console.log('loading started...')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const errorIndicator = false;
        if (!errorIndicator) {
            const jsonData = {
                name: "Ainazik",
                data: "2 july 2007"
            }
            const obj = JSON.stringify(jsonData);
            console.log(obj);
            resolve(obj);
        }else {
            reject("Something has gone wrong");
        }
    }, 2000)
});

promise
.then((jsonData) => {
    setTimeout(() => {    
        const parse = JSON.parse(jsonData);
        console.log(parse);
    }, 2000);
})
.catch((err) => {
    console.log("OOps sorry try again", err);
})
.finally(() => {
    console.log("loading ended");
});
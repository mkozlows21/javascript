//regular callback function
const getDataCallback = (num, callback) => {
    setTimeout(() =>{
        if(typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided');
        }
    }, 2000);
};

//callback hell
//this is to do something with the data from the first call
getDataCallback(2, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        getDataCallback(data, (err, data) => {
            if(err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});

//Promise version --> expects one argument: a function
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Invalid input. Enter Number');
    }, 2000);
});

//nested promise calls
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});


//promise chaining --> using the data to keep getting new data - less complex than callbacks and nesting
getDataPromise(100).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return 'this is some test data';
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
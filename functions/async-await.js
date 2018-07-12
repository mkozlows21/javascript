//Promise version --> expects one argument: a function
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Invalid input. Enter Number');
    }, 2000);
});

const processData = async() => {
    //await operator can only be used with async function
    let data = await getDataPromise('abc');
    data = await getDataPromise(data);
    return data;
};

processData().then((data) => {
    console.log('Data',data);
}).catch((error) => {
    console.log('Error', error);
});

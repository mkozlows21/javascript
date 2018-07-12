//use name url with api, put in partial name and get back an array of countries with those letters
//store the name of each in an array
//lets just get the list of country objects then go through them and store their capitals in an array or object or something

const getCountries = (partialName) => {
    return fetch(`http://restcountries.eu/rest/v2/name/${partialName}`).then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to retrieve information from API');
        }
    }).then((data) => data);
};

let capitals = [];
getCountries('us').then((data) => {
    data.forEach((country) => {
        capitals.push(country.capital);
    });
}).catch((error) => {
    console.log(error);
});

/* let time = moment();
let formated = time.format('MMMM-DD-YYYY');
for(let i = 0; i < 5; i++) {
    console.log(time.subtract(1, 'days').format('YYYY-MM-DD'));
} */





const getImages = async() => {
    let endDate = moment().format('YYYY-MM-DD');
    let startDate = moment().subtract(5, 'days').format('YYYY-MM-DD');
    let apodURL = 'https://api.nasa.gov/planetary/apod?api_key=GoCHj7HTtRVOHSCDYzE1h2AMISrC6WCxi42c3dCD';
    apodURL = `${apodURL}&start_date=${startDate}&end_date=${endDate}`;
    const response = await fetch(apodURL);
    if(response.status === 200) {
        const data = await response.json();
        let images = [];
        data.forEach((image) => {
            if(image.hdurl) {
                images.push(image.hdurl)
            }
        });
        return images;
    } else {
        throw new Error('Unable to fetch APOD data');
    }
}; 

const getImgArray = async() => {
    let images = await getImages();
    return images;
};

let thing = [];
getImages().then((data) => {
    data.forEach((element) => {
        thing.push(element);
    })
}).catch((err) => {
    console.log(err);
});

const displayImg = (thing) => {
    thing.forEach((el) => {
        console.log(el);
    });
}

displayImg(thing);


//const storeImages = () => {

//}

//console.log(getImgArray());


const imageDiv = document.querySelector('#images');
const image = document.createElement('img');
console.log(thing);
const getPuzzle = async (wordCount=2) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to fetch data");
    }
};

//old version with then() instead of async function
/* const getPuzzleOld = (wordCount = 2) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    });
}; */

const getCurrentCountry = async() => {
    const currentLocation = await getLocation();
    const country = await getCountry(currentLocation.country);
    return country;
}


const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if(response.status === 200) {
        const data = await response.json();
        const country = data.find((countryID) => countryID.alpha2Code === countryCode);
        return country;
    } else {
        throw new Error('Unable to fetch data from API');
    }
};

const getCountryOld = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to retrieve data');
        }
    }).then((data) => {
        const country = data.find((countryID) => countryID.alpha2Code === countryCode);
        return country;
    });
};

const getLocation = async() => {
    const response = await fetch('http://ipinfo.io/json?token=4c940f722e1016');
    if(response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch data from API');
    }
};

const getLocationOld = () => {
    return fetch('http://ipinfo.io/json?token=4c940f722e1016').then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error("Could not fetch data from api");
        }
    }).then(data => data);
};

const getLocation1 = () => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            resolve(data);
        } else if(event.target.readyState === 4) {
            console.log(event.target.status);
            reject('There was an error fetching the data');
        }
    });
    request.open('GET', 'http://ipinfo.io/json?token=4c940f722e1016');
    request.send();
});


/*
//Asynchronous code --> GOOD, allows other stuff to happen behind the scenes
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            resolve(data.puzzle);
        } else if(event.target.readyState === 4) {
            reject('There was a big error');
        }
    });
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
});


//promise version of country code API call
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            const country = data.find((countryID) => countryID.alpha2Code === countryCode);
            resolve(country);
        } else if(event.target.readyState === 4) {
            reject("There was a problem retrieving the data");
        }
    });
    request.open('GET', 'http://restcountries.eu/rest/v2/all');
    request.send();
});
*/

/*
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            callback(undefined, data.puzzle);
        } else if (event.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
};
*/

/*
//Synchronous --> bad code, bad for the user, locks everything else up
const getPuzzleSync = () => {
    const request = new XMLHttpRequest();
    //third option is sync or async, by default this is set to true --> async
    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false);
    request.send();

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.puzzle;
    } else if (request.readyState === 4) {
        throw new Error('Things did not go well');
    }
};
*/

/*
//callback version of Country code API call
const getCountryInfo = (countryCode, callback) => {
    const request1 = new XMLHttpRequest();
    request1.addEventListener('readystatechange', (event) => {
        //make sure we get a good status code and final state
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            let country = data.find((countryID) => countryID.alpha2Code === countryCode);
            callback(undefined, country.capital);
            //if we make it to the final state but do not get the data, status code is wrong
            //we didn't just use else because there are 5 state changes before reaching final change where data is
        } else if (event.target.readyState === 4) {
            callback('Something went wrong!', undefined);
        }
    });
    request1.open('GET', 'http://restcountries.eu/rest/v2/all');
    request1.send();
};
*/

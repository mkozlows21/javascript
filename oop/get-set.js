const data = {
    locations: [],

    get location() {
        return this._location;
    },

    set location(city) {
        this._location = city.trim();
        this.locations.push(this._location);
    }
};

//cod that uses the data object
data.location = '  Boston   ';
data.location = 'New York';
console.log(data);


"use strict";

var userDetails = {
    name: "Sanz",
    cities: "['NewYork', 'Sydney', 'Tokyo']",
    details: function details() {
        return this.name + this.cities;
    }
};

var userDetails2 = {
    name: 'Purnima',
    cities: ['NewYork', 'Sydney', 'Tokyo'],
    printFavPlaces: function printFavPlaces() {
        var _this = this;

        var messages = this.cities.map(function (city) {
            return _this.name + 'has lived in ' + city;
        });

        return messages;
    }
};

console.log(userDetails2.printFavPlaces());

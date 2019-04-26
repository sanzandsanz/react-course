const userDetails = {
    name: "Sanz",
    cities: ['NewYork', 'Sydney', 'Tokyo'],
    details : function(){
        return this.name + this.cities;
    }
};

const userDetails2 = {
    name: 'Purnima',
    cities: ['NewYork', 'Sydney', 'Tokyo'],
    printFavPlaces(){
        const messages = this.cities.map((city) => {
            return this.name +  'has lived in ' + city;
        });

        return messages;
    }
};

console.log(userDetails2.printFavPlaces());






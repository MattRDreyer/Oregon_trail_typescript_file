(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = (function () {
        function Traveler(food, name, isHealthy) {
            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            // if(this.food >= 20) {       -would allow passenger to possibly become healthy again if they hunted
            //     this.isHealthy = true;
            // }
            return this.food;
        };
        //keyword "this" refers back to the class
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length >= this.capacity) {
                return "No room.  Good luck in the wilderness!";
            }
            else {
                this.passengerArray.push(traveler);
                return "Welcome, we have plenty of room!";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (!this.passengerArray[i].isHealthy) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var count = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                count += this.passengerArray[i].food;
            }
            return count;
        };
        return Wagon;
    }());
    var Bob = new Traveler(getRandomIntInclusive(0, 100), "Bob", true);
    var Sue = new Traveler(getRandomIntInclusive(0, 100), "Sue", true);
    var Jill = new Traveler(getRandomIntInclusive(0, 100), "Jill", true);
    var Gary = new Traveler(getRandomIntInclusive(0, 100), "Gary", true);
    var Debbie = new Traveler(getRandomIntInclusive(0, 100), "Debbie", true);
    var WagonOne = new Wagon(4);
    console.log(Bob.eat());
    console.log(Sue.eat());
    console.log(Gary.eat());
    console.log(Jill.hunt());
    console.log(Debbie.hunt());
    var passengerArray = [Bob, Sue, Jill, Gary, Debbie];
    for (var i = 0; i < passengerArray.length; i++) {
        if (Math.random() > .5) {
            console.log(WagonOne.addPassenger(passengerArray[i]));
        }
    }
    console.log(WagonOne.isQuarantined());
    console.log(WagonOne.getFood());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();

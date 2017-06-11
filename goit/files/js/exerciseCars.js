
function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;

    this.start = function () {
    	this.started = true;
    };
    this.stop = function() {
    	this.started = false;
    };
    this.drive = function() {
      if (this.started) {
        console.log(this.make + " " + 
              this.model + " goes zoom zoom!");
      } else {
        console.log("Start the engine first.");
      }
    }
}

var taz2108 = new Car("Lada", "2108", 1999, "Вишня", 8, false, 666000);
var bmwX5 = new Car("BMW", "X5", 2009, "Gold", 4, false, 88000);

//Созданные в конструкторе объекты помещаются в массив.
var cars = [taz2108, bmwX5];

//МАССОВОЕ ПРИМЕНЕНИЕ МЕТОДОВ.
//С помощью for каждому эл-ту массива вызывается нужный метод. 
for (var i = 0; i < cars.length; i++) {
	cars[i].start();
	cars[i].drive();
	cars[i].drive();
	cars[i].stop();
}
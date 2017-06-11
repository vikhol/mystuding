//Чтобы не записывать все св-ва в параметры конструктора, 
//можно передать конс-ру объектный литерал с установленными св-вами
//это оправдано, если помимо св-в у объектов есть еще и методы.

//Сперва создается объектный литерал 
var taz2114Params = {
	make: "Lada",
	model: "2114",
	year: 2006,
	color: "Серебро",
	passengers: 5,
	probeg: 120000
}

//Затем создается конструктор, которому будет передавать этот О.Л.
function Car(params) {
//Каждая ссылка на параметр заменяется соответствующим св-вом объекта,
//ПЕРЕДАННОГО Ф-И	
	this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.probeg = params.probeg;

//Остальной код остается без изменений!    
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



var taz2114 = new Car(taz2114Params);
if (taz2114 instanceof Car) {
		console.log(taz2114.make + " - машина");
	}


console.log("Производитель: " + taz2114.make + ", Модель: " + taz2114.model + ", Цвет: " + taz2114.color);
taz2114.start();
taz2114.drive();


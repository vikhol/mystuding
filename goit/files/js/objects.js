//пример объекта
var taz2107 = {
	model: "Lada 2107",
//значение свойства записывается после двоеточия
	engine: 1.6,
//свойства разделяются запятой 
	power: 75,
	year: 2010,
	km: 35000,
	passengers: 4,
	color: "silver",
	gosnomer: "x666xx",

//пример с "методом"-функцией для управления объектом
	started: false,
	start: function() {
//this используется для обращения к объекту, 
//в котором прописан данный метод		
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			console.log("Садись, поехали!");
		} else {
			console.log("Толкнуть надо.");
		}
	}
};
//чтобы вызвать эту ф-ю нужно обратиться к ней через точку
taz2107.start();
taz2107.drive();
taz2107.stop();
taz2107.drive();

var taz2106 = {
	model: "Lada 2106",
	engine: 1.6,
	power: 72,
	year: 1999,
	km: 86000,
	passengers: 4,
	color: "blue",
	gosnomer: "a228ye"
};

console.log(taz2107.model + " have a " + taz2107.engine + " engine");
console.log(taz2106);

function precual(car) {
	if (car.km > 50000 || car.year < 2010) {
		return false;
	} 
return true;	
}

var rideOrNot = precual(taz2107);

if (rideOrNot) {
	console.log("К вам подъехал автомобиль: " + taz2107.model + " Гос.номер: " + taz2107.gosnomer + ". Собирайся, братишка, мы отправляемся в ад.")
} else {
	console.log("Не сегодня.")
}

//все изменения свойств отражаются на объекте,
//который был передан функции при вызове.
function skrutkaProbega(car, amount) {
	car.km = car.km - amount;
}
//мы передаем функции ссылку на taz2106
//функция "скручивает" пробег
skrutkaProbega(taz2106, 40000);
//и в консоли выводится новое значение.
console.log(taz2106.km);

//Пример #1
for (var prop in taz2106) {
    console.log(prop + ": " + taz2106[prop]);
}

//Пример №2
taz2107["power"] = 300;

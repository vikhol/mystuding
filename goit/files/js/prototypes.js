//Конс-р для создания собак.
//Т.к. каждая собака обладает индивидуальными св-вами, эти св-ва прописываются
//в самом конс-ре.
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
//======================================================================
//Создаем прототипы, которые будут содержать св-ва и методы
//ОДИНАКОВЫЕ ДЛЯ ВСЕХ ОБЪЕКТОВ.
Dog.prototype.species = "species будет иметь одинаковое значение для всех объектов";
//(Если для конкретного объекта не будет прописано свое species)

//общие ф-и для всех объектов, создаваемых конс-ром Dog.
Dog.prototype.bark = function() {
    if (this.weight > 5) {
        console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и говорит: ГАУ ГАУ.");
    } else {
        console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и говорит: пиу пиу.");
    }
};

Dog.prototype.run = function() {
    console.log("Run!");
};

Dog.prototype.wag = function() {
    console.log("Wag!");
};
//========================================================================

var Drujok = new Dog("Дружок", "Двортерьер", 15);

Drujok.bark();

//========================================================================
//Предопределение методов.
var Spot = new Dog("Спот", "Чихуахуа", 3);
Spot.bark();

//Задаем для Спота конкретный метод.
Spot.bark = function() {
	console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и тоже хочет лаять по взрослому!");
}
Spot.bark();
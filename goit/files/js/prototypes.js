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
//Этот метод сохранится только Для Спока.
Spot.bark = function() {
	console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и тоже хочет лаять по взрослому!");
}
Spot.bark();

//Еще одна интересная реализация добавления методов.
//Сперва задается дефолтное значение для всех объектов.
Dog.prototype.sitting = false;

//Затем добавляется метод, который будет работать на основе значения sitting
//у какой-то конкретной собаки.
Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " уже сидит.")
    } else {
//Собака "садится" и это сохраняется в ее конкретном объекте.        
        this.sitting = true;
        console.log(this.name + " покорно сел.")
    }

}
//Вызов этой функции изменит значение св-ва sitting ТОЛЬКО в объекте Spot.
Spot.sit();
Spot.sit();
//===========================================================================
//Чтобы определить откуда взято конкретное св-во - из прототипа, или оно определено в самом объекте,
//нужно воспользоваться методом hasOwnProperty.

//первый пример вернет false, так как не найдет такого св-ва в самом объекте, ибо оно определено
//в прототипе
console.log(Drujok.hasOwnProperty("sitting"));

//А этот пример вернет true, так как мы ранее вызвали метод, который добавил значение св-ва sitting
//в сам объект.
console.log(Spot.hasOwnProperty("sitting"));
//============================================================================

//УПРАЖНЕНИЕ "Чемпион породы" 
//(поторопился и выполнил неверно, но код все равно рабочий)
/*Dog.prototype.standing = true;

Dog.prototype.stand = function() {
    if (this.standing) {
        console.log(this.name + " уже стоит");
    } else {
        this.lie = false;
        this.standing = true;
        console.log(this.name + " покорно встал");
    }
}

Dog.prototype.lie = false;

Dog.prototype.down = function() {
    if (this.lie) {
        console.log(this.name + " уже лежит");
    } else {
        this.lie = true;
        this.standing = false;
        console.log(this.name + " покорно лег");
    }
}

Dog.prototype.gait = function(argument) {
    if (argument == "беги") {
        this.lie = false;
        this.standing = true;
        console.log(this.name + " бежит");
    } else if (argument == "рядом") {
        this.lie = false;
        this.standing = true;
        console.log(this.name + " плетется рядом");
    } else {
        console.log("Че ты хочешь от меня, хозяин? Я тебя не понимаю!");
    }
}

Spot.stand();
Spot.down();
Spot.stand();
Spot.gait("беги");
Spot.gait("рядом");
Spot.gait("соси");
Spot.stand();
*/
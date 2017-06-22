//Конструктор для создания обычных собак.
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
//Прототип с методом bark для всех собак
Dog.prototype.bark = function() {
    if (this.weight > 5) {
        console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и говорит: ГАУ ГАУ.");
    } else {
        console.log(this.breed + " по кличке " + this.name + " весит " + this.weight + " кг. и говорит: пиу пиу.");
    }
}
//Еще пара прототипов для стандартных дворняг.
Dog.prototype.run = function() {
    console.log("Run!");
}

Dog.prototype.wag = function() {
    console.log("Wag!");
}
//==================================================
//Далее создаем конструктор для Благородных Собак.
function ShowDog(name, breed, weight, handler) {

//Этот фрагмент использует конструктор Dog для обработки свойств name, breed и weight.
//М-тод .call вызовет ф-ю Dog и передаст ей ShowDog вместо this.
    Dog.call(this, name, breed, weight);
    //Т.е. конструктор Dog отработает примерно таким образом
  /*function Dog(name, breed, weight) {
    ShowDog.name = name;
    ShowDog.breed = breed;
    ShowDog.weight = weight;
    }
  */

//А это св-во добавляется отдельно, так как его нет в Dog    
    this.handler = handler;
}
//Напрямую назначаем новый объект Обычной Дворняги св-ву prototype (без передачи аргументов).
//Таким образом ShowDog унаследует все прототипы у конс-ра Dog.
ShowDog.prototype = new Dog();

//Задаем методы, которые будут доступны только Благородным Псам.
ShowDog.prototype.standing = true;

ShowDog.prototype.stand = function() {
    if (this.standing) {
        console.log(this.name + " уже стоит");
    } else {
        this.lie = false;
        this.standing = true;
        console.log(this.name + " покорно встал");
    }
}

ShowDog.prototype.lie = false;

ShowDog.prototype.down = function() {
    if (this.lie) {
        console.log(this.name + " уже лежит");
    } else {
        this.lie = true;
        this.standing = false;
        console.log(this.name + " покорно лег");
    }
}

ShowDog.prototype.gait = function(argument) {
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

var kingOfTheDogs = new ShowDog("King", "retriever", 15, "Viktor Holodov");
console.log("Новую собаку зовут " + kingOfTheDogs.name + ". Это благородная тварь, вот что она умеет:")

kingOfTheDogs.stand();
kingOfTheDogs.down();
kingOfTheDogs.stand();
kingOfTheDogs.gait("беги");
kingOfTheDogs.gait("рядом");
kingOfTheDogs.gait("соси");
kingOfTheDogs.stand();

//Созданный таким способом объект будет определяться, как созданный конс-ром ShowDog,
//а так же конс-ром Dog, от которого он унаследовал некоторые св-ва.
console.log(kingOfTheDogs instanceof Dog)
console.log(kingOfTheDogs instanceof ShowDog)

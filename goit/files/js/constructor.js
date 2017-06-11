//Далее будет рассмотрен код-конструктор, который создает подобные объекты.
/*
var dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};
*/

//обычно имя конструктора начинается с заглавной буквы, но это не обязательно.
function Dog(name, breed, weight) {
    //имена свойств и параметров так же не обязательно должны совпадать,
    //это еще одно соглашение для удобства.	
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    //В кон-ры можно добавлять методы, которые будут автоматически добавляться к новым объектам!
    this.bark = function() {
    	if (this.weight > 15) {
    		alert(this.name + " says WOOF!");
    	} else {
    		alert(this.name + " says Yip!");
    	}
    };

    //Ф-я ничего не возвращает.
}

//Для создания объекта используется оператор "new",
//а затем вызывается конструктор с заданными параметрами.
var reks = new Dog("Reks", "Toy", 1.5);

console.log(reks);
//reks.bark();


//ПРИМЕР ИЗ КНИГИ С ПЕРЕБОРОМ ВСЕХ ОБЪЕКТОВ И ДОБАВЛЕНИЕМ ИМ НОВЫХ СВ-В, 
//НА ОСНОВЕ НАЧАЛЬНЫХ ПАРАМЕТРОВ ОБЪЕКТОВ
/*
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}
*/

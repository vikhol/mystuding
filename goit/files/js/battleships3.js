//Объект содержащий методы вывода на экран строк и картинок
var view = {
	displayMessage: function(msg){
//Достаем из DOM div id="messageArea"
      var messageArea = document.getElementById("messageArea");
//В этот div будет выводиться сообщение 
//переданное аргументом методу displayMessage.     
      messageArea.innerHTML = msg;
	},

    diplayHit: function(location){
      var cell = document.getElementById(location);
      cell.setAttribute("class", "hit");
    },
    diplayMiss: function(location){
      var cell = document.getElementById(location);
      cell.setAttribute("class", "miss");
    },
};
//=======================================================

var model = {
//Создаем свойство-массив, 
//который содержит все корабли, как объекты!
	ships: [  //значения св-в тоже являются массивами
       { locations: ["10", "20", "30"], hits: ["", "", ""] },
       { locations: ["32", "33", "34"], hits: ["", "", ""] },
       { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
    ],
    boardSize: 7, //длина строки 
	numShips: 3,  //количество кораблей
	shipsSunk: 0, //число потопленых кораблей
	shipLength: 3, //длиня корабля
	fire: function(guess) {
//Перебираем все корабли
		for (var i = 0; i < this.numShips; i++) {
//Для проверки присваиваем переменной ship объект корабля
//из массива ships
			var ship = this.ships[i];
//Получаем массив клеток, занимаемых кораблем и передаем методу indexOf
//Если значение не найдется в массиве locations, то indexOf 
//вернет -1,
			var index = ship.locations.indexOf(guess); //сокращенный код
//а если найдется, ф-я выполнит "попадание".			
			if (index >= 0) {
//Cтавим отметку в массиве hits
				ship.hits[index] = "hit";
                return true;
			}
	    }
//Если после перебора всех кораблей, попадание не обнаружено, 
//ф-я возвращает false	    
	    return false;
    }
};

model.fire();



view.displayMessage("Тест");
view.diplayHit(11);
view.diplayMiss(22);
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
//===================================================================================

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
	shipLength: 3, //длина корабля
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
//поставит отметку в массиве hits
				ship.hits[index] = "hit";
//затем обратится к методу diplayHit объекта view, который меняет класс нужной ячейки (guess) таблицы-поля.
        view.diplayHit(guess);
//а в блоке для сообщений появится соответствующая надпись.        
        view.displayMessage("ПОПАДАНИЕ!");
        if (this.isSunk(ship)) {
          this.shipsSunk++;
          view.displayMessage("Корабль потоплен");
        }
                return true;
			}
	  }
//Если после перебора всех кораблей, попадание не обнаружено, 
//выводит соответствующее сообщение в блоке для сообщений.      
      view.displayMessage("Промах");
//применяет соответствующий стиль для клетки (guess).      
      view.diplayMiss(guess);
//и ф-я возвращает false	    
	    return false;

  },
//Метод для проверки "потоплен корабль, или нет".  
  isSunk: function(ship) {
//For отрабатывает по кол-ву "палуб корабля"    
    for (var i = 0; i < this.shipLength; i++) {
//и если хоть в одной ячейке массива ship.hits[i] не найдется строки "hit"     
            if (ship.hits[i] !== "hit") {
//ф-я возвращает false              
              return false;
            }
    }   return true;   
  }  
};
//===================================================================================

//Метод обработки выстрелов
var controller = {
guesses: 0, //Количество выстрелов  

//Метод обработки координат выстрела, и передача их модели.
  processGuess: function(guess) { 

//Создаем переменную которой будет присвоено значение возвращенное ф-ей parseGuess 
//это результат сложения переменных row + column (числа в виде строк), или null    
    var location = parseGuess(guess);
//если ф-я parseGuess вернет null, то следующий код не будет выполняться, 
//так как null псевдоложное значение и приравнивается к false. 
    if (location) {
//Счетчик выстрелов увеличивается на 1.      
      this.guesses++;
//Переменной хит присваивается значение, переработанное методом model.fire(guess), 
//которому в качестве параметра guess передан агрумент-переменная location 
//model.fire возвращает либо true, либо false   
      var hit = model.fire(location);
//если hit = true, значит model.fire засчитало попадание и вернуло true
//и если количество потопленных кораблей == количеству кораблей заданных изначально,
//ф-я отрабатывает сообщение в блок view.displayMessage        
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("Ты потопил все корабли за " + this.guesses + " выстрелов");
      }

    }
//Проверка на корректность введенных координат    
    function parseGuess(guess) {
      var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; 
      if (guess === null || guess.length !== 2) {
      alert("Координаты выстрела должны состоять из буквы и цифры. Например: A2");
      } else {
//Получаем первую букву в строке guess (Например "А", в строке "А3")        
        firstChar = guess.charAt(0);
//затем ищем индекс этой буквы в массиве alphabet и присваиваем эту цифру переменной row        
        var row = alphabet.indexOf(firstChar);
//переменной column присваиваем значение второго числа в строке guess.        
        var column = guess.charAt(1);
//Проверка являются ли преобразованные координаты числами.
        if (isNaN(row) || isNaN(column)) {
          alert("Таких координат нет на доске");
//Проверка введенных координат но соответствие с размерами доски (model.boardSize)          
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
          alert("Это находится где-то за пределами игрового поля");
        } else {
//Если все проверки пройдены, строки-числа сшиваются и возвращаются ф-ей.          
          return row + column;
        }
//если же какая-то проверка не прошла, то возвращается null.        
        return null;
      }
    } 
  }   

}

//Эта функция получает доступ к кнопке "Огонь!"  
function init() {
  var fireButton = document.getElementById("fireButton");
//и по клику запускает функцию handleFireButton (ф-я передается обработчику без скобочек)  
  fireButton.onclick = handleFireButton;
//Чтобы нажимать кнопку "Огонь" можно было клавишей "Enter", используется следующий код
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

//Ф-я для обработки события кнопкой "Enter"
//В параметрах задается переменная (e), которая будет использоваться для проверки нажатой кнопки.
function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
//Если нажат Enter, то свойство keyCode события будет равно 13, а ф-я продолжит работу.  
    if (e.keyCode === 13) {
//Для элемента fireButton срабатывает встроенный метод click, который вызывает нажатие кнопки.      
      fireButton.click();

      //далее ф-я возвращает false (типа, чтобы она не делала ничего лишнего)
      return false;
    }

}
}
//Ф-я загрузится после полной загрузки страницы
window.onload = init;



//Блок обработчика
//Получение координат от формы и передача их контроллеру
  function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
//Извлекаем данные, введенные пользователем в форму "guessInput" 
//они хранятся в свойстве value элемента input   
    var guess = guessInput.value;
//и передаем их контроллеру    
    controller.processGuess(guess);

//следующая строка автоматически очистит поле ввода     
    guessInput.value = "";
  }


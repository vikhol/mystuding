//Объект содержащий методы вывода на экран строк и картинок
var view = {
    displayMessage: function(msg) {
        //Достаем из DOM div id="messageArea"
        var messageArea = document.getElementById("messageArea");
        //В этот div будет выводиться сообщение 
        //переданное аргументом методу displayMessage.     
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },
    displayGuesses: function(msg) {
        var guessesArea = document.getElementById("guessesArea");
        guessesArea.innerHTML = msg;
    },
    displayAllHits: function(msg) {
        var hitsArea = document.getElementById("hitsArea");
        hitsArea.innerHTML = msg;
    },
    displayAccuracy: function(msg) {
        var accuracyArea = document.getElementById("accuracyArea");
        accuracyArea.innerHTML = msg;
    }
};
//===================================================================================

var model = {
    //Создаем свойство-массив, 
    //который содержит все корабли, как объекты!
    ships: [ //значения св-в тоже являются массивами
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],
    boardSize: 7, //длина строки 
    numShips: 3, //количество кораблей
    shipsSunk: 0, //число потопленых кораблей
    shipLength: 3, //длина корабля
    allHits: 0,

    //Метод создает массив со случайными позициями корабля  
    generateShip: function() {
        /*Сперва выбирается направление, для этого случайно генерируется число - 0 или 1.
        если число равно 1, то корабль располагается горизонтально, а если 0, то вертикально */
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }
        //Пустой массив позиций нового корабля  
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                /* Последовательно (метод push) добавляем координаты в массив.
                Если корабль лежит горизонтально, то первое значение (row) остается неименным,
                а col плюсуется с индексом прохождения ф-и (col + 0, col + 1, col +2) */
                newShipLocations.push(row + "" + (col + i));
            } else {
                /* Кавычки в выражении нужны, чтобы JS воспринял ответ как сложение строк
                и выполнил конкатенацию вместо банального сложения */
                newShipLocations.push((row + i) + "" + col);

            }
        }
        console.log(newShipLocations);
        return newShipLocations;
    },


    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            //цикл "do" будет выполняться пока будет истинно условие while, следующее ниже      
            do {
                locations = this.generateShip();

            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }


    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++) {
                /* Проверяем, встречается ли какая- нибудь позиция массива locations нового корабля
                в массиве locations существующих кораблей */
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    //Возврат из цикла, выполняемого в другом цикле прерывает оба цикла и функция немедленно завершается          
                    return true;
                }
            }
        }
        return false;
    },
    showGuessAndPercent: function() {
        view.displayAllHits("Попаданий: " + this.allHits);
        view.displayAccuracy("Точность: " + Math.floor(Math.round(this.allHits / controller.guesses * 100) / 100 * 100) + "%");
    },
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
                view.displayHit(guess);
                //а в блоке для сообщений появится соответствующая надпись.        
                view.displayMessage("ПОПАДАНИЕ!");
                this.allHits++;
                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                    view.displayMessage("Корабль потоплен");
                }
                this.showGuessAndPercent();
                return true;
            }
        }
        this.showGuessAndPercent();
        //Если после перебора всех кораблей, попадание не обнаружено, 
        //выводит соответствующее сообщение в блоке для сообщений.      
        view.displayMessage("Промах");
        //применяет соответствующий стиль для клетки (guess).      
        view.displayMiss(guess);
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
        }
        return true;
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
            view.displayGuesses("Попыток: " + this.guesses);
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
                var xex = guess.charAt(0);
                var firstChar = xex.toUpperCase();
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

//Эта функция будет загружаться при загрузке страницы.
//она получает доступ к кнопке "Огонь!" и запускает ф-ю расстановки кораблей. 
function init() {
    var fireButton = document.getElementById("fireButton");
    //и по клику запускает функцию handleFireButton (ф-я передается обработчику без скобочек)  
    fireButton.onclick = handleFireButton;
    //Чтобы нажимать кнопку "Огонь" можно было клавишей "Enter", используется следующий код
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    //Блок обработчика
    //Получение координат от формы и передача их контроллеру
    function handleFireButton() {
        var guessInput = document.getElementById("guessInput");
        //Извлекаем данные, введенные пользователем в форму "guessInput" 
        //они хранятся в свойстве value элемента input 
        //И ПРИСВАИВАЕМ ЭТО ЗНАЧЕНИЕ ПЕРЕМЕННОЙ GUESS, на которой завязанно очень многое   
        var guess = guessInput.value;
        //и передаем их контроллеру    
        controller.processGuess(guess);

        //следующая строка автоматически очистит поле ввода     
        guessInput.value = "";
    }

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
    //Здесь мы запускаем функцию расстановки кораблей, чтобы она тоже произошла при загрузке страницы.  
    model.generateShipLocations();
}
//Ф-я загрузится после полной загрузки страницы
window.onload = init;

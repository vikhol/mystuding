//Пишем функцию для генерации рандомного числа.
function neNull() {
	var randomLocation = 0;
	while (randomLocation == 0) {
    console.log("Выпал ноль, пересдача.");
    var randomLocation = Math.floor(Math.random() * 6);
	}
	//Возвращаем это число в виде значения.
	return randomLocation;
}
//Присваиваем переменной 'randomLoc' значение возвращенное функцией neNull
var randomLoc = neNull();
//Это число становится первой координатой расположения корабляэ
var shipLocation1 = randomLoc;
//Далее к этой точке прибавляются еще две "палубы".
var shipLocation2 = shipLocation1 + 1;
var shipLocation3 = shipLocation2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
//Запускаем цикл проверок
while (!isSunk) {
	console.log("Ввод координат.");
	guess = prompt("Введите координаты выстрела! (от 1 до 7)");
	if (guess < 1 || guess > 7) {
		alert("Некорректное значение. Введите число от 1 до 7");

	} else {
		guesses = guesses + 1;
		if (guess == shipLocation1 || guess == shipLocation2 || guess == shipLocation3) {
			hits = hits + 1;
			alert("Попадание! Всего попаданий: " + hits);
			console.log("Попадание " + hits);
		} else { 
			alert("Промах");
			console.log("Промах.");
	    }
		if (hits == 3) {
			isSunk = true;
			alert("Победа!");
		}
	}

}
console.log("Подсчет резульатов.");
var stats = "Количество попыток: " + guesses + ". Попаданий: " + hits + ". Точность: " + (3/guesses*100) + "%";
alert(stats);
if (3/guesses*100 == 100) {
	alert("У него не было шансов!")
} else if (3/guesses*100 >= 51 && 3/guesses*100 <= 99) {
	alert("Неплохо, боец! Но это не предел совершенства, целься лучше!");
} else if (3/guesses*100 < 51) {
	alert("Обезьяна с закрытыми глазами сделала бы это лучше.");
}
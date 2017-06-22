console.log("Пример добавления методов к встроенным объектам")
//String - встроенный объект, но его тоже можно расширить, дабавляя свои методы
//с помощью прототипов.
String.prototype.mySearch = function() {
	var cliche = ["чтобы определить", "данный объект", "возвращает true"]

	for (var i = 0; i < cliche.length; i++) {
//this указывает на строку которая проверяется при переборе.		
		var index = this.indexOf(cliche[i])
		if (index >= 0) {
			return true;
		}
	}
	return false;
}

//массив строк для проверки.
var stroki = ["Чтобы определить откуда взято конкретное св-во - из прототипа",
              "содержит ли данный объект заданное св-во",
              "Если находит, то возвращает true"];

for (var i = 0; i < stroki.length; i++) {
	var phrase = stroki[i];
	if (phrase.mySearch()) {
		console.log("Совпадение найдено в фразе: " + phrase);
	}
}
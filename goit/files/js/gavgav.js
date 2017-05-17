function bark (name, weight) {
	if (weight > 20 && weight < 60) {
		console.log(name + " весит " + weight  + " кг." + " и говорит ГАВ, ЁБАНАРОТ, ГАВ!");
	} else if (weight <= 20 && weight >= 0) {
		console.log(name + " весит " + weight + " кг." + " и говорит аф-гаф");
	} else if (weight >= 60) {
		console.log(name + " весит " + weight  + " кг." + " - это уже мутант какой-то. Убей этого монстра пока он не напал на город!");
	} else {
		console.log("Ошибка. Попробуйте ввести другое значение.");
	}
} 
bark ("Шарик", 50);
bark ("Люся", 3);
bark ("Мопс дядя пес", 61, 19);
bark ("Невесомость", -1);
bark ("Зародыш", 0);

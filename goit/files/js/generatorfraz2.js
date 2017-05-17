function makePhrases() {
	var word1 = ["жена", "собака", "учитель", "столяр", "мент", "генерал", "пизда", "горилла"];
	var word2 = ["готовит", "лижет", "заполняет", "пилит", "крадет", "ебет", "манит", "ест"];
	var word3 = ["борщ", "яйца", "журнал", "бревно", "вещдоки", "всех", "мужика", "банан"];

	var phrase = word1[Math.floor(Math.random() * word1.length)] + " " + word2[Math.floor(Math.random() * word2.length)] + " " + word3[Math.floor(Math.random() * word3.length)];

    alert(phrase);
}
makePhrases();
function makePhrases() {
	var word1 = ["жена", "собака", "учитель", "столяр", "мент", "генерал", "пизда", "горилла"];
	var word2 = ["готовит", "лижет", "заполняет", "пилит", "крадет", "ебет", "манит", "ест"];
	var word3 = ["борщ", "яйца", "журнал", "бревно", "вещдоки", "всех", "мужика", "банан"];

	var rand1 = Math.floor(Math.random() * word1.length);
	var rand2 = Math.floor(Math.random() * word2.length);
	var rand3 = Math.floor(Math.random() * word3.length);

    var phrase = word1[rand1] + " " + word2[rand2] + " " + word3[rand3];

    alert(phrase);
}
makePhrases();
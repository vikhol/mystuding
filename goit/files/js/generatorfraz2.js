function makePhrases() {
	var otvetGeneratora = document.getElementById("otvetGeneratora");
	var word1 = ["Жена", "Собака", "Учитель", "Столяр", "Мент", "Генерал", "Баба", "Горилла"];
	var word2 = ["готовит", "лижет", "заполняет", "пилит", "крадет", "нюхает", "манит", "ест"];
	var word3 = ["борщ", "яйца", "журнал", "бревно", "вещдоки", "всех", "мужика", "банан"];

	var phrase = word1[Math.floor(Math.random() * word1.length)] + " " + word2[Math.floor(Math.random() * word2.length)] + " " + word3[Math.floor(Math.random() * word3.length)] + ".";

   otvetGeneratora.innerHTML = phrase; 
}

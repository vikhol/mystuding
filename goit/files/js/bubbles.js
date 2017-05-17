//создаем массивы данных
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//создаем параллельный массив.
var costs = [.25, .27, .25, .25, .25, .25, 
             .33, .31, .25, .29, .27, .22, 
             .31, .25, .25, .33, .21, .25, 
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25, 
             .25, .25, .27, .25, .26, .29];

var bestSolutions = [];             

//функция, выводящая в консоль значения каждой позиции в массиве scores.
function resultsBubbles() {
	var i = 0;
//цикл while отработает столько раз, сколько эл-тов в массиве. 	
	while (i < scores.length) {
//при каждом прохождении цикла, в консоль выводится текущее значение. Так формируется список.		
	console.log("Bubble solution #" + i + " score: " + scores[i]);
	i++;
}
console.log("Bubbles tests: " + scores.length);
}

//ф-я для определения самого большого значения из массива и вывода индексов, которым соотвестствует это знач-е.
function highestScore() {
	var hScore = 0;
	var index;
    var cost = 100;
//первое знакомство с циклом for
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] > hScore) {
			hScore = scores[i];
		}
	}
	console.log("Highest bubble score: " + hScore);
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == hScore) {
			bestSolutions.push(i);
		}
	}
	console.log("Solutions with highest score: " + bestSolutions);
 for (var i = 0; i < scores.length; i++) {
	if (scores[i] == hScore) {
		if (cost > costs[i]) {
			index = i;
			cost = costs[i];
		}
	}
 }
 console.log("Bubble Solution #" + index + " is the most cost effective");
}

resultsBubbles();
highestScore();

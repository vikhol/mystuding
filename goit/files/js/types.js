//типы (в консоли)
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
var test10 = null;
//Для проверки типа операнда используется оператор typeof.
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
//=======================================

//При сравнении числа со строкой содержащей число,
//строка преобразуется и интерпретируется, как число.
if (99 == "99") {
	console.log("99(число) = 99(строка)");
} else {
	console.log("не равно");
}

//В случае сравнения булевского значения с числом, 
//true преобразуется в число 1, а false в 0
if (1 == true) {
	console.log("true = 1");
} else {
	console.log("не равно");
}

//Так же "1" == true. 
//Сперва true преобразуется в число (1). 
//А затем строка "1" сравнивается с числом 1.
"1" == true; 

//Одна строка может быть меньше или больше другой. Например:
if ("mango" < "melone") {
	console.log("mango < melone");
}


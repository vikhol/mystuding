

function init() {
//document.getElementById("paragraf_1") позволяет обратиться к эл-ту с id="paragraf_1"
//присваиваем полученное значение переменной firstPar
var firstPar = document.getElementById("paragraf_1");

//Свойство innerHTML эл-та firstPar может использоваться для изменения содержимого эл-та.
firstPar.innerHTML = "Параграф изменен";

var paragraf_3 = document.getElementById("paragraf_3");
paragraf_3.innerHTML = "Изначально этот параграф был пуст";

}

//Функция init задается свойству window.onload. 
//Важно: после имени функции круглые скобки не ставятся! 
//Мы не вызываем функцию, а просто связываем ее со свойством 
//window.onload.
window.onload = init;
//=========================================================

//Как задать атрибут эл-та 
function setNewAttribute() {
//"Достаем" из DOMa нужный эл-т	
	var paragraf_2 = document.getElementById("paragraf_2");

//Вызываем метод setAttribute для этого объекта
//в качестве аргументов передаем имя атрибута, кот-й нужно изменить ("class")
//и задаем его значение ("greentext")
	paragraf_2.setAttribute("class", "greentext");
	paragraf_2.innerHTML = "Зеленый параграф";
}
//Вызываем нашу ф-ю.
setNewAttribute();
//=======================================================

//Значения атрибутов можно читать.
//1. Достаем нужный эл-т
var paragraf_3 = document.getElementById("paragraf_3");
//2. создаем переменную и присваиваем ей значение нужного атрибута.
//для этого вызываем метод getAttribute для этого эл-та.
//и в скобках указываем атрибут, который хотим прочитатьэ
var classPar = paragraf_3.getAttribute("class");


//Вывод этого значения в четвертый (изначально пустой) параграф
var paragraf_4 = document.getElementById("paragraf_4");
paragraf_4.innerHTML = "Class присвоенный третьему параграфу: " + classPar + ".";
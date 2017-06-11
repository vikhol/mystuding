window.onload = function () {
var todayDate = document.getElementById("todayDate");

//присваиваем объекту now объект даты, чтобы работать с его методами
var now = new Date();
console.log(now);

//.toString() позволяет получить дату в виде строки  “Thu Feb 06 2014 17:29:29 GMT-0800 (PST)”.
var dateString = now.toString();
console.log(dateString);

//.getFullYear() возвращает текущий год.
var theYear = now.getFullYear();
console.log(theYear);

//.getDay() возвращает номер дня недели (1 - понедельник)
var theDayOfWeek = now.getDay();
console.log("Номер дня недели: " + theDayOfWeek);

setInterval(function() {var now = new Date();
	todayDate.innerHTML = "Сегодня: " + now;}
	, 1000)

}
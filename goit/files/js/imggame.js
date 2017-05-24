
window.onload = init;

function init() {
	var image = document.getElementById("zero");
	image.onclick = showAnswer;
};

//Усовершенстованная ф-я меняет картинку по клику "туда -> обратно"
function showAnswer() {
	var image = document.getElementById("zero");
//Задает путь (src) в зависимости от уже установленного	src.
//ВАЖНО: путь должен быть в виде адреса сайта "http://goit/files/img/zeroblur.jpg" 
//даже если он ссылается на внутренние файлы
	    if (image.src == "http://goit/files/img/zeroblur.jpg") {
	    	console.log("image src: " + image.src);
	    	image.src = "../img/zero.jpg";
	    	image.setAttribute("class", "imggame2");
	    } else {
	    	console.log("image src: " + image.src);
	    	image.src = "../img/zeroblur.jpg";
	    	image.setAttribute("class", "imggame1");
	    }
}
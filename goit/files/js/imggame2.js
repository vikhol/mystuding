/*window.onload = init;

function init() { 
//getElementsByTagName находит все теги изображений на странице 
//и возвращает объект типа NodeList с которым можно работать как с массивом
    var images = document.getElementsByTagName("img");
    console.log(images);
//далее цикл перебирает все эл-ты   
    for (var i = 0; i < images.length; i++) {
//и каждому из них назначает обработчик клика "showAnswer"      
        images[i].onclick = showAnswer;
    }
};
//Задаем параметр для объекта события, чтобы использовать его далее в коде.
function showAnswer(eventObject) {
// .target сообщает, какой элемент сгенерировал данное событие.     
    var image = eventObject.target;
    console.log(image);
//переменной name присваиваем название id эл-та.
    var name = image.id;
//Усовершенстованная ф-я меняет картинку по клику "туда -> обратно"
//ВАЖНО: путь должен быть в виде адреса сайта "http://goit/files/img/zeroblur.jpg" 
//даже если он ссылается на внутренние файлы
    if (image.src == "http://goit/files/img/" + name + "blur.jpg") {
        image.src = "../img/" + name + ".jpg";
    } else if (image.src == "http://goit/files/img/" + name + ".jpg") {
        image.src = "../img/" + name + "blur.jpg";
    };

}*/

window.onload = function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
};

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = "../img/" + name;
//setTimeout может не только запускать ф-ии, но и передавать им аргументы (image)  
    setTimeout(reblur, 1000, image);
}
function reblur(image) {
    var name = image.id;
    name += "blur.jpg";
    image.src = "../img/" + name;
}
window.onload = init;

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
	console.log(name);
//а затем добавляем к ней "расширение" .jpg	
	name = name + ".jpg";
//прописываем путь "src" к файлу, склеивая строки с путем до директории и полученным именем файла
	image.src = "../img/" + name;

}
var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }
               ];

//Ф-я которая научит метод sort, как именно нужно отсортировать газировку

function compareSold(colaA, colaB) {
    if (colaB.sold > colaA.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

//Ф-я которая приводит в порядок внешний вид вывода
function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name + ", calories: " + products[i].calories + ", color: " +
			products[i].color + ", sold: " + products[i].sold);
	}
}

//Чтобы использовать ф-ю "compareSold" для массива products вызываем метод sort для этого массива
//и передаем ему нашу ф-ю, которая "научит" sort, как именно нужно отсортировать газировку
products.sort(compareSold);
printProducts(products);
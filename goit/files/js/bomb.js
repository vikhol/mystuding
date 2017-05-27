window.onload = init;

function init() {
	var timer = setInterval(model.startCounter, 1000);
};

var controller = {

    checkWire: function() {
		console.log("Проверка провода");
	}

};

var model = {
//Провода
	wires: ["red", "yellow", "blue"],
//Количество проводов	
	numWires: 3,
//Состояние
    defused: false,
//Счетчик    
    counter: 30,
 
    tick: true,
//Запуск счетчика       
    startCounter: function() {
    	this.counter--;
    	console.log(this.counter);
    	
//Инструкция для передачи представлению инфы 
//о состоянии засечки между числами на таймере.
    	if (this.tick) {
            this.tick = false;
        } else {
            this.tick = true;
        }
        view.displayClock(this.counter, this.tick);
    },
};

var view = {
//отображение таймера	
	displayClock: function(sec, ticktak) {
		var table3 = document.getElementById("table3");
		var zasechka = document.getElementById("table2");
		if (ticktak) {
			zasechka.setAttribute("class", "zasechka");
		} else {
			zasechka.setAttribute("class", "nozasechka");
		}
        table3.innerHTML = sec;
    }
};

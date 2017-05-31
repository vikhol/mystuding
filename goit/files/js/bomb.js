window.onload = startCounter;

function startCounter() {
    if (model.counter > 0) {
        model.counter--;
        console.log(model.counter);

        //Инструкция для передачи представлению инфы 
        //о состоянии засечки между числами на таймере.
        if (model.tick) {
            model.tick = false;
        } else {
            model.tick = true;
        }
        view.displayClock(model.counter, model.tick);
        setTimeout(startCounter, 1000);
    }
};

var controller = {

    //Проверка провода. Срабатывает по клику на проводе.
    checkWire: function() {
        console.log("Проверка провода");
    }

};

var model = {
    //Провода
    wires: ["red", "yellow", "blue"],
    //Количество проводов.  
    numWires: 3,
    //Состояние обезвреживания.
    defused: false,
    //Состояние засечки на таймере.
    tick: true,
    //Счетчик    
    counter: 30,
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


/*
//А вот эта "почти копипаста" работает.   
    var counter = 30;
    timer = function() {
        setInterval(startCounter, 1000); 
    },
    startCounter = function() {
        counter--;
        console.log(counter);
    }
    timer();
*/

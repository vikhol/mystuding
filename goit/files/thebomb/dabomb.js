window.onload = startCounter;
var counter = 30;
var tick = true;
var wires = ["", "", ""];

function startGame() {
    
}


function startCounter() {
    var time = counter;
    if (counter > 0) {
        counter--;
        if (counter < 10) {
            time = "0" + counter;
        }
        if (tick) {
            tick = false;
        } else {
            tick = true;
        }
        displayClock(time, tick);
        setTimeout(startCounter, 1000);
    } else {
    	boom();
    }
}

function displayClock(time, tick) {
    var table3 = document.getElementById("table3");
    var zasechka = document.getElementById("table2");

    if (tick) {
        zasechka.setAttribute("class", "zasechka");
    } else {
        zasechka.setAttribute("class", "nozasechka");
    }
    table3.innerHTML = time;
}

//Проверка провода. Срабатывает по клику на проводе.
function checkWire() {
    console.log("Проверка провода");
}

function boom() {
	console.log("BOOM");
}
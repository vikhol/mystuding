window.onload = function() {
    
    var id = setInterval(myFunctionName, 1000);
    var counter = 0;
    var counterheadling = document.getElementById("counterheadling");
    var skolkovremyaH1 = document.getElementById("skolkovremyaH1");
    var ticktock = document.getElementById("ticktock");
    var tick = true;

    function myFunctionName() {
        counter++;
        counterheadling.innerHTML = counter;
        if (tick) {
            ticktock.innerHTML = "ТИК";
            ticktock.setAttribute("class", "red");
            tick = false;
        } else {
            ticktock.innerHTML = "ТАК";
            ticktock.setAttribute("class", "blue");
            tick = true;
        }
        if (counter == 60) {
            skolkovremyaH1.innerHTML = "Минута истекла";
            ticktock.innerHTML = "";
            clearInterval(id);
        }
    }
}

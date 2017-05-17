var mers600 = {
    madeby: "Mersedes",
    model: "S600",
//начальное значение состояния двигателя (вкл/выкл)    
    started: false,
//количество бенза в баке    
    fuel: 0,
//ф-я для добавления бенза. Кол-во передается аргументом.    
    addFuel: function(amount) {
    	this.fuel = this.fuel + amount;
    	console.log("Вы залили " + amount + " л. бензина");
    },
//ф-я запуска движка сперва проверяет - есть ли бенз в баке.    
    start: function() {
    	if (this.fuel > 0) {
//если бенз есть - движок запускается    		
    	this.started = true;
    	console.log("Wroom Wroooom")

        } else {
        	this.stop();
        	console.log("Плесни бензинчика, братишка.")
        }
    },
    stop: function() {
    	this.started = false;
    },
//ф-я "вождения"    
    drive: function() {
//сперва проверяет запуск двигателя    	
    	if (this.started) {
//затем кол-во бенза    		
            if (this.fuel > 0) {
//и если все в порядке, бенз уменьшается на одну единицу
            	this.fuel = this.fuel - 1;
//а мы типа "едем"            	
            	console.log("Щемись, чернь, братва едет.")
            } else {
    		this.stop();
    		console.log("Бенз вылетел в трубу, толкай до автозаправки.")
    	}
    	} 
    }
};

mers600.drive();
mers600.start();
mers600.addFuel(3);
mers600.start();
mers600.drive();
mers600.drive();
mers600.drive();
mers600.drive();
mers600.drive();

for (var prop in mers600) {
    console.log(prop + ": " + mers600[prop]);
}

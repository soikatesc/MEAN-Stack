
function VehicleConstructor(name, number_of_wheels, number_of_passengers,speed){
	if (!(this instanceof VehicleConstructor)){
    	return new VehicleConstructor(name,number_of_wheels,number_of_passengers, speed);
  	}
	var chars = "01234567890ABCDEFGHIJKL"

  	//private
  	this.distance_travelled = 0;
	this.updateDistanceTravelled = function(){
		this.distance_travelled += this.speed
		console.log(this.distance_travelled)
	}

	this.name = name;
	this.number_of_wheels = number_of_wheels;
	this.number_of_passengers = number_of_passengers;
	this.speed = speed || 0;
	this.vin = createVin();

	function createVin(){
		var vin = '';
		for(var i=0;i<17;i++){
			vin += chars[Math.floor(Math.random()*23)]
		}
		return vin;
	}
}

VehicleConstructor.prototype.move = function(){
	this.makeNoise();
	this.updateDistanceTravelled();
	return this;
}

VehicleConstructor.prototype.checkMiles = function(){
	console.log(distance_travelled)
}

VehicleConstructor.prototype.makeNoise = function(){
	console.log('honk honk')
	return this
}

// VehicleConstructor.prototype.vinNum = function(){
// 	vinnum = Math.random().toString(36)
// 	console.log(vinnum)
// }



var car = VehicleConstructor('car', 4, 4,80)
console.log(car)
var bike = VehicleConstructor('bike', 2, 2,60)












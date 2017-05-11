function  NinjaConstructor(name, prevOccupation){

	if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   		return new NinjaConstructor(name, prevOccupation);
 	}
	this.name = name;
	this.prevOccupation = prevOccupation;

	this.introduce = function(){
		console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!")
	}
}

var daylan = new NinjaConstructor('Dylan', 'Construction Worker')
console.log(daylan)
var nikki = NinjaConstructor('Nikki','Historian');
console.log(nikki)

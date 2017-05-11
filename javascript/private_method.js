function Ninja(name, age, prevOccupation){
	//Private
	var privateVar = "This is private variable";
	var privateMethod = function(){
		console.log("this is a private method");
	}
	//Public
	this.name = name;
	this.age = age;
	this.prevOccupation = prevOccupation;
	this.introduce = function(){
		console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
		privateMethod();
		console.log(privateVar);
	}
}

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
console.log(Pariece)
Pariece.privateMethod();
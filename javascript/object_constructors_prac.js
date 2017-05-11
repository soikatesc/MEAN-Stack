function NinjaConstructor(name, age, prevOccupation){
	var ninja = {} //this object will eventually be returned 

	//additional properties to ninja;

	ninja.name = name;
	ninja.age = age;
	ninja.prevOccupation = prevOccupation;

	//additional methods of ninja;

	ninja.introduce = function(){
		console.log("Hi my name is"+ ninja.name + "I used to be a"+ ninja.prevOccupation + "and now I'm a Ninja");
	}

	return ninja;
}

//creatng ninja;
var soikat = NinjaConstructor("Md",27,"Student")
console.log(soikat)
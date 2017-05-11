
//prototype can be difficult to understan at first 

var MyObjeConstructor = function(name){
	var myPrivateVar = "Hello"  //private variable
	this.name = name;
	this.method = function(){
		console.log("I am a method")
	}
}

var obj1 = new MyObjeConstructor('object1')
var obj2 = new MyObjeConstructor('object2')
console.log(obj1)

obj1.newProperty = "newProperty";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1)
console.log(obj1.anotherProperty); 
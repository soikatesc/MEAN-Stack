
//this function creates game objects, bu returning a game object when invoked
function GameContructor(consumerPrice,dealerCost,name, inStock){
	//cosumerPrice and dealercost is private
	var consumerPrice = consumerPrice;
	var dealerCost = dealerCost;
	var ourGame = {};

	ourGame._name = name;
	ourGame.type = 'board game';
	ourGame.player = [];

	ourGame.addPlayer = function(player_name){
		ourGame.player.push(player_name);
	}

	ourGame.showPrivateVariable = function(){
		console.log(dealercost);
		console.log(cosumerPrice);
	}

	function myPrivateFunction(){
		console.log("hello, I am going to create a new object when I am returned")
	}

	myPrivateFunction();
	return ourGame;


}
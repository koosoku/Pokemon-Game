var charmander = {
	name: "Charmander",
	health: 100,
	lvl: 12,
	effect: null,
	moves:[{
		name:"Ember",
		type:"Attack",
		power:90,
		accuracy:0.80
	},
	{
		name:"Scratch",
		type:"Attack",
		power:10,
		accuracy:0.90
	},
	{
		name:"Leer",
		type:"Defense",
		power:0.20,
		accuracy:1.0
	},
	{
		name:"Growl",
		type:"Defense",
		power:0.65,
		accuracy:0.80
	},
	]
};

var pikachu = {
	name: "Pikachu",
	health: 100,
	lvl: 12,
	effect: null,
	moves:[{
		name:"Thunder Shock",
		type:"Attack",
		power:30,
		accuracy:0.80
	},
	{
		name:"Thunder Wave",
		type:"Attack",
		power:10,
		accuracy:0.90
	},
	{
		name:"Tail Whip",
		type:"Defense",
		power:0.20,
		accuracy:1.0
	},
	{
		name:"Growl",
		type:"Defense",
		power:0.65,
		accuracy:0.80
	},
	]

};

var currentState;
var cpuPokemon;
var userPokemon;

var cpuTurn = {
	play: function(){

	}
};

var playerTurn = {
	play: function(){

	}
};

var loop = function() {
	if (cpuPokemon.health <= 0 || userPokemon.health <= 0){
		$("#game-over").removeClass("hide");
		console.log("game over");
	}else{
		currentState.play();
	}
}


var init = function () {
	cpuPokemon = pikachu;
	userPokemon = charmander;
	$("#cpu-name").text(cpuPokemon.name);
	$("#cpu-lvl").text("lvl "+cpuPokemon.lvl);

	$("#user-name").text(userPokemon.name);
	$("#user-lvl").text("lvl "+userPokemon.lvl);
	currentState = playerTurn;
	loop();
};

init();
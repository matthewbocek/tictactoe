//bug = never gets rid of old click handlers

function Turn(arg1,player) {
	if (typeof arg1 == "number") {//constructor for 1st turn
		console.log("Turn constructor 1");
		this.number = arg1;
		this.player = player;
	} else { //constructor for subsequent turns
		console.log("Turn constructor 2");
		var previousTurn = arg1;
		this.number = previousTurn.number + 1;
		this.player = players[previousTurn.number%2];

		console.log("starting Turn " + this.number + ", current player = " + this.player.name + ", current color = " + this.player.symbol);
		
		for(var i=0;i<tiles.length;i++)
		{
			//console.log(i+" "+ tiles[i].x+" "+tiles[i].y+": "+tiles[i].taken);			
		}		
	}
	this.updateTurnBanner('turn_banner');
	this.setHandler();
}

Turn.prototype.setHandler = function() {
	//console.log('set handler');
	$("div").off("click");
	$("div").on("click",this.identifyTile);
}

Turn.prototype.identifyTile = function() {		
	var selectedTile = $(this).attr('class');
	var selectedDiv = $(this);
	var symbol = turns[turns.length-1].player.getSymbol(); //lost track of the current turn, use turns[turns.length-1] to get it back
	
	selectedTile = selectedTile.split(" ");
	for(var i=0;i<tiles.length;i++) { //search the tiles array to find the correct tile
		if ( (selectedTile[1] == tiles[i].y) && (selectedTile[2] == tiles[i].x) ) {
			var matchedTile = tiles[i];
			break;
		}
	}
	//console.log("matchedTile =" + matchedTile.x + " " + matchedTile.y);
	
	matchedTile.claim(symbol,selectedDiv);
}

Turn.prototype.updateTurnBanner = function(htmlId) {
	$( '#' + htmlId ).html( this.player.getTurnBanner(this.number) );
}

Turn.prototype.advanceTurn = function() {
	console.log("advancing from turn " +  this.number)
	for(var i=0;i<lines.length;i++) {
		console.log("checking line " + i);
		if (lines[i].checkForWin(this.player.symbol)) {
			this.player.hasWon();
			return;
		}
	}
	turns.push( new Turn(this) );
}
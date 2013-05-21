function Tile(x,y) {
	this.x = x;
	this.y = y;
	this.taken = false;
	this.symbol = "";
}

Tile.prototype.isTaken = function() {
	return this.taken;
}

Tile.prototype.matchSymbol = function(query) {
	if (query = this.symbol)
		return true;
	else
		return false;
}

Tile.prototype.claim = function(symbol) {
	if (this.taken) {
		//alert("You can't pick this tile, it belongs to " + this.symbol);
		console.log("You can't pick this tile, it belongs to " + this.symbol + ", " + this.taken);
		return false;
	} else {
		this.setSymbol(symbol);
		return true;
	}
}

Tile.prototype.setSymbol = function(symbol) {
	this.symbol = symbol;
	this.taken = true;
}

Tile.prototype.drawSymbol = function(location,symbol) {
	location.css("background-color",symbol)
}
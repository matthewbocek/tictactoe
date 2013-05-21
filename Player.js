function Player(name,symbol) {
	this.name = name;
	this.symbol = symbol;
}

Player.prototype.getSymbol = function() {
	return this.symbol;
}

Player.prototype.getTurnBanner = function(turnNumber) {
	return 'Turn ' + turnNumber + ': <span style="color:' + this.symbol + ';">' + this.name + "</span>";
}
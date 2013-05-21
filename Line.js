function Line(name,allTiles,filterBy,diagonal){
	this.name = name;
	this.contents = new Array();
	if (!diagonal) {
		for(i=0;i<allTiles.length;i++) {	
			if ( filterBy = allTiles[i].x || allTiles[i].y )
				this.contents.push(allTiles[i]);
		}
	} else {
		if (filterBy == 'slash'){
			for(i=0;i<allTiles.length;i++) {
				if (
				(
					(allTiles[i].x == 'left') && (allTiles[i].y == 'bottom') 
				) || (
					(allTiles[i].x == 'center') && (allTiles[i].y == 'middle') 
				) || (
					(allTiles[i].x == 'right') && (allTiles[i].y == 'top')
				)
				) {
					this.contents.push(allTiles[i]);
				}
			}
		}
		if (filterBy == 'backslash') {
			for(i=0;i<allTiles.length;i++) {
				if (
				(
					(allTiles[i].x == 'left') && (allTiles[i].y == 'top')
				) || (
					(allTiles[i].x == 'center') && (allTiles[i].y == 'middle')
				) || (
					(allTiles[i].x == 'right') && (allTiles[i].y == 'bottom')
				)
				) {
					this.contents.push(allTiles[i]);
				}
			}
		}
	}
}
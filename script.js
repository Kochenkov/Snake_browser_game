var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var wid = canv1.width;
var hei = canv1.height;
var blockSize = 20;

var row = 2;
var col = 4;

//wasd:
var click;
//установка интервала для перемещения:
var myTimer = setInterval(move, 500);

//объект блока змейки:
var Block = function(col,row) {
	this.col = col;
	this.row = row;
	this.drawSquare = function(color) {
		var x = this.col * blockSize;
		var y = this.row * blockSize;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, blockSize, blockSize);
	}
}

var segments = [
		new Block(col,row),
		new Block(col-1,row),
		new Block(col-2,row)
	];
console.log(segments);
console.log(segments.length);	
var draw = function() {
	for(var i=0; i<segments.length; i++) {
		segments[i].drawSquare('red')
		console.log([i]);
		}
	}



//wasd:
document.onkeydown = function(e) {
	if (e.keyCode==68) {
		click = 'w';
		}
	if (e.keyCode==65) {
		click ='s';
		}
	if (e.keyCode==87) {
		click = 'a';
		}
	if (e.keyCode==83) {
		click='d';
		}
}

function move() {
	if (click == 'w') {
		col = col+1;
		draw();
		console.log('w');
	}
	else if (click =='s'){
		col = col-1;
		draw();
		console.log('s');
	}
	else if (click=='a') {
		row = row-1;
		draw();
		console.log('a');
	}
	else if (click=='d'){
		row = row+1;
		draw();
		console.log('d');
	}
}

var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var wid = canv1.width;
var hei = canv1.height;
var blockSize = 20;
var row = 2;
var col = 4;
// возможно и не надо
//var x = blockSize*col;
//var y = blockSize*row;
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

var Block1 = new Block(col,row);

//отрисовка канвы:
function draw() {
	Block1.col = col;
	Block1.row = row;
	Block1.drawSquare("red");
	//console.log("row: " + row + "; " + "col: " + col);
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
	}
	else if (click =='s'){
		col = col-1;
		draw();
	}
	else if (click=='a') {
		row = row-1;
		draw();
	}
	else if (click=='d'){
		row = row+1;
		draw();
	}
}

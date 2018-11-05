var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var wid = canv1.width;
var hei = canv1.height;
var blockSize = 20;
var row = 2;
var col = 4;
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
//наполняем змейку сегментами:
var segments = [
		new Block(col,row),
		new Block(col-1,row),
		new Block(col-2,row),
		new Block(col-3,row),
		new Block(col-4,row)
	];

//функция отрисовки змейки: 	
var draw = function() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, wid, hei);
	for(var i=0; i<segments.length; i++) {
		segments[i].drawSquare('red');
		}
	}
//функция изменения позиции змейки:
var changeSnake = function() {
	segments.push(new Block(col,row));
	segments.shift();
	draw();
}

//обработка событий с кнопок wasd:
document.onkeydown = function(e) {
	if (e.keyCode==68) {
		click = 'w';
		}
	if (e.keyCode==65) {
		click = 's';
		}
	if (e.keyCode==87) {
		click = 'a';
		}
	if (e.keyCode==83) {
		click = 'd';
		}
}
//события изменения координат блоков по нажатию на кнопки:
function move() {
	if (click == 'w') {
		col = col+1;
		changeSnake();
	}
	else if (click =='s'){
		col = col-1;
		changeSnake();
	}
	else if (click=='a') {
		row = row-1;
		changeSnake();
	}
	else if (click=='d'){
		row = row+1;
		changeSnake();
	}
}
//рисуем змейку в начале программы:
draw();

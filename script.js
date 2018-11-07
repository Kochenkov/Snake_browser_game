var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var wid = canv1.width;
var hei = canv1.height;
var blockSize = 20;
var rowMax = hei/blockSize; 
var colMax = wid/blockSize;
var row = 4;
var col = 6;
var rowRandom;
var colRandom;
var click;

//функция генерации случайной строки и столбца для кубика-еды:
var random = function(){
	rowRandom = Math.round(Math.random()*rowMax);
	colRandom = Math.round(Math.random()*colMax);
}


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
		new Block(col-4,row),
		new Block(col-3,row),
		new Block(col-2,row),
		new Block(col-1,row),
		new Block(col,row)
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
	if ((e.keyCode==68)&&(click!='s')) {
		click = 'w';
	}
	if ((e.keyCode==65)&&(click!='w')) {
		click = 's';
	}
	if ((e.keyCode==87)&&(click!='d')) {
		click = 'a';
	}
	if ((e.keyCode==83)&&(click!='a')) {
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
//начало программы:
draw();
// нужно будет разобраться и переделать!!!
random();
var eat = new Block(colRandom,rowRandom);
eat.drawSquare("blue");


var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var bg = new Image();
var s = new Image();
bg.src = "images/background.png";
s.src = "images/s.png";
var x = 20;
var y = 20;
var click;

//установка интервала для перемещения
var myTimer = setInterval(move, 500);

//отрисовка канвы
function draw() {
	ctx.drawImage(bg,0,0);
	ctx.drawImage(s,x,y);
	requestAnimationFrame(draw);
	
	ctx.fillStyle = "red"
	ctx.fillRect(60,60,20,20);
}

// wasd
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
		x = x+20;
	}
	if (click =='s'){
		x = x-20;
	}
	if (click=='a') {
		y = y-20;
	}
	if (click=='d'){
		y = y+20;
	}
}
//вызов функции после загрузки картинки
s.onload = draw;

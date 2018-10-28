var cvs = document.getElementById("canv1");
var ctx = cvs.getContext("2d");
var bg = new Image();
var s = new Image();
bg.src = "images/background.png";
s.src = "images/s.png";
x = 20;
y = 20;

//отрисовка канвы
function draw() {
	ctx.drawImage(bg,0,0);
	ctx.drawImage(s,x,y);
	requestAnimationFrame(draw);
}

// перемещение элемента wasd
document.onkeydown = function(e) {
	if (e.keyCode==68) {
		x = x+5;
		}
	if (e.keyCode==65) {
		x = x-5;
		}
	if (e.keyCode==87) {
		y = y-5;
		}
	if (e.keyCode==83) {
		y = y+5;
		}
}
//вызов функции после загрузки картинки
s.onload = draw;
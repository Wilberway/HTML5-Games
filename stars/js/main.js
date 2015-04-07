var can;
var ctx;

var w;
var h;

var skyPic = new Image();
var starPic = new Image();

var num = 50;
var stars = [];

var lastTime;
var deltaTime;

function init()
{
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	skyPic.src = "src/sky.jpg";
	starPic.src = "src/star.png";

	for(var i = 0; i < num; i++)
	{
		var obj = new starObj();
		stars.push(obj); 
		stars[i].init();
	}

	lastTime = Date.now();
	gameloop();
}

document.body.onload = init;

function gameloop()
{
	window.requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	drawSky();
	drawStars();
}

function drawBackground()
{
	ctx.fillStyle = "#09153a";
	ctx.fillRect(0,0,w,h);
}

function drawSky()
{
	ctx.drawImage(skyPic,0,0,800,600);
}

/*requestAnimationFrame Polyfill*/
window.requestAnimFrame = (function(){
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||msRequestAnimationFrame ||
	function(callback,element){
		return window.setTimeout(callback,1000/60);
	};
})();
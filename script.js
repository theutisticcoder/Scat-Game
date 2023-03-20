var p = 0;
function time(){
	setTimeout(()=>{		
		p++;
		console.log(p);
		if(p % 30 === 0 && p % 60 != 0){
		document.body.style.backgroundImage = "url(stars.png)";
	}
	if(p % 60 === 0){
		document.body.style.backgroundImage = "url(sky.jpg)";
	}
	time();
	}, 1000);
	
}
time();
function myfunction(tree){
	tree.src = "explosion.png";
}
setTimeout(()=>{
var trees = document.querySelectorAll("img");
	trees.forEach(myfunction);
	alert("Game Over!");
	window.location.reload();
}, 600000);
alert("Find the 10 white panthers to save them from the oil company, Red Diamond, and their animal cruelty. Be fast, as their illegal drilling is destroying the panthers' natural habitat. Use the arrow keys to move. Quick! You have 10 minutes before the oil burns down the swamp. Press the R key to repeat directions to the next panther, and press A to show your current coordinates. When your cursor is a pointer, you know you found the panther. When you find it click the panther to bring it to safety. Good luck!");
var ps = 0;
var panther = document.getElementById('panther');
document.getElementById("panther").style.transform = "translateX(" + (Math.floor(Math.random() * 1000)) + "px) translateZ(" + (-Math.floor(Math.random() * 2000)) + "px) perspective(60000px) translateY(500px)";
var style = window.getComputedStyle(panther);
  var matrix = new WebKitCSSMatrix(style.transform);
  alert('The first panther is at X: ' + matrix.m41 + " Z: " + (-matrix.m43));
function pclick() {
	ps++;
	panther.style.perspective = "1000000px";
	if (ps % 2 == 0){
		document.getElementById("panther").style.transform = "translateX(" + (Math.floor(Math.random() * 1000)) + "px) translateZ(" + (-Math.floor(Math.random() * 2000)) + "px) perspective(60000px) translateY(300px)";
									}
	else{ document.getElementById("panther").style.transform = "translateX(" + (-Math.floor(Math.random() * 1000)) + "px) translateZ(" + (-Math.floor(Math.random() * 2000)) + "px) perspective(60000px) translateY(300px)";

			}
	 style = window.getComputedStyle(panther);
   matrix = new WebKitCSSMatrix(style.transform);
  alert('The next panther is at: X: ' + matrix.m41 + " Z: " + (-matrix.m43));
	
	console.log(ps);
	if (ps === 10) {
		alert("Great job! now press enter to save them, and report Red Diamond to the local authorities.");
		document.onkeydown = (e) => {
			if (e.key == "Enter") {
				alert("Congrats! Red Diamond was shut down, you are safe, and now you can go back to teaching biology. Thanks for playing.");
				window.close();
			}
		};
	}
}


panther.addEventListener('click', pclick)


var a = -7500;
var y = -1200;
var b = 0;
var extra = 25;
document.addEventListener('keydown', function (e) {
	a = parseInt(a);
	b = parseInt(b);
	if(e.key == "a"){
		alert("X: "+ (-b - 1000) + " Z: " + (7500 + a));
	}
	if(e.key == "r"){
		  alert('The next panther is at X: ' + matrix.m41 + " Z: " + (-matrix.m43));
	}
	if (e.key == "ArrowUp") {
		e.preventDefault();
		a += 50;
		y-= 20;
		document.getElementById("universe").style.transform = "translateY("+y+"px) translateZ("+ a +"px) perspective("+ (a * -2) +"px) translateX(" + b + "px)";
	}
	if (e.key == "ArrowDown") {
		e.preventDefault();
		a -= 50;
		y+=20;
	
document.getElementById("universe").style.transform = "translateY("+y+"px) translateZ("+ a +"px) perspective("+ (a * -2) +"px) translateX(" + b + "px)";
		
	}
	if (e.key == "ArrowRight") {
		e.preventDefault();
		b -= 50;
document.getElementById("universe").style.transform = "translateY("+y+"px) translateZ("+ a +"px) perspective("+ (a * -2) +"px) translateX(" + b + "px)";	
			
	}
	if (e.key == "ArrowLeft") {
		e.preventDefault();
		b += 50;
	document.getElementById("universe").style.transform = " translateY("+y+"px) translateZ("+ a +"px) perspective("+ (a * -2) +"px) translateX(" + b + "px)";
		
}	
});
var dirt = document.getElementById("boxDiv");
var rows = document.getElementById('mainDiv');
var dirtnew;
for (var i = 0; i < 5000; i += 50) {

	dirtnew = dirt.cloneNode(true);
	dirtnew.style.transform = "translateY(" + (-i) + "px) translateX(" + (i - 500) + "px)";
	dirtnew.style.height = "50px";
	dirtnew.style.width = "50px";
	dirtnew.transformStyle = "preserve-3d";
	rows.appendChild(dirtnew);
}
var newrow;

for (var x = 0; x < 5000; x += 50) {
	newrow = rows.cloneNode(true);
	newrow.style.top = "100px";
	newrow.style.height = "1000px";
	newrow.style.width = "1000px";
	newrow.style.perspective = "800px";
	newrow.style.position = "absolute";
	newrow.style.transform = " rotateX(180deg) translateY(800px) perspective(6000px) translateZ(" + x + "px)";

	document.getElementById('world').appendChild(newrow);
}
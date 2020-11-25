var canvas = document.querySelector('canvas');

canvas.width = window.outerWidth;
canvas.width = window.innerHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

var c = canvas.getContext('2d');

//#region Example Code

// //Creates rectangles
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillRect(100, 90, 100, 100);
// c.fillStyle = 'rgba(255, 0, 0, 0.1)';
// c.fillRect(300, 150, 100, 100);

// //Creates a path
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// //Creates random circles
// for (var i = 0; i < 35; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

// 	c.beginPath();
// 	c.arc(x, y, 30 + (5 * i), 0, Math.PI * 2, false);
// 	c.stroke();
// }

//#endregion
//#region Circle Animation
class Circle {
    constructor(x, y, dx, dy, radius) {
        //Circle as an object with different properties
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;

        //Draw
        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`; //The RGBA is concatenated
            c.fill();
        };

        //Step
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { this.dx = -this.dx; }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { this.dy = -this.dy; }
            this.x += this.dx;
            this.y += this.dy;
            this.draw(); //Draws the Circle
        };
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
	var radius = 16 + Math.floor(Math.random() * 48);
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var alpha = Math.random() * 0.75;
    circleArray.push(new Circle(x, y, dx, dy, radius, red, green, blue, alpha));
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++){
	circleArray[i].update();
	}
}

animate();
//#endregion
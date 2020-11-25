var canvas = document.querySelector('canvas');

canvas.width = window.outerWidth;
canvas.width = window.innterHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(100, 100, 100, 100);

// class objStatBar {
//     constructor(x, y, rectHeight, rectWidth, lenDest, animDelay, animLength){
//         this.x = x;
//         this.y = y;
//         this.rectHeight = rectHeight;
//         this.rectWidth = rectWidth;
//         this.lenDest = lenDest;
//         this.animDelay = animDelay;
//         this.animLength = animLength;

//         this.draw = function(){
//             c.fillStyle = 'rgba(0, 255, 0, 1)';
//             c.fillRect(this.x, this.y, this.rectWidth, this.rectHeight);
//             c.fill();
//         }

//         this.update = function(){
//             if (this.animDelay > 0){this.animDelay -= 1;}
//             if (this.animDelay = 0){
//                 if (this.animLength > 0){animLength -= 0;}
//                 if ((this.animLength % 17) = 0){
//                     if(this.rectWidth < this.lenDest){this.rectWidth += (Math.abs(this.rectWidth - this.lenDest)/20);}
//                     if(this.rectWidth = this.lenDest){this.rectWidth += 0;}
//                 }
//             }
//             this.draw();
//         }
//     }
// }

// function animate(){
// 	requestAnimationFrame(animate);
// 	c.clearRect(0, 0, innerWidth, innerHeight);
// 	thisStatBar.update();
// }
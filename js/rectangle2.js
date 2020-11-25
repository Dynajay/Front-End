/*
Ease in Statbars - Created by Dijay Woods
Free for use. No credit needed.
dijaywoods.github.io
*/

var canvas = document.querySelector('canvas');

canvas.width = window.outerWidth;
canvas.width = window.innerHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

var c = canvas.getContext('2d');

class objStatBar {
	constructor(x, y, initLen, destLen, rHeight, animDelay, barRating){
	this.x = x;
    this.y = y;
    this.initLen = initLen;
    this.destLen = destLen;
    this.rHeight = rHeight;
    this.animDelay = animDelay;
    this.barRating = barRating;

	this.draw = function(){
	c.fillRect(this.x, this.y, this.initLen, this.rHeight);
    }
    
    this.update = function () {
        if (this.animDelay > 0){this.animDelay -= 1;}
        //The 'else if' is a mutable statement that can serve as an alternative for the prior expression. In this example: if (this.animDelay > 0)...
        else if (this.initLen < (this.destLen * (this.barRating/5))){this.initLen += (Math.abs(this.initLen - this.destLen)/20);}
        this.draw();
    }
    }
}

var statBarArray = [];

//Generate Skill Bars and Ratings
for (var i = 0; i < 5; i++)
{
	var x = 100;
    var y = 100 + (48 * i);
    var initLen = 0;
	var destLen = 250;
    var rHeight = 24;
    var animDelay = 10 * i;
    var barRating = 0;
	statBarArray.push(new objStatBar(x, y, initLen, destLen, rHeight, animDelay, barRating));
}

//Manual Bar Entries
statBarArray[0].barRating = 4;
statBarArray[1].barRating = 4.5;
statBarArray[2].barRating = 5;
statBarArray[3].barRating = 4.5;
statBarArray[4].barRating = 4.5;

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < statBarArray.length; i++){
    statBarArray[i].update();
	}
}

animate();
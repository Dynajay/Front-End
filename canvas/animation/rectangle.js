var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
c.beginPath();
c.rect(100, 100, 240, 32);
c.stroke();
c.fillStyle = 'rgba(0, 255, 0, 1)';
c.fillRect(100, 100, 240, 32);
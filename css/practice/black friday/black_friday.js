const black = document.querySelector('.black');
	window.onmousemove = function(e){
		const x = e.clientX;
		black.style.left = x + 'px';
	}

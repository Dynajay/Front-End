const black = document.querySelector('.black');
window.addEventListener("mousemove", screenView);
function(screenView){
	const x = screenView.clientX;
	black.style.left = x + 'px';
}
window.onload =function(){
	var neirong = document.querySelector('#neirong');
	var div = document.getElementById('dv1');
	neirong.onmousemove = function(event) {
		event = event || window.event; 
		div.style.left = event.offsetX + "px";
		div.style.top = event.offsetY + "px";
	}
}


window.onload =function(){
	var btn = document.querySelector('button');
	var text = document.querySelector('textarea');
	var ul = document.getElementsByClassName('leave')[0];
	
	btn.onclick = function() {
		if (text.value == '') {
			alert('您没有输入内容！');
			return false;
		} else {
			var li = document.createElement('li');
			li.innerHTML = text.value + '<a href="javascript:;" class="clear">删除</a>';
			ul.insertBefore(li, ul.children[0]);
			var as = document.getElementsByClassName('clear');
			for (var i = 0; i < as.length; i++) {
				as[i].onclick = function() {
					ul.removeChild(this.parentNode);
				}
			}
			text.value = '';
		}
	};
	
}
window.onload = function() {
 	var ul = document.getElementById('container').getElementsByTagName('ul')[0];
 	var nav = document.getElementById('container').getElementsByTagName('ul')[1];
 	var container = document.getElementById('container');
 	for (let j = 0; j < nav.children.length; ++j) {
 		nav.children[j].setAttribute('index', j);
 	}

 	function createLI(len) {
 		for (let i = 0; i < len; ++i) {
 			createNode('li', ul, '<img src=./images/' + (i + 1) + '.jpg>');
 		}

 	}

 	function createNode(childNode, parentNode, content) {
 		// 创建节点
 		let li = document.createElement(childNode);
 		// 给节点添加内容
 		li.innerHTML = content;
 		// 将子节点添加至父节点
 		parentNode.appendChild(li);
 	}
 	createLI(5);
 	let i = 0,
 		timer;
 	// 设置定时器
 	function interval() {
 		timer = setInterval(() => {
 			++i;
 			for (let j = 0; j < nav.children.length; ++j) {
 				nav.children[j].style.background = 'rgba(255,255,255,.5)';
 			}
 			if (i > 4) {
 				i = 0;
 				nav.children[i].style.background = '#fff';
 				ul.style.left = 0;
 			} else {
 				nav.children[i].style.background = '#fff';
 				ul.style.left = ul.offsetLeft - ul.children[0].offsetWidth + 'px';
				console.log(i);
 			}

 		}, 2000);
 	}

 	interval();
 	// 移入移出
 	container.onmouseover = function() {
 		clearInterval(timer);
 	}

 	container.onmouseout = function() {
 		interval();
 	}

 	nav.onclick = function(event) {
 		target = event && event.target || window.event.srcElement;
 		if (target.nodeName.toLowerCase() == 'li') {
 			// 获取该元素的下标
 			i = target.getAttribute('index');
 			for (j = 0; j < nav.children.length; ++j) {
 				nav.children[j].style.background = 'rgba(255,255,255,.5)';
 			}
 			nav.children[i].style.background = '#fff';
 			ul.style.left = -(ul.children[0].offsetWidth * i) + 'px';
 		}
 	}
 	var div = container.getElementsByTagName('div');
 	div[0].onclick = function() {
 		--i;
 		if (i < 0) {
 			ul.style.left = -ul.offsetWidth + ul.children[0].offsetWidth + 'px';
 			i = 4;
 		} else {
 			ul.style.left = ul.offsetLeft + ul.children[0].offsetWidth + 'px';
 		}
 		for (j = 0; j < nav.children.length; ++j) {
 			nav.children[j].style.background = 'rgba(255,255,255,.5)';
 		}
 		nav.children[i].style.background = '#fff';
 	}

 	div[1].onclick = function() {
 		++i;
 		if (i > 4 ) {
 			ul.style.left = 0;
 			i = 0;
 		} else {
 			ul.style.left = ul.offsetLeft - ul.children[0].offsetWidth + 'px';
 		}
 		for (j = 0; j < nav.children.length; ++j) {
 			nav.children[j].style.background = 'rgba(255,255,255,.5)';
 		}
 		nav.children[i].style.background = '#fff';
 	}
 }

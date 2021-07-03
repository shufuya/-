function nowTime(){
	// 获取当前时间，算出时、分、秒
	var dateTime = new Date();
	var hour = dateTime.getHours();
	var min = dateTime.getMinutes();
	var sec = dateTime.getSeconds();
	// 调用函数 补0
	// 小时还是别加0了
	// checkTime(hour);
	checkTime(min);
	checkTime(sec);
	document.getElementById('timeClock').innerHTML = checkTime(hour) + '时' + checkTime(min)+ '分' + checkTime(sec) + '秒';
	setInterval('nowTime()',1000);
}
// 给小时，分钟，秒，不足10的数前面补一个0
function checkTime(num){
	if(num < 10){
		return '0' + num;
	}else if(num >= 10){
		return ''+ num;
	}
}
nowTime();
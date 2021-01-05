
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	
    var scripts=['<link href="https://answer.eol.cn/app/static/css/mobile_floatwindow.css" rel="stylesheet"/>'];
		if(typeof(jQuery)=="undefined"&&typeof(Zepto)=="undefined"){
			scripts.push('<script src="https://answer.eol.cn/app/static/scripts/jquery-1.9.1.min.js"><\/script>');
		}
		scripts.push('<script src="https://answer.eol.cn/school/mobile/schoolfloat1783.js"><\/script>');
		document.write(scripts.join(""));

		// 判断是否拼接对应参数
		var js_need = document.getElementById("eda_bar_script");
		var arraytemp = new Array();
	   	arraytemp = js_need.src.split('?');
		if (arraytemp[1]) {
			arraytemp = arraytemp[1].split('=');
			// 确认拼接参数为来源时，存入cookie
			if (arraytemp[0] == 'from' && arraytemp[1]) {
				var exdate = new Date();
			    exdate.setDate(parseInt(exdate.getDate()) + parseInt(1));
				document.cookie = 'from='+arraytemp[1]+';expires='+exdate.toGMTString()+';path=/;domain=.eol.cn';
			}
		}
} else {
var scripts=['<link href="https://answer.eol.cn/app/static/scripts/pc/css/floatwindow.css" rel="stylesheet"/>'];
		if(typeof(jQuery)=="undefined"&&typeof(Zepto)=="undefined"){
			scripts.push('<script src="https://answer.eol.cn/app/static/scripts/jquery-1.9.1.min.js"><\/script>');
		}
		scripts.push('<script src="https://answer.eol.cn/app/static/scripts/json2.js"><\/script>')		
		scripts.push('<script src="https://answer.eol.cn/school/pc/schoolfloat1783.js"><\/script>');
		document.write(scripts.join(""));

		// 判断是否拼接对应参数
		var js_need = document.getElementById("eda_bar_script");
		var arraytemp = new Array();
	   	arraytemp = js_need.src.split('?');
		if (arraytemp[1]) {
			arraytemp = arraytemp[1].split('=');
			// 确认拼接参数为来源时，存入cookie
			if (arraytemp[0] == 'from' && arraytemp[1]) {
				var exdate = new Date();
			    exdate.setDate(parseInt(exdate.getDate()) + parseInt(1));
				document.cookie = 'from='+arraytemp[1]+';expires='+exdate.toGMTString()+';path=/;domain=.eol.cn';
			}
		}
}

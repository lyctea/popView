(function(){
	// 创建遮罩层
	var mask = document.createElement("div");
	var wid = document.documentElement.scrollWidth;
	var hig = document.documentElement.scrollHeight;
	mask.id = 'mask';
	mask.style.width = wid + 'px';
	mask.style.height = hig + 'px';
	document.body.appendChild(mask);
	// 创建登录窗口

	var nlogin = document.createElement("div");
	nlogin.id = "login";
	nlogin.innerHTML = "<div class='login_con'></div><div class='closeBtn'></div>";

 
	document.body.appendChild(nlogin);
		//获取可视区域的宽高
	var cWidth = document.documentElement.clientWidth;
	var cHeight = document.documentElement.clientHeight;
		//定位 获取元素的宽高
	var dWidth = nlogin.offsetWidth;
	var dHeight = nlogin.offsetHeight;
	nlogin.style.left = (cWidth - dWidth)/2 + "px";
	nlogin.style.top =  (cHeight - dHeight)/2 + "px";

	//点击关闭按钮，关闭遮罩层和登录窗口
	var closeBtn = document.getElementsByClassName("closeBtn")[0];
	closeBtn.onclick = function(){
		document.body.removeChild(mask);
		document.body.removeChild(nlogin);
	};
	//点击登录按钮，弹出遮罩层和登录窗口
	var login_Btn = document.getElementById('login_btn');
	login_Btn.onclick = function(){
		document.body.appendChild(mask);
		document.body.appendChild(nlogin);
	};
})();
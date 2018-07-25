
	
	for(var i=0;i<100;i++){
		document.write('<p>第'+(i+1)+'个逗比');
	}
	
	var btn=document.getElementById('btn');
	console.log(btn);
	var timer=null;
	//获取页面可视区域的高度
	var clientHeight=document.documentElement.clientHeight;
	
	btn.onclick=function(){
		timer=setInterval(toTop,10);
	}
	
	function toTop(){
		var scrollTop=window.scrollY;//获取滚动条距离顶部的值
		//速度
		var speed=scrollTop/25;
		
		var target=scrollTop-speed;
		
		console.log(scrollTop);
		window.scrollTo(0,target);
		if(scrollTop<=0){
			clearInterval(timer);
		}
	}
	
	
	//滚轮事件
	function onscroll=function(){
		
	}


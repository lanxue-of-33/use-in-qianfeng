
	
	for(var i=0;i<100;i++){
		document.write('<p>第'+(i+1)+'个逗比');
	}
	
	var btn=document.getElementById('btn');
	console.log(btn);
	var num=0;
	var timer=null;
	
	btn.onclick=function(){
		timer=setInterval(toTop,10);
	}
	
	function toTop(){
		var scrollTop=window.scrollY;//获取滚动条距离顶部的值
		scrollTop-=5;
		console.log(scrollTop);
		window.scrollTo(0,scrollTop);
		if(scrollTop<0){
			clearInterval(timer);
		}
	}


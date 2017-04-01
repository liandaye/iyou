addEventListener('DOMContentLoaded',function(){
	var lis=document.querySelectorAll('.positionlist li');
	// 初始化
	for(var i=0;i<lis.length;i++){
		bg2(lis[i]);
	}  
	bg1(lis[0]);
	//点击事件
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){            	
				bg2(lis[j]);
            }           
			bg1(this)
		}
	}
    function bg1(obj){
		obj.style.backgroundImage="url(images/grz-images/sure.png),url(images/grz-images/bg.png)"
		obj.style.backgroundRepeat="no-repeat,no-repeat";
		obj.style.backgroundSize="0.45rem,100%";
		obj.style.backgroundPosition="95% center";
		obj.style.color="#222222";
	}
	function bg2(obj){
		obj.style.backgroundImage="url(images/grz-images/add.png)";
		obj.style.backgroundRepeat="no-repeat";
		obj.style.backgroundSize="0.45rem";
		obj.style.backgroundPosition="95% center";
		obj.style.color="#fff";
	}





})

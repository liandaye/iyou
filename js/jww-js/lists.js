var navLeft=document.querySelectorAll('.nav-left');
var navImg=document.querySelectorAll('.nav-img');
var navZhi=document.querySelectorAll('.nav-zhi');
var background=document.querySelectorAll('.background');
var tab=document.querySelector('.tab');
for(var i=0;i<navLeft.length;i++){
	navImg[i].style.display='none';
	navZhi[i].style.color='#F4EAD5';
	background[i].style.background='url(images/jww-images/yu1.png) 0 0/.5rem .5rem';
}
navZhi[0].style.color='#10340A';
navImg[0].style.display='block';
background[0].style.background='url(images/jww-images/yu.png) 0 0/.5rem .5rem';
for(var i=0;i<navLeft.length;i++){
	navLeft[i].index=i;
	navLeft[i].onclick=function(){
		for(var j=0;j<navLeft.length;j++){
			navImg[j].style.display='none';
			navZhi[j].style.color='#F4EAD5';
			background[j].style.background='url(images/jww-images/yu1.png) 0 0/.5rem .5rem';
		}
		navImg[this.index].style.display='block';
		navZhi[this.index].style.color='#10340A';
		tab.style.transform='translateX(-'+this.index*33+'%)';
		background[this.index].style.background='url(images/jww-images/yu.png) 0 0/.5rem .5rem';
	}
	
}


var btn=document.querySelectorAll("#section .top a");
var uls=document.querySelector(".index .Bcx");
var imgs=document.querySelectorAll("#section .top a img");
 for(var i=0;i<btn.length;i++){
     btn[i].index=i;
     btn[i].addEventListener("touchstart",function(){
           uls.style.transform='translate3d('+-(this.index*33.3333)+'%,0,0)';
           for(var k=0;k<btn.length;k++){
               btn[k].style.background='none'
               imgs[k].style.transform="rotate("+0+"deg)"
           }
                 imgs[this.index].style.transform="rotate("+90+"deg)";

               btn[this.index].style.background="url(image/yi1.png) no-repeat 0 0/cover"
     })


 }

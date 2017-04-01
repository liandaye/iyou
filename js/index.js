// banner
    var swipers= new Swiper('.job-index-banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
// ===============================
//侧滑定位
    var Mask=document.querySelector('.job-index-slides-mask');
    var Left=document.querySelector('.job-index-head .left');
    var Job_slides=document.querySelector('.job-index-slides');
    var lis=document.querySelectorAll('.job-index-slides ul li');
    var innerHtml=document.querySelector('.job-index-slides .middle');
    var dingWeiCon=document.querySelector('.job-index-head .top .left p');
    var body=document.documentElement.getElementsByTagName('body')[0];
    console.log(body)
    Left.onclick=function(){
        if(Mask.style.display==''||Mask.style.display=='none'){
           Mask.style.display="block"; 
           Job_slides.style.left=0;
           body.className='body';
        }else{
            return;
       } 
    }
    Mask.onclick=function(){
        Mask.style.display="none"; 
        Job_slides.style.left='-4.84rem';
        body.className='';
    }
    Job_slides.onclick=function(e){
        var obj=e.target;
        if(obj.nodeName=="SPAN"){
           for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
            obj.parentNode.className='hot';
            dingWeiCon.innerHTML=obj.parentNode.innerHTML;
            innerHtml.innerHTML='当前定位城市：'+obj.parentNode.innerHTML; 
        }else if(obj.nodeName=="LI"){
            for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
            obj.className='hot';
            dingWeiCon.innerHTML=obj.innerHTML;
            innerHtml.innerHTML='当前定位城市：'+obj.innerHTML;
        }else{
            return;
        }
    }
// ========================================

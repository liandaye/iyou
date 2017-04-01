//////sidebar
(function () {
  var address_btn = document.querySelector(".link_fjj .address_fjj");
  var mask_fjj = document.querySelector(".mask_fjj");
  address_btn.addEventListener("click",slide_right);

  var sidebar = document.querySelector(".sidebar_fjj");
  var body = document.querySelector("body");
	var inner = document.querySelector(".inner");
  var width_sidebar = window.getComputedStyle(sidebar, null).width;
  var header = document.querySelector("header");
  var footer = document.querySelector("footer");
  console.log(inner);

  console.log(width_sidebar);
  function slide_right() {
      inner.style.transition = "all .5s";
      mask_fjj.style.display = "block";
      sidebar.style.left = 0;
      inner.style.transform = "translate(4.8rem,0)";
      footer.style.transform = "translate(4.8rem,0)";
      header.style.transform = "translate(4.8rem,0)";
      mask_fjj.addEventListener("click",slide_left);
  }
  function slide_left() {
  		sidebar.style.left = "-4.8rem";
      mask_fjj.style.display = "none";
      inner.style.transform = "";
      footer.style.transform = "";
      header.style.transform = "";
      mask_fjj.removeEventListener("click",slide_left);
  }

  sidebar.addEventListener("click",slide_left);

  var current_city = document.querySelector(".current").querySelector("span");
  var address = document.querySelector(".address_fjj span.address");

  var ul = sidebar.querySelector("ul");
  var li = sidebar.querySelectorAll("li");
  var len = li.length;
  function clearClassname() {
    for(var i = 0;i<len;i++){
      li[i].className = "";
    }
  }
  ul.addEventListener("click",function (e) {
    if (e.target.tagName=="LI") {
      clearClassname();
      e.target.className = "active";
      var value = e.target.querySelector("span").innerText;
      current_city.innerText = value;
      address.innerText = value;
    }
  })



})();


////闪屏
//(function () {
//var flash = document.querySelector(".flash_page_fjj");
//var first_into = sessionStorage.getItem("first_into");
//if (!first_into) {
//  flash.style.display = "block";
//  sessionStorage.setItem("first_into",true);
//}
//function changeClassname() {
//  flash.className = "flash_page_fjj none";
//}
//if(flash){
//  flash.addEventListener("click",changeClassname);
//  setTimeout(function () {
//    changeClassname();
//    flash.removeEventListener("click",changeClassname);
//  },3000);
//}
//})();



/////banner 作用域
(function () {
  var container = document.querySelector(".banner_fjj .swiper-container");
  var mySwiper = new Swiper (container, {
    direction: "horizontal",
    loop: true,
    autoplay: 3000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })

})();

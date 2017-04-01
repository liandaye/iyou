(function () {
  var zhezhao = document.querySelector(".mark_zjj");
  var first_yao = localStorage.getItem("first_yao");
  if (!first_yao) {
    zhezhao.style.display = "block";
    localStorage.setItem("first_yao",true);
  }
  zhezhao.addEventListener("click",function () {
    this.style.display = "none";
  })
})();

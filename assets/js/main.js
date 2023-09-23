if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var btn = document.getElementsByClassName("btn__detail product");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", getInfoDetail);
  }
}

// ACTIVE SIDEBAR
const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});
// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");
if (menuBar) {
  menuBar.addEventListener("click", function () {
    sidebar.classList.toggle("hide");
  });
}

// DETAIL
var div_detail = document.getElementById("detail");
// open
function openDetail() {
  div_detail.style.display = "block";
}
// close
window.onclick = function (event) {
  if (event.target == div_detail) {
    div_detail.style.display = "none";
  }
};
// get info detail
function getInfoDetail(event) {
  var btn_detail = event.currentTarget;
  // cell in table data
  var row = btn_detail.closest("tr");
  var cell = row.querySelectorAll("td *");
  var infoProduct = document.getElementsByClassName("info-product")[0];
  var listClassName = [];
  for (var i = 0; i < cell.length; i++) {
    // console.log(cell[i].querySelectorAll("*")[0].className);
    if (cell[i].className) {
      listClassName.push(cell[i].className);
    }
  }
  for (var i = 0; i < listClassName.length; i++) {
    var data = row.getElementsByClassName(listClassName[i])[0];
    var detailInfo = infoProduct.getElementsByClassName(listClassName[i])[0];
    if (detailInfo && listClassName[i] !== "img_product") {
      detailInfo.innerHTML = data.innerText;
    } else if (listClassName[i] == "img_product") {
      var imageUrl = event.target.getAttribute("data-image");
      detailInfo.src = imageUrl;
    }
  }
  openDetail();
}
//END DETAIL

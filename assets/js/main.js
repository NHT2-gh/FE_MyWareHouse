if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {}

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
const div_detail = document.getElementById("detail");
window.onclick = function (event) {
  if (event.target == div_detail) {
    div_detail.style.display = "none";
  }
};

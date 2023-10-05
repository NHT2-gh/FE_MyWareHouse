const area_main = document.getElementsByClassName("unit_area");
var area_name = "A";
for (let i = 0; i < area_main.length; i++) {
  const element = area_main[i];
  var unit_shelf_name = 0;
  for (var x = 0; x < 4; x++) {
    const shelf = document.createElement("div");
    shelf.classList.add("shelf");
    const content_shelf = `
                            <div class="unit_shelf">
                            <p class="unit_shelf_name">${area_name}0${
      unit_shelf_name + 1
    }</p>
                            <div style="display: flex; max-height: 65px;">
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                            </div>
                        </div>
                        <div class="unit_shelf">         
                            <div style="display: flex; max-height: 65px;">
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                                <div class="bin"></div>
                            </div>
                            <p class="unit_shelf_name">${area_name}0${
      unit_shelf_name + 2
    }</p>
                        </div>`;
    shelf.innerHTML = content_shelf;
    element.append(shelf);
    unit_shelf_name = unit_shelf_name + 2;
  }
  area_name = "B";
}

const tbody = document.querySelector(".unit_shelf_detail tbody");
var claslist = ["A", "B", "C"];
for (let i = 0; i < 3; i++) {
  var new_tr = document.createElement("tr");
  new_tr.classList.add(claslist[i]);
  var content_tr = `
                        <td class ="101">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="102">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="103">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="104">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="105">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="106">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="107">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="108">
                            <div class="bin_detail"></div>
                        </td>
                        <td class ="109">
                            <div class="bin_detail"></div>
                        </td>`;
  new_tr.innerHTML = content_tr;
  tbody.append(new_tr);
}

const bin = document.getElementsByClassName("bin_detail");
const positionElement = document.getElementById("id_bin");
const idShelf = document.getElementById("id_shelf").innerText;
const unit_shelf = document.getElementsByClassName("unit_shelf");
const position = positionElement.innerText;
const positionWithoutHyphens = position.replace(/-/g, " ");
// find bin
for (let t = 0; t < bin.length; t++) {
  const element = bin[t];
  var td = element.parentNode;
  var col = td.className;
  var tr = element.parentNode.parentNode;
  var row = tr.className;
  element.classList.add(row, col);
  const classListArray = Array.from(element.classList);
  // Lấy độ dài của mảng
  const length = classListArray.length;
  // Lấy hai lớp cuối cùng
  if (length >= 2) {
    const className =
      classListArray[length - 2] + " " + classListArray[length - 1];
    if (positionWithoutHyphens === className) {
      element.style.backgroundColor = "#FCC686";
    }
  }
}
// find shelf
for (let v = 0; v < unit_shelf.length; v++) {
  const div_unit_shelf = unit_shelf[v];
  const name_unit_shelf =
    div_unit_shelf.getElementsByClassName("unit_shelf_name")[0].innerText;
  if (name_unit_shelf === idShelf) {
    const bin_in_shelf = div_unit_shelf.getElementsByClassName("bin");
    for (let x = 0; x < bin_in_shelf.length; x++) {
      bin_in_shelf[x].style.backgroundColor = "#FCC686";
    }
    div_unit_shelf.getElementsByClassName(
      "unit_shelf_name"
    )[0].style.fontWeight = "bold";
    if (
      unit_shelf[v].addEventListener("click", function () {
        div_detail.style.display = "block";
      })
    );
  }
}
// close detail
const div_warehouse = document.getElementsByClassName("warehouse_map")[0];
const div_detail = document.getElementsByClassName("map_detail")[0];
window.onclick = function (event) {
  if (event.target === div_warehouse) {
    div_detail.style.display = "none";
  }
};
// click shelf open detail

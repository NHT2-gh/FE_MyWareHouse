if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  // detail
  const btn_dlPro = document.getElementsByClassName("btn__detail product");
  for (var i = 0; i < btn_dlPro.length; i++) {
    btn_dlPro[i].addEventListener("click", getInfoDetail);
  }

  //purchase_request
  const btnRequest_addProduct = document.getElementById(
    "btnRequest__addProduct"
  );
  if (btnRequest_addProduct) {
    btnRequest_addProduct.addEventListener("click", request_addProduct);
  }

  // export_request
  const checkBoxRequest_seclect =
    document.getElementsByClassName("select-product");
  for (let i = 0; i < checkBoxRequest_seclect.length; i++) {
    const checkBox = checkBoxRequest_seclect[i];
    checkBox.addEventListener("click", secletProduct);
  }

  //receipt
  const btn_dlGre = document.getElementsByClassName("btn__detail g_receipt");
  for (var i = 0; i < btn_dlGre.length; i++) {
    btn_dlGre[i].addEventListener("click", openDetail);
  }
  // dashboard
  var btn_dlDash = document.getElementsByClassName("btn__detail dashboard");
  for (let i = 0; i < btn_dlDash.length; i++) {
    btn_dlDash[i].addEventListener("click", openIframe);
  }

  const btnInventory_addMember = document.getElementById(
    "btnInventory__addMember"
  );
  if (btnInventory_addMember) {
    btnInventory_addMember.addEventListener("click", addMember);
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
const iframeShow = document.getElementsByClassName("showForm")[0];
// open
function openDetail() {
  div_detail.style.display = "block";
}
// close detail
window.onclick = function (event) {
  if (event.target == div_detail) {
    div_detail.style.display = "none";
  } else if (event.target == iframeShow) {
    iframeShow.style.display = "none";
  }
};

//close iframe
function closeDetail() {
  iframeShow.style.display = "none";
}

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
      var imageUrl = btn_detail.getAttribute("data-image");
      detailInfo.src = imageUrl;
    }
  }
  openDetail();
}

// js cũ
function getDetailInfoAcc() {
  var tableRows = document.querySelectorAll(".table-data tbody tr");
  // Duyệt qua các thẻ tr và thiết lập sự kiện click cho nút "Xóa" của mỗi thẻ tr
  for (var i = 0; i < tableRows.length; i++) {
    var detail_btn = tableRows[i].querySelector(".btn__detail");
    detail_btn.addEventListener("click", function () {
      // Lấy dữ cliệu từ các ô td của thẻ tr được click
      var cells = this.parentNode.parentNode.getElementsByTagName("td");
      // Lấy id của phần tử con của ul
      const liElements = document.querySelectorAll("#myList li");
      var ids = [];
      liElements.forEach((li) => {
        const childElements = li.querySelectorAll("*");
        childElements.forEach((child) => {
          if (child.id) {
            document.getElementById(child.id).readOnly = true;
            console.log(child.id);
          }
        });
      });
      var length = cells.length;
      console.log(length);
      var id_user = cells[length - 2].innerText;
      var name_user = cells[1].innerText;
      var phone_user = cells[length - 3].innerText;
      var status = cells[7].querySelector("input").value;
      console.log(length, id_user, name_user, phone_user, status);
      document.getElementById("input__status").value = status;
      document.getElementById("input__staffID").value = id_user;
      document.getElementById("input__loginName").value = name_user;
      document.getElementById("input__phone").value = phone_user;
      openDetail();
    });
  }
}
function closeDetail() {
  div_detail.style.display = "none";
}
function resetDetail() {
  const liElements = document.querySelectorAll("#myList li");
  if (liElements) {
    liElements.forEach((li) => {
      const childElements = li.querySelectorAll("*");
      childElements.forEach((child) => {
        if (child.id) {
          if (child.tagName === "SELECT") {
            document.getElementById(child.id).value = "-1";
          } else if (child.id === "input__img") {
            document.getElementById(child.id).innerText = "File name:";
            document.getElementsByClassName("")[0].src = "";
          } else {
            document.getElementById(child.id).value = "";
          }
          document.getElementById(child.id).readOnly = false;
        }
      });
    });
  }
}

// SHOW TINH TRANG STAFF
const table_Staff = document.querySelectorAll("#tbl-staff tbody tr");
for (var i = 0; i < table_Staff.length; i++) {
  var td = table_Staff[i].getElementsByTagName("td")[7];
  var input = td.getElementsByTagName("input")[0].value;
  // input === 0 -> staff đang hoạt động
  if (input === "0") {
    td.style.color = "rgb(127, 248, 79)";
    var icon_status = document.createElement("i");
    var icon_statusContent = `<i class='bx bxs-circle' ></i>`;
    icon_status.innerHTML = icon_statusContent;
    td.append(icon_status);
  } else {
    // input === 1 -> staff ngưng hoạt động
    td.style.color = "rgb(209, 63, 63)";
    var icon_status = document.createElement("i");
    var icon_statusContent = `<i class='bx bxs-circle' ></i>`;
    icon_status.innerHTML = icon_statusContent;
    td.append(icon_status);
  }
}
// function resetDetail() {
//   var infoProduct = document.getElementsByClassName("info-product")[0];
//   var cell = document.querySelectorAll("td *");
//   var listClassName = [];
//   for (var i = 0; i < cell.length; i++) {
//     if (cell[i].className) {
//       listClassName.push(cell[i].className);
//     }
//   }
//   for (var i = 0; i < listClassName.length; i++) {
//     var detailInfo = infoProduct.getElementsByClassName(listClassName[i])[0];
//     if (detailInfo && listClassName[i] !== "img_product") {
//       detailInfo.value = "";
//       detailInfo.readOnly = false;
//     } else if (listClassName[i] == "img_product") {
//       detailInfo.src = "";
//     }
//   }
//   openDetail();
// }
function addProduct() {
  const iframe_addProduct = document.getElementById("iframeAdd");
  iframe_addProduct.style.display = "block";
}

//END DETAIL

//Hidden cell table product
const rows = document.querySelectorAll("#main__product .table-data table tr");
for (let i = 0; i < rows.length; i++) {
  var element = rows[i];
  if (i == 0) {
    var cellHidden = element.querySelectorAll("th");
  } else {
    var cellHidden = element.querySelectorAll("td");
  }
  for (let index = 5; index < cellHidden.length - 1; index++) {
    var chidl = cellHidden[index];
    chidl.style.display = "none";
  }
}

//
// function exportToExcel() {
//   // Lấy đối tượng bảng cần xuất
//   var table2excel = new Table2Excel();
//   table2excel.export(document.querySelectorAll("table-to-export"));
//   // Sử dụng TableExport để xuất dữ liệu ra Excel
//   // var exportTable = new TableExport(table, {
//   //   headers: true, // Bao gồm tiêu đề trong Excel
//   //   footers: false, // Không bao gồm chân trang trong Excel
//   //   formats: ["xlsx"], // Định dạng xuất (xlsx, csv, txt, ...)
//   //   filename: "exported_data", // Tên tệp xuất
//   // });

//   // var exportData = exportTable.getExportData()["table-to-export"]["xlsx"];
//   // var xlsxData = exportData.data;
//   // var xlsxColumns = exportData.mimeType;
//   // var xlsxFilename = "your-filename.xlsx";

//   // var wb = XLSX.utils.book_new();
//   // wb.SheetNames.push("Sheet1");
//   // var ws = XLSX.utils.json_to_sheet(xlsxData, { header: xlsxColumns });
//   // wb.Sheets["Sheet1"] = ws;
//   // var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

//   // function s2ab(s) {
//   //   var buf = new btn_dlDashBuffer(s.length);
//   //   var view = new Uint8btn_dlDash(buf);
//   //   for (var i = 0; i < s.length; i++) {
//   //     view[i] = s.charCodeAt(i) & 0xff;
//   //   }
//   //   return buf;
//   // }

//   // saveAs(
//   //   new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
//   //   xlsxFilename
//   // );
// }

// REQUEST
function request_addProduct(event) {
  const productTable = document.getElementById("product-table");
  const rowTemplate = document.getElementById("row-tmp");
  const tbody = productTable.querySelector("tbody");
  const newRow = rowTemplate.cloneNode(true);
  newRow.style.display = "table-row";

  // Thêm hàng mới vào bảng
  tbody.appendChild(newRow);
  updateNo();
  // delete
  const removeButton = newRow.querySelector(".bx-trash");
  removeButton.addEventListener("click", function () {
    tbody.removeChild(newRow); // Xóa hàng khi nhấn nút "Xóa"
  });
}
// add inventory member
function addMember(event) {
  const Table = document.getElementById("listMember");
  const rowTmp = document.getElementById("row-hidden");
  const Tbody = Table.querySelector("tbody");
  const newMember = rowTmp.cloneNode(true);
  newMember.style.display = "table-row";

  // Thêm hàng mới vào bảng
  Tbody.appendChild(newMember);
  // delete
  const removeMember = newMember.querySelector(".bx-trash");
  removeMember.addEventListener("click", function () {
    Tbody.removeChild(newMember); // Xóa hàng khi nhấn nút "Xóa"
  });
}

//
// function secletProduct(event) {
//   var btn = event.currentTarget;
//   if (btn.checked) {
//     var row = btn.closest("tr");
//     var codeProduct = row.getElementsByClassName("code")[0].innerText;
//     var nameProduct = row.getElementsByClassName("name")[0].innerText;
//     console.log(codeProduct, nameProduct);
//     addProduct_inRequest(codeProduct, nameProduct);
//   }
// }
// function addProduct_inRequest(codeProduct, nameProduct) {
//   const productTable = document.getElementById("product-table");
//   const rowTemplate = document.getElementById("row-tmp");
//   const tbody = productTable.querySelector("tbody");
//   const newRow = rowTemplate.cloneNode(true);
//   newRow.style.display = "table-row";
//   newRow.querySelectorAll("td")[0].innerHTML = codeProduct;
//   newRow.querySelectorAll("td")[1].innerHTML = nameProduct;
//   // Thêm hàng mới vào bảng
//   tbody.appendChild(newRow);
//   // // delete
//   // const removeButton = newRow.querySelector(".bx-trash");
//   // removeButton.addEventListener("click", function () {
//   //   tbody.removeChild(newRow); // Xóa hàng khi nhấn nút "Xóa"
//   // });
// }
// DASHBOARD

function openIframe(event) {
  var liElement = event.currentTarget.closest("li");
  var classLiElement = liElement.className;
  // var iframe = document.getElementById(classLiElement);
  var matchingFile = classLiElement + ".html";
  // Mở tệp HTML tương ứng nếu tồn tại
  window.location.href = matchingFile;
}

//PRODUCT -TABLE
// set No. for table product
var table_product = document.getElementById("product-table");
function updateNo() {
  var row = table_product.querySelectorAll("tbody tr");
  for (let r = 0; r < row.length; r++) {
    var thisRow = row[r];
    var colFirst = thisRow.querySelector("td");
    if (r < 2) {
      colFirst.innerText = r + 1;
    } else if (r > 2) {
      colFirst.innerText = r;
    }
  }
}
updateNo();

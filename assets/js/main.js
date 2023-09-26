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
  var btnRequest_addProduct = document.getElementById("btnRequest__addProduct");
  if (btnRequest_addProduct) {
    btnRequest_addProduct.addEventListener("click", addProduct);
  }
  var btn = document.getElementsByClassName("btn__detail g_receipt");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", openDetail);
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
      var imageUrl = btn_detail.getAttribute("data-image");
      detailInfo.src = imageUrl;
    }
  }
  openDetail();
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
function exportToExcel() {
  // Lấy đối tượng bảng cần xuất
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table-to-export"));
  // Sử dụng TableExport để xuất dữ liệu ra Excel
  // var exportTable = new TableExport(table, {
  //   headers: true, // Bao gồm tiêu đề trong Excel
  //   footers: false, // Không bao gồm chân trang trong Excel
  //   formats: ["xlsx"], // Định dạng xuất (xlsx, csv, txt, ...)
  //   filename: "exported_data", // Tên tệp xuất
  // });

  // var exportData = exportTable.getExportData()["table-to-export"]["xlsx"];
  // var xlsxData = exportData.data;
  // var xlsxColumns = exportData.mimeType;
  // var xlsxFilename = "your-filename.xlsx";

  // var wb = XLSX.utils.book_new();
  // wb.SheetNames.push("Sheet1");
  // var ws = XLSX.utils.json_to_sheet(xlsxData, { header: xlsxColumns });
  // wb.Sheets["Sheet1"] = ws;
  // var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // function s2ab(s) {
  //   var buf = new ArrayBuffer(s.length);
  //   var view = new Uint8Array(buf);
  //   for (var i = 0; i < s.length; i++) {
  //     view[i] = s.charCodeAt(i) & 0xff;
  //   }
  //   return buf;
  // }

  // saveAs(
  //   new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
  //   xlsxFilename
  // );
}

// REQUEST

function addProduct(event) {
  const productTable = document.getElementById("product-table");
  const rowTemplate = document.getElementById("row-tmp");
  const tbody = productTable.querySelector("tbody");
  const newRow = rowTemplate.cloneNode(true);
  newRow.style.display = "table-row";

  // Thêm hàng mới vào bảng
  tbody.appendChild(newRow);
  // delete
  const removeButton = newRow.querySelector(".bx-trash");
  removeButton.addEventListener("click", function () {
    tbody.removeChild(newRow); // Xóa hàng khi nhấn nút "Xóa"
  });
}

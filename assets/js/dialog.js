if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  //select product in request
  const checkbox_select = document.getElementsByClassName("select-product");
  for (let i = 0; i < checkbox_select.length; i++) {
    checkbox_select[i].addEventListener("click", showInput);
  }

  const btn_checkedAll = document.getElementById("checkedAll");
  btn_checkedAll.addEventListener("click", check_All);
}

let count = 0;
function showInput(event) {
  var checkBox = event.currentTarget;
  if (!checkBox) {
    checkBox = event;
  }
  var tr = checkBox.closest("tr");

  const th = document.getElementById("th_quantity");
  const createBtn = openDialog.querySelector("button");
  if (checkBox.checked) {
    th.style.display = "block";
    tr.getElementsByClassName("quantity_request")[0].style.display = "block";
    count = count + 1;
    openDialog.style.opacity = "1";
    createBtn.style.cursor = "pointer";
    openDialog.style.pointerEvents = "all";
  } else {
    tr.getElementsByClassName("quantity_request")[0].style.display = "none";
    count = count - 1;
  }
  if (count === 0) {
    th.style.display = "none";
    openDialog.style.opacity = "0.5";
    openDialog.style.pointerEvents = "none";
  }
}

const dialogRequest = document.getElementById("dia-request");
const openDialog = document.getElementById("open-dia");
const closeDialog = document.getElementById("close-dia");
openDialog.style.pointerEvents = "none";
openDialog.style.opacity = "0.5";

closeDialog.addEventListener("click", () => {
  dialogRequest.close();
});

const listProduct = document.getElementsByClassName("select-product");
let selectedProducts = [];
let productHTML = "";

for (const i of listProduct) {
  const iParent = i.closest(".productRequest");
  const nameElement = iParent.querySelector(".name");
  const codeElement = iParent.querySelector(".code");
  const quantityElement = iParent.querySelector(".quantityRe");
  const code = codeElement.textContent.trim();
  const name = nameElement.textContent.trim();
  let quantity = quantityElement.value;

  quantityElement.addEventListener("input", () => {
    if (i.checked) {
      quantity = quantityElement.value;
      selectedProducts = selectedProducts.filter(
        (product) => product.code !== code
      );
      selectedProducts.push({ code, name, quantity });
      productHTML = selectedProducts
        .map(
          (product) => `
                            <tr>
                            <td>
                                <p>${product.code}</p>
                            </td>
                            <td>
                                <p>${product.name}</p>
                            </td>
                            <td>
                                <p>${product.quantity}</p>
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            </tr>
                        `
        )
        .join("");
    } else {
      quantity = quantityElement.value;
    }
  });

  i.addEventListener("change", () => {
    if (i.checked) {
      selectedProducts.push({ code, name, quantity });
      selectedProducts = [...new Set(selectedProducts)];
    } else {
      selectedProducts = selectedProducts.filter(
        (product) => product.code !== code
      );
    }

    productHTML = selectedProducts
      .map(
        (product) => `
                    <tr>
                    <td>
                        <p>${product.code}</p>
                    </td>
                    <td>
                        <p>${product.name}</p>
                    </td>
                    <td>
                        <p>${product.quantity}</p>
                    </td>
                    <td>
                        <input type="text">
                    </td>
                    </tr>
                `
      )
      .join("");
  });
}
openDialog.addEventListener("click", () => {
  dialogRequest.showModal();
  const productList = document.getElementById("listProductReq");
  productList.innerHTML = productHTML;
});

function check_All(event) {
  var input_checkAll = event.currentTarget;
  var input_check = input_checkAll
    .closest("table")
    .getElementsByClassName("select-product");
  if (input_checkAll.checked === true) {
    for (let t = 0; t < input_check.length; t++) {
      input_check[t].checked = true;
      showInput(input_check[t]);
    }
  } else {
    for (let t = 0; t < input_check.length; t++) {
      input_check[t].checked = false;
      showInput(input_check[t]);
    }
  }
}

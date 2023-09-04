// ------LOGIN--------
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// const rememberMeCheckbox = document.querySelector('input[name="rememberMe"]');
// rememberMeCheckbox.addEventListener('change', () => {
//   if (rememberMeCheckbox.checked) {
//     localStorage.setItem('rememberMe', 'true');
//   } else {
//     localStorage.removeItem('rememberMe');
//   }
// });

// if (localStorage.getItem('rememberMe') === 'true') {
//   rememberMeCheckbox.checked = true;
//   // Lấy thông tin đăng nhập từ localStorage
// }

// if (typeof(Storage) !== "undefined") {
//   // localStorage được hỗ trợ
// } else {
//   // localStorage không được hỗ trợ
// }

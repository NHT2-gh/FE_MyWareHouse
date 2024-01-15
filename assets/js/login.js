// // ------LOGIN--------
// const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
// const container = document.getElementById("container");
// const btn__signUp = document.getElementById("btn__signUp");
// registerButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// loginButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// --------CHECK INPUT ---------- //
const txt_Error = document.getElementsByClassName("txt_error");
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    loginButton.click();
  }
})



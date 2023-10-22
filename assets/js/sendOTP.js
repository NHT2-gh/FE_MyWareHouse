const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("keyup", handleOtp);
  input.addEventListener("paste", handleOnPasteOtp);
});

function handleOtp(e) {
  /**
   * <input type="text" 👉 maxlength="1" />
   * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
   * So we to write our own logic to make it work. 🙂
   */
  const input = e.target;
  let value = input.value;
  let isValidInput = value.match(/[0-9a-z]/gi);
  input.value = "";
  input.value = isValidInput ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (fieldIndex < inputs.length - 1 && isValidInput) {
    input.nextElementSibling.focus();
  }

  if (e.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == inputs.length - 1 && isValidInput) {
    submit();
  }
}

function handleOnPasteOtp(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    submit();
  }
}

function submit() {
  console.log("Submitting...");
  // 👇 Entered OTP
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(otp);
  // 👉 Call API below
}

const div_countdownTime = document.getElementById("div_countdown");
function countdown() {
  div_countdownTime.style.display = "block";
  var timeleft = 60;
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = " " + timeleft;
    if (timeleft <= 0) {
      document.getElementById("countdowntimer").textContent = " 0" + 0;
      clearInterval(downloadTimer);
      btn_sendOTP.classList.remove("resend");
    } else if (timeleft <= 9) {
      document.getElementById("countdowntimer").textContent = " 0" + timeleft;
    }
  }, 1000);
  btn_sendOTP.value = "Resend OTP";
}

const btn_sendOTP = document.getElementById("btn_sendOTP");
const div_inputOTP = document.getElementsByClassName("input__OTP")[0];

btn_sendOTP.addEventListener("click", function () {
  btn_sendOTP.classList.add("resend");
  div_inputOTP.style.display = "block";
  countdown();
});

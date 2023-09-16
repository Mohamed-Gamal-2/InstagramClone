"use strict";
// Regular expressions
const emailRE = /^[a-z]+([a-z]|[0-9]|_|.)*@(gmail|yahoo|hotmail).com/i;
const phoneRE = /01(0|1|2|5)[0-9]{8}/i;
const fullNameRE = /^[a-zA-Z ]{1,} [a-zA-Z ]+$/i;
const userNameRE = /^[A-Za-z][A-Za-z0-9_.]{4,}$/;
const passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//slideshow Imgs (jquery)
let slideShowIndex = 1;

function imageFadingOut() {
  $("#xxlSideShow").fadeOut(2000);
  $("#xlSideShow").fadeOut(2000);
  $("#lgSideShow").fadeOut(2000);
  $("#mdSideShow").fadeOut(2000);
  if (slideShowIndex == 4) slideShowIndex = 1;
  else slideShowIndex++;
}
function imageFadingIn() {
  $("#xxlSideShow").attr("src", `./images/screenshot${slideShowIndex}.png`);
  $("#xlSideShow").attr("src", `./images/screenshot${slideShowIndex}.png`);
  $("#lgSideShow").attr("src", `./images/screenshot${slideShowIndex}.png`);
  $("#mdSideShow").attr("src", `./images/screenshot${slideShowIndex}.png`);
  $("#xxlSideShow").delay(500).fadeIn(1500);
  $("#xlSideShow").delay(500).fadeIn(1500);
  $("#lgSideShow").delay(500).fadeIn(1500);
  $("#mdSideShow").delay(500).fadeIn(1500);
}
$(document).ready(function () {
  setInterval("imageFadingOut()", 0);
});
$(document).ready(function () {
  setInterval("imageFadingIn()", 4000);
});

//show and hide password
document.getElementById("showHidePW").addEventListener("click", () => {
  if (document.getElementById("password").type == "text") {
    document.getElementById("password").type = "password";
  } else document.getElementById("password").type = "text";
});
document.getElementById("password").addEventListener("input", function () {
  if (document.getElementById("password").value != "")
    document.getElementById("showHidePW").style.visibility = "visible";
  else document.getElementById("showHidePW").style.visibility = "hidden";
});

//getting data from Localstorage
let userData = JSON.parse(localStorage.getItem("users"));

//Validation on Reg. Page (on blur)
function CheckonEmailandPhone() {
  if (
    emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
    phoneRE.test(document.getElementById("mobileNumberorEmail").value) ||
    userNameRE.test(document.getElementById("mobileNumberorEmail").value)
  ) {
    document
      .getElementById("mobileNumberorEmail")
      .classList.remove("form-control");
    document
      .getElementById("mobileNumberorEmail")
      .classList.remove("is-invalid");
  } else {
    document
      .getElementById("mobileNumberorEmail")
      .classList.add("form-control");
    document.getElementById("mobileNumberorEmail").classList.add("is-invalid");
  }
}
function CheckonPassword() {
  if (passwordRE.test(document.getElementById("password").value)) {
    document.getElementById("password").classList.remove("form-control");
    document.getElementById("password").classList.remove("is-invalid");
  } else {
    document.getElementById("password").classList.add("form-control");
    document.getElementById("password").classList.add("is-invalid");
  }
}

//Remove Validation (on focus)
function RemoveEmailandPhone() {
  document
    .getElementById("mobileNumberorEmail")
    .classList.remove("form-control");
  document.getElementById("mobileNumberorEmail").classList.remove("is-invalid");
  document.getElementById("errorMsg").style.display = "none";
}
function removePassword() {
  document.getElementById("password").classList.remove("form-control");
  document.getElementById("password").classList.remove("is-invalid");
  document.getElementById("errorMsg").style.display = "none";
}

//Event listeners in inputs
document
  .getElementById("mobileNumberorEmail")
  .addEventListener("blur", CheckonEmailandPhone);
document
  .getElementById("mobileNumberorEmail")
  .addEventListener("focus", RemoveEmailandPhone);
document.getElementById("password").addEventListener("blur", CheckonPassword);
document.getElementById("password").addEventListener("focus", removePassword);

//Check to enable the button once again
document.getElementById("logForm").addEventListener("input", function () {
  if (
    (emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
      phoneRE.test(document.getElementById("mobileNumberorEmail").value) ||
      userNameRE.test(document.getElementById("mobileNumberorEmail").value)) &&
    passwordRE.test(document.getElementById("password").value)
  )
    document.getElementById("loginFormSubmit").disabled = false;
  else document.getElementById("loginFormSubmit").disabled = true;
});

//submitting form
document
  .getElementById("loginFormSubmit")
  .addEventListener("click", function (event) {
    for (let i = 0; i < userData.length; i++) {
      if (
        (userData[i].UserName ==
          document.getElementById("mobileNumberorEmail").value ||
          userData[i].mobileOrEmail ==
            document.getElementById("mobileNumberorEmail").value) &&
        userData[i].password == document.getElementById("password").value
      ) {
        localStorage.setItem(
          "LoggedInUser",
          document.getElementById("mobileNumberorEmail").value
        );
        document.getElementById("logForm").submit();
        break;
      } else {
        event.preventDefault();
        if (i == userData.length - 1)
          document.getElementById("errorMsg").style.display = "block";
      }
    }
  });

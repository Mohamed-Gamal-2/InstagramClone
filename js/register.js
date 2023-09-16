"use strict";
// Regular expressions
const emailRE = /^[a-z]+([a-z]|[0-9]|_|.)*@(gmail|yahoo|hotmail).com/i;
const phoneRE = /01(0|1|2|5)[0-9]{8}/i;
const fullNameRE = /^[a-zA-Z ]{1,} [a-zA-Z ]+$/i;
const userNameRE = /^[A-Za-z][A-Za-z0-9_.]{4,}$/;
const passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//array of object (either empty or get from local storage)
const usersArrayOfObj = JSON.parse(localStorage.getItem("users") || "[]");

//Validation on Reg. Page (on blur)
//unique phone and Email
function CheckonEmailandPhone() {
  if (usersArrayOfObj.length == 0) {
    if (
      emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
      phoneRE.test(document.getElementById("mobileNumberorEmail").value)
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
      document
        .getElementById("mobileNumberorEmail")
        .classList.add("is-invalid");
    }
  } else {
    for (let i = 0; i < usersArrayOfObj.length; i++) {
      if (
        usersArrayOfObj[i].mobileOrEmail ==
          document.getElementById("mobileNumberorEmail").value ||
        !(
          emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
          phoneRE.test(document.getElementById("mobileNumberorEmail").value)
        )
      ) {
        document
          .getElementById("mobileNumberorEmail")
          .classList.add("form-control");
        document
          .getElementById("mobileNumberorEmail")
          .classList.add("is-invalid");
        break;
      } else {
        document
          .getElementById("mobileNumberorEmail")
          .classList.remove("form-control");
        document
          .getElementById("mobileNumberorEmail")
          .classList.remove("is-invalid");
      }
    }
  }
}

function CheckonFullName() {
  if (fullNameRE.test(document.getElementById("fullName").value)) {
    document.getElementById("fullName").classList.remove("form-control");
    document.getElementById("fullName").classList.remove("is-invalid");
  } else {
    document.getElementById("fullName").classList.add("form-control");
    document.getElementById("fullName").classList.add("is-invalid");
  }
}

//unique username
function CheckonUserName() {
  if (usersArrayOfObj.length == 0) {
    if (userNameRE.test(document.getElementById("UserName").value)) {
      document.getElementById("UserName").classList.remove("form-control");
      document.getElementById("UserName").classList.remove("is-invalid");
    } else {
      document.getElementById("UserName").classList.add("form-control");
      document.getElementById("UserName").classList.add("is-invalid");
    }
  } else {
    for (let i = 0; i < usersArrayOfObj.length; i++) {
      if (
        usersArrayOfObj[i].UserName ==
          document.getElementById("UserName").value ||
        !userNameRE.test(document.getElementById("UserName").value)
      ) {
        document.getElementById("UserName").classList.add("form-control");
        document.getElementById("UserName").classList.add("is-invalid");
        break;
      } else {
        document.getElementById("UserName").classList.remove("form-control");
        document.getElementById("UserName").classList.remove("is-invalid");
      }
    }
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
}
function RemoveFullName() {
  document.getElementById("fullName").classList.remove("form-control");
  document.getElementById("fullName").classList.remove("is-invalid");
}
function removeUserName() {
  document.getElementById("UserName").classList.remove("form-control");
  document.getElementById("UserName").classList.remove("is-invalid");
}
function removePassword() {
  document.getElementById("password").classList.remove("form-control");
  document.getElementById("password").classList.remove("is-invalid");
}

//Event listeners in inputs
document
  .getElementById("mobileNumberorEmail")
  .addEventListener("blur", CheckonEmailandPhone);
document
  .getElementById("mobileNumberorEmail")
  .addEventListener("focus", RemoveEmailandPhone);
document.getElementById("fullName").addEventListener("blur", CheckonFullName);
document.getElementById("fullName").addEventListener("focus", RemoveFullName);
document.getElementById("UserName").addEventListener("blur", CheckonUserName);
document.getElementById("UserName").addEventListener("focus", removeUserName);
document.getElementById("password").addEventListener("blur", CheckonPassword);
document.getElementById("password").addEventListener("focus", removePassword);

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

//Check to enable the button once again
document.getElementById("regForm").addEventListener("input", function () {
  if (usersArrayOfObj.length == 0) {
    if (
      (emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
        phoneRE.test(document.getElementById("mobileNumberorEmail").value)) &&
      fullNameRE.test(document.getElementById("fullName").value) &&
      passwordRE.test(document.getElementById("password").value) &&
      userNameRE.test(document.getElementById("UserName").value)
    )
      document.getElementById("regFormSubmit").disabled = false;
    else document.getElementById("regFormSubmit").disabled = true;
  } else {
    for (let i = 0; i < usersArrayOfObj.length; i++) {
      if (
        usersArrayOfObj[i].UserName ==
          document.getElementById("UserName").value ||
        usersArrayOfObj[i].mobileOrEmail ==
          document.getElementById("mobileNumberorEmail").value
      ) {
        document.getElementById("regFormSubmit").disabled = true;
        break;
      } else if (
        (emailRE.test(document.getElementById("mobileNumberorEmail").value) ||
          phoneRE.test(document.getElementById("mobileNumberorEmail").value)) &&
        fullNameRE.test(document.getElementById("fullName").value) &&
        passwordRE.test(document.getElementById("password").value) &&
        userNameRE.test(document.getElementById("UserName").value)
      ) {
        document.getElementById("regFormSubmit").disabled = false;
      }
    }
  }
});

//submiting the form and storing data inside local storage
function submitForm() {
  const user = {
    mobileOrEmail: document.getElementById("mobileNumberorEmail").value,
    fullName: document.getElementById("fullName").value,
    password: document.getElementById("password").value,
    UserName: document.getElementById("UserName").value,
  };
  usersArrayOfObj.push(user);
  localStorage.setItem("users", JSON.stringify(usersArrayOfObj));
}

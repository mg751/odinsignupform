const pw = document.getElementById("pwfield");
const confirmpw = document.getElementById("confirmpw");
const button = document.querySelector("button");

document.addEventListener("keydown", checkPw);
document.addEventListener("click", checkPw);



function checkPw () {
    if (pw.value === confirmpw.value) {
      pw.setCustomValidity('');
      confirmpw.setCustomValidity('');
      return;
    } else {
      confirmpw.setCustomValidity('Passwords do not match');
    }
  }

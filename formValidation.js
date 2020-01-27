const form = document.querySelector("form");
const name = document.querySelector(".name");
const address = document.querySelector(".address");
const email = document.querySelector(".mail");
const pwd = document.querySelector(".pwd");

const send = document.querySelector(".send");
const reset = document.querySelector(".reset");

const emailRegExp = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const pwdRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (name.value === "") {
    alert("please enter all your information ");
    return
  }

  if (address.value === "") {
    alert("please enter all your information ");
    return
  }

  if (!emailRegExp.test(email.value)) {
    console.log("test mail");
    alert("give a valid address mail");
    return
  }
  if (!pwdRegExp.test(pwd.value)) {
    alert("give a valid pwd");
    return
  }
   alert("welcome to nowhere!!!!");
});
form.addEventListener("reset", function(e) {
  form.reset();
});

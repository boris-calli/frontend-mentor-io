'use strict';

let inputs = Array.from(document.getElementsByClassName("form__input-field"));
let claimBtn = document.getElementById("claim-btn");

claimBtn.addEventListener('click', () => {
  inputs.forEach(input => {
    let elements = Array.from(input.children);
    let field = elements[0];
    let errorIcon = elements[1];
    let errorMessage = elements[2];
    if (field.getAttribute('class').includes("address")) {
      if (field.value.includes('@') && field.value.includes('.com')) {
        errorIcon.classList.add("error-hide");
        errorMessage.classList.add("error-hide");
        field.style.border = ".1rem solid var(--clr-grayish-blue)";
      } else {
        errorIcon.classList.remove("error-hide");
        errorMessage.classList.remove("error-hide");
        field.style.border = ".15rem solid var(--clr-red)"
      }
    } else {
      if (field.value === "") {
        errorIcon.classList.remove("error-hide");
        errorMessage.classList.remove("error-hide");
        field.style.border = ".15rem solid var(--clr-red)";
      } else {
        errorIcon.classList.add("error-hide");
        errorMessage.classList.add("error-hide");
        field.style.border = ".1rem solid var(--clr-grayish-blue)";
      }
    }
  });
});
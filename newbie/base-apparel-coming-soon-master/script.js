'use strict';

let sendButton = document.getElementById('send-button');
let inputEmail = document.getElementById('input-email');
let errorElements = Array.from(document.getElementsByClassName('base-apparel__error'));

sendButton.addEventListener('click', () => {
  if (inputEmail.value.includes('@')) {
    errorElements.forEach(errorElement => errorElement.style.display = "none");
    alert('valid email');
  } else {
    errorElements.forEach(errorElement => errorElement.style.display = "block");
  }
});
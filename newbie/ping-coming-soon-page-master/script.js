'use strict';

let email = document.getElementById('email-input');
let errorMessage = document.getElementById('error-message');
let notify = document.getElementById('notify-btn');

notify.addEventListener('click', () => {
  if (email.value.includes('@') && email.value.includes('.com')) {
    email.classList.remove("ping__email-input-error");
    errorMessage.style.display = "none";
  } else {
    email.classList.add("ping__email-input-error");
    errorMessage.style.display = "block";
  }
});

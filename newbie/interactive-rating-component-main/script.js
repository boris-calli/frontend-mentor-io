'use strict';
let btn = document.getElementById('submit-btn');
let rates = document.querySelectorAll('.card__rating-number');//Array.from(document.getElementsByClassName('card__rating-number'));
let cards = document.getElementsByClassName('card');
let rateSelected = '';
let result = document.getElementById('card__rating-result-number');

rates.forEach(rateNum => {
  rateNum.addEventListener('click', () => {
    rateNum.classList.add('card__rating-number-checked');
    rateSelected = rateNum.innerText;
  });
});

btn.addEventListener('click', () => {
  result.innerText = rateSelected; 
  cards.item(0).style.display = "none";
  cards.item(1).style.display = "block";
});


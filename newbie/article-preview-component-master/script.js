let shareBtns = Array.from(document.getElementsByClassName('card__user-share'));
let shareSection = document.getElementsByClassName('card__share');

shareBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    shareSection.item(0).classList.toggle("hide");
  });
});
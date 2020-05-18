var orderButtons = document.querySelectorAll(".product__action");
var modal = document.querySelector(".product__modal");

for (var i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener("click", onOrderButton);
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal && modal.classList.contains("product__modal--show")) {
      evt.preventDefault();
      modal.classList.remove("product__modal--show");
    }
  }
});

function onOrderButton(evt) {
  evt.preventDefault();

  if (modal) {
    modal.classList.add("product__modal--show");
  }
}

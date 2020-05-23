var showMoreButton = document.querySelector(".show-more__show-all");
console.log(showMoreButton);

showMoreButton &&
  showMoreButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    loadAsync();
  });

function loadAsync() {
  // using Ajax to show more products
  console.log("Loading more products...");
}

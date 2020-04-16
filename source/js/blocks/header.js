let header = document.querySelector(".header");
let toggle = document.querySelector(".header__nav-toggle");

header.classList.remove("header--no-js");

toggle.addEventListener("click", function () {
  if (header.classList.contains("header--nav-closed")) {
    header.classList.remove("header--nav-closed");
    header.classList.add("header--nav-opened");
  } else {
    header.classList.remove("header--nav-opened");
    header.classList.add("header--nav-closed");
  }
});

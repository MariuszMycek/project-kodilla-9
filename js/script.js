document.getElementById("hamburger").addEventListener("click", function() {
  document
    .querySelector(".mobile-menu")
    .classList.toggle("mobile-menu--visible");
  document.querySelector(".sidebar").classList.toggle("sidebar--short");
  document
    .querySelector(".sidebar-logo-wrapper")
    .classList.toggle("sidebar-logo-wrapper--hidden");
  document
    .querySelector(".hamburger-wrapper")
    .classList.toggle("hamburger-wrapper--short-menu");
  const navIcons = document.querySelectorAll(".link-tab__icon");

  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.toggle("link-tab__icon--short-menu");
  }
  document
    .querySelector(".manager-tab__header")
    .classList.toggle("manager-tab__header--hidden");
  document
    .querySelector(".manager-tab__manager-name")
    .classList.toggle("manager-tab__manager-name--hidden");
  document
    .querySelector(".manager-tab__manager-avatar")
    .classList.toggle("manager-tab__manager-avatar--short-menu");
  const containerFluid = document.querySelectorAll(".container-fluid");
  for (let i = 0; i < containerFluid.length; i++)
    containerFluid[i].classList.toggle("container-fluid--short-menu");
});

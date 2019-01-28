// Function shows logout pop-up after click in top-bar "Quit" button
document
  .querySelector(".top-bar__quit button")
  .addEventListener("click", function() {
    document
      .querySelector(".top-bar__log-out-pop-up")
      .classList.remove("top-bar__log-out-pop-up--hidden");
  });
// Function hides logout pop-up after click in "Cancel" button
document
  .querySelector(".log-out-window__buttons button")
  .addEventListener("click", function() {
    document
      .querySelector(".top-bar__log-out-pop-up")
      .classList.add("top-bar__log-out-pop-up--hidden");
  });

// Function contains a behavior of all elements after click on HAMBURGER
document.getElementById("hamburger").addEventListener("click", function() {
  // Mobile menu hide and show
  document
    .querySelector(".mobile-menu")
    .classList.toggle("mobile-menu--visible");
  // Sidebar full and short
  document.querySelector(".sidebar").classList.toggle("sidebar--short");
  // Behavior of logo in the sidebar when full and short
  document
    .querySelector(".sidebar-logo-wrapper")
    .classList.toggle("sidebar-logo-wrapper--hidden");
  // Position of hamburger when the sidebar full and short
  document
    .querySelector(".hamburger-wrapper")
    .classList.toggle("hamburger-wrapper--short-menu");
  // Behavior of sidebar navigation tabs when the sidebar full and short
  const navIcons = document.querySelectorAll(".link-tab__icon");
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.toggle("link-tab__icon--short-menu");
  }
  // Behavior of sidebar manager tab elements when the sidebar full and short
  document
    .querySelector(".manager-tab__header")
    .classList.toggle("manager-tab__header--hidden");
  document
    .querySelector(".manager-tab__manager-name")
    .classList.toggle("manager-tab__manager-name--hidden");
  document
    .querySelector(".manager-tab__manager-avatar")
    .classList.toggle("manager-tab__manager-avatar--short-menu");
  // Behavior of container-fluid when the sidebar full and short
  const containerFluid = document.querySelectorAll(".container-fluid");
  for (let i = 0; i < containerFluid.length; i++) {
    containerFluid[i].classList.toggle("container-fluid--short-menu");
  }
});

// Shortcuts to sidebar navigation tabs location
const generalNavTab = document.getElementById("generalStatistics");
const detailsNavTab = document.getElementById("details");
const linksNavTab = document.getElementById("links");
const bannersNavTab = document.getElementById("banners");
const personalNavTab = document.getElementById("personalData");
const payoutNavTab = document.getElementById("payout");
const postbackNavTab = document.getElementById("postback");

// This function hides all sections after click on sidebar navigation tab. Also it highlights active navigation tab
const clickSidebarNavTab = function(navTab) {
  const allSections = document.querySelectorAll("section");
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].classList.add("page-not-active");
  }
  const allNavTabs = document.querySelectorAll("a.sidebar-link");
  for (let i = 0; i < allNavTabs.length; i++) {
    allNavTabs[i].classList.remove("sidebar-link--current-page");
  }
  navTab.classList.add("sidebar-link--current-page");
  document
    .querySelector(".mobile-menu")
    .classList.toggle("mobile-menu--visible");
};

// Event listeners for sidebar navigation tabs. Displays proper section after click.
generalNavTab.addEventListener("click", function() {
  clickSidebarNavTab(this);
  document
    .querySelector("section.general-statistic")
    .classList.remove("page-not-active");
});
linksNavTab.addEventListener("click", function() {
  clickSidebarNavTab(this);
  document
    .querySelector("section.section-with-links")
    .classList.remove("page-not-active");
});
bannersNavTab.addEventListener("click", function() {
  clickSidebarNavTab(this);
  document
    .querySelector("section.section-with-banners")
    .classList.remove("page-not-active");
});
personalNavTab.addEventListener("click", function() {
  clickSidebarNavTab(this);
  document
    .querySelector("section.personal-data")
    .classList.remove("page-not-active");
});

/* IIFE adds "blur" event listeners to all Personal Data input fields. 
If field is valid it get green shadow after loosing focus. 
If invalid - it gets red shadow. */
(function() {
  const inputFields = document.querySelectorAll(
    ".general-information__form-field .form__input"
  );
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("blur", function() {
      this.classList.remove("form__input--valid");
      this.classList.remove("form__input--invalid");
      this.validity.valid
        ? this.classList.add("form__input--valid")
        : this.classList.add("form__input--invalid");
    });
  }
})();

// Personal Data Form - repeat password validator
const repeatPassword = document.getElementById("repeat-password");
const passwordRepeatCheck = function() {
  const password = document.getElementById("password");
  if (password.value != repeatPassword.value) {
    repeatPassword.setCustomValidity("Passwords don't match!");
  } else {
    repeatPassword.setCustomValidity("");
  }
};
repeatPassword.addEventListener("keyup", passwordRepeatCheck);

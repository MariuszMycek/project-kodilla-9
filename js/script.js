//  -- POP-UPS -------------------------------------------------------------------

/*IIFE adds "blur" event to login input fields. After loosing focus it sets color of icon, 
according to input field content. 
*/
(function() {
  const loginInputs = document.querySelectorAll(".log-in-form__input");
  for (let i = 0; i < loginInputs.length; i++) {
    loginInputs[i].addEventListener("blur", function() {
      loginInputs[i].value != ""
        ? (loginInputs[i].parentNode.querySelector(
            ".log-in-form__icon"
          ).style.color = "#333333")
        : (loginInputs[i].parentNode.querySelector(
            ".log-in-form__icon"
          ).style.color = "#a6a6a6");
    });
  }
})();

// Temporary function to show what is happening when password in login pop-up is wrong.
document
  .querySelector(".log-in-form__button")
  .addEventListener("click", function() {
    const inputPassword = document.querySelector(
      ".log-in-form__input--password"
    );
    const inputLogin = document.querySelector(".log-in-form__input--login");
    if (
      inputPassword.value == 1234 ||
      inputPassword.value == "" ||
      inputLogin.value == ""
    ) {
      return true;
    } else {
      event.preventDefault();
      document
        .querySelector(".log-in-form__password-error")
        .classList.add("log-in-form__password-error--visible");
      inputPassword.classList.add("log-in-form__input--password-error");
    }
  });

// Function close all pop-ups and opens that one we need
const openPopUp = function(popUp) {
  document.querySelectorAll(".pop-up > *").forEach(function(popUp) {
    popUp.classList.add("pop-up--hidden");
  });
  document.querySelector(".pop-up").classList.remove("pop-up--hidden");
  document.querySelector(popUp).classList.remove("pop-up--hidden");
};

// Temporary function to show login pop-up after click in profile name link.
document.querySelector(".profile__name").addEventListener("click", function() {
  openPopUp("#login");
});

// Function shows logout pop-up after click in top-bar "Quit" button
document
  .querySelector(".top-bar__quit button")
  .addEventListener("click", function() {
    openPopUp("#logout");
  });

// Function adds class with "display: none" to all pop-ups.
const closePopUp = function() {
  document.querySelectorAll(".pop-up").forEach(function(popUp) {
    popUp.classList.add("pop-up--hidden");
  });
};

// Function hides pop-ups after click in "element"
document.querySelectorAll(".js--close-pop-up").forEach(function(element) {
  element.addEventListener("click", function(event) {
    event.preventDefault();
    closePopUp();
  });
});

// Function closes pop-ups after click on the pop-up overlay
document.querySelectorAll(".pop-up").forEach(function(popUpOverlay) {
  popUpOverlay.addEventListener("click", function(event) {
    if (event.target === this) {
      closePopUp();
    }
  });
});

// Function closes pop-ups after click on Esc key
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 27) {
    closePopUp();
  }
});

// -- HAMBURGER and SIDEBAR MENU ---------------------------------------------------------

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

// -- FORM BEHAVIOR -----------------------------------------------------------------

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

// -- GENERAL STATISTIC CHART ------------------------------------------------------------

const ctx = document.getElementById("myChart").getContext("2d");

const chart = new Chart(ctx, {
  // 1
  type: "bar",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: "Signups",
        backgroundColor: "#8DBEC8",
        borderColor: "#8DBEC8",
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
      },
      {
        label: "FTD",
        backgroundColor: "#F29E4E",
        borderColor: "#F29E4E",
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
      },
      {
        label: "Earned",
        backgroundColor: "#71B374",
        borderColor: "#71B374",
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        hidden: true
      }
    ]
  }
});

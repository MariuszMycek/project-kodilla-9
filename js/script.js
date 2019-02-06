"use strict";

//  -- POP-UPS -------------------------------------------------------------------

/*IIFE adds "blur" event to login input fields. After loosing focus it sets color of icon, 
according to input field content. 
*/

(function () {
  var loginInputs = document.querySelectorAll(".log-in-form__input");

  var _loop = function _loop(i) {
    loginInputs[i].addEventListener("blur", function () {
      loginInputs[i].value != "" ? loginInputs[i].parentNode.querySelector(".log-in-form__icon").style.color = "#333333" : loginInputs[i].parentNode.querySelector(".log-in-form__icon").style.color = "#a6a6a6";
    });
  };

  for (var i = 0; i < loginInputs.length; i++) {
    _loop(i);
  }
})();

// Temporary function to show what is happening when password in login pop-up is wrong.
document.querySelector(".log-in-form__button").addEventListener("click", function () {
  var inputPassword = document.querySelector(".log-in-form__input--password");
  var inputLogin = document.querySelector(".log-in-form__input--login");
  if (inputPassword.value == 1234 || inputPassword.value == "" || inputLogin.value == "") {
    return true;
  } else {
    event.preventDefault();
    document.querySelector(".log-in-form__password-error").classList.add("log-in-form__password-error--visible");
    inputPassword.classList.add("log-in-form__input--password-error");
  }
});

// Function close all pop-ups and opens that one we need
var openPopUp = function openPopUp(popUp) {
  document.querySelectorAll(".pop-up > *").forEach(function (popUps) {
    popUps.classList.add("pop-up--hidden");
  });
  document.querySelector(".pop-up").classList.remove("pop-up--hidden");
  document.querySelector(popUp).classList.remove("pop-up--hidden");
};

// Temporary function to show login pop-up after click in profile name link.
document.querySelector(".profile__name").addEventListener("click", function () {
  openPopUp("#login");
});

// Function shows logout pop-up after click in top-bar "Quit" button
document.querySelector(".top-bar__quit button").addEventListener("click", function () {
  openPopUp("#logout");
});

// Function adds class with "display: none" to all pop-ups.
var closePopUp = function closePopUp() {
  document.querySelectorAll(".pop-up").forEach(function (popUp) {
    popUp.classList.add("pop-up--hidden");
  });
};

// Function hides pop-ups after click in "element"
document.querySelectorAll(".js--close-pop-up").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    closePopUp();
  });
});

// Function closes pop-ups after click on the pop-up overlay
document.querySelectorAll(".pop-up").forEach(function (popUpOverlay) {
  popUpOverlay.addEventListener("click", function (event) {
    if (event.target === this) {
      closePopUp();
    }
  });
});

// Function closes pop-ups after click on Esc key
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 27) {
    closePopUp();
  }
});

// -- HAMBURGER and SIDEBAR MENU ---------------------------------------------------------

// Function contains a behavior of all elements after click on HAMBURGER
document.getElementById("hamburger").addEventListener("click", function () {
  // Mobile menu hide and show
  document.querySelector(".mobile-menu").classList.toggle("mobile-menu--visible");
  // Sidebar full and short
  document.querySelector(".sidebar").classList.toggle("sidebar--short");
  // Behavior of logo in the sidebar when full and short
  document.querySelector(".sidebar-logo-wrapper").classList.toggle("sidebar-logo-wrapper--hidden");
  // Position of hamburger when the sidebar full and short
  document.querySelector(".hamburger-wrapper").classList.toggle("hamburger-wrapper--short-menu");
  // Behavior of sidebar navigation tabs when the sidebar full and short
  var navIcons = document.querySelectorAll(".link-tab__icon");
  for (var i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.toggle("link-tab__icon--short-menu");
  }
  // Behavior of sidebar manager tab elements when the sidebar full and short
  document.querySelector(".manager-tab__header").classList.toggle("manager-tab__header--hidden");
  document.querySelector(".manager-tab__manager-name").classList.toggle("manager-tab__manager-name--hidden");
  document.querySelector(".manager-tab__manager-avatar").classList.toggle("manager-tab__manager-avatar--short-menu");
  // Behavior of container-fluid when the sidebar full and short
  var containerFluid = document.querySelectorAll(".container-fluid");
  for (var _i = 0; _i < containerFluid.length; _i++) {
    containerFluid[_i].classList.toggle("container-fluid--short-menu");
  }
});

// Shortcuts to sidebar navigation tabs location
var generalNavTab = document.getElementById("genaral-tab");
var detailsNavTab = document.getElementById("details-tab");
var linksNavTab = document.getElementById("links-tab");
var bannersNavTab = document.getElementById("banners-tab");
var personalNavTab = document.getElementById("personal-tab");
var payoutNavTab = document.getElementById("payout-tab");
var postbackNavTab = document.getElementById("postback-tab");

/* This function hides all sections after click on sidebar navigation tab.
 Also it highlights active navigation tab */
var clickSidebarNavTab = function clickSidebarNavTab(navTab) {
  var allSections = document.querySelectorAll("section");
  for (var i = 0; i < allSections.length; i++) {
    allSections[i].classList.add("page-not-active");
  }
  var allNavTabs = document.querySelectorAll("a.sidebar-link");
  for (var _i2 = 0; _i2 < allNavTabs.length; _i2++) {
    allNavTabs[_i2].classList.remove("sidebar-link--current-page");
  }
  navTab.classList.add("sidebar-link--current-page");
  document.querySelector(".mobile-menu").classList.toggle("mobile-menu--visible");
};

// Event listeners for sidebar navigation tabs. Displays proper section after click.
generalNavTab.addEventListener("click", function () {
  clickSidebarNavTab(this);
  document.querySelector("section.general-statistic").classList.remove("page-not-active");
});
linksNavTab.addEventListener("click", function () {
  clickSidebarNavTab(this);
  document.querySelector("section.section-with-links").classList.remove("page-not-active");
});
bannersNavTab.addEventListener("click", function () {
  clickSidebarNavTab(this);
  document.querySelector("section.section-with-banners").classList.remove("page-not-active");
});
personalNavTab.addEventListener("click", function () {
  clickSidebarNavTab(this);
  document.querySelector("section.personal-data").classList.remove("page-not-active");
});

// -- LINE NOTIFICATIONS ------------------------------------------------------------
var lineNotification = document.querySelector(".pop-up__line-notification");

//  Closing line notification after click in "X" button
document.querySelector(".close-button-icon").addEventListener("click", function () {
  closePopUp();
});

/* Function displays line notifications. If notification is positive, it adds green background
  and proper message and icon.  If notification is negative, it adds red background
  and proper message and icon.*/
var lineNotificationMessage = function lineNotificationMessage(message, notificationType) {
  var lineNotificationIcon = document.querySelector(".line-notification__icon");
  var lineNotificationText = document.querySelector(".line-notification__text");
  lineNotificationText.innerHTML = message;

  lineNotification.classList.remove("line-notification--positive");
  lineNotificationIcon.classList.remove("icon--positive");
  lineNotification.classList.remove("line-notification--negative");
  lineNotificationIcon.classList.remove("icon--negative");
  if (notificationType == "positive") {
    lineNotification.classList.add("line-notification--positive");
    lineNotificationIcon.classList.add("icon--positive");
  } else if (notificationType == "negative") {
    lineNotification.classList.add("line-notification--negative");
    lineNotificationIcon.classList.add("icon--negative");
  }
  openPopUp(".pop-up__line-notification");
};

// -- FORM BEHAVIOR -----------------------------------------------------------------

/* IIFE adds "blur" event listeners to all input/select fields. 
After loosing focus, field appearance returns to its normal state
 (when field shadow is green or red after validation). */
(function () {
  var inputFields = document.querySelectorAll(".form__input");
  inputFields.forEach(function (inputField) {
    inputField.addEventListener("blur", function () {
      inputField.classList.remove("form__input--valid");
      inputField.classList.remove("form__input--invalid");
    });
  });
})();

// Function adds green or red shadow to the input/select fields after form validation
var inputFieldshadow = function inputFieldshadow(fields) {
  fields.forEach(function (inputField) {
    inputField.classList.remove("form__input--valid");
    inputField.classList.remove("form__input--invalid");
    inputField.validity.valid ? inputField.classList.add("form__input--valid") : inputField.classList.add("form__input--invalid");
  });
};

// Function removes color shadow from input/select fields (used after succesfull validation)
var inputFieldRemoveShadow = function inputFieldRemoveShadow(fields) {
  fields.forEach(function (inputField) {
    inputField.classList.remove("form__input--valid");
    inputField.classList.remove("form__input--invalid");
  });
};

// Personal Data Form - repeat password validator
var repeatPassword = document.getElementById("repeat-password");
var password = document.getElementById("password");
var passwordRepeatCheck = function passwordRepeatCheck() {
  if (password.value != repeatPassword.value) {
    repeatPassword.setCustomValidity("Passwords don't match!");
  } else {
    repeatPassword.setCustomValidity("");
  }
};
repeatPassword.addEventListener("keyup", passwordRepeatCheck);
password.addEventListener("keyup", passwordRepeatCheck);

/* Submiting the Personal Data form. Function checks validation of each input field. 
After validation it displays proper line notification. */
document.querySelector(".personal-data__personal-data-form").addEventListener("submit", function (event) {
  var message = "Error:";
  var isInputValidate = true;
  var isFormValidate = true;
  var personalDataInputs = document.querySelectorAll(".general-information__form-field .js--form-input");

  // Checking validation of each input field
  personalDataInputs.forEach(function (input) {
    input.checkValidity();
    if (!input.checkValidity()) {
      isFormValidate = false;
      isInputValidate = false;
    }
  });
  if (isInputValidate === false) {
    message += "<br><br>" + "Please fill or correct the fields with red outline";
  }
  if (password.value != repeatPassword.value) {
    message += "<br><br>" + "Passwords don't match!";
  }

  // Displaying positive notification with message
  var formInvalid = function formInvalid() {
    event.preventDefault();
    lineNotificationMessage(message, "negative");
    inputFieldshadow(personalDataInputs);
  };

  // Displaying negative notification with message
  var formValid = function formValid() {
    event.preventDefault();
    lineNotificationMessage("Form sent successfully", "positive");
    inputFieldRemoveShadow(personalDataInputs);
  };

  return !isFormValidate ? formInvalid() : formValid();
});

/* Function changes styles for "select" fields if option has been chosen. 
Before that, content of select field looks like placeholder. */
document.querySelectorAll(".form__input--select").forEach(function (inputSelect) {
  inputSelect.addEventListener("click", function (event) {
    if (event.target.value != "") {
      inputSelect.classList.add("select--selected");
    }
  });
});

//  Opening ADD BANNERS popup
var addBannersOverlay = document.querySelector(".add-banners-overlay");

document.querySelectorAll(".section-with-banners__add-new-button button").forEach(function (button) {
  button.addEventListener("click", function () {
    addBannersOverlay.classList.remove("add-banners-overlay--hidden");
  });
});

// Closing ADD BANNERS popup
var closeAddBanners = function closeAddBanners() {
  addBannersOverlay.classList.add("add-banners-overlay--hidden");
};
document.querySelector(".add-banners-overlay .close-button-icon").addEventListener("click", function () {
  closeAddBanners();
});

/* Submiting the Add Banners form. Function checks validation of each input text field, 
each select and required number of checked checkboxes . 
After validation it displays proper line notification. */
document.querySelector(".add-banners__add-banners-form").addEventListener("submit", function (event) {
  var isSelectValidate = true;
  var isFormValidate = true;
  var message = "Error:";
  var addBannersTextInputs = document.querySelectorAll(".add-banners__add-banners-form .js--form-input");
  var addBannersSelects = document.querySelectorAll(".add-banners__add-banners-form .js--form-select");
  var bannersCheckbox = document.querySelectorAll(".add-banners__add-banners-form .js--banners-checkbox:checked");
  var websitesCheckbox = document.querySelectorAll(".add-banners__add-banners-form .js--websites-checkbox:checked");

  // Checking validity of input text fields and prepares right message to display
  addBannersTextInputs.forEach(function (input) {
    input.checkValidity();
    if (!input.checkValidity()) {
      isFormValidate = false;
      message += "<br><br>" + "Please fill or correct the fields with red outline";
    }
  });

  // Checking validity of select fields
  addBannersSelects.forEach(function (select) {
    select.checkValidity();
    if (!select.checkValidity()) {
      isFormValidate = false;
      isSelectValidate = false;
    }
  });

  // Preparing messages to display according to what errors occurs
  if (isSelectValidate === false) {
    message += "<br><br>" + "Please select one option from lists with red outline";
  }
  if (bannersCheckbox.length < 2) {
    isFormValidate = false;
    message += "<br><br>" + "You have to choose at least 2 banners";
  }
  if (websitesCheckbox.length < 2) {
    isFormValidate = false;
    message += "<br><br>" + "You have to choose at least 2 websites";
  }

  // Displaying positive notification with message
  var formInvalid = function formInvalid() {
    event.preventDefault();
    lineNotificationMessage(message, "negative");
    inputFieldshadow(addBannersTextInputs);
    inputFieldshadow(addBannersSelects);
  };

  // Displaying negative notification with message
  var formValid = function formValid() {
    event.preventDefault();
    lineNotificationMessage("Form sent successfully", "positive");
    closeAddBanners();
    inputFieldRemoveShadow(addBannersTextInputs);
    inputFieldRemoveShadow(addBannersSelects);
  };

  return !isFormValidate ? formInvalid() : formValid();
});

// -- GENERAL STATISTIC CHART ------------------------------------------------------------

var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  // 1
  type: "bar",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: "#8DBEC8",
      borderColor: "#8DBEC8",
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
    }, {
      label: "FTD",
      backgroundColor: "#F29E4E",
      borderColor: "#F29E4E",
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
    }, {
      label: "Earned",
      backgroundColor: "#71B374",
      borderColor: "#71B374",
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true
    }]
  }
});
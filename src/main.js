/* eslint-disable */
import "bootstrap";
import "./style.css";

const validation = e => {
  e.preventDefault();
  var errorField = document.querySelector(".alert");
  errorField.innerHTML = "";
  !errorField.classList.contains("d-none") &&
    errorField.classList.toggle("d-none");
  document
    .querySelectorAll("input")
    .forEach(input => input.classList.remove("invalid"));

  var cardnumber = document.querySelector("#cardnumber");
  var ccv = document.querySelector("#CCV");
  var amount = document.querySelector("#amount");
  var firstname = document.querySelector("#firstname");
  var lastname = document.querySelector("#lastname");
  var city = document.querySelector("#city");
  var state = document.querySelector("#select-state");
  var postalcode = document.querySelector("#postalcode");

  if (cardnumber.value < 1000000000000000) {
    displayError("Card Number must be 16 digits.");
    cardnumber.classList.add("invalid");
  }
  if (ccv.value.length != 3) {
    displayError("CCV must be 3 digits.");
    ccv.classList.add("invalid");
  }
  if (amount.value.length <= 0) {
    displayError("Amount required.");
    amount.classList.add("invalid");
  }
  if (firstname.value.length <= 3) {
    displayError("First Name required.");
    firstname.classList.add("invalid");
  }
  if (lastname.value.length <= 3) {
    displayError("Last Name required.");
    lastname.classList.add("invalid");
  }
  if (city.value.length <= 3) {
    displayError("City required.");
    city.classList.add("invalid");
  }
  if (state.value === "Choose State") {
    displayError("State required.");
    state.classList.add("invalid");
  }
  if (postalcode.value.length != 5) {
    displayError("Postal Code required.");
    postalcode.classList.add("invalid");
  }
};

function displayError(message) {
  var errorField = document.querySelector(".alert");
  errorField.innerHTML += `<p>${message}</p>`;
  errorField.classList.contains("d-none") &&
    errorField.classList.toggle("d-none");
}

document.querySelector("#myform").addEventListener("submit", validation);

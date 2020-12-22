/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// const send = document.querySelector(" ");
const cancel = document.querySelector(".btn-secondary");
const allInputs = document.querySelectorAll(".form-control");
// const errorTab = document.querySelector(" ");

function validation() {
  var cardnumber = document.querySelector("#cardnumber");
  var ccv = document.querySelector("#ccv");
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
  if (amount.value.length != 0) {
    displayError("Amount required.");
    amount.classList.add("invalid");
  }
  if (firstname.value.length != 1) {
    displayError("First Name required.");
    amount.classList.add("invalid");
  }
  if (lastname.value.length != 0) {
    displayError("Last Name required.");
    amount.classList.add("invalid");
  }
  if (city.value.length != 0) {
    displayError("City required.");
    amount.classList.add("invalid");
  }
  if (state.value === "Choose...") {
    displayError("State required.");
    amount.classList.add("invalid");
  }
  if (postalcode.value.length != 5) {
    displayError("Postal Code required.");
    amount.classList.add("invalid");
  }
}

// examples to follow
/*
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
*/

/*
  card.addEventListener("submit", e => {
    e.preventDefault();
  });
*/

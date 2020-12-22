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

  if (cardnumber.value<1000000000000000) {
      displayError('Card Number must be 16 digits.')
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

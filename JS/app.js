/* ======================= Get All Variables ======================= */

// All Var About   ---Phone---
const phone_Minus = document.getElementById("phone-minus");
const phone_Plus = document.getElementById("phone-plus");
const phone_Input = document.getElementById("phone-input");
const phone_Display = document.getElementById("phone-display");

// All Var About   ---Case---
const case_Minus = document.getElementById("case-minus");
const case_Plus = document.getElementById("case-plus");
const case_Input = document.getElementById("case-input");
const case_Display = document.getElementById("case-display");

// All Var About   ---Sub-total, Tax & Total---
const sub_Total = document.getElementById("sub-total");
const tax = document.getElementById("tax");
const total = document.getElementById("total");


/* ======================= Get All Variables ^ ======================= */

/* ======================= Set Common Function  ======================= */

/* ======================= Set Common Function ^ ======================= */

/* ======================= Phone Minus Function ======================= */
function phoneMinus() {
  if (phone_Input.value > 0) {
    phone_Input.value--;
    phone_Display.innerText = parseInt(phone_Input.value) * 1219;
  }
}
/* ======================= Phone Minus Function ^ ======================= */

/* ======================= Phone Plus Function ======================= */
function phonePlus() {
  phone_Input.value++;
  phone_Display.innerText = parseInt(phone_Input.value) * 1219;
}
/* ======================= Phone Plus Function ^ ======================= */

/* ======================= Case Minus Function ======================= */
function caseMinus() {
  if (case_Input.value > 0) {
    case_Input.value--;
    case_Display.innerText = parseInt(case_Input.value) * 59;
  }
}
/* ======================= Case Minus Function ^ ======================= */

/* ======================= Case Plus Function ======================= */
function casePlus() {
  case_Input.value++;
  case_Display.innerText = parseInt(case_Input.value) * 59;
}
/* ======================= Case Plus Function ^ ======================= */

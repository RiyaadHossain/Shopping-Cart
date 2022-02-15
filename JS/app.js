/* ================== Phone Plus Button ================== */
function phonePlus() {
  updateProduct("phone", true, 1219);
}


/* ================== Phone Minus Button ================== */
function phoneMinus() {
  updateProduct("phone", false, 1219);
}



/* ================== Case Plus Button ================== */
function casePlus() {
  updateProduct("case", true, 59);
}

/* ================== Case Minus Button ================== */
function caseMinus() {
  updateProduct("case", false, 59);
}

/* ================== Common Function - Updating Product ================== */
function updateProduct(product, isAdd, price) {
  const productInput = document.getElementById(product + "-input");
  const productDisplay = document.getElementById(product + "-display");
  let productValue = productInput.value;
  if(isAdd){
    productValue++
  } else if(productValue > 0){
    productValue--
  }
  productInput.value = productValue;
  productDisplay.innerText = parseInt(productValue) * price;
  updateTotal();
}


/* ================== Common Function - Update Product Total ================== */
function updateTotal(){
  const subTotal = document.getElementById("sub-total")
  const tax = document.getElementById("tax")
  const total = document.getElementById("total")

  const phoneTotal = parseInt(document.getElementById("phone-input").value) * 1219;
  const caseTotal = parseInt(document.getElementById("case-input").value) * 59;

  subTotal.innerText = phoneTotal + caseTotal;
  tax.innerText = parseInt(subTotal.innerText) / 10
  total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

/* ================== Common Function - Get Inner Integer Value ================== */
function getInteger(prduct){
  let productInt = parseInt(document.getElementById(prduct+"-input").value)
  return productInt;
}
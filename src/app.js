let soloLetras = /^[a-zA-Z]+$/;
let soloNumeros = /^[0-9]+$/;
let validUsername = /^[a-zA-Z0-9]+$/;

let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  let error = false;
  let card = document.querySelector("#card");
  let cardFB = document.querySelector("#card-feedback");

  if (card.value == "") {
    error = true;
    card.classList.add("is-invalid");
    cardFB.innerHTML = "Campo es obligatorio";
    card.focus();
  } else if (!soloNumeros.test(card.value)) {
    error = true;
    card.classList.add("is-invalid");
    cardFB.innerHTML = "Card tienen que ser solo numeros";
    card.focus();
  } else if (card.value.length != 8) {
    card.classList.add("is-invalid");
    cardFB.innerHTML = "El card debe tener 8 caracteres";
    card.focus();
  } else {
    card.classList.add("is-valid");
    card.classList.remove("is-invalid");
  }

  let cvc = document.querySelector("#cvc");
  let cvcFB = document.querySelector("#cvc-feedback");

  if (cvc.value == "") {
    error = true;
    cvc.classList.add("is-invalid");
    cvcFB.innerHTML = "Campo es obligatorio";
    cvc.focus();
  } else if (!soloNumeros.test(cvc.value)) {
    error = true;
    cvc.classList.add("is-invalid");
    cvcFB.innerHTML = "Cvc tienen que ser solo numeros";
    cvc.focus();
  } else if (cvc.value.length != 4) {
    error = true;
    cvc.classList.add("is-invalid");
    cvcFB.innerHTML = "El cvc debe tener 4 caracteres";
    cvc.focus();
  } else {
    cvc.classList.add("is-valid");
    cvc.classList.remove("is-invalid");
  }

  let amount = document.querySelector("#amount");
  let amountFB = document.querySelector("#amount-feedback");

  if (amount.value == "") {
    error = true;
    amount.classList.add("is-invalid");
    amountFB.innerHTML = "Campo es obligatorio";
    amount.focus();
  } else if (!soloNumeros.test(amount.value)) {
    error = true;
    amount.classList.add("is-invalid");
    amountFB.innerHTML = "Monto tienen que ser solo numeros";
    amount.focus();
  } else {
    amount.classList.add("is-valid");
    amount.classList.remove("is-invalid");
  }

  let fname = document.querySelector("#fname");
  let fnameFB = document.querySelector("#fname-feedback");

  if (fname.value == "") {
    error = true;
    fname.classList.add("is-invalid");
    fnameFB.innerHTML = "Campo es obligatorio";
    fname.focus();
  } else if (!soloLetras.test(fname.value)) {
    error = true;
    fname.classList.add("is-invalid");
    fnameFB.innerHTML = "Nombre tienen que ser solo letras";
    fname.focus();
  } else {
    fname.classList.add("is-valid");
    fname.classList.remove("is-invalid");
  }

  let lname = document.querySelector("#lname");
  let lnameFB = document.querySelector("#lname-feedback");

  if (lname.value == "") {
    error = true;
    lname.classList.add("is-invalid");
    lnameFB.innerHTML = "Campo es obligatorio";
    lname.focus();
  } else if (!soloLetras.test(lname.value)) {
    error = true;
    lname.classList.add("is-invalid");
    lnameFB.innerHTML = "Apellido tienen que ser solo letras";
    lname.focus();
  } else {
    lname.classList.add("is-valid");
    lname.classList.remove("is-invalid");
  }

  let city = document.querySelector("#city");
  let cityFB = document.querySelector("#city-feedback");

  if (city.value == "") {
    error = true;
    city.classList.add("is-invalid");
    cityFB.innerHTML = "Campo es obligatorio";
    city.focus();
  } else if (!soloLetras.test(lname.value)) {
    error = true;
    city.classList.add("is-invalid");
    cityFB.innerHTML = "Ciudad puede ser solo letras";
    city.focus();
  } else {
    city.classList.add("is-valid");
    city.classList.remove("is-invalid");
  }

  let postal = document.querySelector("#postal");
  let postalFB = document.querySelector("#postal-feedback");

  if (postal.value == "") {
    error = true;
    postal.classList.add("is-invalid");
    postalFB.innerHTML = "Campo es obligatorio";
    postal.focus();
  } else if (!soloNumeros.test(postal.value)) {
    error = true;
    postal.classList.add("is-invalid");
    postalFB.innerHTML = "Codigo postal solo pueden ser numeros";
    postal.focus();
  } else {
    postal.classList.add("is-valid");
    postal.classList.remove("is-invalid");
  }

  let state = document.querySelector("#state");
  let stateFB = document.querySelector("#state-feedback");

  if (state.value == "") {
    error = true;
    state.classList.add("is-invalid");
    stateFB.innerHTML = "Seleccionar es obligatorio";
    state.focus();
  } else {
    state.classList.add("is-valid");
    state.classList.remove("is-invalid");
  }
});

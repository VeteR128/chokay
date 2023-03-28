const quantityForm = document.querySelector(".product__quantity");
document.addEventListener("click", (evt) => {
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");

  if (evt.target === minus) {
    evt.preventDefault();
    quantityForm.value = quantityForm.value - 1;
  }
  if (evt.target === plus) {
    evt.preventDefault();
    quantityForm.value = quantityForm.value - -1;
  }
  if (quantityForm.value <= 1) {
    minus.setAttribute("disabled", "disabled");
  }
  if (quantityForm.value >= 2) {
    minus.removeAttribute("disabled");
  }
});

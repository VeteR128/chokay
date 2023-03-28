const price = document.querySelector(".price");
const inputs = document.querySelectorAll(".product__input");

inputs.forEach((input) => {
  let num = Number(price.textContent);

  input.addEventListener("click", (e) => {
    let red = Number(price.textContent);

    if (e.target === document.getElementById("2")) {
      price.textContent = num + 10;
    }
    if (e.target === document.getElementById("1Products")) {
      price.textContent = num;
    }
    if (e.target === document.getElementById("Petsone")) {
      price.textContent = num;
    }
    if (e.target === document.getElementById("Petstwo")) {
      price.textContent = num + 45;
    }
    if (e.target === document.getElementById("Petsthree")) {
      price.textContent = num + 90;
    }
    if (e.target === document.getElementById("2Products")) {
      price.textContent = num + 30;
    }
    if (e.target === document.getElementById("3Products")) {
      price.textContent = num + 60;
    }
    if (e.target === document.getElementById("4Products")) {
      price.textContent = num + 90;
    }
    if (e.target === document.getElementById("5Products")) {
      price.textContent = num + 120;
    }
    if (e.target === document.getElementById("6Products")) {
      price.textContent = num + 150;
    }
    if (e.target === document.getElementById("1")) {
      price.textContent = num;
    }
    if (e.target === document.getElementById("3")) {
      price.textContent = num + 20;
    }
    if (e.target === document.getElementById("4")) {
      price.textContent = num + 30;
    }
    if (e.target === document.getElementById("5")) {
      price.textContent = num + 40;
    }
    if (e.target === document.getElementById("6")) {
      price.textContent = num + 50;
    }
    if (e.target === document.getElementById("Style basic")) {
      price.textContent = red - 10;
      document
        .getElementById("Style basic")
        .setAttribute("disabled", "disabled");
      document.getElementById("Style").removeAttribute("disabled");
    }
    if (
      e.target === document.getElementById("2") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 20;
    }
    if (
      e.target === document.getElementById("1") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 10;
    }
    if (
      e.target === document.getElementById("3") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 30;
    }
    if (
      e.target === document.getElementById("4") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 40;
    }
    if (
      e.target === document.getElementById("5") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 50;
    }
    if (
      e.target === document.getElementById("6") &&
      document.getElementById("Style").getAttribute("disabled", "disabled")
    ) {
      price.textContent = num + 60;
    }

    if (e.target === document.getElementById("Style")) {
      price.textContent = red + 10;
      document.getElementById("Style").setAttribute("disabled", "disabled");
      document.getElementById("Style basic").removeAttribute("disabled");
    }
  });
});

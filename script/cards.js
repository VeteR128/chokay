const image = document.querySelector(".product__img").getAttribute("src");
const eyebrows = document.querySelector('input[name="Eyebrows"]');
const quantity = document.querySelector(".product__quantity");

const card = {
  p12334114: {
    name: "Basic Custom Illustration",
    url: "#",
    image: image,
    price: 123,
  },
  p12444114: {
    name: "BasicLineIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p22334154: {
    name: "BusinessIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p123345514: {
    name: "BusinessProductIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p12352114: {
    name: "ColouredLineIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p12334166: {
    name: "DetailedCustomIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p15374114: {
    name: "PetIllustration",
    url: "#",
    image: image,
    price: 123,
  },
  p12431114: {
    name: "RushFee",
    url: "#",
    image: image,
    price: 123,
  },
};
const data = {};
document.querySelector(".product__submit").addEventListener("click", (evt) => {
  console.log(quantity.value);
  if (evt.target.classList.contains("product__submit")) {
    evt.preventDefault();
    let articul = evt.target.dataset["articul"];
    if (
      data[articul] !== undefined &&
      data[articul]["price"] ===
        Number(document.querySelector(".price").textContent)
    ) {
      data[articul]["count"] += Number(quantity.value);
    } else {
      data[articul] = card[articul];
      data[articul]["price"] = Number(
        document.querySelector(".price").textContent
      );
      data[articul]["count"] = 1;

      data[articul]["count"] += quantity.value - 1;
      data[articul]["url"] = window.location.href;
    }

    localStorage.setItem(
      `${Number(document.querySelector(".price").textContent)}+${
        data[articul]["name"]
      } card`,
      JSON.stringify(data)
    );
  }
});

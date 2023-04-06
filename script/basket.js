const Storage = localStorage.length;
const elem = document.querySelector(".elements");
console.log(Storage);

function getCard() {
  if (localStorage.key.includes("card")) {
    console.log(localStorage.getItem("70+BasicLineIllustration"));
  }
}

class priceCard {
  constructor(data, key, selector) {
    this._name = data[key].name;
    this._url = data[key].url;
    this._image = data[key].image;
    this._price = data[key].count;
    this._selector = selector;
  }
  _createElement() {
    this._element = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return this._element;
  }
  generateElement() {
    this.bascetCard = this._createElement();
    const imageCard = this.bascetCard.querySelector(".element__image");
    imageCard.src = this._image;
    imageCard.alt = this._name;
    const cardName = this.bascetCard.querySelector(".element__title");
    cardName.textContent = this._name;
    const countCard = this.bascetCard.querySelector(".product__quantity");
    countCard.value = this._price;
    return this.bascetCard;
  }
}
for (i = 0; i < Storage; i++) {
  data = JSON.parse(localStorage.getItem(localStorage.key(i)));
  const key = Object.keys(data);
  console.log(data[key].name);
  const lox = new priceCard(data, key, "#element");
  const loshok = lox.generateElement();
  elem.prepend(loshok);
}

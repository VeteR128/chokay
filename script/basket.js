const Storage = localStorage.length;
const elem = document.querySelector(".elements");
console.log(Storage);

class priceCard {
  constructor(data, key, selector) {
    this._name = data[key].name;
    this._url = data[key].url;
    this._image = data[key].image;
    this._count = data[key].count;
    this._price = data[key].price;
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
    const countCard = this.bascetCard.querySelector(".element__quantity");
    countCard.value = this._count;
    const tottalPriceCard = this.bascetCard.querySelector(".total");
    console.log(tottalPriceCard);
    tottalPriceCard.textContent = this._price * this._count;
    return this.bascetCard;
  }
}
for (i = 0; i < Storage; i++) {
  const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
  const key = Object.keys(data);
  console.log(Object.keys(data));
  const card = new priceCard(data, key, "#element");
  const newCard = card.generateElement();
  elem.prepend(newCard);
}
let summ = 0;
const tottalPriceCard = document.querySelectorAll(".total");
for (i = 0; i < tottalPriceCard.length; i++) {
  summ += Number(tottalPriceCard[i].textContent);
}
const subtotal = document.querySelector(".subtotal");
subtotal.textContent = summ;

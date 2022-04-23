import { state } from "./stateData.js";
import { filterItems } from "./filter--Sort.js";
import { renderStoreItemList } from "./storeMenu.js";

const storeItemList = document.querySelector(".store--item-list");
const cartUL = document.querySelector(".cart--item-list");
const cartQuantity = document.querySelector(".quantity-text");
const cartTotal = document.querySelector(".total-number");
const buttonFruit = document.querySelector(".buttonFruit");
const buttonVegetable = document.querySelector(".buttonVegetable");

state.items.forEach((item) => {
  renderStoreItemList(item);
});

buttonFruit.addEventListener("click", () => {
  filterItems();
});

buttonVegetable.addEventListener("click", () => {
  filterItems();
});

export {
  storeItemList,
  cartUL,
  cartQuantity,
  cartTotal,
  buttonFruit,
  buttonVegetable,
};

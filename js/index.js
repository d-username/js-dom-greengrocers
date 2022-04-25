import { state } from "./stateData.js";
import { filterItems, sortItems } from "./filter--sort.js";
import { renderStoreItemList } from "./storeMenu.js";

const storeItemList = document.querySelector(".store--item-list");
const cartUL = document.querySelector(".cart--item-list");
const cartQuantity = document.querySelector(".quantity-text");
const cartTotal = document.querySelector(".total-number");
const radioFruit = document.querySelector(".radioFruit");
const radioVegetable = document.querySelector(".radioVegetable");
const radioAll = document.querySelector(".radioAll");
const radioABC = document.querySelector(".radioABC");
const radioPriceIncreasing = document.querySelector(".radioPriceIncreasing");
const radioPriceDecreasing = document.querySelector(".radioPriceDecreasing");

state.items.forEach((item) => {
  renderStoreItemList(item);
});

radioFruit.addEventListener("click", () => {
  filterItems();
});

radioVegetable.addEventListener("click", () => {
  filterItems();
});

radioAll.addEventListener("click", () => {
  filterItems();
});

radioABC.addEventListener("click", () => {
  sortItems();
});

radioPriceIncreasing.addEventListener("click", () => {
  sortItems();
});

radioPriceDecreasing.addEventListener("click", () => {
  sortItems();
});

export { storeItemList, cartUL, cartQuantity, cartTotal };

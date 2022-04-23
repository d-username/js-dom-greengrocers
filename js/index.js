import { state } from "./stateData.js";
import { createStoreItem } from "./storeMenu.js";
import { isItemInCart, createCartItem, addToCart } from "./addToCart.js";

const storeItemList = document.querySelector(".store--item-list");
const cartUL = document.querySelector(".cart--item-list");
const cartQuantity = document.querySelector(".quantity-text");
const cartTotal = document.querySelector(".total-number");

state.items.forEach((item) => {
  const newStoreItem = createStoreItem(item);
  newStoreItem.addEventListener("click", () => {
    if (!isItemInCart(item)) {
      addToCart(item);
    }
  });
  storeItemList.append(newStoreItem);
});

export { cartUL, cartQuantity, cartTotal };

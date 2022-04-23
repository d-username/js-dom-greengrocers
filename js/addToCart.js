import { state } from "./stateData.js";
import { cartUL } from "./index.js";
import { renderCard } from "./shoppingCart.js";
import { calculateCartTotal } from "./cartTotal.js";

function isItemInCart(item) {
  let itemIsInCart = false;
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].item.id === item.id) {
      itemIsInCart = true;
    }
  }
  return itemIsInCart;
}

function createCartItem(item) {
  let cartItem = {
    item: item,
    quantity: 1,
  };
  return cartItem;
}

function addToCart(item) {
  state.cart.push(createCartItem(item));
  cartUL.innerHTML = "";
  renderCard();
  calculateCartTotal("plus", item);
}

export { isItemInCart, createCartItem, addToCart };

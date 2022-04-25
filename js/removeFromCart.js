import { state } from "./stateData.js";
import { cartUL } from "./index.js";
import { calculateCartTotal } from "./cartTotal.js";
import { renderCard } from "./shoppingCart.js";

function removeFromCart(item) {
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].item.id === item.item.id) {
      state.cart.splice(i, 1);
    }
  }
  cartUL.innerHTML = "";
  renderCard();
  console.log(item);
  calculateCartTotal("minus", item.item);
}

export { removeFromCart };

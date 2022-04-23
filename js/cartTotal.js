import { state } from "./stateData.js";
import { cartTotal } from "./index.js";

function calculateCartTotal(plusOrMinus, item) {
  if (plusOrMinus === "plus") {
    state.total += item.price;
    cartTotal.innerText = "£" + state.total.toFixed(2);
  }
  if (plusOrMinus === "minus") {
    state.total -= item.price;
    cartTotal.innerText = "£" + state.total.toFixed(2);
  }
}

export { calculateCartTotal };

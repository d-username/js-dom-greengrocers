import { state } from "./stateData.js";
import { cartUL } from "./index.js";
import { calculateCartTotal } from "./cartTotal.js";
import { removeFromCart } from "./removeFromCart.js";

function renderCard() {
  state.cart.forEach((item) => {
    const cartLI = document.createElement("li");

    const itemCartImg = document.createElement("img");
    itemCartImg.setAttribute("class", "cart--item-icon");
    let imgSrcPath = "assets/icons/" + item.item.id + ".svg";
    itemCartImg.setAttribute("src", imgSrcPath);
    itemCartImg.setAttribute("alt", item.name);

    const itemCartP = document.createElement("p");
    itemCartP.innerText = item.item.name;

    const buttonMinus = document.createElement("button");
    buttonMinus.setAttribute("class", "quantity-btn remove-btn center");
    buttonMinus.innerText = "-";

    const cartQuantity = document.createElement("span");
    cartQuantity.setAttribute("class", "quantity-text center");
    cartQuantity.innerText = item.quantity;

    const buttonPlus = document.createElement("button");
    buttonPlus.setAttribute("class", "quantity-btn add-btn center");
    buttonPlus.innerText = "+";

    cartUL.append(cartLI);
    cartLI.append(
      itemCartImg,
      itemCartP,
      buttonMinus,
      cartQuantity,
      buttonPlus
    );

    buttonPlus.addEventListener("click", () => {
      item.quantity++;
      cartQuantity.innerText = item.quantity;
      calculateCartTotal("plus", item.item);
    });

    buttonMinus.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        cartQuantity.innerText = item.quantity;
        calculateCartTotal("minus", item.item);
      } else {
        removeFromCart(item);
      }
    });
  });
}

export { renderCard };

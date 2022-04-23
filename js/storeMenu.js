import { storeItemList } from "./index.js";
import { isItemInCart } from "./addToCart.js";
import { addToCart } from "./addToCart.js";

function createStoreItem(item) {
  const itemStoreLI = document.createElement("li");

  const itemStoreDiv = document.createElement("div");
  itemStoreDiv.setAttribute("class", "store--item-icon");
  itemStoreLI.append(itemStoreDiv);

  const itemStoreImg = document.createElement("img");
  itemStoreImg.setAttribute("src", "assets/icons/" + item.id + ".svg");
  itemStoreImg.setAttribute("alt", item.name);
  itemStoreDiv.append(itemStoreImg);

  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Add to cart";
  addToCartButton.addEventListener("click", () => {
    if (!isItemInCart(item)) {
      addToCart(item);
    }
  });

  itemStoreLI.append(addToCartButton);

  return itemStoreLI;
}

function renderStoreItemList(item) {
  const newStoreItem = createStoreItem(item);
  storeItemList.append(newStoreItem);
}

export { createStoreItem, renderStoreItemList };

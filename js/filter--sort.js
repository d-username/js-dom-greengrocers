import { state } from "./stateData.js";
import { renderStoreItemList } from "./storeMenu.js";
import { storeItemList } from "./index.js";

function getRadioValue(name) {
  let radio = document.getElementsByName(name);
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].id;
    }
  }
}

function filterItems() {
  const type = getRadioValue("type");
  storeItemList.innerHTML = "";
  if (type === "all") {
    state.items.forEach((item) => {
      renderStoreItemList(item);
    });
  } else {
    state.items.forEach((item) => {
      if (item.type === type) {
        renderStoreItemList(item);
      }
    });
  }
}

function sortItems() {
  const sort = getRadioValue("sort");
  if (sort === "abc") {
    sortByAbc();
  }
  if (sort === "priceIncreasing") {
    sortByPriceIncreasing();
  }
  if (sort === "priceDecreasing") {
    sortByPriceDecreasing();
  }
}

function sortByAbc() {
  const itemNames = [];
  state.items.forEach((item) => {
    itemNames.push(item.name);
  });
  const sortedNames = itemNames.sort();
  storeItemList.innerHTML = "";
  sortedNames.forEach((itemName) => {
    state.items.forEach((product) => {
      if (product.name === itemName) {
        const theItem = product;
        renderStoreItemList(theItem);
      }
    });
  });
}

function sortByPriceIncreasing() {
  const itemPrices = [];
  state.items.forEach((item) => {
    itemPrices.push(item.price);
  });
  const sortedPrices = itemPrices.sort(function (a, b) {
    return a - b;
  });
  storeItemList.innerHTML = "";
  sortedPrices.forEach((itemPrice) => {
    state.items.forEach((product) => {
      if (product.price === itemPrice) {
        const theItem = product;
        renderStoreItemList(theItem);
      }
    });
  });
}

function sortByPriceDecreasing() {
  const itemPrices = [];
  state.items.forEach((item) => {
    itemPrices.push(item.price);
  });
  const sortedPrices = itemPrices.sort(function (a, b) {
    return b - a;
  });
  storeItemList.innerHTML = "";
  sortedPrices.forEach((itemPrice) => {
    state.items.forEach((product) => {
      if (product.price === itemPrice) {
        const theItem = product;
        renderStoreItemList(theItem);
      }
    });
  });
}

export { filterItems, sortItems };

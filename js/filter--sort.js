import { state } from "./stateData.js";
import { renderStoreItemList } from "./storeMenu.js";
import { storeItemList } from "./index.js";

function getRadioValue() {
  let radio = document.getElementsByName("type");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].id;
    }
  }
}

function filterItems() {
  const type = getRadioValue();
  storeItemList.innerHTML = "";
  state.items.forEach((item) => {
    if (item.type === type) {
      renderStoreItemList(item);
    }
  });
}

export { filterItems };

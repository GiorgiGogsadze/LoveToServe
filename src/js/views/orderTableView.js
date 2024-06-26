import View from "./View";
import PopupView from "./popupView";
const OrderTableView = class extends View {
  _parentEl = document.querySelector(".order-table");
  _tableOpener = document.querySelector(".order-table__opener");
  _notification = this._tableOpener.querySelector(
    ".order-table__opener-notification"
  );
  constructor() {
    super();
    this._addEventOpenTable();
    this._addEventCloseTable();
    PopupView._closePopup(document.querySelector(".container-thanks"));
  }
  _generateMarkup() {
    if (this._data.orders.length === 0)
      return `<p class="order-table__message">${
        this._data.lang === "geo" ? "დაამატეთ შეკვეთა..." : "add orders..."
      }</p>`;
    return `<ul class="order-list">
        ${this._generateOrders()}
      </ul>
      <div class="order-table__end">
        <button class="order-table__submit">${
          this._data.lang === "geo" ? "შეკვეთა" : "Order"
        }</button>
        <p>${
          this._data.lang === "geo" ? "ჯამი" : "Total"
        }: <span>${this._countSum()}</span> ₾</p>
      </div>`;
  }
  _generateOrders() {
    return this._data.orders.reduce((acc, order) => {
      acc += `<li class="order-list__item">
          <span class="order-list__item-remove" data-name=${order.name}>✗</span>
          <div class="order-list__item-name">
            <p>${this._data.lang === "geo" ? "დასახელება" : "name"}</p>
            <svg style="position:absolute; height:10rem; width:33.3%"><title>${
              order.ingredients || ""
            }</title>
            </svg>
            <h5 class="heading-5">${order.name}</h5>
          </div>
          <div class="order-list__item-amount">
            <p>${this._data.lang === "geo" ? "რაოდენობა" : "Amount"}</p>
            <h5 class="heading-5">${order.amount}</h5>
          </div>
          <div class="order-list__item-price">
            <p>${this._data.lang === "geo" ? "ფასი" : "Price"}</p>
            <h5 class="heading-5">${order.price} ₾</h5>
          </div>
        </li>`;
      return acc;
    }, ``);
  }
  _countSum() {
    return this._data.orders.reduce((acc, order) => {
      acc += order.price;
      return acc;
    }, 0);
  }
  _addEventOpenTable() {
    this._tableOpener.addEventListener("click", () => {
      this._parentEl.classList.toggle("order-table__shown");
      this._parentEl.classList.toggle("order-table__hidden");
      this._notification.style.display = "none";
    });
  }
  _addEventCloseTable() {
    document.querySelector("body").addEventListener("click", (e) => {
      if (
        e.target.closest(".order-table") ||
        e.target.closest(".order-table__opener") ||
        e.target.closest(".order-list__item-remove")
      )
        return;
      this._parentEl.classList.remove("order-table__shown");
      this._parentEl.classList.add("order-table__hidden");
    });
  }
  addHandlerRemoveOrder(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const removeBtn = e.target.closest(".order-list__item-remove");
      if (!removeBtn) return;
      const orderName = removeBtn.dataset.name;
      handler(orderName);
    });
  }
  addHandlerSubmitOrder(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const submitBtn = e.target.closest(".order-table__submit");
      if (!submitBtn) return;
      handler();
      PopupView._openPopFunc(
        document.querySelector(".container-thanks"),
        document.querySelector(".thanks-popup")
      );
    });
  }
};

export default new OrderTableView();

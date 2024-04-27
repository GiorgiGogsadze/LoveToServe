import PopupView from "./popupView";
const OrderView = class {
  _parentEl = document.querySelector(".order-popup");
  _parentOpener = document.querySelector(".home");
  _parentOfParent = this._parentEl.closest(".container");
  _closeBtn = this._parentEl.querySelector(".popup__close");
  _orderForm = this._parentEl.querySelector(".order__questions");
  _priceText = this._parentEl.querySelector(".total-price__number");
  _amountInput = this._parentEl.querySelector(".number-plate input");
  constructor() {
    PopupView._openPopup(
      this._parentOpener,
      this._parentOfParent,
      `.card-button`,
      this._dataArrive.bind(this)
    );
    PopupView._openPopup(
      document.querySelector(".see-full"),
      this._parentOfParent,
      `.card-button`,
      this._dataArrive.bind(this)
    );
    PopupView._openPopup(
      document.querySelector(".hamburger-ingredients-popup"),
      this._parentOfParent,
      `.card-button`,
      this._dataArrive.bind(this)
    );
    PopupView._openPopup(
      document.querySelector(".shawarma-ingredients-popup"),
      this._parentOfParent,
      `.card-button`,
      this._dataArrive.bind(this)
    );
    PopupView._closePopup(this._parentOfParent);
    this._addEventAmountInput();
  }
  _dataArrive(data) {
    this._amountInput.value = 1;
    this._nameOfFood = data[0];
    this._priceOfFood = +data[1];
    this._priceText.textContent = this._priceOfFood;
    this._ingredients = data[3];
    if (!data[2]) return;
    this._frontCard = data[2].querySelector(".card__front");
    this._backCard = data[2].querySelector(".card__back");
  }
  _addEventAmountInput() {
    this._amountInput.addEventListener("change", (e) => {
      const value = +e.target.value;
      this._priceText.textContent = this._priceOfFood * value;
    });
  }
  addHandlerSubmitForm(handler) {
    this._orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handler({
        amount: +this._amountInput.value,
        name: this._nameOfFood,
        price: +this._amountInput.value * this._priceOfFood,
        ingredients: this._ingredients,
      });

      PopupView._closePopFunc(this._parentOfParent, this._parentEl);
      document.querySelector(
        ".order-table__opener-notification"
      ).style.display = "inline-block";
      if (!this._frontCard || !this._backCard) return;
      this._frontCard.style.transform = `rotateY(0deg)`;
      this._backCard.style.transform = `rotateY(180deg)`;
    });
  }
};

export default new OrderView();

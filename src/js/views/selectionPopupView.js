import View from "./View";
import PopupView from "./popupView";
import icons from "url:../../img/icons.svg";
const SelectionPopupView = class extends View {
  _parentEl = document.querySelector(".selection-popup");
  _parentOfParent = document.querySelector(".see-full");
  _parentOpener = document.querySelector(".home");

  constructor() {
    super();
    this._closeWindow();
    PopupView._closePopup(this._parentOfParent);
  }
  _generateMarkup() {
    return `
    <svg viewBox="0 0 352 512" class="popup__close">
          <title>close</title>
          <use href="${icons}#icon-close"></use>
        </svg>
    <div class="types-container">
      ${this._generateSelections()}
    </div>
    <button class="${this._data.btn} ${this._data.btn}-${
      this._data.title
    }">${this._generateButton()}</button>`;
  }
  _generateButton() {
    if (this._data.btn === `card-button`) {
      return this._data.lang === "geo" ? `შეუკვეთე ახლავე` : `Order Now`;
    } else if (this._data.btn === `ingredients-button`) {
      return `${this._data.lang === "geo" ? "ინგრედიენტები" : `ingredients`}
          <svg viewBox="0 0 448 512">
            <use href="${icons}#icon-arrow"></use>
          </svg>`;
    }
  }
  _generateSelections() {
    return this._data.selections.reduce((acc, sel, i) => {
      acc += `<div class="type">
        <input
          type="radio"
          name="${this._data.title}-types"
          class="selection-types"
          id="${this._data.title}-type-${i + 1}"
          data-name = "${sel.name[this._data.lang]}"
          data-price ="${sel.price}"
          required
        />
        <label for="${this._data.title}-type-${i + 1}">
          <img
            src=${sel.image}
          />
          <div class="types-container__btn">
            ${sel.name[this._data.lang]}
            <br />
            ${sel.price}₾.
          </div>
        </label>
      </div>`;
      return acc;
    }, ``);
  }
  addHandlerRenderPopup(handler) {
    this._parentOpener.addEventListener("click", (e) => {
      const openerBtn = e.target.closest(".select-button");
      if (!openerBtn) return;
      handler(openerBtn.dataset.name);
    });
    PopupView._openPopup(
      this._parentOpener,
      this._parentOfParent,
      `.select-button`
    );
  }
  _closeWindow() {
    this._parentEl.addEventListener("click", (e) => {
      const closerBtn =
        e.target.closest(".card-button") ||
        e.target.closest(".ingredients-button");
      if (!closerBtn) return;
      const inputs = this._parentEl.querySelectorAll(".selection-types");
      inputs.forEach((el) => {
        if (el.checked) {
          closerBtn.dataset.name = el.dataset.name;
          closerBtn.dataset.price = el.dataset.price;
          PopupView._closePopFunc(this._parentOfParent, this._parentEl);
        }
      });
    });
  }
};
export default new SelectionPopupView();

import View from "./View.js";
import PopupView from "./popupView.js";
// import icons from "../../img/icons.svg";
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
    <img src="/img/icons/close.svg" class="popup__close"/>
    <div class="types-container">
      ${this._generateSelections()}
    </div>
    <button class="${this._data.btn} ${this._data.btn}-${
      this._data.title
    }">${this._generateButton()}</button>`;
  }
  _generateButton() {
    if (this._data.btn === `card-button`) {
      return `შეუკვეთე ახლავე`;
    } else if (this._data.btn === `ingredients-button`) {
      return `ინგრედიენტები
          <img src="/img/icons/arrow.svg" class="arrow_svg"/>`;
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
          data-name = "${sel.name}"
          data-price ="${sel.price}"
          required
        />
        <label for="${this._data.title}-type-${i + 1}">
          <img
            src=${sel.image}
          />
          <div class="types-container__btn">
            ${sel.name}
            <br />
            ${sel.price}ლ.
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

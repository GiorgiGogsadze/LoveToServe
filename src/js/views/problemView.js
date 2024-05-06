import PopupView from "./popupView";
const ProblemView = class {
  _parentEl = document.querySelector(".form-popup");
  _parentOpener = document.querySelector(".footer__problem");
  _parentOfParent = this._parentEl.closest(".container");
  _closeBtn = this._parentEl.querySelector(".popup__close");
  _problemForm = this._parentEl.querySelector(".form-popup__form");
  _problemText = this._problemForm.querySelector("#message");
  constructor() {
    PopupView._openPopup(this._parentOpener, this._parentOfParent);
    PopupView._closePopup(this._parentOfParent);
    this._addEventTextEnter();
  }
  addHandlerSubmit(handler) {
    this._problemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dataArr = [...new FormData(this._problemForm)];
      const problem = Object.fromEntries(dataArr);
      handler(problem);
      PopupView._closePopFunc(this._parentOfParent, this._parentEl);
      // this._problemForm.querySelector("#name").value = "";
      this._problemForm
        .querySelectorAll(".problem-level")
        .forEach((el) => (el.checked = false));
      this._problemText.value = "";
    });
  }
  _addEventTextEnter() {
    this._problemText.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this._problemForm.querySelector(".form-button").click();
      }
    });
  }
};

export default new ProblemView();

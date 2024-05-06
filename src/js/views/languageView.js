import View from "./View";

const LanguageView = class extends View {
  _parentEl = document.querySelector(".lang-input");
  constructor() {
    super();
  }
  _generateMarkup() {
    let markup = ``;
    this._data.all.forEach((el) => {
      markup += `<option value="${el.value}" ${
        el.value === this._data.current ? `selected` : ``
      }>${el.flag}</option>`;
    });
    return markup;
  }
  addHandlerChange(handler) {
    this._parentEl.addEventListener("change", function (e) {
      handler(this.value);
      location.reload();
    });
  }
};
export default new LanguageView();

import View from "./View";
const TableView = class extends View {
  _parentEl = document.querySelector(".table-input");
  constructor() {
    super();
  }
  _generateMarkup() {
    let markup = ``;
    for (let i = 1; i <= this._data.tableAmount; i++) {
      markup += `<option value="${i}" ${
        i === this._data.currentTable ? `selected` : ``
      }>${i}</option>`;
    }
    return markup;
  }
  addHandlerChange(handler) {
    this._parentEl.addEventListener("change", function (e) {
      handler(+this.value);
    });
  }
};
export default new TableView();

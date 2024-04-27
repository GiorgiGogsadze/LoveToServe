import View from "./View";
import icons from "url:../../img/icons.svg";
const StarView = class extends View {
  _parentEl = document.querySelector(".react__stars");
  constructor() {
    super();
  }
  _generateMarkup() {
    let markup = ``;
    for (let i = this._data.starAmount; i >= 1; i--) {
      markup += `<input
            type="radio"
            name="star"
            id="${i}star"
            class="react__stars__input"
          />
          <label for="${i}star" class="react__stars__label" id="labelStar-${i}">
            <svg
              width="16"
              height="16"
              viewBox="0 0 576 512"
              class="react__stars__svg"
            >
              <title>${i} star</title>
              <use href="${icons}#icon-star"></use>
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 576 512"
              class="react__stars__svg-full"
            >
              <title>${i} star</title>
              <use href="${icons}#icon-star-full"></use>
            </svg>
          </label>`;
    }
    return markup;
  }
  addHandlerStar(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const label = e.target.closest("label");
      if (!label) return;
      const starN = +label.id.slice(-1);
      handler(starN);
    });
  }
};
export default new StarView();

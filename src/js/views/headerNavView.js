import View from "./View";
import { smoothScrool } from "../helper";
const HeaderNavView = class extends View {
  _parentEl = document.querySelector(".header__list");
  constructor() {
    super();
    this._addEventScroll();
  }
  _generateMarkup() {
    return this._data.items.reduce(
      (acc, data) =>
        acc +
        `<li class="header__item">
            <a href="#${data.title}" class="header__link"
              ><div class="header__image" style = " background-image: url(${
                data.image
              });
                animation: pulse ${data.animationS}s linear infinite;">
                <img
                  src=${require("../../img/Black.png")}
                  alt="${data.title}"
                  class="hidden-img"
                />
                <h3 class="heading-3 header__item-name">${
                  data.name[this._data.lang]
                }</h3>
              </div></a
            >
          </li>`,
      ``
    );
  }
  _addEventScroll() {
    this._parentEl.addEventListener("click", smoothScrool);
  }
};

export default new HeaderNavView();

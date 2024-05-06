import View from "./View";
import icons from "url:../../img/icons.svg";
import { CSS_LOOP } from "../config";
import { arrayLoop } from "../helper";
const HomeView = class extends View {
  _parentEl = document.querySelector(".home");
  constructor() {
    super();
    this._addEventRotate();
  }
  _generateMarkup() {
    return this._data.navItems.reduce(
      (acc, item, i) =>
        acc +
        `<section id="${item.title}" style="${
          i % 2 === 0 ? `background-color: #eee;` : ``
        }">
      <div class="section-name-container">
        <h2 class="section-name section-name-${
          i - CSS_LOOP * Math.floor(i / CSS_LOOP)
        }">${item.name[this._data.language.current]}</h2>
      </div>
      <div class="cards-grid">
      ${this._generateCard(item.title, i)}
      </div>
      </section>
      `,
      ``
    );
  }
  _generateCard(title, n) {
    const currentFood = this._data.food.filter((food) => food.tag === title);
    const curLang = this._data.language.current;
    return currentFood.reduce((acc, data) => {
      acc += `<div class="card">
          <img src=${require("../../img/Black.png")} alt=${data.title} />
          <div class="card__front card__front-${arrayLoop(
            CSS_LOOP,
            n
          )}" style="background-image: url(${
        data.image
      }); transform: rotateY(0deg);">
            <img src=${require("../../img/Black.png")} alt=${data.title}/>
            <h4 class="heading-4 card__front__name">${data.name[curLang]}</h4>
            <img
              src=${require("../../img/output-onlinepngtools.png")}
              alt="click"
              title="click"
              class="card__click"
            />
          </div>
          <div class="card__back card__back-${arrayLoop(
            CSS_LOOP,
            n
          )}" style="transform: rotateY(180deg);">
            <img src=${require("../../img/Black.png")} alt=${data.title} />
            <div class="card__back-content">
            <h4 class="heading-4 card__back__name">${data.name[curLang]}</h4>
              ${this._generateInfo(data)}
              <button class="${data.btn} ${data.btn}-${
        data.title
      }" data-name ="${data.name[curLang]}" data-price = "${
        data.price
      }">${this._generateButton(data, curLang)}</button>
            </div>
          </div>
        </div>`;
      return acc;
    }, ``);
  }
  _generateButton(data, curLang) {
    if (data.btn === `card-button`) {
      return curLang === "geo" ? `შეუკვეთე ახლავე` : `Order Now`;
    } else if (data.btn === `select-button`) {
      return `<p id="button-p">${
        curLang === "geo" ? "ნახე ვრცლად" : "see more"
      }</p>`;
    } else if (data.btn === `ingredients-button`) {
      return `${curLang === "geo" ? "ინგრედიენტები" : "ingredients"}
          <svg viewBox="0 0 448 512">
            <use href="${icons}#icon-arrow"></use>
          </svg>`;
    }
  }
  _generateInfo(data) {
    return data.info[this._data.language.current].reduce(
      (acc, info) => acc + `<p>${info}</p>`,
      ``
    );
  }
  _addEventRotate() {
    this._parentEl.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (!card) {
        this.querySelectorAll(".card__front").forEach(
          (el) => (el.style.transform = "rotateY(0deg)")
        );
        this.querySelectorAll(".card__back").forEach(
          (el) => (el.style.transform = "rotateY(180deg)")
        );
        return;
      }
      const front = card.querySelector(".card__front");
      const back = card.querySelector(".card__back");
      if (e.target.closest(".card__front")) {
        front.style.transform = "rotateY(-180deg)";
        back.style.transform = `rotateY(0deg)`;
      } else {
        if (e.target.closest("button")) return;
        front.style.transform = `rotateY(0deg)`;
        back.style.transform = `rotateY(180deg)`;
      }
    });
  }
};

export default new HomeView();

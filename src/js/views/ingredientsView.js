import PopupView from "./popupView";
const IngredientsView = class {
  _shawarma = document.querySelector(".shawarma-ingredients-popup");
  _shawarmaImages = this._shawarma
    .querySelector(".shawarma-ingredients__picture")
    .querySelectorAll("img");
  _shawarmaForm = this._shawarma.querySelector(".shawarma-ingredients__inputs");
  _shawarmaInputs = this._shawarmaForm.querySelectorAll("input");
  _shawarmaSubmit = this._shawarma.querySelector(".card-button");
  _hamburger = document.querySelector(".hamburger-ingredients-popup");
  _hamburgerImages = this._hamburger
    .querySelector(".hamburger-ingredients__picture")
    .querySelectorAll("img");
  _hamburgerForm = this._hamburger.querySelector(
    ".hamburger-ingredients__inputs"
  );
  _hamburgerInputs = this._hamburgerForm.querySelectorAll("input");
  _hamburgerSubmit = this._hamburger.querySelector(".card-button");
  constructor() {
    this._addEventFormChange(this._shawarmaForm, this._shawarmaImages);
    this._addEventFormChange(this._hamburgerForm, this._hamburgerImages);
    this._selectAll(this._shawarmaImages, this._shawarmaInputs);
    this._selectAll(this._hamburgerImages, this._hamburgerInputs);
    PopupView._openPopup(
      document.querySelector(".home"),
      this._hamburger.closest(".container"),
      `.ingredients-button-hamburger`,
      this._giveData.bind(this._hamburgerSubmit)
    );
    PopupView._closePopup(this._hamburger.closest(".container"));
    this._addEventSubmitings(
      this._hamburgerSubmit,
      this._hamburgerInputs,
      this._hamburger,
      this._hamburgerImages
    );
    PopupView._openPopup(
      document.querySelector(".see-full"),
      this._shawarma.closest(".container"),
      `.ingredients-button`,
      this._giveData.bind(this._shawarmaSubmit)
    );
    PopupView._closePopup(this._shawarma.closest(".container"));
    this._addEventSubmitings(
      this._shawarmaSubmit,
      this._shawarmaInputs,
      this._shawarma,
      this._shawarmaImages
    );
  }
  _selectAll(images, inputs) {
    images.forEach((el) => (el.style.display = "inline-block"));
    inputs.forEach((el) => (el.checked = true));
  }
  _addEventFormChange(form, images) {
    form.addEventListener("change", (e) => {
      const tag = e.target.dataset.tag;
      if (e.target.checked) {
        [...images].forEach((el) => {
          if (el.alt === tag) {
            el.style.display = "inline-block";
          }
        });
      } else {
        [...images].forEach((el) => {
          if (el.alt === tag) {
            el.style.display = "none";
          }
        });
      }
    });
  }
  _giveData(data) {
    this.dataset.name = data[0];
    this.dataset.price = data[1];
  }
  _addEventSubmitings(submit, inputs, item, images) {
    submit.addEventListener("click", (e) => {
      const ings = [...inputs]
        .filter((el) => el.checked)
        .map((el) => el.dataset.tag);
      submit.dataset.ingredients = JSON.stringify(ings);
      PopupView._closePopFunc(item.closest(".container"), item);
      setTimeout(() => {
        this._selectAll(images, inputs);
      }, 500);
    });
  }
};

export default new IngredientsView();

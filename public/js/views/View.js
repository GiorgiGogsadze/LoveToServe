export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const oldElements = Array.from(this._parentEl.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const oldEl = oldElements[i];
      //  updates changed TEXT
      if (
        !newEl.isEqualNode(oldEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        oldEl.textContent = newEl.textContent;
      }
      // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(oldEl)) {
        [...newEl.attributes].forEach((attr) => {
          oldEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }
}

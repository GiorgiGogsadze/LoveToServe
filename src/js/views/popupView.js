export default class PopupView {
  static _openPopup(opener, container, openBtn, datafunc) {
    opener.addEventListener("click", (e) => {
      const btn = openBtn ? e.target.closest(openBtn) : opener;
      if (!btn) return;
      if (openBtn && !btn.dataset.name) return;
      this._openPopFunc(container, container.querySelector(".popup"));
      if (datafunc) {
        datafunc([
          btn.dataset?.name,
          btn.dataset?.price,
          btn.closest(".card"),
          btn.dataset?.ingredients,
        ]);
      }
    });
  }
  static _closePopup(container) {
    container.addEventListener("click", (e) => {
      if (!e.target.closest(".popup__close") && e.target.closest(".popup-open"))
        return;
      this._closePopFunc(container, container.querySelector(".popup"));
    });
  }

  static _openPopFunc(container, popup) {
    container.classList.add("container-open");
    container.classList.remove("container-close");
    popup.classList.add("popup-open");
    popup.classList.remove("popup-close");
  }
  static _closePopFunc(container, popup) {
    container.classList.remove("container-open");
    container.classList.add("container-close");
    popup.classList.remove("popup-open");
    popup.classList.add("popup-close");
  }
}

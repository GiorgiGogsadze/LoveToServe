export default function translate() {
  document.querySelector(".header__heading--2").textContent =
    "Don't wait for the waiter, order now";
  document.querySelector("#seeOrder").textContent = "See Orders";
  document.querySelector(
    ".footer__copy"
  ).textContent = `The website is developed for personal purposes. Provided information is fictitious. ©${new Date().getFullYear()} by Giorgi Gogsadze.`;
  document.querySelector(".footer__problem__text").textContent =
    "Report Problem";
  document.querySelector(".react__text").textContent = "Rate us";
  document.querySelector(".facebook__text").textContent = "See us on Facebook";
  document.querySelector(".number-plate").querySelector("label").textContent =
    "Amount";
  document.querySelector("#mp").textContent = "Price";
  document.querySelector("#madd").textContent = "Add to Orders";
  document.querySelector(".order-table__message").textContent = "Add Orders...";
  document.querySelector(".thanks-popup__text").innerHTML =
    "Order Received <br />  Thank you for using <span>LoveToServe</span>";
  document.querySelector(".form-popup__header").textContent = "Report Problem";
  document.querySelector(".form-popup__problem").textContent = "Problem level";
  const problems = ["Critical", "Noteworthy", "A minor inconvenience"];
  document
    .querySelector(".form-popup__select")
    .querySelectorAll("label")
    .forEach((el, i) => (el.innerHTML = `<span></span> ${problems[i]}`));
  document.querySelector(".form-popup__fill").textContent =
    "Write about the problem";
  document.querySelector(".form-button").textContent = "Send";
  document
    .querySelectorAll(".card-button")
    .forEach((el) => (el.textContent = "Order Now"));
  const shawarmaIng = [
    "Pepper",
    "Cucumbers",
    "Ketchup",
    "Mustard",
    "Onion",
    "Lettuce",
    "Tomato",
  ];

  document
    .querySelector(".shawarma-ingredients__inputs")
    .querySelectorAll("label")
    .forEach((el, i) => (el.innerHTML = `<span></span>${shawarmaIng[i]}`));

  const hamburgerIng = [
    "Lettuce",
    "Tomato",
    "Cheese",
    "Ketchup",
    "Onion",
    "Pickles",
  ];
  document
    .querySelector(".hamburger-ingredients__inputs")
    .querySelectorAll("label")
    .forEach((el, i) => (el.innerHTML = `<span></span>${hamburgerIng[i]}`));
}

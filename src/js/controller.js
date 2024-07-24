import * as model from "./model";
import headerNavView from "./views/headerNavView";
import tableView from "./views/tableView";
import languageView from "./views/languageView";
import homeView from "./views/homeView";
import starView from "./views/starView";
import problemView from "./views/problemView";
import orderView from "./views/orderView";
import orderTableView from "./views/orderTableView";
import selectionPopupView from "./views/selectionPopupView";
import ingredientsView from "./views/ingredientsView";
import translate from "./translator";

const controlTable = function (curTable) {
  model.state.table.currentTable = curTable;
  window.localStorage.setItem("currentTable", `${curTable}`);
};
const controlLanguage = function (curLanguage) {
  model.state.language.current = curLanguage;
  window.localStorage.setItem("currentLanguage", `${curLanguage}`);
};
export const controlStar = function (starN) {
  model.state.star.currentStar = starN;
  console.log([model.state.star, model.state.table, new Date()]);
};
const controlProblem = function (problem) {
  model.state.problems.push(problem);
  console.log([model.state.problems, model.state.table, new Date()]);
};
const controlOrder = function (order) {
  let stopFunction = false;
  model.state.orders.forEach((el) => {
    if (el.name === order.name && el.ingredients === order.ingredients) {
      el.amount += order.amount;
      el.price += order.price;
      stopFunction = true;
    }
  });
  if (!stopFunction) {
    model.state.orders.push(order);
  }
  orderTableView.render({
    orders: model.state.orders,
    lang: model.state.language.current,
  });
};
const controlRemoveOrder = function (orderName) {
  const index = model.state.orders.findIndex((el) => el.name === orderName);
  model.state.orders.splice(index, 1);
  orderTableView.render({
    orders: model.state.orders,
    lang: model.state.language.current,
  });
};

const controlSubmitOrder = function () {
  model.state.submittedOrders.push([...model.state.orders]);
  model.state.orders.splice(0, model.state.orders.length);
  orderTableView.render({
    orders: model.state.orders,
    lang: model.state.language.current,
  });
  console.log([model.state.submittedOrders, model.state.table, new Date()]);
};
const controlRenderSelPopup = function (name) {
  const currentSelection = model.state.seeMore.filter(
    (el) => el.name[model.state.language.current] === name
  )[0];
  selectionPopupView.render({
    ...currentSelection,
    lang: model.state.language.current,
  });
};
const innit = function () {
  if (model.state.language.current !== "geo") translate();
  else
    document.querySelector(
      ".footer__copy"
    ).textContent = `საიტი შექმნილია პირადი მიზნებისთვის. მოცემული ინფორმაცია ყალბია. ©${new Date().getFullYear()} გიორგი გოგსაძე.`;
  tableView.render(model.state.table);
  tableView.addHandlerChange(controlTable);
  languageView.render(model.state.language);
  languageView.addHandlerChange(controlLanguage);
  headerNavView.render({
    items: model.state.navItems,
    lang: model.state.language.current,
  });
  homeView.render(model.state);
  orderView.addHandlerSubmitForm(controlOrder);
  starView.render(model.state.star);
  starView.addHandlerStar(controlStar);
  problemView.addHandlerSubmit(controlProblem);
  orderTableView.addHandlerRemoveOrder(controlRemoveOrder);
  orderTableView.addHandlerSubmitOrder(controlSubmitOrder);
  selectionPopupView.addHandlerRenderPopup(controlRenderSelPopup);
};
innit();

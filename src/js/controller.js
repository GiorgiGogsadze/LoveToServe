import * as model from "./model";
import headerNavView from "./views/headerNavView";
import tableView from "./views/tableView";
import homeView from "./views/homeView";
import starView from "./views/starView";
import problemView from "./views/problemView";
import orderView from "./views/orderView";
import orderTableView from "./views/orderTableView";
import selectionPopupView from "./views/selectionPopupView";
import ingredientsView from "./views/ingredientsView";
const controlTable = function (curTable) {
  model.state.table.currentTable = curTable;
  window.localStorage.setItem("currentTable", `${curTable}`);
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
  orderTableView.render(model.state.orders);
};
const controlRemoveOrder = function (orderName) {
  const index = model.state.orders.findIndex((el) => el.name === orderName);
  model.state.orders.splice(index, 1);
  orderTableView.render(model.state.orders);
};

const controlSubmitOrder = function () {
  model.state.submittedOrders.push([...model.state.orders]);
  model.state.orders.splice(0, model.state.orders.length);
  orderTableView.render(model.state.orders);
  console.log([model.state.submittedOrders, model.state.table, new Date()]);
};
const controlRenderSelPopup = function (name) {
  const currentSelection = model.state.seeMore.filter(
    (el) => el.name === name
  )[0];
  selectionPopupView.render(currentSelection);
};
const innit = function () {
  tableView.render(model.state.table);
  tableView.addHandlerChange(controlTable);
  headerNavView.render(model.state.navItems);
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

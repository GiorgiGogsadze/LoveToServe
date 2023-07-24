import * as model from "./model.js";
import headerNavView from "./views/headerNavView.js";
import tableView from "./views/tableView.js";
import homeView from "./views/homeView.js";
import problemView from "./views/problemView.js";
import orderView from "./views/orderView.js";
import orderTableView from "./views/orderTableView.js";
import selectionPopupView from "./views/selectionPopupView.js";
import ingredientsView from "./views/ingredientsView.js";
const controlTable = function (curTable) {
  model.state.table.currentTable = curTable;
  window.localStorage.setItem("currentTable", `${curTable}`);
};
const controlProblem = async function (problem) {
  // console.log([problem, model.state.table.currentTable, new Date()]);
  const res = await axios({
    method: "POST",
    url: `${window.location.origin}/api/v1/problems`,
    data: {
      problemLevel: problem.dop,
      message: problem.message,
      table: model.state.table.currentTable,
      date: Date.now(),
    },
  });
  return res;
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

const controlSubmitOrder = async function () {
  model.state.submittedOrders.push([...model.state.orders]);
  model.state.orders.splice(0, model.state.orders.length);
  orderTableView.render(model.state.orders);
  const currentOrders = model.state.submittedOrders.pop();
  // console.log([currentOrders, model.state.table.currentTable, new Date()]);
  const res = await axios({
    method: "POST",
    url: `${window.location.origin}/api/v1/orders`,
    data: {
      orders: currentOrders,
      table: model.state.table.currentTable,
      date: Date.now(),
    },
  });
  return res;
};
const controlRenderSelPopup = function (name) {
  const currentSelection = model.state.seeMore.filter(
    (el) => el.name === name
  )[0];
  selectionPopupView.render(currentSelection);
};
const innit = async function () {
  tableView.render(model.state.table);
  tableView.addHandlerChange(controlTable);
  headerNavView.render(model.state.navItems);
  homeView.render(model.state);
  orderView.addHandlerSubmitForm(controlOrder);
  await problemView.addHandlerSubmit(controlProblem);
  orderTableView.addHandlerRemoveOrder(controlRemoveOrder);
  await orderTableView.addHandlerSubmitOrder(controlSubmitOrder);
  selectionPopupView.addHandlerRenderPopup(controlRenderSelPopup);
};
await innit();

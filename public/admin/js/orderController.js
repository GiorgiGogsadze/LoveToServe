import { deleteItem } from "./adminscript.js";
const container = document.querySelector(".cards");

const addOrder = (order, place) => {
  const addOrderLines = (orders) => {
    let result = ``;
    orders.forEach((el) => {
      result += `<div class="order-line">
              <span>${el.amount}</span>
              <span>${el.name}</span>
              ${
                el.ingredients
                  ? `<span>${el.ingredients
                      .replaceAll('"', "")
                      .replaceAll(",", ", ")}</span>`
                  : ``
              }
            </div>`;
    });
    return result;
  };
  const price = order.orders.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  const card = `<div class="card" data-id=${order._id}>
          <div class="card__header">
            <span>მაგიდა ${order.table}</span>
            <span>${price} ლარი</span>
            <span>${new Date(order.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            })}</span>
          </div>
          <div class="card__orders">
            ${addOrderLines(order.orders)}
          </div>
          <div class="card__footer">
            <button class="card__done"><span>✔</span>შესრულებულია</button>
            <button class="card__delete"><span>✘</span>წაშლა</button>
          </div>
        </div>`;
  container.insertAdjacentHTML(place, card);
};
const logOrders = async () => {
  const res = await axios({
    method: "GET",
    url: `${window.location.origin}/api/v1/orders`,
  });
  res.data.data.forEach((el) => addOrder(el, "beforeend"));
  if (res.data.data[0]) {
    logLiveOrders(res.data.data[0].date, res.data.data[0]._id);
  } else {
    logLiveOrders(Date.now() - 10000, "5c88fa8cf4afda39709c2955");
  }
};

const logLiveOrders = async (date, id) => {
  let currentDate = date;
  let currentID = id;
  try {
    while (true) {
      const res = await axios({
        method: "GET",
        url: `${window.location.origin}/api/v1/orders/new/${currentDate}/${currentID}`,
      });
      res.data.data.forEach((el) => {
        addOrder(el, "afterbegin");
      });
      currentDate = res.data.data[0].date;
      currentID = res.data.data[0]._id;
    }
  } catch (err) {
    location.reload(true);
  }
};
await logOrders();

container.addEventListener("click", (e) => {
  if (
    e.target.className === "card__done" ||
    e.target.className === "card__delete"
  ) {
    const card = e.target.closest(".card");
    const id = card.dataset.id;
    deleteItem("orders", id, card);
  }
});

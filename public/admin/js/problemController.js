import { deleteItem } from "./adminscript.js";
const container = document.querySelector(".cards");

const addProblem = (problem, place) => {
  const level = new Map([
    ["საგანგაშო", "hard"],
    ["საყურადღებო", "medium"],
    ["მცირე დისკომფორტის შემქმნელი", "light"],
  ]);
  const card = `<div class="card problem-${level.get(
    problem.problemLevel
  )}" data-id=${problem._id}>
          <div class="card__header">
            <span>მაგიდა ${problem.table}</span>
            <span>${problem.problemLevel}</span>
            <span>${new Date(problem.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            })}</span>
          </div>
          <div class="card__message">
            <p>${problem.message}</p>
          </div>
          <div class="card__footer">
            <button class="card__done"><span>✔</span>გამოსწორებულია</button>
            <button class="card__delete"><span>✘</span>წაშლა</button>
          </div>
        </div>`;
  container.insertAdjacentHTML(place, card);
};
const logProblems = async () => {
  const res = await axios({
    method: "GET",
    url: `${window.location.origin}/api/v1/problems`,
  });
  res.data.data.forEach((el) => addProblem(el, "beforeend"));
  if (res.data.data[0]) {
    logLiveProblems(res.data.data[0].date, res.data.data[0]._id);
  } else {
    logLiveProblems(Date.now() - 10000, "5c88fa8cf4afda39709c2955");
  }
};

const logLiveProblems = async (date, id) => {
  let currentDate = date;
  let currentID = id;
  try {
    while (true) {
      const res = await axios({
        method: "GET",
        url: `${window.location.origin}/api/v1/problems/new/${currentDate}/${currentID}`,
      });
      res.data.data.forEach((el) => addProblem(el, "afterbegin"));
      currentDate = res.data.data[0].date;
      currentID = res.data.data[0]._id;
    }
  } catch (err) {
    location.reload(true);
  }
};
await logProblems();
container.addEventListener("click", (e) => {
  if (
    e.target.className === "card__done" ||
    e.target.className === "card__delete"
  ) {
    const card = e.target.closest(".card");
    const id = card.dataset.id;
    deleteItem("problems", id, card);
  }
});

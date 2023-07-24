export const smoothScrool = function (e) {
  e.preventDefault();
  const target = e.target.closest("a");
  if (!target) return;
  const scrollPoint = document.querySelector(`${target.getAttribute(`href`)}`);
  scrollPoint.scrollIntoView({
    behavior: "smooth",
  });
};

export const arrayLoop = function (length, i) {
  return i - length * Math.floor(i / length);
};

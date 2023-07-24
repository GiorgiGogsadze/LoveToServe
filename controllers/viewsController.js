exports.getMainPage = (req, res, next) => {
  res.status(200).render("mainPage");
};
exports.getOrderPage = (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect(`/login`);
  }
  res.status(200).render("orders");
};
exports.getProblemPage = (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect(`/login`);
  }
  res.status(200).render("problems");
};
exports.getLoginPage = (req, res, next) => {
  res.status(200).render("loginPage");
};

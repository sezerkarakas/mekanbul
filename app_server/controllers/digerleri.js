const hakkinda = function (req, res, next) {
  res.render("index", { title: "Hakkında" });
};

module.exports = {
  hakkinda,
};

const homeController = (req, res) => {
  res.status(202).json("I am home route");
};

module.exports = { homeController };

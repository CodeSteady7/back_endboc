module.exports = {
  index: async (req, res) => {
    try {
      res.render("auth/login");
    } catch (err) {
      console.log(err);
    }
  },
};

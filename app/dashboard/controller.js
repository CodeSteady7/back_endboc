module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/dashboard");
    } catch (err) {
      console.log("err", err);
    }
  },
};

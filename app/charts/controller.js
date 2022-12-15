const { Field, voltAfterTrafo } = require("../../models");
const { Op } = require("sequelize");
let { temp_ } = require("../data/control_getonedata");
module.exports = {
  getIndexDate: async (req, res) => {
    try {
      let startDate = "2022-09-23";
      let check;
      // = [
      //   await Field.findAll({
      //     where: {
      //       createdAt: `${startDate}`,
      //     },
      //   }),
      //   await voltAfterTrafo.findAll({
      //     where: {
      //       createdAt: `${startDate}`,
      //     },
      //   }),
      // ];

      check = await temp_(startDate);

      res.status(200).json({ data: check });
    } catch (err) {
      console.log(err);
    }
  },

  index: async (req, res) => {
    let startDate = "2022-09-23";
    let endDate = "2022-12-05";
    try {
      let check = await Field.findAll({
        where: {
          createdAt: {
            [Op.between]: [`${startDate}`, `${endDate}`],
          },
        },
      });

      let date = check.map((item) => {
        return item.createdAt;
      });

      console.log("check", date);

      // res.status(200).json({ data: check });
      res.render("admin/view_charts", { check, date });
    } catch (err) {
      console.log(err);
    }
  },

  actionDateRange: async (req, res) => {
    try {
      const { setDate } = req.body;
      //
      console.log("setDate", setDate);
      let startDate = "";
      let endDate = "";
      let check = await Field.findAll({
        where: {
          createdAt: {
            [Op.between]: [`${startDate}`, `${endDate}`],
          },
        },
      });

      res.redirect(`/charts/${setDate}`);
      //
      // res.status(200).json({ data: setDate });
      //
    } catch (err) {
      console.log(err);
    }
  },

  getIndexDateDetail: async (req, res) => {
    try {
      console.log("err", req.params);
    } catch (err) {
      console.log(err);
    }
  },
};

// let check = await Field.findAll({
//   where: {
//     createdAt: {
//       [Op.between]: [`${startDate}`, `${endDate}`],
//     },
//   },
// });

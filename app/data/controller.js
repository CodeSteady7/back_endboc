const {
  Field,
  loadAmp,
  loadMW,
  Mvar,
  powerFactor,
  voltAfterTrafo,
  voltBeforeTrafo,
  kw_hours,
  genTrafo,
  rect_trafo_liquid_temp,
  visual_check,
  tbl_dsp,
  tbl_gasflow,
  tbl_lube_oil_temp,
  tbl_turbinspeed,
  tbl_vce,
  tbl_lubeoil_bearingtemperature,
  tbl_hvdoil_press,
  tbl_hvdtrip_circuitpress,
  tbl_lubeoil_press,
  tbl_lubeoil_tanktemp,
  tbl_firststage_wheelspace,
  tbl_second_wheelspace,
  tbl_comp_temp,
  tbl_fuel_temp,
  tbl_exhaust_flue_gas_temperature,
  tbl_exhaust_temp,
  tbl_fuelgas_press,
  tbl_compdisch_airpress,
  tbl_diffpress,
  tbl_cooling_water,
  tbl_bently_vibr_unfilter,
  tbl_seismic_vibration,
  tbl_jam,
  tbl_historyDate,
  tbl_signatureform,
} = require("../../models");
const { QueryTypes, Sequelize } = require("sequelize");
const db = require("../../models");
let { temp_ } = require("./control_getonedata");
module.exports = {
  getAllData: async (req, res) => {
    try {
      let CreatedData = ["2022-09-23", "2022-12-03", "2022-09-25"];
      let history = await tbl_historyDate.findAll();

      let temp = [];
      // let setCreatedat = "";
      for (let i = 0; i < history.length; i++) {
        setCreatedat = history[i].length;
        console.log("=>", history[i].createdAt);
        let value = [
          await Field.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await loadAmp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await loadMW.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await Mvar.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await powerFactor.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await voltAfterTrafo.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await voltBeforeTrafo.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await kw_hours.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await genTrafo.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await rect_trafo_liquid_temp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await visual_check.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),

          //
          await tbl_dsp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_gasflow.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_lube_oil_temp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_turbinspeed.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_vce.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),

          await tbl_lubeoil_bearingtemperature.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_hvdoil_press.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_hvdtrip_circuitpress.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_lubeoil_press.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_lubeoil_tanktemp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_firststage_wheelspace.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_second_wheelspace.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_comp_temp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_fuel_temp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),

          await tbl_exhaust_flue_gas_temperature.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_exhaust_temp.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_fuelgas_press.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_compdisch_airpress.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_diffpress.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_cooling_water.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_bently_vibr_unfilter.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
          await tbl_seismic_vibration.findAll({
            where: {
              createdAt: `${history[i].createdAt}`,
            },
          }),
        ];
        temp.push({ value, date: history[i].createdAt });
      }

      // const db_signature = await tbl_signatureform.findOne({
      //   where: { createdat: setCreatedat },
      // });
      // console.log("db_signature", db_signature);
      res.render("admin/table.ejs", {
        data: temp,
      });
      // res.status(200).json({ data: temp });
    } catch (err) {
      console.log(err);
    }
  },
  indexSignature: async (req, res) => {
    try {
      const { createdat } = req.params;
      console.log("req.params, index", createdat);
      // let db_historyDate = await tbl_historyDate.findOne({
      //   where: { createdat: createdat },
      // });

      const db_signature = await tbl_signatureform.findOne({
        where: { createdat: createdat },
      });

      if (db_signature == null || "") {
        res.redirect("/data");
      } else {
        res.render("admin/view_table/view_detailTable", {
          data: { createdat, db_signature },
        });
      }
    } catch (err) {
      console.log("err");
    }
  },
  actionSignature: async (req, res) => {
    try {
      const {
        operation_name_signature01,
        suprv_name_signature01,
        operation_name_signature02,
        suprv_name_signature02,
        operation_name_signature03,
        suprv_name_signature03,
      } = req.body;

      const { createdat } = req.params;

      // console.log("req.params, action", req.params);
      // await tbl_historyDate.findOne({
      //   where: { createdat: createdat },
      // });

      // const db_signature = tbl_signatureform.findOne({
      //   where: { createdAt: createdat },
      // });

      let updateSignature = await tbl_signatureform.update(
        {
          operation_name_signature01,
          suprv_name_signature01,
          operation_name_signature02,
          suprv_name_signature02,
          operation_name_signature03,
          suprv_name_signature03,
        },
        {
          where: {
            createdat: createdat,
          },
        }
      );

      res.redirect("./data");

      // res.status(200).json({ msg: "Success", updateSignature });
    } catch (error) {
      console.log("err", error);
    }
  },
  getOneData: async (req, res) => {
    try {
      const { queryDate } = req.query;
      console.log("queryDate", queryDate);
      const page = req.query.page * 1 || 5;
      // let createdAtdata = ["2022-09-23", "2022-12-03", "2022-09-25"];

      let set_history = [];
      let historyDate = await tbl_historyDate.findAll({
        attributes: ["createdAt"],
      });

      historyDate.map((item) => {
        set_history.push(item.createdAt);
      });

      let checkDate;
      let temp;
      let indexArray;

      const db_signature = await tbl_signatureform.findOne({
        where: { createdat: queryDate },
      });

      checkDate = set_history.includes(`${queryDate}`);
      temp = await temp_(queryDate);
      indexArray = [2, 8, 12];

      res.render("excel/index", {
        checkDate,
        indexArray,
        page,
        set_history,
        data: { queryDate, temp, db_signature },
      });

      // res.status(200).json({
      //   queryDate,
      //   createdAtdata,
      //   checkDate,
      //   indexArray,
      //   page,
      //   data: { queryDate, temp },
      // });
    } catch (err) {
      console.log("err", err);
    }
  },
  paginatePage: async (req, res) => {
    try {
      const page = req.query.page * 1 || 5;

      console.log();
      res.status(200).json({
        page,
      });
    } catch (err) {
      console.log("err", err);
    }
  },
  excel: async (req, res) => {
    try {
      // res.render("excel/index");
    } catch (err) {
      console.log(err);
    }
  },
};

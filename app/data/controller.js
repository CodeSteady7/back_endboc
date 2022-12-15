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
} = require("../../models");
const { QueryTypes, Sequelize } = require("sequelize");
const db = require("../../models");
let { temp_ } = require("./control_getonedata");
module.exports = {
  getAllData: async (req, res) => {
    try {
      let CreatedData = ["2022-09-23", "2022-12-03", "2022-09-25"];
      let history = await tbl_historyDate.findAll();

      // set_history.push(history__);
      let temp = [];

      for (let i = 0; i < history.length; i++) {
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
        // console.log("data => ", value);
        temp.push({ value, date: history[i].createdAt });
      }

      // console.log("object", temp);
      res.render("admin/table.ejs", {
        data: temp,
      });
      // res.status(200).json({ data: temp });
    } catch (err) {
      console.log(err);
    }
  },
  getOneData: async (req, res) => {
    try {
      const { queryDate } = req.query;
      console.log("queryDate", queryDate);
      const page = req.query.page * 1 || 5;
      let createdAtdata = ["2022-09-23", "2022-12-03", "2022-09-25"];

      let set_history = [];
      let history__ = await tbl_historyDate.findAll({
        attributes: ["createdAt"],
      });

      history__.map((item) => {
        set_history.push(item.createdAt);
      });

      console.log("object", set_history);

      let checkDate;
      let temp;
      checkDate = set_history.includes(`${queryDate}`);
      temp = await temp_(queryDate);
      let indexArray = [2, 8, 12];
      // let temp___ = indexArray.map((i) => => {} temp[i].clock);
      // console.log("sample", temp___);
      // console.log("temp_ ===> ", temp);

      res.render("excel/index", {
        checkDate,
        indexArray,
        page,
        set_history,
        data: { queryDate, temp },
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

// const get = await db.sequelize.query(
//   `SELECT tbl_jam.nilai_jam, field.* FROM tbl_jam INNER JOIN field ON tbl_jam.nilai_jam = field.kode_jam WHERE field.createdAt = '${queryDate}'`,
//   { type: QueryTypes.SELECT }
// );

// const dt_clock = await tbl_jam.findAll();

// let temp = [];
// for (let i = 0; i < dt_clock.length; i++) {
//   let get_field = await Field.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });
//   let get_loadamp = await loadAmp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });
//   let get_loadmw = await loadMW.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });
//   let get_mvar = await Mvar.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });
//   let get_powerfactor = await powerFactor.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_voltAfterTrafo = await voltAfterTrafo.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_voltBeforeTrafo = await voltBeforeTrafo.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_kw_hours = await kw_hours.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_genTrafo = await genTrafo.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_rect_trafo_liquid_temp = await rect_trafo_liquid_temp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_visual_check = await visual_check.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });
//   //

//   let get_tbl_dsp = await tbl_dsp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_gasflow = await tbl_gasflow.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_lube_oil_temp = await tbl_lube_oil_temp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_turbinspeed = await tbl_turbinspeed.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_vce = await tbl_vce.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_lubeoil_bearingtemperature =
//     await tbl_lubeoil_bearingtemperature.findAll({
//       where: {
//         createdAt: `${queryDate}`,
//         kode_jam: `${dt_clock[i].nilai_jam}`,
//       },
//     });

//   let get_tbl_hvdoil_press = await tbl_hvdoil_press.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_hvdtrip_circuitpress =
//     await tbl_hvdtrip_circuitpress.findAll({
//       where: {
//         createdAt: `${queryDate}`,
//         kode_jam: `${dt_clock[i].nilai_jam}`,
//       },
//     });

//   let get_tbl_lubeoil_press = await tbl_lubeoil_press.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_lubeoil_tanktemp = await tbl_lubeoil_tanktemp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_firststage_wheelspace =
//     await tbl_firststage_wheelspace.findAll({
//       where: {
//         createdAt: `${queryDate}`,
//         kode_jam: `${dt_clock[i].nilai_jam}`,
//       },
//     });

//   let get_tbl_comp_temp = await tbl_comp_temp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_fuel_temp = await tbl_fuel_temp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_exhaust_flue_gas_temperature =
//     await tbl_exhaust_flue_gas_temperature.findAll({
//       where: {
//         createdAt: `${queryDate}`,
//         kode_jam: `${dt_clock[i].nilai_jam}`,
//       },
//     });

//   let get_tbl_exhaust_temp = await tbl_exhaust_temp.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_fuelgas_press = await tbl_fuelgas_press.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_compdisch_airpress = await tbl_compdisch_airpress.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_diffpress = await tbl_diffpress.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_cooling_water = await tbl_cooling_water.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   let get_tbl_bently_vibr_unfilter =
//     await tbl_bently_vibr_unfilter.findAll({
//       where: {
//         createdAt: `${queryDate}`,
//         kode_jam: `${dt_clock[i].nilai_jam}`,
//       },
//     });

//   let get_tbl_seismic_vibration = await tbl_seismic_vibration.findAll({
//     where: {
//       createdAt: `${queryDate}`,
//       kode_jam: `${dt_clock[i].nilai_jam}`,
//     },
//   });

//   temp.push({
//     clock: dt_clock[i].nilai_jam,
//     value: {
//       get_field,
//       get_loadamp,
//       get_loadmw,
//       get_mvar,
//       get_powerfactor,
//       get_voltAfterTrafo,
//       get_voltBeforeTrafo,
//       get_kw_hours,
//       get_genTrafo,
//       get_rect_trafo_liquid_temp,
//       get_visual_check,
//       get_tbl_dsp,
//       get_tbl_gasflow,
//       get_tbl_lube_oil_temp,
//       get_tbl_turbinspeed,
//       get_tbl_vce,
//       get_tbl_lubeoil_bearingtemperature,
//       get_tbl_hvdoil_press,
//       get_tbl_hvdtrip_circuitpress,
//       get_tbl_lubeoil_press,
//       get_tbl_lubeoil_tanktemp,
//       get_tbl_firststage_wheelspace,
//       tbl_second_wheelspace,
//       get_tbl_comp_temp,
//       get_tbl_fuel_temp,
//       get_tbl_exhaust_flue_gas_temperature,
//       get_tbl_exhaust_temp,
//       get_tbl_fuelgas_press,
//       get_tbl_compdisch_airpress,
//       get_tbl_diffpress,
//       get_tbl_cooling_water,
//       get_tbl_bently_vibr_unfilter,
//       get_tbl_seismic_vibration,
//     },
//   });
// }

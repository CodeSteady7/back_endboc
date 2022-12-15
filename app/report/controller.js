const { tbl_report, tbl_historyReport } = require("../../models");

module.exports = {
  index: async (req, res) => {
    try {
      // let isName = "hai";
      const db_report = await tbl_report.findAll();
      console.log("object", db_report);
      res.render("admin/view_report.ejs", {
        data: db_report,
      });
    } catch (err) {
      console.log(err);
    }
  },

  indexDetail: async (req, res) => {
    try {
      const { id } = req.params;

      const db_report = await tbl_report.findOne({
        where: { id: id },
      });

      res.render("admin/view_detail_report.ejs", {
        data: db_report,
      });
    } catch (err) {
      console.log(err);
    }
  },

  onNotAccept: async (req, res) => {
    try {
      const { id } = req.params;

      let selector = {
        where: { id: id },
      };
      console.log("==>", id);
      await tbl_report.update(
        {
          status: "03",
        },
        selector
      );

      res.redirect("/report");
    } catch (err) {
      console.log(err);
    }
  },

  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("object", id);
      await tbl_report.destroy({
        where: { id: id },
      });

      res.redirect("/report");
    } catch (err) {
      console.log(err);
    }
  },

  actionCreateHistoryReport: async (req, res) => {
    try {
      const {
        judul,
        lokasi,
        deskripsi,
        reportRepair,
        user_id,
        status,
        report_id,
      } = req.body;
      const { id } = req.params;
      const img = req.file;

      let checkHistory = await tbl_report.findOne({
        where: { id: id },
      });
      console.log("object", checkHistory, req.body);

      let selector = {
        where: { id: id },
      };
      console.log("==>", id);
      await tbl_report.update(
        {
          status: "03",
        },
        selector
      );

      // if (req.file) {
      //   let tmp_path = file.path;
      //   let originalExt =
      //     file.originalname.split(".")[file.originalname.split(".").length - 1];
      //   let filename = file.fieldname + "-" + file.filename + "." + originalExt;
      //   let target_path = path.resolve(
      //     config.rootPath,
      //     `public/data/uploads/${filename}.jpeg`
      //   );

      //   const src = fs.createReadStream(tmp_path);
      //   const dest = fs.createWriteStream(target_path);
      //   src.pipe(dest);

      //   src.on("end", async () => {
      try {
        //
        await tbl_historyReport.create({
          judul: checkHistory.judul,
          lokasi: checkHistory.lokasi,
          deskripsi: checkHistory.deskripsi,
          imageBase64: checkHistory.imageBase64,
          status: checkHistory.status,
          reportRepair: reportRepair,
          user_id: 1,
          report_id: id,
        });

        res.redirect("/report");
      } catch (err) {
        console.log(err);
      }
      // });
      // }
    } catch (err) {
      console.log(err);
    }
  },
};

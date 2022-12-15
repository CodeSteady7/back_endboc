$(async function () {
  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  // console.log("err", "<%=check%>")
  let api_date = "http://localhost:4000/charts/date";
  let setData;
  let fetchData = await fetch(api_date, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      setData = data;
    });

  // console.log("object", setData);

  // -----------------------------------------------------
  let setClock = [];
  //-FIELD
  let setValueA_Field = [];
  let setValueV_Field = [];
  //-VOLTAGE BEFORE TRAFO
  let setValueV_VoltBeforeTrafo = [];
  //-VOLTAGE AFTER TRAFO
  let valueVolta1_2_VoltAfterTrafo = [];
  let valueVolta2_3_VoltAfterTrafo = [];
  let valueVolta3_1_VoltAfterTrafo = [];
  //-LOAD (AMP)
  let _1_LoadAmp = [];
  let _2_LoadAmp = [];
  let _3_LoadAmp = [];
  //-POWER FACTOR

  for (let i = 0; i < setData.data.length; i++) {
    setClock.push(setData.data[i].clock);
    //
    setValueA_Field.push(
      setData.data[i].value.get_field[0]?.valueAField === undefined
        ? 0
        : setData.data[i].value.get_field[0]?.valueAField
    );
    setValueV_Field.push(
      setData.data[i].value.get_field[0]?.valueVField === undefined
        ? 0
        : setData.data[i].value.get_field[0]?.valueVField
    );
    //
    setValueV_VoltBeforeTrafo.push(
      setData.data[i].value.get_voltBeforeTrafo[0]?.valueV_BT === undefined
        ? 0
        : setData.data[i].value.get_voltBeforeTrafo[0]?.valueV_BT
    );
    //
    valueVolta1_2_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta1_2 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta1_2
    );
    valueVolta2_3_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta2_3 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta2_3
    );
    valueVolta3_1_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta3_1 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta3_1
    );
    //
    _1_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value1Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value1Loadamp
    );
    _2_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value2Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value2Loadamp
    );
    _3_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value3Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value3Loadamp
    );

    // console.log("object", _1_LoadAmp);
  }

  var chartField = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValueV_Field,
      },
      {
        label: "A",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValueA_Field,
      },
    ],
  };

  var chartVoltageBeforeTrafo = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValueV_VoltBeforeTrafo,
      },
    ],
  };
  //

  var voltAfterChartData = {
    labels: setClock,
    datasets: [
      {
        label: "1-2",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: valueVolta1_2_VoltAfterTrafo,
      },
      {
        label: "2-3",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: valueVolta2_3_VoltAfterTrafo,
      },
      {
        label: "3-1",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: valueVolta3_1_VoltAfterTrafo,
      },
    ],
  };
  //

  var chartPowerFactor = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 1)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValueV_Field,
      },
    ],
  };

  //

  var loadAMPChartData = {
    labels: setClock,
    datasets: [
      {
        label: "1",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: _1_LoadAmp,
      },
      {
        label: "2",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: _2_LoadAmp,
      },
      {
        label: "3",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: _3_LoadAmp,
      },
    ],
  };
  //

  let areaChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  //-------------
  //- BAR CHART FIELD -
  //-------------
  var fieldChartCanvas = $("#barChart").get(0).getContext("2d");
  var fieldChartData = $.extend(true, {}, chartField);
  var field_temp0 = chartField.datasets[0];
  var field_temp1 = chartField.datasets[1];
  fieldChartData.datasets[0] = field_temp1;
  fieldChartData.datasets[1] = field_temp0;

  var fieldChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(fieldChartCanvas, {
    type: "bar",
    data: fieldChartData,
    options: fieldChartOptions,
  });

  // VOLTAGE BEFORE TRAFO

  //-------------
  //- BAR CHART VOLTBEFTRAFO -
  //-------------
  var voltBefTrafoChartCanvas = $("#voltBeforeTrafoChart")
    .get(0)
    .getContext("2d");
  var voltBefTrafoChartData = $.extend(true, {}, chartVoltageBeforeTrafo);
  var voltbefore_temp0 = chartVoltageBeforeTrafo.datasets[0];
  voltBefTrafoChartData.datasets[0] = voltbefore_temp0;

  var voltBefTrafoChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(voltBefTrafoChartCanvas, {
    type: "bar",
    data: voltBefTrafoChartData,
    options: voltBefTrafoChartOptions,
  });

  //-------------
  //- LINE CHART - VOLTAGE AFTER TRAFO
  //--------------
  var lineChartCanvas = $("#voltAfterTrafoChart").get(0).getContext("2d");
  var lineChartOptions = $.extend(true, {}, areaChartOptions);
  var lineChartData = $.extend(true, {}, voltAfterChartData);
  lineChartData.datasets[0].fill = false;
  lineChartData.datasets[1].fill = false;
  lineChartData.datasets[2].fill = false;
  lineChartOptions.datasetFill = false;

  var lineChart = new Chart(lineChartCanvas, {
    type: "line",
    data: lineChartData,
    options: lineChartOptions,
  });

  //-------------
  //- LINE CHART -LOAD AMP CHART
  //--------------
  var lineChartCanvas = $("#loadAmpChart").get(0).getContext("2d");
  var lineChartOptions = $.extend(true, {}, areaChartOptions);
  var lineChartData = $.extend(true, {}, loadAMPChartData);
  lineChartData.datasets[0].fill = false;
  lineChartData.datasets[1].fill = false;
  lineChartData.datasets[2].fill = false;
  lineChartOptions.datasetFill = false;

  var lineChart = new Chart(lineChartCanvas, {
    type: "line",
    data: lineChartData,
    options: lineChartOptions,
  });

  //-------------
  //- BAR CHART FIELD -
  //-------------
  var powerfactorChartCanvas = $("#powerfactorChart").get(0).getContext("2d");
  var powerfactorChartData = $.extend(true, {}, chartPowerFactor);
  var powerfactor_temp0 = chartPowerFactor.datasets[0];
  powerfactorChartData.datasets[0] = powerfactor_temp0;

  var powerfactorChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(powerfactorChartCanvas, {
    type: "bar",
    data: powerfactorChartData,
    options: powerfactorChartOptions,
  });
});

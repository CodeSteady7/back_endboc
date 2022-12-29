export function myFunction() {
  return "testing";
}

export const setChartBar = async (
  value,
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3
) => {
  if (value == 1) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 1)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
      ],
    };
    return chartBar;
  } else if (value == 2) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
      ],
    };
    return chartBar;
  } else if (value == 3) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
      ],
    };
    return chartBar;
  }
};

export const setChartLine = async (
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3
) => {
  let chartLine = {
    labels: setClock,
    datasets: [
      {
        label: `${setLabel_1}`,
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValue_1,
      },
      {
        label: `${setLabel_2}`,
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValue_2,
      },
      {
        label: `${setLabel_3}`,
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValue_3,
      },
    ],
  };
  return chartLine;
};

export const setChartMultiLine = async (
  value,
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3,
  setLabel_4,
  setValue_4,
  setLabel_5,
  setValue_5,
  setLabel_6,
  setValue_6,
  setLabel_7,
  setValue_7,
  setLabel_8,
  setValue_8,
  setLabel_9,
  setValue_9,
  setLabel_10,
  setValue_10
) => {
  if (value == 4) {
    let chartLine = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
        {
          label: `${setLabel_4}`,
          backgroundColor: "rgba(242, 231, 55,0.9)",
          borderColor: "rgba(242, 231, 55,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(242, 231, 55,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 231, 55,1)",
          data: setValue_4,
        },
      ],
    };
    return chartLine;
  } else if (value == 10) {
    let chartLine = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
        {
          label: `${setLabel_4}`,
          backgroundColor: "rgba(242, 231, 55,0.9)",
          borderColor: "rgba(242, 231, 55,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(242, 231, 55,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 231, 55,1)",
          data: setValue_4,
        },
        {
          label: `${setLabel_5}`,
          backgroundColor: "rgba(242, 91, 55, 1)",
          borderColor: "rgba(242, 91, 55, 1)",
          pointRadius: false,
          pointColor: "rgba(242, 91, 55, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_5,
        },
        {
          label: `${setLabel_6}`,
          backgroundColor: "rgba(242, 165, 55,  0.8)",
          borderColor: "rgba(242, 165, 55,  0.8)",
          pointRadius: false,
          pointColor: "rgba(242, 165, 55,  0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 165, 55,  0.8)",
          data: setValue_6,
        },
        {
          label: `${setLabel_7}`,
          backgroundColor: "rgba(53, 36, 102,0.9)",
          borderColor: "rgba(53, 36, 102,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(53, 36, 102,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(53, 36, 102,0.8)",
          data: setValue_7,
        },
        {
          label: `${setLabel_8}`,
          backgroundColor: "rgba(37, 35, 41,  1)",
          borderColor: "rgba(37, 35, 41,  1)",
          pointRadius: false,
          pointColor: "rgba(37, 35, 41,  1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(37, 35, 41,  1)",
          data: setValue_8,
        },
        {
          label: `${setLabel_9}`,
          backgroundColor: "rgba(92, 12, 23, 0.8)",
          borderColor: "rgba(92, 12, 23, 0.8)",
          pointRadius: false,
          pointColor: "rgba(92, 12, 23, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(92, 12, 23, 0.8)",
          data: setValue_9,
        },
        {
          label: `${setLabel_10}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_10,
        },
      ],
    };
    return chartLine;
  }
};

export const setAreaChartOptions = async () => {
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

  return areaChartOptions;
};

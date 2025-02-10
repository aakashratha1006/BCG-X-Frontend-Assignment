// Helper function to generate random number between min and max
const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to generate quarterly data based on stackId
const generateQuarterlyData = (stackId) => {
  const historicalData = [
    { quarter: 'Q2 2022', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q3 2022', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q4 2022', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q1 2023', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q2 2023', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q3 2023', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q4 2023', historical: getRandomValue(10000, 99000) },
    { quarter: 'Q1 2024', historical: getRandomValue(10000, 99000) }
  ];

  const forecastData = [
    { 
      quarter: 'Q2 2024', 
      aiForecast: getRandomValue(10000, 99000), 
      finalForecast: getRandomValue(10000, 99000) 
    },
    { 
      quarter: 'Q3 2024', 
      aiForecast: getRandomValue(10000, 99000), 
      finalForecast: getRandomValue(10000, 99000) 
    },
    { 
      quarter: 'Q4 2024', 
      aiForecast: getRandomValue(10000, 99000), 
      finalForecast: getRandomValue(10000, 99000) 
    },
    { 
      quarter: 'Q1 2025', 
      aiForecast: getRandomValue(10000, 99000), 
      finalForecast: getRandomValue(10000, 99000) 
    }
  ];

  // Generate confidence intervals
  const confidenceInterval = {
    upper: Array(8).fill().map(() => getRandomValue(70000, 99000)),
    lower: Array(8).fill().map(() => getRandomValue(10000, 40000))
  };

  return {
    quarterlyData: [...historicalData, ...forecastData],
    confidenceInterval
  };
};

const mockData = [
  {
    id: 1,
    name: "City 1",
    value1: "45.7M",
    value2: "65%",
    trend1: "up",
    trend2: "down",
    data1: [10, 20, 15, 25, 30, 20, 15],
    data2: [5, 15, 10, 20, 25, 18, 12],
    stacks: [
      {
        stackId: "0998374651",
        selected: true,
        ...generateQuarterlyData("0998374651"),
        forecast: {
          ai: "89%",
          final: "80%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374652",
        selected: false,
        ...generateQuarterlyData("0998374652"),
        forecast: {
          ai: "85%",
          final: "78%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
    {
    id: 2,
    name: "City 2",
    value1: "79.2T",
    value2: "62%",
    trend1: "up",
    trend2: "down",
    data1: [12, 22, 18, 28, 33, 23, 19],
    data2: [6, 16, 12, 22, 27, 19, 14],
    stacks: [
      {
        stackId: "0998374657",
        selected: true,
        ...generateQuarterlyData("0998374657"),
        forecast: {
          ai: "92%",
          final: "85%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374658",
        selected: false,
        ...generateQuarterlyData("0998374658"),
        forecast: {
          ai: "88%",
          final: "83%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
  {
    id: 3,
    name: "City 3",
    value1: "567.5M",
    value2: "56%",
    trend1: "up",
    trend2: "down",
    data1: [8, 18, 14, 24, 29, 21, 17],
    data2: [4, 14, 9, 19, 24, 17, 11],
    stacks: [
      {
        stackId: "0998374663",
        selected: true,
        ...generateQuarterlyData("0998374663"),
        forecast: {
          ai: "78%",
          final: "75%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(550, 30),
          lower: generateQuarterlyData(450, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374658",
        selected: false,
        ...generateQuarterlyData("0998374658"),
        forecast: {
          ai: "88%",
          final: "83%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
  {
    id: 4,
    name: "City 4",
    value1: "567.5M",
    value2: "56%",
    trend1: "up",
    trend2: "down",
    data1: [8, 18, 14, 24, 29, 21, 17],
    data2: [4, 14, 9, 19, 24, 17, 11],
    stacks: [
      {
        stackId: "0998374663",
        selected: true,
        ...generateQuarterlyData("0998374663"),
        forecast: {
          ai: "78%",
          final: "75%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(550, 30),
          lower: generateQuarterlyData(450, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374658",
        selected: false,
        ...generateQuarterlyData("0998374658"),
        forecast: {
          ai: "88%",
          final: "83%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
  {
    id: 5,
    name: "City 5",
    value1: "566.9M",
    value2: "66%",
    trend1: "up",
    trend2: "down",
    data1: [8, 18, 14, 24, 29, 21, 17],
    data2: [4, 14, 9, 19, 24, 17, 11],
    stacks: [
      {
        stackId: "0998374663",
        selected: true,
        ...generateQuarterlyData("0998374663"),
        forecast: {
          ai: "78%",
          final: "75%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(550, 30),
          lower: generateQuarterlyData(450, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374658",
        selected: false,
        ...generateQuarterlyData("0998374658"),
        forecast: {
          ai: "88%",
          final: "83%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
  {
    id: 6,
    name: "City 6",
    value1: "567.5M",
    value2: "56%",
    trend1: "up",
    trend2: "down",
    data1: [8, 18, 14, 24, 29, 21, 17],
    data2: [4, 14, 9, 19, 24, 17, 11],
    stacks: [
      {
        stackId: "0998374663",
        selected: true,
        ...generateQuarterlyData("0998374663"),
        forecast: {
          ai: "78%",
          final: "75%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(550, 30),
          lower: generateQuarterlyData(450, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374658",
        selected: false,
        ...generateQuarterlyData("0998374658"),
        forecast: {
          ai: "88%",
          final: "83%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(650, 30),
          lower: generateQuarterlyData(550, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374653",
        selected: false,
        ...generateQuarterlyData("0998374653"),
        forecast: {
          ai: "87%",
          final: "82%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374654",
        selected: false,
        ...generateQuarterlyData("0998374654"),
        forecast: {
          ai: "91%",
          final: "84%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374655",
        selected: false,
        ...generateQuarterlyData("0998374655"),
        forecast: {
          ai: "83%",
          final: "76%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      },
      {
        stackId: "0998374656",
        selected: false,
        ...generateQuarterlyData("0998374656"),
        forecast: {
          ai: "86%",
          final: "79%"
        },
        confidenceInterval: {
          upper: generateQuarterlyData(450, 30),
          lower: generateQuarterlyData(350, 30)
        },
        dataTable: {
          data1: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data2: Array(8).fill().map(() => getRandomValue(10000, 99000)),
          data3: Array(8).fill().map(() => getRandomValue(10000, 99000))
        }
      }
    ]
  },
];

// Helper functions to access the data
export const getCityById = (id) => mockData.find(city => city.id === id);
export const getAllCities = () => mockData;
export const getCityQuarterlyData = (id) => {
  const city = getCityById(id);
  return city ? city.quarterlyData : [];
};
export const getCityConfidenceInterval = (id) => {
  const city = getCityById(id);
  return city ? city.confidenceInterval : { upper: [], lower: [] };
};
export const getCityDataTable = (id) => {
  const city = getCityById(id);
  return city ? city.dataTable : null;
};

export default mockData;

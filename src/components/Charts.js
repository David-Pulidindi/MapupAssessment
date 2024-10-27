import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ data }) => {
 
  const makeCounts = {};
  const rangeCounts = {};

  data.forEach(item => {
    const make = item.Make;
    const electricRange = item['Electric Range'];

    if (make) {
      makeCounts[make] = (makeCounts[make] || 0) + 1;
    }

    
    if (electricRange) {
      const range = electricRange > 300 ? 'Over 300' : electricRange > 200 ? '201-300' : 'Under 200';
      rangeCounts[range] = (rangeCounts[range] || 0) + 1;
    }
  });

 
  const makeLabels = Object.keys(makeCounts);
  const makeData = Object.values(makeCounts);

  const rangeLabels = Object.keys(rangeCounts);
  const rangeData = Object.values(rangeCounts);

  const makeChartData = {
    labels: makeLabels,
    datasets: [
      {
        label: 'Number of EVs by Make',
        data: makeData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const rangeChartData = {
    labels: rangeLabels,
    datasets: [
      {
        label: 'Number of EVs by Electric Range',
        data: rangeData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="charts">
      <h2>Electric Vehicle Makes</h2>
      <Bar data={makeChartData} />
      
      <h2>Electric Vehicle Range Distribution</h2>
      <Bar data={rangeChartData} />
    </div>
  );
};

export default Charts;

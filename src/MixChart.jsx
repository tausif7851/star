import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import 'chartjs-adapter-date-fns'; // Import the chartjs date adapter

// Helper functions to generate random data
const getRandomArray = (numItems) => {
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for (let i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
};

const getRandomDateArray = (numItems) => {
  let data = [];
  let baseTime = new Date('2025-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for (let i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
};

const getData = () => {
  let data = [];
  data.push({
    title: 'Visits',
    data: getRandomDateArray(150)
  });
  data.push({
    title: 'Categories',
    data: getRandomArray(20)
  });
  data.push({
    title: 'Categories',
    data: getRandomArray(10)
  });
  data.push({
    title: 'Data 4',
    data: getRandomArray(6)
  });
  return data;
};

// LineChart Component
const LineChart = ({ data, title, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'time',  // Time scale
            time: {
              unit: 'week'  // You can adjust the unit as needed
            }
          },
          y: {
            ticks: {
              min: 0
            }
          }
        }
      },
      data: {
        labels: data.map(d => d.time), // This will be the time data for the x-axis
        datasets: [{
          label: title,
          data: data.map(d => d.value),
          fill: 'none',
          backgroundColor: color,
          pointRadius: 2,
          borderColor: color,
          borderWidth: 1,
          lineTension: 0
        }]
      }
    });
    return () => myChart.destroy(); // Cleanup on component unmount
  }, [data, title, color]);

  return <canvas ref={canvasRef} />;
};

// App Component
const MixChart = () => {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getData());
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div >
      <div className="main chart-wrapper">
        <LineChart
          data={data[0].data}
          title={data[0].title}
          color="#3E517A"
        />
      </div>
      {/* Other chart components here */}
    </div>
  );
};

export default MixChart;

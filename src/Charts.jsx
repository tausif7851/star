import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Ensure you're importing Chart.js
import MixChart from './MixChart';

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
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
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

// BarChart Component
const BarChart = ({ data, title, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(canvasRef.current, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
      },
      data: {
        labels: data.map(d => d.label),
        datasets: [{
          label: title,
          data: data.map(d => d.value),
          backgroundColor: color
        }]
      }
    });
    return () => myChart.destroy(); // Cleanup on component unmount
  }, [data, title, color]);

  return <canvas ref={canvasRef} />;
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
            type: 'time',
            time: {
              unit: 'week'
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
        labels: data.map(d => d.time),
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

// DoughnutChart Component
const DoughnutChart = ({ data, title, colors }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(canvasRef.current, {
      type: 'doughnut',
      options: {
        maintainAspectRatio: false
      },
      data: {
        labels: data.map(d => d.label),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: colors
        }]
      }
    });
    return () => myChart.destroy(); // Cleanup on component unmount
  }, [data, title, colors]);

  return <canvas ref={canvasRef} />;
};

// App Component
const Charts = () => {
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
        <MixChart/>
      </div>
      <div className="sub chart-wrapper">
        <BarChart
          data={data[1].data}
          title={data[1].title}
          color="#70CAD1"
        />
      </div>
      <div className="sub chart-wrapper">
        <BarChart
          data={data[2].data}
          title={data[2].title}
          color="#B08EA2"
        />
      </div>
      <div className="sub chart-wrapper">
        <DoughnutChart
          data={data[3].data}
          title={data[3].title}
          colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
        />
      </div>
    </div>
  );
};

export default Charts;

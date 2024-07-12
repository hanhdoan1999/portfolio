import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useDarkMode } from '../../Context/useDarkMode';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const data = {
    labels: ['HTML, CSS', 'JS, React',  'Bootstrap, TailwindCSS',
       'Typescript,  Material UI', 'Gatsby', 'Wordpress', 'Next'],
    datasets: [
      {
        label: 'Skill Level',
        data: [ 80, 70, 70, 50, 50, 50, 30],
        backgroundColor: darkMode ? '#ffffff45' : 'rgba(255, 99, 132, 0.2)', // Màu hồng nhạt
        borderColor:  darkMode ? 'white' : 'rgba(255, 99, 132, 1)', // Màu hồng đậm
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Đặt trục y thành trục chính để biểu đồ hiển thị theo chiều ngang
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'My Skills',
      },
    },
    scales: {
      x: {
        max: 100, // Đặt giá trị tối đa cho trục x là 100
        ticks: {
          color: darkMode ? 'white' : '#45577B', // Màu chữ cho trục x
          font: {
            family: 'Manrope', // Font chữ cho trục x
            size: 14, // Kích thước font cho trục x
          },
          callback: function(value) {
            return value + '%'; // Thêm dấu % vào các giá trị trên trục x
          },
        },
      },
      y: {
        ticks: {
          color: darkMode ? 'white' : '#45577B', // Màu chữ cho trục x
          font: {
            family: 'Manrope', // Font chữ cho trục x
            size: 14, // Kích thước font cho trục x
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillsChart;

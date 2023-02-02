import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import styled from "styled-components";

// start - https://react-chartjs-2.js.org/
// demo - https://react-chartjs-2.js.org/examples/line-chart

// npm 명령어 - npm install --save chart.js react-chartjs-2
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const lineData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random()*100)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      lineTension:0.4  // 1에 가까울 수록 곡선이 심해진다.
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random()*100)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const SubTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
`;

const BoxChart = styled.div`
  width: 400px;
`;

export const Chart = () =>{
  
  
  return (
    <>
      <SubTitle>1. 원형차트</SubTitle>
      <BoxChart>
        <Doughnut data={data} />
      </BoxChart>
      <SubTitle>2. 선형차트</SubTitle>
      <BoxChart>
        <Line options={options} data={lineData} />
      </BoxChart>
    </>
  )
}
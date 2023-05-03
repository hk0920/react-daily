import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler, RadialLinearScale } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut, Line, Radar } from "react-chartjs-2";
import styled from "styled-components";

// start - https://react-chartjs-2.js.org/
// demo - https://react-chartjs-2.js.org/examples/line-chart

// npm 명령어 - npm install --save chart.js react-chartjs-2
// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  ArcElement,
  RadialLinearScale,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Html5', 'Css', 'Sass', 'Jquery', 'JavaScript', 'React', 'TypeScript', 'StyledComponents', 'Git', 'GitHub'],
  datasets: [
    {
      label: '# of Votes',
      data: [40, 40, 20, 50, 30, 20, 10, 10, 40, 40],
      backgroundColor: [
        'rgba(227, 79, 38, 0.2)',
        'rgba(21, 114, 182, 0.2)',
        'rgba(204, 102, 153, 0.2)',
        'rgba(21, 114, 182, 0.2)',
        'rgba(247, 223, 30, 0.2)',
        'rgba(97, 218, 251, 0.2)',
        'rgba(21, 114, 182, 0.2)',
        'rgba(204, 102, 153, 0.2)',
        'rgba(240, 80, 20, 0.2)',
        'rgba(24, 23, 23, 0.2)',
      ],
      borderColor: [
        'rgba(227, 79, 38, 1)',
        'rgba(21, 114, 182, 1)',
        'rgba(204, 102, 153, 1)',
        'rgba(21, 114, 182, 1)',
        'rgba(247, 223, 30, 1)',
        'rgba(97, 218, 251, 1)',
        'rgba(21, 114, 182, 1)',
        'rgba(204, 102, 153, 1)',
        'rgba(240, 80, 20, 1)',
        'rgba(24, 23, 23, 1)',
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

// export const RadarData = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Skill',
//       data: [90, 90, 70, 90, 60, 60, 70, 60, 80, 80],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//     {
//       label: 'Skill2',
//       data: [100, 50, 60, 40, 50, 20, 100, 100, 100, 100, 80],
//       backgroundColor: 'rgba(0, 99, 132, 0.2)',
//       borderColor: 'rgba(0, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// }

const SubTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
`;

const BoxChart = styled.div`
  width: 400px;
`;

export const Chart = () =>{
  const [dataLabels, setLabels] = useState<string[]>([]);

  const arrSkillLang = ['Html5', 'Css', 'Sass', 'Jquery', 'JavaScript', 'React', 'TypeScript', 'StyledComponents', 'Git', 'GitHub'];
  arrSkillLang.map((item)=>{
    dataLabels.push(item);
  })
  // setLabels('Html5', 'Css', 'Sass', 'Jquery', 'JavaScript', 'React', 'TypeScript', 'StyledComponents', 'Git', 'GitHub');

  const RadarData = {
    labels: dataLabels,
    datasets: [
      {
        label: 'Skill',
        data: [90, 90, 70, 90, 60, 60, 70, 60, 80, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Skill2',
        data: [100, 50, 60, 40, 50, 20, 100, 100, 100, 100, 80],
        backgroundColor: 'rgba(0, 99, 132, 0.2)',
        borderColor: 'rgba(0, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }

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
      <SubTitle>3. 다각형 차트</SubTitle>
      <BoxChart>
        <Radar data={RadarData} id="chart" />;
      </BoxChart>
    </>
  )
}
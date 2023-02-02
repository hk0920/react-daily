import styled from 'styled-components';
import { Chart } from './components/Chart';

const BoxSection = styled.section`
  padding: 10px 10px; 
  &:not(:first-child){
    margin-top: 50px;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

export const App = () => {
  return (
    <div className="App">
      <BoxSection>
        <Title>차트(react-chartjs-2)</Title>
        <Chart/>
      </BoxSection>
    </div>
  );
}
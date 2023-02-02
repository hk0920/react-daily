<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> 16668860c28f43b836128d10b61578004b1ee732

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './app.css';
import Calendario from './components/calendario'

const App = () => {
  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth(); 
  const [dataAtual, setDataAtual] = useState(new Date(year, month, 1));
  const [proximaData, setProximaData] = useState(new Date(year, month + 1, 1));
  
  const avancaMes = () => {
    setDataAtual(proximaData);
    let ano = proximaData.getFullYear();
    let mes = proximaData.getMonth();
    let novaData = new Date(ano, mes + 1, 1)
    setProximaData(novaData);
  };

  const voltaMes = () => {
    setProximaData(dataAtual);
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth();
    let novaData = new Date(ano, mes - 1, 1)
    setDataAtual(novaData);
  }

  return (
    <Container>
      <Row className='match-height'>
        <Col lg='2'>
        </Col>
        <Col lg='10'>
          <Col lg='4'>
            <Col>
              <Calendario data={dataAtual} primeiroMes={true} avancar={avancaMes} voltar={voltaMes} />
            </Col>
            <Col>
              <Calendario data={proximaData} primeiroMes={false} />
            </Col>
          </Col>
          <Col lg='4'>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default App;

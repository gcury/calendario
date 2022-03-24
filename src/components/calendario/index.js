import React, { useEffect, useState, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { ChevronLeft, ChevronRight } from 'react-feather'
import './calendario.css';

const Calendario = (props) => {
  const { data, primeiroMes, avancar, voltar } = props;

  const dias = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  const [calendario, setCalendario] = useState([]);
  const [ativo, setAtivo] = useState(null);
  const nomeMes = data.toLocaleString('default', { month: 'long' });
  const year = data.getFullYear();

  useEffect(() => {
    let month = data.getMonth();
    let dayWeek = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month + 1, 0).getDate();
    let totalDias = [];
    dias.map((d) => {
      if (d <= lastDay) {
        totalDias.push(d);
      }
      return totalDias;
    });

    for (let i = 0; i < dayWeek; i++) {
      totalDias.unshift('');
    }

    setCalendario(totalDias);
  }, [data]);

  const diaAtivo = (sel) => {
    if (sel === ativo) {
      return 'dias active'
    } else {
      return 'dias'
    }
  }

  return (
    <Fragment>
      <div className='d-flex justify-content-between'>
        <span>{nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1) + ', ' + year}</span>
        {primeiroMes ?
          <div>
            <Button size='sm' onClick={() => voltar()}>
              <ChevronLeft />
            </Button>
            <Button size='sm'>
              <ChevronRight onClick={() => avancar()} />
            </Button>
          </div>
          : null
        }

      </div>
      <div className='calendario'>
        <div className='espacoDias'>
          <span className='diasHeader'>D</span>
          <span className='diasHeader'>S</span>
          <span className='diasHeader'>T</span>
          <span className='diasHeader'>Q</span>
          <span className='diasHeader'>Q</span>
          <span className='diasHeader'>S</span>
          <span className='diasHeader'>S</span>
          {calendario.map((item, i) => (
            item ?
              <span key={i} className={diaAtivo(i)} onClick={() => {
                if (ativo === null || ativo !== i) {
                  setAtivo(i);
                } else {
                  setAtivo(null);
                }
              }}>
                <span>{item}</span>
                <div className='espacoDot'>
                </div>
              </span>
              : <span key={i} />
          ))}
        </div>
      </div>
    </Fragment >
  )
}

export default Calendario;

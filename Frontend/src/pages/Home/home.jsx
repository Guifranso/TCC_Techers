import "./style.scss";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

function Home() {
  const [diaSelecionado,setDiaSelecionado] = useState()
  const [novoItem,setNovoItem] = useState()
  const [dias,setDias] = useState([
    {
      dia:1,
      anotacoes:[""],
    },
    {
      dia:2,
      anotacoes:[""],
    },
    {
      dia:3,
      anotacoes:[""],
    },
    {
      dia:4,
      anotacoes:[""],
    },
    {
      dia:5,
      anotacoes:[""],
    },
    {
      dia:6,
      anotacoes:[""],
    },
    {
      dia:7,
      anotacoes:[""],
    },
    {
      dia:8,
      anotacoes:[""],
    },
    {
      dia:9,
      anotacoes:[""],
    },
    {
      dia:10,
      anotacoes:[""],
    },
    {
      dia:11,
      anotacoes:[""],
    },
    {
      dia:12,
      anotacoes:[""],
    },
    {
      dia:13,
      anotacoes:[""],
    },
    {
      dia:14,
      anotacoes:[""],
    },

  ]);
  const [diaObj, setDiaObj] = useState()
  const defineDiaObj = (e) => {
    localStorage.setItem('diaSelecionado', e.dia)
    console.log(localStorage.getItem('diaSelecionado'));
    dias.map((e) => {
      if(e.dia == localStorage.getItem('diaSelecionado')) {
        localStorage.setItem('diaObj', JSON.stringify(e));
        setDiaObj(e)
      }
    })
  }
  const adicionaItem = () => {
    var diaAux = JSON.parse(localStorage.getItem('diaObj'))
    diaAux.anotacoes = novoItem;
    localStorage.setItem('diaObj', JSON.stringify(diaAux))
    dias.map((e) => {
      if(e.dia == localStorage.getItem('diaSelecionado')) {
        e.anotacoes = novoItem
        console.log(dias);
      }
  })}
  const userLogado = localStorage.getItem("logado");
  if (userLogado === false || userLogado == null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main">
      <header>
        <div className="headerDiv">
          <Logo />
          <p>product</p>
          <p>overview</p>
          <p>contact</p>
        </div>
        <div className="headerDiv">
          <p>lua</p>
          <p>login</p>
          <p>cadastro</p>
        </div>
      </header>
      <main>
        <div className="calendario">
          <ul className="listaDias">
            <li>Domingo</li>
            <li>Segunda</li>
            <li>Terça</li>
            <li>Quarta</li>
            <li>Quinta</li>
            <li>Sexta</li>
            <li>Sábado</li>
          </ul>
          <div className="gridContainer">
            {dias.map((e) => {
              return (
                <div onClick={ () => {defineDiaObj(e)}} className="gridItem">
                <div className="molduraText">
                  <p>{e.dia}</p>
                  <p>:</p>
                </div>
              </div>
              );
            })}
            
          </div>
        </div>
        
        <div className="popUp">
          <div>

          </div>
          <p>Tarefas para o </p>
          <div>
            <p></p>
            <form>
            <input onChange={(e) => {setNovoItem(e.target.value);console.log(e.target.value);}} placeholder="Insira um novo item"></input>
            <input onChange={(e) => {setNovoItem(e.target.value);console.log(e.target.value);}} placeholder="Insira a data de entrega"></input>
            <p onClick={() => {adicionaItem()}}>Adicionar Item</p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
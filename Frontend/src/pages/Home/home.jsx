import "./style.scss";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'


function Home() {

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
            <div className="gridItem">
              <div className="molduraText">
                <p>01</p>
                <p>:</p>
              </div>
            </div>
            <div className="gridItem">
              <div className="molduraText">
                <p>02</p>
                <p>:</p>
              </div>
            </div>
            <div className="gridItem">
              <div className="molduraText">
                <p>03</p>
                <p>:</p>
              </div>
            </div>
            <div className="gridItem">
              <div className="molduraText">
                <p>04</p>
                <p>:</p>
              </div>
            </div>
            <div className="gridItem">
              <div className="molduraText">
                <p>05</p>
                <p>:</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
import React, { useContext } from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Context } from "../../context"
import { ReactComponent as Sair } from '../../assets/svgs/sair.svg'

function Perfil() {
  const { logado,
    setLogado,
    user,
    msgTrigger,
    setMsgTrigger,
    severity,
    mensagem,
    handleLogin,
    handleLogout,
    Alert } = useContext(Context)

  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')))
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado === false || userLogado == null) {
    console.log(userLogado);
    return <Redirect to="/" />;
  }

  return (
    <>

    <div className="perfilMain">
    <header>
    <div className="headerDiv">
      <Link className="logo" to="/home"></Link>
    </div>
    <div className="headerDiv">
      <Link className="linkPerfil" to="/perfil">
        <p>Perfil</p>
      </Link>

    </div>
  </header>
      <div className="perfil">
        <h2 className="title"> Perfil </h2>
        <div className="fotoPerfil"></div>
        <h2> {usuario.nome} </h2>
        <ul className="tabelaPerfil">
          <ul className="tabelaPerfil_head">
            <li>Email:</li>
          </ul>
          <ul className="tabelaPerfil_data">
            <li>{usuario.email}</li>
          </ul>
        </ul>
        <Link onClick={handleLogout} to="/" className="sair">
          <p>Sair</p>
          <Sair />
        </Link>
      </div>
    </div>
    </>
  );
}

export default Perfil;
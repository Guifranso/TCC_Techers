import React, { useContext } from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Context } from "../../context"

function Login() {
  const {logado,
    setLogado,
    user,
    msgTrigger,
    setMsgTrigger,
    severity,
    mensagem,
    handleLogin,
    Alert} = useContext(Context)


  if (logado === true) {
    setLogado(false);
    return <Redirect to="/home" />;
  }

  return (
    <div className="loginMain">
      <div className="DoSchool">
        
        <div className="logo logoPerfil"></div>
        <h1 className="Sobre"> Uma ferramenta fácil e intuitiva <br></br> para organização pessoal.</h1>
      </div>
      <div className="login">
        <form className="loginForm">
          <input
            name="usuario"
            className="inputLogin"
            onChange={(e) => {
              user.nome = e.target.value;
            }}
            placeholder="Usuário"
          ></input>
          <input
            name="senha"
            className="inputLogin"
            onChange={(e) => {
              user.senhaHash = e.target.value;
            }}
            type="password"
            placeholder="Senha"
          ></input>
          <p onClick={handleLogin} className="buttonLogin">
            Entrar
          </p>
          <Link to="/cadastro" className="buttonCadastro">
            Cadastre-se
          </Link>
          <Snackbar open={msgTrigger} autoHideDuration={2000} onClose={() => {setMsgTrigger(false)}}>
          <Alert onClose={() => {setMsgTrigger(false)}} severity={severity} sx={{ width: '100%' }}>
          {mensagem}
          </Alert>
        </Snackbar>
        </form>
      </div>
    </div>
  );
}

export default Login;
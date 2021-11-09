import "./style.scss";
import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'
import { ReactComponent as Close } from '../../assets/svgs/close.svg'
import Popup from '../../Components/Popup/popup'
import { useContext } from "react";
import { Context } from "../../context"
import { Snackbar } from "@mui/material";
import api from "../../services/api";

function Home() {
  const {
    msgTrigger,
    setMsgTrigger,
    severity,
    setSeverity,
    mensagem,
    setMensagem,
    Alert,
    mostraMensagem} = useContext(Context)
  const [buttonPopup, setButtonPopup] = useState(false)
  const [novaAnotacao,setNovaAnotacao] = useState({
    nome: "",
    data: 0
  })
  const [dias,setDias] = useState(JSON.parse(localStorage.getItem('dias')));
  const [diaObj, setDiaObj] = useState(JSON.parse(localStorage.getItem('diaObj')))

  const defineDiaObj = (e) => {
    dias.map((event) => {
      if(event.dia == e.dia) {
        localStorage.setItem('diaObj', JSON.stringify(event));
        setDiaObj(event)
      }
    })
  }

  const adicionaItem = () => {
    var input1 = document.querySelector("[data-input1]")
    var input2 = document.querySelector("[data-input2]")
    if(input1.value == null || input1.value.length <= 0) {
      setMensagem("Item inválido");
      setSeverity("error");
      setMsgTrigger(true);
      return;
    } else if(input2.value == null || input2.value.length <= 0 || input2.value.length >= 15) {
      setMensagem("Horário inválido");
      setSeverity("error");
      setMsgTrigger(true);
      return;
    }
    input1.value = ""
    input2.value = ""

    var diaAux = JSON.parse(localStorage.getItem('diaObj'))
    diaAux.anotacoes.push(novaAnotacao);
    localStorage.setItem('diaObj', JSON.stringify(diaAux))
    dias.map((e) => {
      if(e.dia == diaAux.dia) {
        e.anotacoes.push(novaAnotacao);
        setNovaAnotacao({
          nome: "",
          data: 0
        })
        localStorage.setItem('dias', JSON.stringify(dias))
      }
  })
    // atualizaNoBanco();
  }
  const removerItem = (e) => {
    let diaObjAux = JSON.parse(localStorage.getItem('diaObj'));
    diaObjAux.anotacoes = diaObjAux.anotacoes.filter((d) => d.nome !== e.nome)
    setDiaObj(diaObjAux);
    localStorage.setItem('diaObj',JSON.stringify(diaObjAux));
    dias.map((c) => {
      if(c.dia == diaObjAux.dia) {
        c.anotacoes = c.anotacoes.filter((d) => d.nome !== e.nome);
        localStorage.setItem('dias', JSON.stringify(dias))
      }
  })
  }
  // const atualizaNoBanco = async () => {
  //   console.log(JSON.parse(localStorage.getItem('usuario')).nome); 
  //   console.log(JSON.stringify(localStorage.getItem('dias')));
  //   var anotacoes = {
  //     array : JSON.stringify(localStorage.getItem('dias')),
  //     userName : JSON.parse(localStorage.getItem('usuario')).nome
  //   }
  //   try {
  //     const res = await api.post("/registrarAnotacoes", anotacoes);
  //   } catch (err) {
  //     setMensagem("Valores inválidos");
  //     setSeverity("error");
  //     setMsgTrigger(true);
  //     console.log(err);
  //   }
  // }
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado === false || userLogado == null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main">
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
              if(e.dia%2 == 0) {
                console.log("par");
                // style={{backgroundImage = url('../../assets/svgs/Orange.svg')}}
              }
              return (
                <div style={{ backgroundImage: `url(require("../../assets/svgs/cor1.svg"))` }} onClick={ () => {defineDiaObj(e);setButtonPopup(true)}} className="gridItem">
                  <div className="molduraText">
                    <p>{e.dia}</p>
                    <p>:</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Popup className="popUp" trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="popupHeader"> 
            <p>Tarefas do dia {JSON.parse(localStorage.getItem('diaObj')).dia}</p>
            <Close className="closeBtn" onClick={() => setButtonPopup(false)}></Close>
          </div>
          {JSON.parse(localStorage.getItem('diaObj')).anotacoes.map((e) => {
            return (
              <div className="atividade">
                <div>
                  <div className="anotacaoData">{e.data}</div>
                  <p>{e.nome}</p>
                </div>
                <Close className="closeBtn" onClick={() => removerItem(e)}></Close>
              </div>
            );
          })}
          <form className="formAtividade">
          <input data-input2 onChange={(e) => {novaAnotacao.data = e.target.value}} placeholder="Insira o horário"></input>
          <input data-input1 onChange={(e) => {novaAnotacao.nome = e.target.value}} placeholder="Insira um novo item"></input>
          <p className="button" onClick={() => {adicionaItem();}}>Adicionar Item</p>
          </form>
        </Popup>
        <Snackbar open={msgTrigger} autoHideDuration={2000} onClose={() => {setMsgTrigger(false)}}>
          <Alert onClose={() => {setMsgTrigger(false)}} severity={severity} sx={{ width: '100%' }}>
          {mensagem}
          </Alert>
        </Snackbar>
    </div>
  );
}

export default Home;
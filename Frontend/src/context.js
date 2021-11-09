import React, { createContext, useState, useContext } from "react";
import api from "./services/api";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [sair, setSair] = useState(false);
  const [logado, setLogado] = useState(false);
  const [deslogado, setDeslogado] = useState(false);
  const user = { nome: "", senhaHash: "" };
  const [msgTrigger, setMsgTrigger] = useState(false);
  const [severity, setSeverity] = useState("");
  const [mensagem, setMensagem] = useState("");


  const handleCadastro = async (e) => {
    e.preventDefault();
    if (user.nome.length <= 2) {
      mostraMensagem("Insira um nome maior", "warning")
    } else if (user.email.length < 5) {
      mostraMensagem("Insira um email maior", "warning")
    } else if (user.senhaHash.length < 3) {
      mostraMensagem("Insira uma senha maior", "warning")
    } else {
      try {
        const res = await api.post("/registrarUsuario", user);
        handleLogin();
      } catch (err) {
        setMensagem("Valores inválidos");
        setSeverity("error");
        setMsgTrigger(true);
        console.log(err);
      }
    }
  };

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", user);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("usuario", JSON.stringify(res?.data?.user[0]));
      localStorage.setItem("userLogado", true)
      localStorage.setItem('diaObj', JSON.stringify({
        anotacoes: [],
        dia: 0
      }));
      localStorage.setItem('dias',JSON.stringify([
        {
          dia: 1,
          anotacoes: [],
        },
        {
          dia: 2,
          anotacoes: [],
        },
        {
          dia: 3,
          anotacoes: [],
        },
        {
          dia: 4,
          anotacoes: [],
        },
        {
          dia: 5,
          anotacoes: [],
        },
        {
          dia: 6,
          anotacoes: [],
        },
        {
          dia: 7,
          anotacoes: [],
        },
        {
          dia: 8,
          anotacoes: [],
        },
        {
          dia: 9,
          anotacoes: [],
        },
        {
          dia: 10,
          anotacoes: [],
        },
        {
          dia: 11,
          anotacoes: [],
        },
        {
          dia: 12,
          anotacoes: [],
        },
        {
          dia: 13,
          anotacoes: [],
        },
        {
          dia: 14,
          anotacoes: [],
        },

      ]))
      setDeslogado(false);
      setLogado(true);
    } catch (err) {
      console.log(err);
      setMensagem("Valores inválidos");
      setSeverity("error");
      setMsgTrigger(true);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setLogado(false);
    setDeslogado(true);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const mostraMensagem = (mensagem, severity) => {
    setMensagem(mensagem);
    setMsgTrigger(true);
    setSeverity(severity);
  };

  return (
    <Context.Provider
      value={{
        logado,
        setLogado,
        deslogado,
        setDeslogado,
        sair,
        setSair,
        user,
        msgTrigger,
        setMsgTrigger,
        severity,
        setSeverity,
        mensagem,
        setMensagem,
        handleCadastro,
        handleLogin,
        handleLogout,
        Alert,
        mostraMensagem
      }}
    >
      {children}
    </Context.Provider>
  );
};
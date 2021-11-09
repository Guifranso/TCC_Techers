// const conexao = require("../infraestrutura/conexao");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { json } = require("express");

// class Anotacoes {

//   async adiciona(anotacoes, res) {
//     const sql = "INSERT INTO Anotacoes SET ?";
//     conexao.query(sql, anotacoes, (erro, resultados) => {
//       if (erro) {
//         res.status(400).json(erro);
//       } else {
//         res.status(201).json(anotacoes);
//       }
//     });
//   }

// }

// module.exports = new Anotacoes();
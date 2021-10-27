class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarUsuarios()
        // this.criarProdutos()
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(40) NOT NULL UNIQUE,  email VARCHAR(255) NOT NULL UNIQUE, senhaHash VARCHAR(255) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuarios criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas
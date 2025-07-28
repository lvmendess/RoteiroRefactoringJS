const { readFileSync } = require('fs');
class Repositorio{
    constructor(){
        this.pecas = JSON.parse(readFileSync('./pecas.json'));
    }

    getPeca(apresentacao) {
        return this.pecas[apresentacao.id]
    }

}
module.exports = Repositorio;
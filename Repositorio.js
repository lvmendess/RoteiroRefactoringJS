const { readFileSync } = require('fs');
class Repositorio{
    constructor(){
        this.pecas = JSON.parse(readFileSync('./pecas.json'));
    }

    getPeca(apresentacao) {
        return pecas[apresentacao.id]
    }

}
module.exports = Repositorio;
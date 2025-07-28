const { readFileSync } = require('fs');
class Repositorio{
    constructor(){
        this.pecas = JSON.parse(readFileSync('./pecas.json'));
    }

}
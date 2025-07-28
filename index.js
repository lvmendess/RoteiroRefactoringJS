const { readFileSync } = require('fs');
const ServicoCalculoFatura = require('./ServicoCalculoFatura');
const calc = new ServicoCalculoFatura(new Repositorio());

function gerarFaturaStr(fatura, pecas, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;

  for (let apre of fatura.apresentacoes) {
    faturaStr += `  ${getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
  }
  faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
  return faturaStr;
}

function gerarFaturaHTML(fatura, pecas){
  let faturaHTML = `<html> \n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`
  for(let apre of fatura.apresentacoes){
    faturaHTML += `<li> ${getPeca(apre).nome}: ${formatarMoeda(calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`
  }
  faturaHTML += `</ul>\n<p> Valor total: ${formatarMoeda(calcularTotalFatura(fatura.apresentacoes))} </p>\n`
  faturaHTML += `<p> Créditos acumulados: ${calcularTotalCreditos(fatura.apresentacoes)} </p>\n</html>`
  return faturaHTML;
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR",
    {
      style: "currency", currency: "BRL",
      minimumFractionDigits: 2
    }).format(valor / 100);
}

const faturas = JSON.parse(readFileSync('./faturas.json'));
const faturaStr = gerarFaturaStr(faturas, pecas);
console.log(faturaStr);
//console.log(faturaHTML);

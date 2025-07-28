class ServicoCalculoFatura{

    calcularCredito(apre){
        let creditos = 0;
        creditos += Math.max(apre.audiencia - 30, 0);
        if (getPeca(apre).tipo === "comedia")
            creditos += Math.floor(apre.audiencia / 5);
        return creditos;
    }

    calcularTotalApresentacao(apre){
        let total = 0;
        switch (getPeca(apre).tipo) {
            case "tragedia":
            total = 40000;
            if (apre.audiencia > 30) {
                total += 1000 * (apre.audiencia - 30);
            }
            break;
            case "comedia":
            total = 30000;
            if (apre.audiencia > 20) {
                total += 10000 + 500 * (apre.audiencia - 20);
            }
            total += 300 * apre.audiencia;
            break;
            default:
            throw new Error(`Peça desconhecia: ${getPeca(apre).tipo}`);
        }
        return total;
    }

    calcularTotalFatura(apre){
        let total = 0;
        for(let apre of apresentacoes){
            total += calcularTotalApresentacao(apre);
        }
        return total;
    }

    calcularTotalCreditos(apre){
        let creditos = 0;
        for(let apre of apresentacoes){
            creditos +=calcularCredito(apre);
        }
        return creditos;
    }
}

module.exports = ServicoCalculoFatura;
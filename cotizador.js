
class Cotizador {
    constructor(costoBase, factorAño, factorMarca, factorGama, factorGnc, factorUso ) {
        this.costoBase = parseFloat(costoBase)
        this.factorAño = parseFloat(factorAño)
        this.factorMarca = parseFloat(factorMarca)
        this.factorGama = parseFloat(factorGama)
        this.factorGnc = parseFloat(factorGnc)
        this.factorUso = parseFloat(factorUso)
    }
    cotizar() {
        let resultado = (this.costoBase * this.factorAño * this.factorMarca * this.factorGama * this.factorGnc * this.factorUso).toFixed(2)
        return resultado
    }
}
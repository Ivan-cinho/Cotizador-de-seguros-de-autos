
class Cotizador {
    constructor(costoBase, factorAño, factorMarca, factorGama, factorGnc, factorComercial) {
        this.costoBase = parseFloat(costoBase)
        this.factorAño = parseFloat(factorAño)
        this.factorMarca = parseFloat(factorMarca)
        this.factorGama = parseFloat(factorGama)
        this.factorGnc = parseFloat(factorGnc)
        this.factorComercial = parseFloat(factorComercial)
    }
    cotizar() {
        return (this.costoBase * this.factorAño * this.factorMarca * this.factorGama * this.factorGnc * this.factorComercial).toFixed(2)
    }
}
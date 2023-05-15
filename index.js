const selectorDeAño = document.querySelector("#selectorDeAño")
const selectorDeMarca = document.querySelector("#selectorDeMarca")
const selectorDeGama = document.querySelector("#selectorDeGama")
const Gnc = document.querySelector("#gnc")
const usoComercial = document.querySelector("#comercial")
const btnCotizacion = document.querySelector(".btn#verCotizacion")

function cargarSelect(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    }
}
cargarSelect(selectorDeAño, añoDelAuto)
cargarSelect(selectorDeMarca, marcaDelAuto)
cargarSelect(selectorDeGama, gamaDelModelo)

// todavia no lo vincula al value
function cargarCheckGnc() {
                Gnc.innerHTML = `<input class="form-check-input" type="checkbox" value="${selectorGnc}">
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Si
                                </label>`
}
cargarCheckGnc()

function cargarCheckUso() {
                            usoComercial.innerHTML =    `<input class="form-check-input" type="checkbox" name="flexRadioDefault" id="usoParticularSi">
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Si
                                                        </label>`
}
cargarCheckUso()

function validarDatosCompletos() {
    return (selectorDeAño.value !== "Selecciona el año" && selectorDeMarca.value !== "Selecciona la marca" && selectorDeGama.value !== "Selecciona la gama")
}

function realizarCotizacio() {
    if (validarDatosCompletos()) {
        const cotizo = Cotizador(costoBase, selectorDeAño.value, selectorDeMarca.value, selectorDeGama.value, Gnc.value)
    } else {
        alert("completa todo che!")
    }
}
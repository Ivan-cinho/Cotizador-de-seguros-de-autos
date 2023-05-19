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

function cargarCheckGnc() {
                Gnc.innerHTML = `<input class="form-check-input" id="inputGnc" type="checkbox">`
}
cargarCheckGnc()
function valorGnc() {
    if (document.querySelector("#inputGnc").checked) {
        return gncSi
    } else {
        return 1
    }
}

function cargarCheckComercial() {
                            usoComercial.innerHTML = `<input class="form-check-input" id="inputComercial" type="checkbox" name="flexRadioDefault">`
}
cargarCheckComercial()
function valorComercial() {
    if (document.querySelector("#inputComercial").checked) {
        return comercialSi
    } else {
        return 1
    }
}

function validarDatosCompletos() {
    return (selectorDeAño.value !== "Selecciona el año" && selectorDeMarca.value !== "Selecciona la marca" && selectorDeGama.value !== "Selecciona la gama")
}

function realizarCotizacion() {
    if (validarDatosCompletos()) {
        const cotizo = new Cotizador(costoBase, selectorDeAño.value, selectorDeMarca.value, selectorDeGama.value, valorGnc(), valorComercial())
        alert("El valor de la cuota de tu seguro es de $" + parseInt(cotizo.cotizar()))
    } else {
        alert("completa todo che!")
    }
}

btnCotizacion.addEventListener("click", ()=> {
    realizarCotizacion()
})
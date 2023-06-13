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
        swal.fire({
            width: '70%',
            backdrop: 'true',
            title: 'El valor estimado de la cuota de tu seguro es de $' + parseInt(cotizo.cotizar()),
            imageUrl: 'imagenes/lacaja.svg',
            imageWidth: '10%',
            showConfirmButton: false,
            imageAlt: 'La caja',
            html: '<button class="btn btn-danger" id="contacto">Quiero que me contacten</button>'+
                  '<button class="btn btn-danger" id="medios">medios de pago</button>'
        })
        const mediosDePago = document.getElementById("medios")
        mediosDePago.addEventListener ("click", () => {
            mostrarMediosDePago()
        })
        const queMeContacten = document.getElementById("contacto")
        queMeContacten.addEventListener ("click", () => {
            quieroQueMeContacten()
        })
    }
}

btnCotizacion.addEventListener("click", ()=> {
    realizarCotizacion()
})

const llenarDatos = () => {
    swal.fire({
        icon: 'error',
        width: '70%',
        backdrop: 'true',
        title: 'Completar los datos para realizar la cotizacion'
    })
}

const quieroQueMeContacten = () => {
    Swal.fire ({
        width: '50%',
        imageUrl: 'imagenes/lacaja.svg',
        imageWidth: '10%',
        confirmButtonText: 'Enviar',
        title: 'Ingrese sus datos y sera contactado a la brevedad',
        html:   '<input class="form-control form-control-sm formQuieroQueMeContacten" type="text" placeholder="Nombre y apellido" aria-label=".form-control-lg">'+
                '<input class="form-control form-control-sm formQuieroQueMeContacten" type="text" placeholder="Correo electronico" aria-label=".form-control-lg">'+
                '<textarea name="" class="form-control textAreaQuieroQueMeContacten" cols="20" rows="10" placeholder="Escriba su inquietud"></textarea>'
    })
}

// medios de pago y seguridad

const btnMediosDePago = document.getElementById("mediosDePago")
const btnSitioSeguro = document.getElementById("sitioSeguro")

const mostrarMediosDePago = () => {
    swal.fire({
        title: '¿Cómo puedo pagar mi seguro?',
        width: '50%',
        backdrop: 'true',
        imageUrl: 'imagenes/lacaja.svg',
        imageWidth: '10%',
        imageAlt: 'La caja',
        showConfirmButton: false,
        html: '<hr class="hr1">'+
        '<h4>Tarjetas de credito</h4>'+
        '<img class="tarjeta" src="imagenes/visa.svg" alt="">'+
        '<img class="tarjeta naranja" src="imagenes/naranja.svg" alt="">'+
        '<img class="tarjeta" src="imagenes/mastercard.svg" alt="">'+
        '<hr class="hr1">'+
        '<h4>Mercado pago</h4>'+
        '<img class="tarjeta" src="imagenes/mercadopago.svg" alt="">'+
        '<hr class="hr1">'+
        '<h4>Efectivo</h4>'+
        '<img class="tarjeta" src="imagenes/pagofacil.svg" alt="">'+
        '<img class="tarjeta pagoMisCuentas" src="imagenes/pagomiscuentas.svg" alt="">'+
        '<img class="tarjeta rapipago" src="imagenes/rapipago.svg" alt="">',
    })
}

const mostrarSitioSeguro = () => {
    swal.fire({
        showConfirmButton: false,
        html: '<h3 class="tituloSitioSeguro">Sitio 100% seguro</h3>'+
        '<p>Cumplimos con los más altos estándares de seguridad de la industria</p>'+
        '<p>Todos los pagos de La Caja se procesan en nuestra propia plataforma para pagar de forma segura. Por eso, no importa cómo pagues, ¡tu dinero siempre está protegido!</p>',
    })
}

btnMediosDePago.addEventListener("click", ()=> {
    mostrarMediosDePago()
})

btnSitioSeguro.addEventListener("click", ()=> {
    mostrarSitioSeguro()
})

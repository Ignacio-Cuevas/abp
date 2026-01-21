let transaccion1 = {
    id: 1,
    glosa: "Recepción de Dinero",
    monto: 10000,
    ingreso: true,
    egreso: false,
};

let transaccion2 = {
    id: 2,
    glosa: "Transferencia a otros Bancos",
    monto: 50000,
    ingreso: false,
    egreso: true,
};

let transaccion3 = {
    id: 3,
    glosa: "Compra Online",
    monto: 25000,
    ingreso: false,
    egreso: true,
};

let historialTransacciones = [transaccion1, transaccion2, transaccion3];


$(function () {

    function construirBoton(transaccion) {
        let { monto } = transaccion;
        monto = monto.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
        if (transaccion.ingreso) {
            return `<span class="badge rounded-pill text bg-success">${monto}</span>`;
        } else if (transaccion.egreso) {
            return `<span class="badge rounded-pill text bg-danger">${monto}</span>`;
        }
    }

    function actualizarHistorial(historial) {
        let items = "";
        for (const transaccion of historial) {
            let { glosa } = transaccion;
            items += `<li class="list-group-item d-flex justify-content-between align-items-center">${glosa} - ${construirBoton(transaccion)}</li>`;
        }

        //Capturo elementos del DOM por su ID y le agrego contenido HTNL
        $("#listaTransacciones").html(items);
    }


    //Inicio funciones al ejecutar la página
    function init() {
        actualizarHistorial(historialTransacciones);
    }

    init();
});
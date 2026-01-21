

//agregar eventos a los botones

function mostrarMensaje(mensaje, pagina) {
    let mensajeInfo = document.getElementById('mensaje-info');
    mensajeInfo.innerHTML = `<div class="alert alert-info text-center" role="alert">${mensaje}</div>`;
    setTimeout(function () {
        window.location.href = pagina;
    }, 1500);
}

document.getElementById('btn-deposit').addEventListener('click', function (event) {
    let mensaje = "Redirigiendo a depósitos...";
    mostrarMensaje(mensaje, "deposit.html");
});

document.getElementById('btn-send-money').addEventListener('click', function (event) {
    let mensaje = "Redirigiendo a enviar dinero...";
    mostrarMensaje(mensaje, "sendmoney.html");
});

document.getElementById('btn-transactions').addEventListener('click', function (event) {
    let mensaje = "Redirigiendo a últimos movimientos...";
    mostrarMensaje(mensaje, "transactions.html");
});

function main() {
    document.getElementById('balance-info').textContent = formatearMoneda(balance);
}

main();



// actualizar balance
function actualizarBalance() {
    document.getElementById('balance-info').textContent = formatearMoneda(balance);
}


//depositar, captura el monto y lo envia a la funcion abonarBalance
const formDeposit = document.getElementById('form-deposit');
const alertContainer = document.createElement('div');
formDeposit.prepend(alertContainer);

formDeposit.addEventListener('submit', function (e) {
    e.preventDefault();
    let monto = document.getElementById('monto').value;
    monto = Number(monto);

    let nuevoSaldo = abonarBalance(monto);
    actualizarBalance();

    alertContainer.innerHTML = `<div class="alert alert-success">Depósito exitoso. Su nuevo saldo es: ${nuevoSaldo}</div>`;

    setTimeout(function () {
        alertContainer.innerHTML = "";
    }, 1500);

    document.getElementById('form-deposit').reset();
});


function main() {
    document.getElementById('balance-info').textContent = formatearMoneda(balance);
}

main();

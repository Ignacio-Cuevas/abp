
let balance = 0;

if (localStorage.getItem('balance')) {
    balance = Number(localStorage.getItem('balance'));
} else {
    balance = 60_000;
    localStorage.setItem('balance', balance);
}

// lógica del balance de la cuenta

function formatearMoneda(valor) {
    let formatoBalance = valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    return formatoBalance;
}

function abonarBalance(monto) {
    balance += monto;
    localStorage.setItem('balance', balance);
    // alert("Su nuevo saldo es: " + formatearMoneda(balance));
    return formatearMoneda(balance);
}

function girarBalance(monto) {
    if (balance < monto) {
        alert('Fondos insuficientes');
    } else {
        alert('Giro exitoso');
        balance -= monto;
        localStorage.setItem('balance', balance);
        alert("Su nuevo saldo es: " + formatearMoneda(balance));
    }
}

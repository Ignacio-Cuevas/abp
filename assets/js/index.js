
if (localStorage.getItem('login')) {
    alert('Sesión iniciada');
    location.href = 'menu.html';
}

//agregar evento al boton iniciar sesión

document.addEventListener('DOMContentLoaded', function () {
    const formLogin = document.getElementById('FormLogin');
    const alertContainer = document.createElement('div');
    formLogin.prepend(alertContainer);

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (email === 'admin@admin.com' && password === '123456') {
            alertContainer.innerHTML = '<div class="alert alert-success">Iniciando sesión...</div>';
            localStorage.setItem('login', true);
            setTimeout(() => {
                location.href = 'menu.html';
            }, 1500);
        } else {
            alertContainer.innerHTML = '<div class="alert alert-danger">email o password incorrectos</div>';
        }
    });
}); 

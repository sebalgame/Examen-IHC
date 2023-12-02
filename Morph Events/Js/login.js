document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const isRegistro = form.getAttribute('data-tipo') === 'registro'; 

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        if (isRegistro) {
            localStorage.setItem('usuarioRegistrado', username);
            localStorage.setItem('contraseñaRegistrada', password);


            window.location.href = "../Pages/login.html";
        } else {
            const usuarioRegistrado = localStorage.getItem('usuarioRegistrado');
            const contraseñaRegistrada = localStorage.getItem('contraseñaRegistrada');

            if (username === usuarioRegistrado && password === contraseñaRegistrada) {
                window.location.href = "../Pages/welcome.html";
            } else {
                alert("Usuario o contraseña incorrectos")
            }
        }
    });
});
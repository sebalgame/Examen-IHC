document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownList = document.querySelector(".dropdown-list");

    menuIcon.addEventListener("click", function () {
        dropdownList.classList.toggle("show-dropdown");
    });

    // Cierra el menú desplegable si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.classList.remove("show-dropdown");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".bt-registrase");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Registro satisfactorio");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var btnAbrirVentana = document.getElementById("btnAbrirVentana");

    btnAbrirVentana.addEventListener("click", function () {
        // Abre una nueva ventana con dimensiones de 100x100 píxeles
        var nuevaVentana = window.open("", "_blank", "width=1000,height=1000");

        // Agrega contenido HTML y CSS a la nueva ventana
        nuevaVentana.document.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Morph Events</title> <!--Nombre de la pagina donde se ve la pestania-->
            <link rel="stylesheet" href="../Programa 1/login.css">
            <script src="../Js/login.js"></script>
            <link rel="icon" type="image/png" href="../Images/Mainpage/favicon.png"> <!--coloca imagen a la pagina-->
            <link rel="preconnect" href="https://fonts.googleapis.com%22%3E/
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
        </head>
        <body>
            <img class="espumita" src="../Programa 1/Images/Espumita.png">
            <div class="formulario">
                <h1>Inicio de sesion</h1>
                <img class="loginlogo" src="../Programa 1/Images/loginImage3.png" alt="logo">
                <form action="../Pages/welcome.html" method="post" id="form">
                    <div class="username">
                        <h5>Nombre de usuario</h5>
                        <input type="text" required id="name">
                    </div>
                    <div class="contraseña">
                        <h5>Contraseña</h5>
                        <input type="password" required id="password">
                    </div>
                    <div class="recordar"> <a>¿Olvido su contraseña?</a></div>
                    <input type="submit" value="Iniciar">
                    <h5>--------------------------  o  -------------------------</h5>
                    <a class="bt-registrase"</a>
                    <p class="warnings" id="warnings"></p>
                </form>
            </div>
        </body>
        </html>
        `);
    });
});
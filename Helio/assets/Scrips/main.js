document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".bt-registrase");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Reserva satisfactoria");
        });
    });
});
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
    var btnAbrirVentana = document.getElementById("btnAbrirVentana");

    btnAbrirVentana.addEventListener("click", function () {
        // Abre una nueva ventana con dimensiones de 100x100 píxeles
        var nuevaVentana = window.open("", "_blank", "width=1000,height=1000");

        // Agrega contenido HTML y CSS a la nueva ventana
        nuevaVentana.document.write(`
        <html>
        <!--Inicio de Encabezado-->
        <head>
            <title>Aplicacion Nombre</title>
            <meta name="Author" lang="es" content="U20211C113">
            <!--Fuentes-->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Jost:wght@100&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 

            <!--Styles para Login-->

            <style>

                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: linear-gradient( to left top, #4CAF50, #9cc0ab, #4CAF50);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
    
                .titulo-registro{
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-top: 80px; 
                    font-size: 45px;
                    color: #000000;
                }
    
                .registro-form {
                    padding: 20px;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
                    max-width: 400px;
                    margin: 50px auto; 
                    margin-top: 60px; 
                    margin-bottom: 170px;
                }
    
                .contenedor-opciones-registro{
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                }
        
                label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
        
                input {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 16px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
            
                .message {
                    text-align: center;
                    align-items: center; 
                    margin: 15px;
                    margin-bottom: 26px;
                }
        
                .opcion{
                    text-decoration: none;
                    text-align: center;
                    align-items: center; 
                    margin: 15px;
                    justify-content: center;
                }
        
                button {
                    background-color: #000000;
                    color: #ffffff;
                    width: 300px;
                    padding: 10px 15px;
                    border-radius: 4px;
                    border: 1px solid #000000;
                    margin: 15px;
                    cursor: pointer;
                    font-size: 16px;
                }
                
                .btnAccederCuenta{
                    width: 370px;
                    background-color: red;
                }

                #mensajeRegister{
                    text-align: center;
                    color: red;
                }
    
                button:hover {
                    background-color: #ffffff;
                    color: rgb(0, 0, 0);
                }
    
                @media screen and (max-width: 768px){
                    .login-form{
                        margin-top: 100px;
                    }
                    .titulo-login{
                        margin-top: 230px;
                    }
                }

            </style>

        </head>
        <!--Fin de Encabezado-->
    
        <!--Inicio de Cuerpo-->
        <body>
        
            <main>

                <div class="contenedor-registro">

                    <h1 class="titulo-registro">
                        Registrate para poder acceder a la app
                    </h1>

                    <form class="registro-form">

                        <label for="name">Nombre</label>
                        <input type="name" id="name" name="name" required>

                        <label for="apellidos">Apellidos</label>
                        <input type="apellidos" id="apellidos" name="apellidos" required>

                        <label for="email">Correo universitario</label>
                        <input type="email" id="email" name="email" required>
                
                        <label for="telefono">Teléfono</label>
                        <input type="telefono" id="telefono" name="telefono" required>

                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" required>

                        <label for="Confirmar-Contraseña">Confirmar Contraseña</label>
                        <input type="Confirmar-Contraseña" id="Confirmar-Contraseña" name="Confirmar-Contraseña" required>
                
                        <div class="contenedor-opciones-registro">
                            
                            <button onclick="#" type="submit">Guardar</button>
                            <button onclick="#" type="submit">Cancelar</button>

                        </div>

                        <p class="message">¿Ya tienes una cuenta?</p>
                        <button class="btnAccederCuenta" onclick="#" type="submit">Accede a tu cuenta</button>

                    </form>
                </div>

            </main>
        </body>

    </html>
        `);
    });
});
function abrirPopUp() {
    document.getElementById("miPopUp").style.display = "block";
}

function cerrarPopUp() {
    document.getElementById("miPopUp").style.display = "none";
}
function solicitarUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert(`Tu ubicación es: Latitud ${position.coords.latitude}, Longitud ${position.coords.longitude}`);
            },
            function (error) {
                alert(`Error al obtener la ubicación: ${error.message}`);
            }
        );
    } else {
        alert("Tu navegador no soporta la geolocalización.");
    }
}
let fotoActual = 1;
const totalFotos = 4; // Ajusta según la cantidad de fotos que tengas

function cambiarFoto(direccion) {
    document.getElementById(`foto${fotoActual}`).classList.remove('visible');

    if (direccion === 'anterior') {
    fotoActual = (fotoActual === 1) ? totalFotos : fotoActual - 1;
    } else if (direccion === 'siguiente') {
    fotoActual = (fotoActual === totalFotos) ? 1 : fotoActual + 1;
    }

    document.getElementById(`foto${fotoActual}`).classList.add('visible');
}

// Autoplay, cambia de foto cada 3 segundos (ajustable)
setInterval(function() {
    cambiarFoto('siguiente');
}, 3000);
var textosPorDestino = {
    espana: "Texto para España. ¡Inserta tus experiencias aquí!",
    italia: "Texto para Italia. ¡Inserta tus experiencias aquí!",
    japon: "Texto para Japón. ¡Inserta tus experiencias aquí!"
    // Puedes agregar más destinos y textos según tus necesidades
};

function mostrarTextoViaje() {
    var destino = document.getElementById("destinos");
    var destinoSeleccionado = destino.options[destino.selectedIndex].value;
    document.getElementById("destinoSeleccionado").innerText = destino.options[destino.selectedIndex].text;

    var textoViaje = document.getElementById("textoViaje");
    var contenidoViaje = document.getElementById("contenidoViaje");

    if (destinoSeleccionado in textosPorDestino) {
        contenidoViaje.innerText = textosPorDestino[destinoSeleccionado];
        textoViaje.style.display = "block";
    } else {
        textoViaje.style.display = "none";
    }
}
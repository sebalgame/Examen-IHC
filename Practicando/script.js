document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botón y el párrafo por su ID
    var colorButton = document.getElementById("colorButton");
    var colorParagraph = document.getElementById("colorParagraph");

    // Agregar un event listener al botón
    colorButton.addEventListener("click", function () {
        // Generar un color aleatorio y aplicarlo al fondo del párrafo
        var randomColor = getRandomColor();
        colorParagraph.style.backgroundColor = randomColor;
    });

    // Función para generar un color hexadecimal aleatorio
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".bt-registrase");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Registro satisfactorio");
        });
    });
});
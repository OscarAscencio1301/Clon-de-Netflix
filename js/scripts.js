const inputs = document.querySelectorAll("form .campo input");
const mostrar = document.querySelector("form .campo span");


inputs.forEach(input => {
    input.addEventListener("blur", validarInput);
})
inputs.forEach(input => {
    input.addEventListener("input", validarInput);
})


function validarInput(e) {
    const estado = ["valido", "no-valido"];
    let clase
    if (e.target.value.length == 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    if (clase === "no-valido") {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const error = document.createElement("DIV");
            error.appendChild(document.createTextNode('Este campo es obligatorio'));
            error.classList.add('alerta');
            e.target.parentElement.parentElement.insertBefore(error, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] == 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }


}

mostrar.addEventListener("click", e => {
    const passwordHTML = document.querySelector("#password")


    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar')
        e.target.textContent = "Invisible";
        passwordHTML.type = "text";

    } else {
        e.target.classList.add('mostrar')
        e.target.textContent = "Visible";
        passwordHTML.type = "password";

    }
});
const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

// Validar Nombre, Correo y Contraseña para el registro
let validate_signUp = document.getElementById("formulario");

validate_signUp.addEventListener('submit', e => {
    // Evitar que el formulario se envíe automáticamente
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("clave").value;

    let correoElectronicoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let isvalid = true;

    // Validamos el nombre
    if (nombre.length < 4) {
        swal({
            title: 'Campo Incompleto',
            text: "El nombre debe tener al menos 4 caracteres.",
            icon: "warning",
            button: "Aceptar",
            closeOnClickOutside: false // Evita que se cierre haciendo clic fuera del cuadro de diálogo
        });
        isvalid = false;
    }

    // Validamos el correo
    else if (!email || !correoElectronicoValido.test(email)) {
        swal({
            title: "Campo Incompleto o Correo electrónico inválido",
            text: !email ? "Por favor, ingrese su dirección de correo electrónico." : "Por favor, ingrese una dirección de correo electrónico válida.",
            icon: "warning",
            button: "Aceptar",
            closeOnClickOutside: false // Evita que se cierre haciendo clic fuera del cuadro de diálogo
        });
        isvalid = false;
    }

    // Validamos la contraseña
    else if (!pass || pass.length < 8) {
        swal({
            title: "Campo Incompleto o Contraseña inválida",
            text: !pass ? "Por favor, ingrese su contraseña." : "La contraseña debe tener al menos 8 caracteres.",
            icon: "warning",
            button: "Aceptar",
            closeOnClickOutside: false
        });
        isvalid = false;
    }

    // Si todo está bien, envíe el formulario.
    if (isvalid) {
        validate_signUp.submit();
    }
});


// Validar Correo y Contraseña para el login
let validate_login = document.getElementById("form");

validate_login.addEventListener('submit', e => {
    // Evitar que el formulario se envíe automáticamente
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let correoElectronicoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let isvalid = true;

    // Validamos el correo
    if (!email || !correoElectronicoValido.test(email)) {
        swal({
            title: "Campo Incompleto o Correo electrónico inválido",
            text: !email ? "Por favor, ingrese su dirección de correo electrónico." : "Por favor, ingrese una dirección de correo electrónico válida.",
            icon: "warning",
            button: "Aceptar",
            closeOnClickOutside: false // Evita que se cierre haciendo clic fuera del cuadro de diálogo
        });
        isvalid = false;
    }

    // Validamos la contraseña
    else if (!pass || pass.length < 8) {
        swal({
            title: "Campo Incompleto o Contraseña inválida",
            text: !pass ? "Por favor, ingrese su contraseña." : "La contraseña debe tener al menos 8 caracteres.",
            icon: "warning",
            button: "Aceptar",
            closeOnClickOutside: false
        });
        isvalid = false;
    }

    if (isvalid) {
        validate_login.submit();
    }

});
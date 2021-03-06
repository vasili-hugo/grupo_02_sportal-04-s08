window.addEventListener('load', function() {
    const form = document.querySelector('form.form');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{8}$/, // Letras, numeros, guion y guion_bajo.
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    let forgotPassword = false;

    form.addEventListener('submit', function(e) {
        let errores = false;
        let inputValue = "";
        //Validando el input de usuario para que no este el campo en blanco y que sea formato email.
        let email = document.getElementById('usuario');
        let errmsg = document.querySelector(".error-msg-usuario");
        if(email.value.length > 0 ) {
            inputValue = email.value;
            if (expresiones.correo.test(inputValue)) {
                errmsg.innerHTML = ' ';
                email.classList.remove('invalid');
            } else {
                errores = true;
                errmsg.innerHTML = 'Debes ingresar un correo electrónico valido.';
                email.classList.add('invalid');
            }

        } else {
            errores = true;
            errmsg.innerHTML = "Debes ingresar el correo electrónico.";
            email.classList.add('invalid');
        }

        //Validando el input de contraseña para que no este el campo en blanco.
        if (!forgotPassword) {
            let pass = document.getElementById('password');
            let errmsgpass = document.querySelector(".error-msg-password");
            if(pass.value.length > 0 ) {
                errmsgpass.innerHTML = ' ';
                pass.classList.remove('invalid');
            } else {
                errores = true;
                errmsgpass.innerHTML = "Debes ingresar tu contraseña.";
                pass.classList.add('invalid');
            }

            let inputValidator = document.querySelectorAll('.validator');
            if(errores){
                if (inputValidator.length > 0){
                    inputValidator.forEach(input => {
                        input.innerHTML = ' ';
                    })
                }
                e.preventDefault();
            };
            forgotPassword = false;
        }
    });

    let restore = document.querySelector(".restore-button");
    restore.addEventListener("click", function(e) {
        let email = document.getElementById('usuario');
        if (email.value.length > 0 ) {
            let inputValue = email.value;
            if (expresiones.correo.test(inputValue)) {
                forgotPassword = true;
            } else {
                e.preventDefault();
                alert('Debes ingresar un correo electrónico valido.');
                email.focus();
            }
        } else {
            e.preventDefault();
            alert("Debes ingresar el correo electrónico.");
            email.focus();
        }
    });

    // Si se presiona la tecla 'Enter' en ambos textboxes, se autopresiona el boton 'INGRESAR'
    const enterKey = 13;
    let buttonLogin = document.querySelector(".login-button");
    
    document.querySelector("#usuario").focus();

    let textBoxUser = document.querySelector("#usuario");
    textBoxUser.addEventListener("keydown", function(e) {
        if (e.keyCode == enterKey) {
            buttonLogin.click();
        }
    });

    let textBoxPass = document.querySelector("#password");
    textBoxPass.addEventListener("keydown", function(e) {
        if (e.keyCode == enterKey) {
            buttonLogin.click();
        }
    });

});
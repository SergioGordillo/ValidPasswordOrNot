function devolverResultados() {
    let password = document.getElementById("password").value;
    let output = document.getElementById("output");

    let correcto = validar(password);

    if (correcto) {
        output.innerHTML = "La contraseña tiene el formato correcto";
    } else {
        output.innerHTML = "La contraseña no tiene el formato correcto";
    }
}


function validar(password) {
    let correcto = true;
    if (password.length >= 8) {

        var regs = [
            new RegExp(/[0-9]+/), //Debe incluir números +=1 o más
            new RegExp(/[A-Z]+/), //Debe incluir mayúsculas 
            new RegExp(/[a-z]+/), //Debe incluir minúsculas
            new RegExp(/[\*-\+\-\¿\?]/), //Debe incluir caracteres especiales
            new RegExp(/^\S*$/) //No debe incluir espacios
        ];




        regs.forEach(reg => {
            if (!reg.test(password)) {
                correcto = false; //En cuanto falle una de estas condiciones, me pone correcto igual a false
            }
        });

    } else {
        correcto = false;
    }

    return correcto;

}
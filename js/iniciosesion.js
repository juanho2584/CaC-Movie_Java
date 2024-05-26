const formRegister = document.querySelector("#formsesion");

const clearValidations = () => {
    document.querySelector("#email").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#error-Email").textContent='';
    document.querySelector("#error-Contraseña").textContent='';
    
}
const validarSesion = (event) => {
    event.preventDefault();
    clearValidations();

    const email = document.querySelector("#email");
    const contraseña = document.querySelector("#password");

    let validation = true;
    if(!email.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-Email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }else if(email.value != ""){
        const ValidEmail = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig;
        const EmailOk = ValidEmail.test(email.value);
        if (EmailOk === false) {
            document.querySelector("#error-Email").textContent='Formato de Email incorrecto';
            contraseña.classList.add('error')
            validation=false;} 
    }
    if(!contraseña.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-Contraseña").textContent='Debe completar el campo contraseña';
        contraseña.classList.add('error')
        validation=false;
    }else if(contraseña.value != ""){
        const ValidClave = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        const EmailOk = ValidClave.test(contraseña.value);
        if (EmailOk === false) {
            document.querySelector("#error-Contraseña").textContent='La clave debe contener dos numeros, dos simboles y una letra mayuscula';
            contraseña.classList.add('error')
            validation=false;} 
    }
    if(validation){
        formsesion.submit()
        alert("Bienvenido " + email.value);
    }else{
        return false;
    }
}


formRegister.addEventListener('submit',validarSesion);
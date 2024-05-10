const formRegister = document.querySelector("#formRegister");

const clearValidations = () => {
    document.querySelector("#nombre").classList.remove('error');
    document.querySelector("#apellido").classList.remove('error');
    document.querySelector("#email").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#error-Nombre").textContent='';
    document.querySelector("#error-Apellido").textContent='';
    document.querySelector("#error-Email").textContent='';
    document.querySelector("#error-Contraseña").textContent='';
    
}
const validarFormulario = (event) => {
    event.preventDefault();
    clearValidations();

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const contraseña = document.querySelector("#password");

    let validation = true;
    if(!nombre.value.trim()){
        nombre.classList.add('error')
        document.querySelector("#error-Nombre").textContent='Debe completar el campo Nombre';
        validation=false;
    }
    if(!apellido.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-Apellido").textContent='Debe completar el campo Apellido';
        apellido.classList.add('error')
        validation=false;
    }
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
        formRegister.submit()
        alert("Felicitaciones, te has registrado correctamente¡¡¡")
    }else{
        return false;
    }
}


formRegister.addEventListener('submit',validarFormulario);
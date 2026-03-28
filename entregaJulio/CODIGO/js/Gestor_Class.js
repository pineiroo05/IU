class Gestor {
    atenderMenu(nombreEntidad){
        if(!this.comprobarVariables(nombreEntidad)){
            return;
        }
        this.comprobarVariables(nombreEntidad);
    }

    comprobarVariables(nombreEntidad){
        const necesarias=[`${nombreEntidad}_estructura`, `${nombreEntidad}_def_tests`, `${nombreEntidad}_pruebas`, `${nombreEntidad}_TestSubmit`];
        let faltantes=necesarias.filter(variable => typeof window[variable] === 'undefined');
        if(faltantes.length > 0){
            this.mostrarError("");
            return false;
        }
        return true;
    }

    mostrarPanel(nombreEntidad){
        const zona=document.getElementById('zona_modal');
        zona.innerHTML="";
        let h2=document.createElement('h2');
        h2.innerText=`Entidad: ${nombreEntidad}`;
        zona.appendChild(h2);
        //TestForm
        let botonTestForm=document.createElement('boton_testForm');
        botonTestForm.innerText="Test atributos";
        botonTestForm.onclick=()=>new TestForm().ejecutar(nombreEntidad);
        //TestSubmit
        let botonTestSubmit=document.createElement('boton_testSubmit');
        botonTestSubmit.innerText="Test formulario";
        botonTestSubmit.onclick=()=>new TestSubmit().ejecutar(nombreEntidad);

        zona.appendChild(botonTestForm);
        zona.appendChild(botonTestSubmit);
    }

    mostrarError(mensaje){
        const modal=document.getElementById('error_modal');
        const span=document.getElementById('mensaje_error');
        span.innerHTML=mensaje;
        modal.style.display="block";
    }

    cerrarModal(){
        document.getElementById('error_modal').style.display="none";
    }
}
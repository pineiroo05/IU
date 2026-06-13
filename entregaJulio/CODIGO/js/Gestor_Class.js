class Gestor {
    constructor() {}

    atenderMenu(nombreEntidad){
        if(this.comprobarVariables(nombreEntidad)) {
            this.mostrarPanel(nombreEntidad);
        }
    }

    comprobarVariables(nombreEntidad){
        const necesarias=[`estructura_${nombreEntidad}`, `${nombreEntidad}_def_tests`, `${nombreEntidad}_pruebas`, `${nombreEntidad}_TestSubmit`];
        let faltantes=[];
        necesarias.forEach(necesaria=>{
            try{
                eval(necesaria);
            }catch(e){
                faltantes.push(necesaria);
            }
        });
        if(faltantes.length > 0){
            this.mostrarError(`Faltan las siguientes variables: ${faltantes.join(', ')}`);
            return false;
        }
        return true;
    }

    mostrarPanel(nombreEntidad){
        const zona=document.getElementById('gestion_entidad');
        zona.innerHTML="";
        let h2=document.createElement('h2');
        h2.innerText=`Entidad: ${nombreEntidad}`;
        zona.appendChild(h2);
        //TestForm
        let botonTestForm=document.createElement('button');
        botonTestForm.innerText="Test atributos";
        botonTestForm.onclick=()=>new TestForm().ejecutar(nombreEntidad);
        //TestSubmit
        let botonTestSubmit=document.createElement('button');
        botonTestSubmit.innerText="Test formulario";
        botonTestSubmit.onclick=()=>new TestSubmit().ejecutar(nombreEntidad);

        zona.appendChild(botonTestForm);
        zona.appendChild(document.createTextNode(' '));
        zona.appendChild(botonTestSubmit);
    }

    mostrarError(mensaje){
        const modal=document.getElementById('zona_modal');
        modal.innerHTML=`
            <div class="cont_modal">
                <h3>Error</h3>
                <p>${mensaje}</p>
                <button onclick="new Gestor().cerrarModal()">Cerrar</button>
            </div>
        `;
        modal.style.display="flex";
    }

    cerrarModal(){
        document.getElementById('zona_modal').style.display="none";
    }
}
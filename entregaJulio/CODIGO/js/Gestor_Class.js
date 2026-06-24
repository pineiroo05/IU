class Gestor {
    constructor() {}

    atenderMenu(nombreEntidad){
        //Se carga todo lo q estaba abierto antes
        const zonaResultados=document.getElementById('resultados_tests');
        const gestionEntidad=document.getElementById('gestion_entidad');
        if(gestionEntidad && gestionEntidad.getAttribute('info-entidad-activa')===nombreEntidad){
            gestionEntidad.innerHTML='';
            gestionEntidad.removeAttribute('info-entidad-activa');
            if(zonaResultados){
                zonaResultados.innerHTML='';
            }
            this.cerrarModal();
            return;
        }
        if(zonaResultados){
            this.cerrarModal();
        }
        if(this.comprobarVariables(nombreEntidad)) {
            this.mostrarPanel(nombreEntidad);
        }
    }

    comprobarVariables(nombreEntidad){
        const necesarias=[`${nombreEntidad}_estructura`, `${nombreEntidad}_def_tests`, `${nombreEntidad}_pruebas`, `${nombreEntidad}_TestSubmit`];
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
        zona.setAttribute('info-entidad-activa', nombreEntidad); //Esto es para q al pulsar la entidad activa se guarde su estado
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
        const html=`
            <div class="cont_modal">
                <h3>Error</h3>
                <p>${mensaje}</p>
                <button onclick="new Gestor().cerrarModal()">Cerrar</button>
            </div>
        `;
        this.abrirModal(html);
    }

    abrirModal(html){
        const modal=document.getElementById('zona_modal');
        if(!modal){
            return;
        }
        modal.innerHTML=html;
        modal.classList.add('visible');
        document.body.classList.add('modal-abierto');
    }

    cerrarModal(){
        const modal=document.getElementById('zona_modal');
        if(!modal){
            return;
        }
        modal.classList.remove('visible');
        modal.innerHTML="";
        document.body.classList.remove('modal-abierto');
    }
}
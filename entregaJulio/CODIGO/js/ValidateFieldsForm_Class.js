class ValidateFieldsForm{
    constructor(){
        this.containerId='contenedor_temporal';
        if(!document.getElementById(this.containerId)){
            let div=document.createElement('div');
            div.id=this.containerId;
            div.style.display="none";
            document.appendChild(div); //Crea el nuevo nodo al final de la estructura
        }
    }

    crearCampo(id, valor, infoAtributo){ //infoAtributo es el html y rules del js de entidad
        const datos=infoAtributo.html;
        let campo=document.createElement(datos.tag);
        campo.id=id;
        if(datos.tag==="input"){
            campo.type=datos.type;
        }
        document.getElementById(this.containerId).appendChild(campo);
        if(datos.type==="file"){
            this.simulacionFichero(id, valor);
        }else {
            campo.value = valor;
        }
        return campo;
    }

    validarCampo(validacion, id, parametros){
        if(typeof Validations[validacion] === 'function'){ //Es la movida del acceso dinamico. Comprueba si validacion es una funcion, y luego la ejecuta
            return Validations[validacion](id, parametros);
        }else{
            return "No existe esa validacion";
        }
    }

    //Entiendo q hay q simular la subida de un fichero o algo
    simulacionFichero(campo, nombreFichero, mime="application/octet-stream"){
        if(!nombreFichero){
            return;
        }
        if(mime==="application/octet-stream"){
            if(nombreFichero.endsWith(".jpg")){mime="image/jpeg";}
            if(nombreFichero.endsWith(".png")){mime="image/png";}
            if(nombreFichero.endsWith(".pdf")){mime="application/pdf";}
        }
        const blob=new Blob([""], {type:mime}); //Contenido del fichero
        const file=new File([blob],nombreFichero,{type:mime}); //Nuevo fichero
        const transfer=new DataTransfer();
        transfer.items.add(file);
        campo.files=transfer.files;
    }

    limpiar(){
        document.getElementById(this.containerId).innerHTML=``;
    }
}

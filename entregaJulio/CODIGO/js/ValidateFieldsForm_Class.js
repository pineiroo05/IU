class ValidateFieldsForm{
    constructor(){
        this.containerId='contenedor_temporal';
        if(!document.getElementById(this.containerId)){
            let div=document.createElement('div');
            div.id=this.containerId;
            div.style.display="none";
            document.body.appendChild(div); //Crea el nuevo nodo al final de la estructura
        }
    }

    crearCampo(id, valor, infoAtributo){ //infoAtributo es el html y rules del js de entidad
        const datos=infoAtributo.html;
        let campo=document.createElement(datos.tag);
        campo.id=id;
        if(datos.tag==="input"){
            campo.type=datos.type==="file"?"file":"text"; //Hardcodeada horrible xd
        }
        document.getElementById(this.containerId).appendChild(campo);
        //Para el select
        if(datos.tag==="select" && datos.options && Array.isArray(datos.options)) {
            datos.options.forEach(opcionTexto => {
                let opcion = document.createElement('option');
                opcion.value = opcionTexto;
                opcion.text = opcionTexto;
                campo.appendChild(opcion);
            });
        }
        //Para archivos
        if(datos.type==="file"){
            if(valor && typeof valor==="object") {
                this.simulacionFichero(campo, valor);
            }
        }else {
            campo.value = valor||'';
        }
        return campo;
    }

    validarCampo(validacion, id, parametros){
        if(typeof Validations[validacion] === 'function'){ //Es la movida del acceso dinamico. Comprueba si validacion es una funcion, y luego la ejecuta
            let resultado=Validations[validacion](id, parametros);
            if(resultado!==true){
                let nombreError=validacion==='exp_reg'?'format':validacion;
                return `${id}_${nombreError}_KO`;
            }
            return true;
        }else{
            return "No existe esa validacion";
        }
    }

    //Entiendo q hay q simular la subida de un fichero o algo
    simulacionFichero(campo, objeto){
        const nombreFichero=objeto.format_name_file||'';
        const tipoMime=objeto.type_file||'application/octet-stream';
        const tam=objeto.max_size_file||0;
        if(!nombreFichero){
            const fichero=new DataTransfer();
            campo.files=fichero.files;
            return;
        }
        const contenido=new Uint8Array(tam);
        const blob=new Blob([contenido],{type:tipoMime});
        const file=new File([blob], nombreFichero, {type:tipoMime});
        const transfer=new DataTransfer();
        transfer.items.add(file);
        campo.files=transfer.files;
    }

    limpiar(){
        document.getElementById(this.containerId).innerHTML=``;
    }
}

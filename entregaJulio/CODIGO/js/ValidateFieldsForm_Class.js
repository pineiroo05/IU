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
        if(datos.tag==="input") {
            campo.type = datos.type === "file" ? "file" : "text";
        }
        //Para el select
        if(datos.tag==="select" && datos.options) {
            //chapucilla para poder hacer las busquedas con el select vacio
            let opVacia=document.createElement('option');
            opVacia.id='';
            opVacia.text='';
            campo.appendChild(opVacia);
            datos.options.forEach(opcion=>{
                let op=document.createElement('option');
                op.value=opcion;
                op.text=opcion;
                campo.appendChild(op);
            });
        }
        document.getElementById(this.containerId).appendChild(campo);
        //Para archivos
        if(datos.type==="file"){
            if(valor && typeof valor==="object") {
                this.simulacionFichero(campo, valor);
            }
        }else {
            //chapuza extrema, pero no se me ocurrio otra forma para que el select me funcionase bien...
            if(datos.tag==="select" && valor && campo.value!==valor){
                let opTemp=document.createElement('option');
                opTemp.value=valor;
                opTemp.text=valor;
                campo.appendChild(opTemp);
            }
            campo.value = valor||'';
            //console.log('campo:', id, 'tag:', datos.tag, 'valor asignado:', valor, 'valor real:', campo.value, 'options:', campo.options?.length);
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

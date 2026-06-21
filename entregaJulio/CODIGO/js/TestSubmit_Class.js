class TestSubmit {
    constructor(){
        this.validacionCampos=new ValidateFieldsForm();
        this.nombreEntidad="";
        this.htmlResumen="";
        this.infoSubmit=null;
    }
    checkSubmit(nombreEntidad, entidad, accion, datos, estructura){
        const ordenValidaciones=['min_size', 'max_size', 'exp_reg', 'personalized', 'not_exist_file', 'max_size_file', 'type_file', 'min_file_name_size', 'max_file_name_size', 'format_name_file'];
        this.validacionCampos.limpiar();
        const erroresEncontrados=[];
        //Crear los campos
        for(let nombreAtributo in estructura.attributes){
            let atributo=estructura.attributes[nombreAtributo];
            let valorPrueba=(datos && datos[nombreAtributo]!==undefined)?datos[nombreAtributo]:'';
            this.validacionCampos.crearCampo(nombreAtributo, valorPrueba, atributo);
        }
        //Validar en orden
        for(let nombreAtributo in estructura.attributes){
            let atributo=estructura.attributes[nombreAtributo];
            let reglas=atributo.rules.validations[accion];
            if(!reglas){
                continue;
            }
            for(let tipoValidacion of ordenValidaciones) {
                if (!(tipoValidacion in reglas)) {
                    continue;
                }
                if (tipoValidacion === 'personalized' && reglas[tipoValidacion] === true) {
                    let metodo = `${nombreAtributo}_personalized_validation`;
                    if (typeof entidad[metodo] === 'function') {
                        let resultado = entidad[metodo](accion);
                        if (resultado !== true) {
                            if(!erroresEncontrados.includes(resultado)) {
                                erroresEncontrados.push(resultado);
                            }
                            break; //pasa al sig atb
                        }
                    }
                } else {
                    let error=this.validacionCampos.validarCampo(tipoValidacion, nombreAtributo, reglas[tipoValidacion]);
                    if (error !== true) {
                        if(!erroresEncontrados.includes(error)) {
                            erroresEncontrados.push(error);
                        }
                        break;
                    }
                }
            }
        }
        return erroresEncontrados.length===0?true:erroresEncontrados;
    }

    ejecutar(nombreEntidad){
        this.nombreEntidad=nombreEntidad;
        const datos=this.cargaDatosEntidad();
        if(!datos.pruebas || !datos.estructura){
            return;
        }
        this.infoSubmit=this.procesarPruebasSubmit(datos);
        this.htmlResumen=this.procesarResumenAcciones(this.infoSubmit.resumen);
        this.mostrarModalResumen();
    }

    cargaDatosEntidad(){
        let claseEntidad, pruebas, estructura;
        estructura=eval(`${this.nombreEntidad}_estructura`);
        pruebas=eval(`${this.nombreEntidad}_TestSubmit`);
        /*try{
            estructura=eval(`${this.nombreEntidad}_estructura`);
        }catch(e){console.log("Error estructura submit: ", e);}
        try{
            pruebas=eval(`${this.nombreEntidad}_TestSubmit`);
        }catch(e){console.log("Error pruebas submit: ", e);}*/
        try{
            claseEntidad=eval(this.nombreEntidad);
        }catch(e){}
        const entidad=(typeof claseEntidad==='function')?new claseEntidad():{};
        return {pruebas, estructura, entidad};
    }

    procesarPruebasSubmit(datos){
        const resumen={};
        const resultados=[];

        datos.pruebas.forEach(prueba=>{
            const accion=prueba[1];
            const numeroTest=prueba[2];
            const descripcion=prueba[3];
            const datosPrueba=prueba[4];
            const errorEsperado=prueba[5];

            if (!resumen[accion]){
                resumen[accion]={total:0, correctas:0, incorrectas:0};
            }
            resumen[accion].total++;
            const resultadoObtenido=this.checkSubmit(this.nombreEntidad, datos.entidad, accion, datosPrueba, datos.estructura);
            let esCorrecto;
            if (errorEsperado===true) {
                esCorrecto=(resultadoObtenido===true);
            }else {
                if(Array.isArray(resultadoObtenido)){
                    let esperadoArray=Array.isArray(errorEsperado)?errorEsperado:errorEsperado.split(',').map(e=>e.trim());
                    let obtenidoArray=resultadoObtenido.map(e=>e.trim());
                    if(esperadoArray.length===obtenidoArray.length){
                        esCorrecto=esperadoArray.every(error=>obtenidoArray.includes(error));
                    }else{
                        esCorrecto=false;
                    }
                }else{
                    esCorrecto=false;
                }
            }
            if(esCorrecto){
                resumen[accion].correctas++;
            }else{
                resumen[accion].incorrectas++;
            }
            resultados.push({ numeroTest, accion, descripcion, errorEsperado, resultadoObtenido, esCorrecto });
        });
        return {resumen,resultados};
    }

    procesarResumenAcciones(resumen){
        let html='<h2>Resumen por acción</h2>';
        html+='<table><tr><th>Acción</th><th>Total</th><th>Correctas</th><th>Incorrectas</th></tr>';
        for(let accion in resumen) {
            html+=`<tr>
                <td>${accion}</td>
                <td>${resumen[accion].total}</td>
                <td>${resumen[accion].correctas}</td>
                <td>${resumen[accion].incorrectas}</td>
            </tr>`;
        }
        html+='</table>';
        return html;
    }
    mostrarModalResumen(){
        let html=`
            <div class="cont_modal">
                <span id="botonCerrarResumen" class="cruz-cerrar">X</span>
                <h1>Resultados test de submit: ${this.nombreEntidad}</h1>
                <div class="modal-contenido-scroll">
                    ${this.htmlResumen}
                    <br>
                    <button id="boton_detalles">Ver detalle de pruebas</button>
                </div>
            </div>
        `;
        new Gestor().abrirModal(html);
        document.getElementById("botonCerrarResumen").onclick=()=>new Gestor().cerrarModal();
        document.getElementById("boton_detalles").onclick=()=>{this.mostrarModalDetalles();};
    }

    mostrarModalDetalles(){
        let htmlModal=`
            <div class="cont_modal modal-tabla">
                <span id="botonVolver" class="boton-volver">Volver al resumen</span>
                <span id="botonCerrarDetalles" class="cruz-cerrar">X</span>
                <h1>Pruebas de submit de ${this.nombreEntidad}</h1>
                <div class="tabla-scroll">
                    <table class="tabla-modal">
                        <tr>
                            <th>Nº</th>
                            <th>Accion</th>
                            <th>Descripcion</th>
                            <th>Esperado</th>
                            <th>Obtenido</th>
                            <th>Resultado</th>
                        </tr>`;
        this.infoSubmit.resultados.forEach(r=>{
            let claseFila=r.esCorrecto?'fila-correcta':'fila-fallo';
            let obtenidos=Array.isArray(r.resultadoObtenido)?r.resultadoObtenido.join(', '):r.resultadoObtenido;
            let esperados=Array.isArray(r.errorEsperado)?r.errorEsperado.join(", "):r.errorEsperado;
            htmlModal += `
                <tr class="${claseFila}">
                    <td class="texto">${r.numeroTest}</td>
                    <td>${r.accion}</td>
                    <td>${r.descripcion}</td>
                    <td>${esperados}</td>
                    <td>${obtenidos}</td>
                    <td>${r.esCorrecto ? 'CORRECTO' : 'FALLO'}</td>
                </tr>`;
        });
        htmlModal+=`</table></div></div>`;
        new Gestor().abrirModal(htmlModal);
        document.getElementById("botonVolver").onclick=()=>{this.mostrarModalResumen();};
        document.getElementById("botonCerrarDetalles").onclick=()=>new Gestor().cerrarModal();
    }
    /*configurarBotonDetalles(resultados,nombreEntidad){
        const botonDetalles=document.getElementById('boton_detalles');
        if(!botonDetalles){
            return;
        }
        botonDetalles.onclick=()=>{
            let htmlModal=`
                <div class="cont_modal modal-tabla">
                    <span id="botonCerrarDetalles" class="cruz-cerrar">X</span>
                    <h1>Pruebas de submit de ${nombreEntidad}</h1>
                    <div class="tabla-scroll"><table class="tabla-modal">
                        <tr>
                            <th>Nº</th>
                            <th>Accion</th>
                            <th>Descripcion</th>
                            <th>Esperado</th>
                            <th>Obtenido</th>
                            <th>Resultado</th>
                        </tr>
            `;
            resultados.forEach(r=>{
                let claseFila=r.esCorrecto?'fila-correcta':'fila-fallo';
                let obtenidos=Array.isArray(r.resultadoObtenido)?r.resultadoObtenido.join(', '):r.resultadoObtenido;
                let esperados=Array.isArray(r.errorEsperado)?r.errorEsperado.join(", "):r.errorEsperado;
                htmlModal+=`
                    <tr class="${claseFila}">
                        <td class="texto">${r.numeroTest}</td>
                        <td>${r.accion}</td>
                        <td>${r.descripcion}</td>
                        <td>${esperados}</td>
                        <td>${obtenidos}</td>
                        <td>${r.esCorrecto?'CORRECTO':'FALLO'}</td>
                    </tr>
               `;
            });
            htmlModal+='</table></div></div>'
            zona_modal.innerHTML=htmlModal;
            zona_modal.style.display="flex";
            document.body.classList.add("modal-abierto");
            document.getElementById('botonCerrarDetalles').onclick=()=>{
                zona_modal.style.display="none";
                zona_modal.innerHTML="";
                document.body.classList.remove("modal-abierto");
            };
        };
    }*/
}
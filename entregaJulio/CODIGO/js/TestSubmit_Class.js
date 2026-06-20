class TestSubmit {
    constructor(){
        this.validacionCampos=new ValidateFieldsForm();
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
        const datos=this.cargaDatosEntidad(nombreEntidad);
        if(!datos.pruebas || !datos.estructura){
            return;
        }
        const infoSubmit=this.procesarPruebasSubmit(datos, nombreEntidad);
        const htmlResumen=this.procesarResumenAcciones(infoSubmit.resumen);
        this.mostrarModalResumen(htmlResumen, infoSubmit, nombreEntidad);
        /*const resultados_tests=document.getElementById('resultados_tests');
        const datos=this.cargaDatosEntidad(nombreEntidad);
        let ventana=`<div class="resumen">`;
        ventana+=`<h1>Resultados test de submit: ${nombreEntidad}</h1>`;

        if (!datos.pruebas || !datos.estructura) {
            ventana+=`<p style="color:red">Error: No hay pruebas o estructura para ${nombreEntidad}</p>`;
            resultados_tests.innerHTML=ventana;
            return;
        }
        const infoSubmit=this.procesarPruebasSubmit(datos, nombreEntidad);
        ventana+=this.procesarResumenAcciones(infoSubmit.resumen);
        ventana+=`<br><button id="boton_detalles">Ver detalle de pruebas</button>`;
        ventana+=`</div>`;
        resultados_tests.innerHTML=ventana;
        this.configurarBotonDetalles(infoSubmit.resultados, nombreEntidad);*/
    }

    cargaDatosEntidad(nombreEntidad){
        let claseEntidad, pruebas, estructura;
        try{
            estructura=eval(`${nombreEntidad}_estructura`);
        }catch(e){console.log("Error estructura submit: ", e);}
        try{
            pruebas=eval(`${nombreEntidad}_TestSubmit`);
        }catch(e){console.log("Error pruebas submit: ", e);}
        try{
            claseEntidad=eval(nombreEntidad);
        }catch(e){}
        const entidad=(typeof claseEntidad==='function')?new claseEntidad():{};
        return {pruebas, estructura, entidad};
    }

    procesarPruebasSubmit(datos, nombreEntidad){
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
            const resultadoObtenido=this.checkSubmit(nombreEntidad, datos.entidad, accion, datosPrueba, datos.estructura);
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
    mostrarModalResumen(htmlResumen, infoSubmit, nombreEntidad){
        let html=`
            <div class="cont_modal">
                <span id="botonCerrarResumen" class="cruz-cerrar">X</span>
                <h1>Resultados test de submit: ${nombreEntidad}</h1>
                <div class="modal-contenido-scroll">
                    ${htmlResumen}
                    <br>
                    <button id="boton_detalles">Ver detalle de pruebas</button>
                </div>
            </div>
        `;
        new Gestor().abrirModal(html);
        document.getElementById("botonCerrarResumen").onclick=()=>new Gestor().cerrarModal();
        document.getElementById("boton_detalles").onclick=()=>{this.mostrarModalDetalles(infoSubmit.resultados, nombreEntidad, htmlResumen, infoSubmit);};
    }

    mostrarModalDetalles(resultados, nombreEntidad, htmlResumen, infoSubmit){
        let htmlModal=`
            <div class="cont_modal modal-tabla">
                <span id="botonVolver" class="boton-volver">Volver al resumen</span>
                <span id="botonCerrarDetalles" class="cruz-cerrar">X</span>
                <h1>Pruebas de submit de ${nombreEntidad}</h1>
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
        resultados.forEach(r=>{
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
        document.getElementById("botonVolver").onclick=()=>{this.mostrarModalResumen(htmlResumen, infoSubmit, nombreEntidad);};
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
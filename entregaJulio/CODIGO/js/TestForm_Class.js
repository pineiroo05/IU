class TestForm {
    constructor(){
        this.validacionCampos=new ValidateFieldsForm();
        this.nombreEntidad="";
        this.htmlResumen="";
        this.infoPruebas=null;
    }

    ejecutar(nombreEntidad){
        this.nombreEntidad=nombreEntidad;
        const datos=this.cargaDatosEntidad();
        if(!datos.pruebas || !datos.estructura){
            return;
        }
        this.htmlResumen=this.procesarEstructura(datos.estructura);
        this.htmlResumen+=this.procesarDefinicionTests(datos.defTests);
        this.infoPruebas=this.procesarPruebas(datos);
        this.htmlResumen+=this.infoPruebas.html;
        this.mostrarModalResumen();
    }

    cargaDatosEntidad(){
        let pruebas, defTests, estructura;
        pruebas = eval(`${this.nombreEntidad}_pruebas`);
        defTests = eval(`${this.nombreEntidad}_def_tests`);
        estructura = eval(`${this.nombreEntidad}_estructura`);
        let entidad=null;
        try{
            let claseEntidad=eval(this.nombreEntidad);
            if(typeof claseEntidad!=="undefined"){
                entidad=new claseEntidad();
            }
        }catch(e){}
        return {pruebas, defTests, estructura, entidad};
    }

    procesarEstructura(estructura){
        let html=`<h2>1. Estructura de la entidad</h2>`;
        if(!estructura){
            return html;
        }
        html+=`<p>Estructura correcta</p>`;
        html+=`<ul class="modal-lista-atributos">`;
        for(let atb in estructura.attributes){
            html+=`<li>${atb}</li>`;
        }
        html+=`</ul>`;
        return html;
    }

    procesarDefinicionTests(defTests){
        let html=`<h2>2. Definicion de tests</h2>`;
        if(!defTests){
            return html;
        }
        let totalDefiniciones=defTests.length;
        let contadorCorrectas=0;
        let definicionesPorAtb={};
        defTests.forEach(def=>{
            let bienDefinida=(
                typeof def[0]==='string'&&
                typeof def[1]==='string'&&
                typeof def[2]==='string'&&
                typeof def[3]==='number'&&
                typeof def[4]==='string'&&
                typeof def[5]==='string'&&
                (typeof def[6]==='boolean' || typeof def[6]==='string')&&
                typeof def[7]==='string'
            );
            if(bienDefinida){
                contadorCorrectas++;
            }
            let campo=def[1];
            if(!definicionesPorAtb[campo]){
                definicionesPorAtb[campo]=0;
            }
            definicionesPorAtb[campo]++;
        });
        html+=`<p>Numero total de definiciones: <b>${totalDefiniciones}</b></p>`;
        html+=`<p>Definiciones correctas: <b>${contadorCorrectas}</b></p>`
        html+=`<table><tr><th>Atributo</th><th>Numero de definiciones</th></tr>`;
        for(let campo in definicionesPorAtb){
            html+=`<tr><td>${campo}</td><td>${definicionesPorAtb[campo]}</td></tr>`;
        }
        html+=`</table>`;
        return html;
    }

    procesarPruebas(datos){
        let html=`<h2>3. Pruebas</h2>`;
        if(!datos.pruebas){
            return {html, resultados: []};
        }
        let totalPruebas=datos.pruebas.length;
        let contadorPruebasBienDefinidas=0;
        let pruebasErroneas={};
        let pruebasSinError={};
        let contadorPruebasCorrectas=0;
        let resultados=[];
        datos.pruebas.forEach(prueba => {
            let bienDefinida=(
                typeof prueba[0]==='string'&&
                typeof prueba[1]==='string'&&
                typeof prueba[2]==='number'&&
                typeof prueba[3]==='number'&&
                typeof prueba[4]==='string'&&
                Array.isArray(prueba[5])&&
                (typeof prueba[6]==='boolean' || typeof prueba[6]==='string')
            );
            if(bienDefinida){
                contadorPruebasBienDefinidas++;
            }
            let numDefinicion=prueba[2];
            if(!pruebasErroneas[numDefinicion]){
                pruebasErroneas[numDefinicion]=0;
            }
            if(!pruebasSinError[numDefinicion]){
                pruebasSinError[numDefinicion]=0;
            }
            if(prueba[6]===true){
                pruebasSinError[numDefinicion]++;
            }else{
                pruebasErroneas[numDefinicion]++;
            }
            this.validacionCampos.limpiar();
            const campoNombre=prueba[1];
            const accion=prueba[4];
            const valorProbar=prueba[5][0][campoNombre];
            const resultadoEsperado=prueba[6];
            let resultadoObtenido=true;
            let definicionAtributo=datos.estructura?datos.estructura.attributes[campoNombre]:null;
            if(definicionAtributo){
                const todosLosValores=prueba[5][0];
                for(let campo in todosLosValores){
                    if(campo !== campoNombre){
                        let defAtb=datos.estructura.attributes[campo];
                        if(defAtb){
                            this.validacionCampos.crearCampo(campo, todosLosValores[campo], defAtb);
                        }
                    }
                }
                this.validacionCampos.crearCampo(campoNombre, valorProbar, definicionAtributo);
                let reglas=definicionAtributo.rules.validations[accion];
                if(reglas){
                    resultadoObtenido=this.ejecutarReglasValidaciones(campoNombre, accion, reglas, datos.entidad);
                }
            }
            const esCorrecto=(resultadoObtenido===resultadoEsperado);
            if(esCorrecto){
                contadorPruebasCorrectas++;
            }
            resultados.push({numeroPrueba: prueba[3], campoNombre, accion, valorProbar, resultadoEsperado, resultadoObtenido, esCorrecto });
        });
        html+=`<p>Numero total de pruebas: <b>${totalPruebas}</b></p>`;
        html+=`<p>Pruebas bien definidas: <b>${contadorPruebasBienDefinidas}</b></p>`;
        html+=`<p>Pruebas correctas: <b>${contadorPruebasCorrectas}</b></p>`;
        html+=`<h3>Resumen definicion test</h3>`;
        html+=`<table><tr><th>Numero definicion</th><th>Pruebas con error</th><th>Pruebas sin error</th></tr>`;
        for(let numDef in pruebasErroneas){
            html+=`<tr><td>${numDef}</td><td>${pruebasErroneas[numDef]}</td><td>${pruebasSinError[numDef]}</td></tr>`;
        }
        html+=`</table><br><button id="boton_detalles">Ver pruebas</button>`;
        return {html, resultados};
    }

    ejecutarReglasValidaciones(campoNombre, accion, reglas, entidad){
        const ordenValidaciones=['min_size','max_size','exp_reg','personalized','not_exist_file','max_size_file','min_file_name_size','max_file_name_size','format_name_file','type_file'];
        for(let tipoValidacion of ordenValidaciones){
            if(!(tipoValidacion in reglas)){
                continue;
            }
            if(tipoValidacion==='personalized'&&reglas[tipoValidacion]===true){
                let metodo=`${campoNombre}_personalized_validation`;
                if(entidad && typeof entidad[metodo]=='function'){
                    let resultado=entidad[metodo](accion);
                    if(resultado!==true){
                        return resultado;
                    }
                }
            }else{
                let error=this.validacionCampos.validarCampo(tipoValidacion, campoNombre, reglas[tipoValidacion]);
                if(error!==true){
                    return error;
                }
            }
        }
        return true;
    }

    mostrarModalResumen(){
        let html=`
            <div class="cont_modal">
                <span id="botonCerrarDetalles" class="cruz-cerrar">X</span>
                <h1>Resultados test de atributos: ${this.nombreEntidad}</h1>
                <div class="modal-contenido-scroll">${this.htmlResumen}</div>
            </div>
        `;
        new Gestor().abrirModal(html);
        document.getElementById("botonCerrarDetalles").onclick=()=>new Gestor().cerrarModal();
        document.getElementById("boton_detalles").onclick=()=>this.mostrarModalDetalles();
    }

    mostrarModalDetalles(){
        let htmlModal = `
            <div class="cont_modal modal-tabla">
                <span id="botonVolver" class="boton-volver">Volver al resumen</span>
                <span id="botonCerrarDetalles" class="cruz-cerrar">X</span>
                <h1>Pruebas de: ${this.nombreEntidad}</h1>
                <div class="tabla-scroll">
                    <table class="tabla-modal">
                        <tr>
                            <th class="text-center">ID</th>
                            <th>ACCION</th>
                            <th>CAMPO</th>
                            <th>VALOR</th>
                            <th>ESPERADO</th>
                            <th>OBTENIDO</th>
                            <th>RESULTADO</th>
                        </tr>`;
        this.infoPruebas.resultados.forEach(res=>{
            let claseFila=res.esCorrecto?"fila-correcta":"fila-fallo";
            htmlModal+=`
                <tr class="${claseFila}">
                    <td class="text-center">${res.numeroPrueba}</td>
                    <td>${res.accion}</td>
                    <td>${res.campoNombre}</td>
                    <td>${res.valorProbar}</td>
                    <td>${res.resultadoEsperado}</td>
                    <td>${res.resultadoObtenido}</td>
                    <td>${res.esCorrecto?"CORRECTO":"ERRONEO"}</td>
                </tr>`;
        });
        htmlModal+=`</table></div></div>`;
        new Gestor().abrirModal(htmlModal);
        document.getElementById("botonVolver").onclick=()=>this.mostrarModalResumen();
        document.getElementById("botonCerrarDetalles").onclick=()=>new Gestor().cerrarModal();
    }
}
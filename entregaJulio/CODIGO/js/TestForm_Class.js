class TestForm {
    ejecutar(nombreEntidad){
        const resultados_tests=document.getElementById('resultados_tests');
        const zona_modal=document.getElementById('zona_modal');

        const validacionCampos=new ValidateFieldsForm();
        let pruebas, defTests, estructura;
        try{
            pruebas = eval(`${nombreEntidad}_pruebas`);
        }catch(e){ console.log('Error pruebas:', e); }
        try{
            defTests = eval(`${nombreEntidad}_def_tests`);
        }catch(e){ console.log('Error defTests:', e); }
        try{
            estructura = eval(`estructura_${nombreEntidad}`);
        }catch(e){ console.log('Error estructura:', e); }
        let entidad=null;
        try {
            let claseEntidad=eval(nombreEntidad);
            if (typeof claseEntidad!=='undefined') {
                entidad = new claseEntidad();
            }
        }catch(e){}

        let ventana=`<div class="resumen">`
        ventana+=`<h1>Resultados test de atributos: ${nombreEntidad}</h1>`;
        //Bloque 1
        ventana+=`<h2>1. Estructura de la entidad</h2>`;
        if(!estructura){
            ventana+=`<p style="color:red">Error, no hay estructura_${nombreEntidad}.</p>`;
        }else{
            ventana+=`<p style="color:green">Estructura correcta</p>`;
            ventana+=`<ul>`;
                for(let atb in estructura.attributes) {
                    ventana+=`<li>${atb}</li>`;
                }
                ventana+=`</ul>`;
        }

        //BLoque 2
        ventana+=`<h2>2. Definicion de tests</h2>`;
        if(!defTests){
            ventana+=`<p style="color:red">Error, no hay ${nombreEntidad}_def_tests.></p>`;
        }else{
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
                    (typeof def[6]==='boolean'||typeof def[6]==='string')&&
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
            ventana+=`<p>Numero total de definiciones: <b>${totalDefiniciones}</b></p>`;
            ventana+=`<p>Definiciones correctas: <b>${contadorCorrectas}</b></p>`;
            ventana+=`<table><tr><th>Atributo</th><th>Numero de definiciones</th></tr>`;
            for(let campo in definicionesPorAtb){
                ventana+=`<tr><td>${campo}</td><td>${definicionesPorAtb[campo]}</td></tr>`;
            }
            ventana+=`</table>`;
        }

        //Bloque 3
        ventana+=`<h2>3. Pruebas</h2>`;
        if(!pruebas){
            ventana+=`<p style="color:red">Error, no hay ${nombreEntidad}_pruebas</p>`;
        }else{
            let totalPruebas=pruebas.length;
            let contadorPruebasBienDefinidas=0;
            let pruebasErroneas={};
            let pruebasSinError={};
            let contadorPruebasCorrectas=0;
            let resultados=[];

            pruebas.forEach(prueba => {
                let bienDefinida=(
                    typeof prueba[0]==='string'&&
                    typeof prueba[1]==='string'&&
                    typeof prueba[2]==='number'&&
                    typeof prueba[3]==='number'&&
                    typeof prueba[4]==='string'&&
                    Array.isArray(prueba[5])&&
                    (typeof prueba[6]==='string'||typeof prueba[6]==='boolean')
                );
                if(bienDefinida){
                    contadorPruebasBienDefinidas++;
                }
                let numDefinicion=prueba[2];
                if(!pruebasErroneas[numDefinicion]){pruebasErroneas[numDefinicion]=0;}
                if(!pruebasSinError[numDefinicion]){pruebasSinError[numDefinicion]=0;}
                if(prueba[6]===true){
                    pruebasSinError[numDefinicion]++;
                }else{
                    pruebasErroneas[numDefinicion]++;
                }
                validacionCampos.limpiar();
                const campoNombre=prueba[1];
                const accion=prueba[4];
                const valorProbar=prueba[5][0][campoNombre];
                const resultadoEsperado=prueba[6];
                let resultadoObtenido=true;
                let definicionAtributo=estructura.attributes[campoNombre];

                if(definicionAtributo){
                    const todosLosValores = prueba[5][0];
                    for(let campo in todosLosValores){
                        if(campo !== campoNombre){
                            let defAtb = estructura.attributes[campo];
                            if(defAtb){
                                validacionCampos.crearCampo(campo, todosLosValores[campo], defAtb);
                            }
                        }
                    }
                    validacionCampos.crearCampo(campoNombre, valorProbar, definicionAtributo);

                    let reglas=definicionAtributo.rules.validations[accion];
                    resultadoObtenido=true;
                    if(reglas){
                        const ordenValidaciones=['min_size', 'max_size', 'exp_reg', 'personalized', 'not_exist_file', 'max_size_file', 'min_file_name_size', 'max_file_name_size', 'format_name_file', 'type_file'];
                        for(let tipoValidacion of ordenValidaciones){
                            if(!(tipoValidacion in reglas)){
                                continue;
                            }
                            if(tipoValidacion==='personalized'&&reglas[tipoValidacion]===true) {
                                let metodo=`${campoNombre}_personalized_validation`;
                                if (entidad && typeof entidad[metodo] === 'function') {
                                    let resultado=entidad[metodo](accion);
                                    if (resultado!==true) {
                                        resultadoObtenido=resultado;
                                        break;
                                    }
                                }
                            }else{
                                let error=validacionCampos.validarCampo(tipoValidacion,campoNombre,reglas[tipoValidacion]);
                                if(error!==true){
                                    resultadoObtenido=error;
                                    break;
                                }
                            }
                        }
                    }
                }
                const esCorrecto=(resultadoObtenido===resultadoEsperado);
                if(esCorrecto){contadorPruebasCorrectas++;}
                resultados.push({numeroPrueba:prueba[3],campoNombre,accion,valorProbar,resultadoEsperado,resultadoObtenido,esCorrecto});
            });
            ventana+=`<p>Numero total de pruebas: <b>${totalPruebas}</b></p>`;
            ventana+=`<p>Pruebas bien definidas: <b>${contadorPruebasBienDefinidas}</b></p>`;
            ventana+=`<p>Pruebas correctas: <b>${contadorPruebasCorrectas}</b></p>`;
            
            ventana+=`<h3>Resumen definicion test</h3>`;
            ventana+=`<table><tr><th>Numero definicion</th><th>Pruebas con error</th><th>Pruebas sin error</th></tr>`;
            for(let numDef in pruebasErroneas){
                ventana+=`<tr><td>${numDef}</td><td>${pruebasErroneas[numDef]}</td><td>${pruebasSinError[numDef]}</td></tr>`;
            } 
            //ojo: si pongo arriba solo pruebasErroneas saca object Object
            ventana += `</table>`;
            ventana += `<br><button id="boton_detalles">Ver pruebas</button>`;
            resultados_tests.innerHTML = ventana;
            const botonDetalles = document.getElementById('boton_detalles');
            if (botonDetalles) {
                botonDetalles.onclick = () => {
                    let htmlModal = `
                        <div class="cont_modal modal-tabla">
                            <span id="botonCerrarDetalles" class="cruz-cerrar">✕</span>
                            <h1>Pruebas de: ${nombreEntidad}</h1>
                            <div class="tabla-scroll"><table class="tabla-modal">
                                <tr>
                                    <th class="text-center">ID</th>
                                    <th>ACCION</th>
                                    <th>CAMPO</th>
                                    <th>VALOR</th>
                                    <th>ESPERADO</th>
                                    <th>OBTENIDO</th>
                                    <th>RESULTADO</th>
                                </tr>`;
                    resultados.forEach(resultado => {
                        let claseFila = resultado.esCorrecto ? "fila-correcta" : "fila-fallo";
                        htmlModal += `
                            <tr class="${claseFila}">
                                <td class="text-center">${resultado.numeroPrueba}</td>
                                <td>${resultado.accion}</td>
                                <td>${resultado.campoNombre}</td>
                                <td>${resultado.valorProbar}</td>
                                <td>${resultado.resultadoEsperado}</td>
                                <td>${resultado.resultadoObtenido}</td>
                                <td>${resultado.esCorrecto ? "CORRECTO" : "ERRONEO"}</td>
                            </tr>`;
                    });
                    htmlModal += `</table></div></div>`;
                    zona_modal.innerHTML = htmlModal;
                    zona_modal.style.display='flex';
                    document.body.classList.add("modal-abierto");
                    document.getElementById('botonCerrarDetalles').onclick = () => {
                        zona_modal.style.display='none';
                        zona_modal.innerHTML="";
                        document.body.classList.remove("modal-abierto");
                    };
                };
            }
        }
    }
}
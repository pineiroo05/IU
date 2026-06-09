class TestForm {
    ejecutar(nombreEntidad){
        this.ventana=window.open("", "Resultados test de atributos", "width=800, height=600");
        this.ventana.document.write("<h1>Resultados test de atributos:"+nombreEntidad+"</h1>");

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

        //Bloque 1
        this.ventana.document.write("<h2>1. Estructura de la entidad</h2>");
        if(!estructura){
            this.ventana.document.write(`<p style="color:red">Error, no hay estructura_${nombreEntidad}.</p>`);
        }else{
            this.ventana.document.write(`<p style="color:green">Estructura correcta</p>`);
            this.ventana.document.write(`<ul>`);
                for(let atb in estructura.attributes) {
                    this.ventana.document.write(`<li>${atb}</li>`);
                }
                this.ventana.document.write(`</ul>`);
        }

        //BLoque 2
        this.ventana.document.write(`<h2>2. Definicion de tests</h2>`);
        if(!defTests){
            this.ventana.document.write(`<p style="color:red">Error, no hay ${nombreEntidad}_def_tests.></p>`)
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
            this.ventana.document.write(`<p>Numero total de definiciones: <b>${totalDefiniciones}</b></p>`);
            this.ventana.document.write(`<p>Definiciones correctas: <b>${contadorCorrectas}</b></p>`);
            this.ventana.document.write(`<table border="1"><tr><th>Atributo</th><th>Numero de definiciones</th></tr>`);
            for(let campo in definicionesPorAtb){
                this.ventana.document.write(`<tr><td>${campo}</td><td>${definicionesPorAtb[campo]}</td></tr>`);
            }
            this.ventana.document.write(`</table>`)
        }

        //Bloque 3
        this.ventana.document.write(`<h2>3. Pruebas</h2>`);
        if(!pruebas){
            this.ventana.document.write(`<p style="color:red">Error, no hay ${nombreEntidad}_pruebas</p>`);
        }else{
            let totalPruebas=pruebas.length;
            let contadorPruebasBienDefinidas=0;
            let pruebasErroneas={};
            let pruebasSinError={};
            let contadorPruebasCorrectas=0;
            let resultados=[];

            pruebas.forEach((prueba,index) => {
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
                resultados.push({index,campoNombre,accion,valorProbar,resultadoEsperado,resultadoObtenido,esCorrecto});
            });
            this.ventana.document.write(`<p>Numero total de pruebas: <b>${totalPruebas}</b></p>`);
            this.ventana.document.write(`<p>Pruebas bien definidas: <b>${contadorPruebasBienDefinidas}</b></p>`);
            this.ventana.document.write(`<p>Pruebas correctas: <b>${contadorPruebasCorrectas}</b></p>`);

            this.ventana.document.write(`<h3>Resumen definicion test</h3>`);
            this.ventana.document.write(`<table border="1"><tr><th>Numero definicion</th><th>Pruebas con error</th><th>Pruebas sin error></th></tr>`)
            for(let numDef in pruebasErroneas){
                this.ventana.document.write(`
                    <tr> 
                        <td>${numDef}</td>
                        <td>${pruebasErroneas[numDef]}</td>
                        <td>${pruebasSinError[numDef]}</td>
                    </tr>
                `);
            } //ojo: si pongo arriba solo pruebasErroneas saca object Object
            this.ventana.document.write(`</table>`);

            this.ventana.document.write(`<br><button onclick="window.abrirDetalles()">Ver pruebas</button>`);
            this.ventana.abrirDetalles=()=>{
                let ventanaDetalles=window.open("", "Pruebas detalladas", "width=900, height=600");
                ventanaDetalles.document.write(`<h1>Pruebas de ${nombreEntidad}</h1>`);
                ventanaDetalles.document.write(`<table border="1"><tr><th>ID</th><th>CAMPO</th><th>ACCION</th><th>VALOR</th><th>ESPERADO</th><th>OBTENIDO</th><th>RESULTADO</th></tr>`);
                resultados.forEach(resultado => {
                    let color=resultado.esCorrecto?"#00ff00":"#ff0000";
                    ventanaDetalles.document.write(`
                        <tr style="background-color:${color}">
                            <td>${resultado.index}</td>
                            <td>${resultado.accion}</td>
                            <td>${resultado.campoNombre}</td>
                            <td>${resultado.valorProbar}</td>
                            <td>${resultado.resultadoEsperado}</td>
                            <td>${resultado.resultadoObtenido}</td>
                            <td>${resultado.esCorrecto?"CORRECTO":"ERRONEO"}</td>
                        </tr>
                    `);
                });
                ventanaDetalles.document.write(`</table>`);
                ventanaDetalles.document.close();
            };
        }
        this.ventana.document.close();
    }
}
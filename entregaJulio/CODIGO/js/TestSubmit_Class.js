class TestSubmit {
    checkSubmit(nombreEntidad, entidad, accion, datos, estructura, validacionCampos){
        const ordenValidaciones=['min_size', 'max_size', 'exp_reg', 'personalized', 'not_exist_file', 'max_size_file', 'type_file', 'min_file_name_size', 'max_file_name_size', 'format_name_file'];
        validacionCampos.limpiar();

        //Crear los campos
        for(let nombreAtributo in estructura.attributes){
            let atributo=estructura.attributes[nombreAtributo];
            let valorPrueba=(datos && datos[nombreAtributo]!==undefined)?datos[nombreAtributo]:'';
            validacionCampos.crearCampo(nombreAtributo, valorPrueba, atributo);
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
                            return resultado;
                        }
                    }
                } else {
                    let error = validacionCampos.validarCampo(tipoValidacion, nombreAtributo, reglas[tipoValidacion]);
                    if (error !== true) {
                        return error;
                    }
                }
            }
        }
        return true;
    }

    ejecutar(nombreEntidad) {
        let claseEntidad, pruebas, estructura;
        const validacionCampos = new ValidateFieldsForm();

        try { estructura = eval(`estructura_${nombreEntidad}`); } catch(e) {}
        try { pruebas = eval(`${nombreEntidad}_TestSubmit`); } catch(e) {}
        try { claseEntidad = eval(nombreEntidad); } catch(e) {}

        this.ventana = window.open('', 'Resultados test submit', 'width=800, height=600');
        this.ventana.document.write(`<h1>Resultados test submit: ${nombreEntidad}</h1>`);

        if (typeof claseEntidad !== 'function') {
            this.ventana.document.write(`<p style="color:red">Error: '${nombreEntidad}' no es una clase válida.</p>`);
            this.ventana.document.close();
            return;
        }
        if (!pruebas || !estructura) {
            this.ventana.document.write(`<p style="color:red">Error: No hay pruebas o estructura para ${nombreEntidad}</p>`);
            this.ventana.document.close();
            return;
        }

        const entidad = new claseEntidad();

        // Resumen por acción
        const resumen = {};
        const resultados = [];

        pruebas.forEach(prueba => {
            const accion=prueba[1];
            const numeroTest=prueba[2];
            const descripcion=prueba[3];
            const datos=prueba[4];
            const errorEsperado=prueba[5];

            if (!resumen[accion]) resumen[accion] = { total: 0, correctas: 0, incorrectas: 0 };
            resumen[accion].total++;

            const resultadoObtenido=this.checkSubmit(nombreEntidad, entidad, accion, datos, estructura, validacionCampos);

            const esCorrecto = (resultadoObtenido === errorEsperado);
            if (esCorrecto) {
                resumen[accion].correctas++;
            }else {
                resumen[accion].incorrectas++;
            }

            resultados.push({ numeroTest, accion, descripcion, errorEsperado, resultadoObtenido, esCorrecto });
        });

        // Mostrar resumen por acción
        this.ventana.document.write('<h2>Resumen por acción</h2>');
        this.ventana.document.write('<table border="1"><tr><th>Acción</th><th>Total</th><th>Correctas</th><th>Incorrectas</th></tr>');
        for (let accion in resumen) {
            this.ventana.document.write(`<tr>
                <td>${accion}</td>
                <td>${resumen[accion].total}</td>
                <td>${resumen[accion].correctas}</td>
                <td>${resumen[accion].incorrectas}</td>
            </tr>`);
        }
        this.ventana.document.write('</table>');

        // Botón detalle
        this.ventana.document.write('<br><button onclick="window.abrirDetalleSubmit()">Ver detalle de pruebas</button>');
        this.ventana.abrirDetalleSubmit = () => {
            let ventanaDetalle = window.open('', 'Detalle submit', 'width=900, height=600');
            ventanaDetalle.document.write(`<h1>Detalle pruebas submit: ${nombreEntidad}</h1>`);
            ventanaDetalle.document.write('<table border="1"><tr><th>Nº</th><th>Acción</th><th>Descripción</th><th>Esperado</th><th>Obtenido</th><th>Resultado</th></tr>');
            resultados.forEach(r => {
                let color = r.esCorrecto ? '#00ff00' : '#ff0000';
                ventanaDetalle.document.write(`<tr style="background-color:${color}">
                    <td>${r.numeroTest}</td>
                    <td>${r.accion}</td>
                    <td>${r.descripcion}</td>
                    <td>${r.errorEsperado}</td>
                    <td>${r.resultadoObtenido}</td>
                    <td>${r.esCorrecto ? 'CORRECTO' : 'FALLO'}</td>
                </tr>`);
            });
            ventanaDetalle.document.write('</table>');
            ventanaDetalle.document.close();
        };

        this.ventana.document.close();
    }
}
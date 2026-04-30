class TestSubmit {
    ejecutar(nombreEntidad){
        this.ventana=window.open("", "Resultados test submit", "width=800, height=600");
        this.ventana.document.write("<table border='1'><tr><th>Numero</th><th>Accion</th><th>Atributo</th><th>Esperado</th><th>Obtenido</th><th>Resultado</th></tr>");

        const pruebas=window[nombreEntidad+"_TestSubmit"];
        const estructura=window["estructura_"+nombreEntidad];
        const entidad=new window[nombreEntidad]();
        const validacionCampos=new ValidateFieldsForm();

        pruebas.forEach((prueba) => {
            validacionCampos.limpiar();
            //Crea los campos
            for(let nombreAtributo in estructura.attributes){
                let atb=estructura.attributes[nombreAtributo];
                let valorPrueba=(prueba.datos && prueba.datos[nombreAtributo])?prueba.datos[nombreAtributo]:"";
                validacionCampos.crearCampo(nombreAtributo,valorPrueba,atb);
            }
            //Validaciones
            let resultadoObtenido=true;
            const accionActual=prueba.accion;
            for(let nombreAtributo in estructura.attributes){
                let atb=estructura.attributes[nombreAtributo];
                let reglasValidacion=atb.rules.validations[accionActual];
                /*if(!reglasValidacion){
                    continue;
                }*/
                let campoFallo=false;
                for(let regla in reglasValidacion){
                    if(regla==='personalized' && reglasValidacion[regla]===true){
                        let metodoPersonalizado=`${nombreAtributo}_personalized_validation`;
                        let resultadoPersonalizado= entidad[metodoPersonalizado];
                        if(resultadoPersonalizado!==true){
                            resultadoObtenido=resultadoPersonalizado;
                            campoFallo=true;
                            break;
                        }
                    }else if(regla!=='personalized'){
                        let nombreReglaValidacion=(regla==='exp_reg')?'format':regla;
                        let hayError=validacionCampos.validarCampo(nombreReglaValidacion, nombreAtributo, reglasValidacion[regla]);
                        if(hayError===true){
                            resultadoObtenido=`${nombreAtributo}_${regla}_KO`;
                            campoFallo=true;
                            break;
                        }
                    }
                }
                if(campoFallo===true){
                    break;
                }
            }
            //Saca los resultados
            let esExito=(resultadoObtenido===prueba.errorEsperado);
            let colorFila=esExito?"#059a05" : "#ff0000";
            this.ventana.document.write(`
                <tr style="background-color:${colorFila}">
                    <td>${prueba.numero}</td>
                    <td>${prueba.accion}</td>
                    <td>${prueba.atributo}</td>
                    <td>${prueba.errorEsperado}</td>
                    <td>${resultadoObtenido===true?true:resultadoObtenido}</td>
                    <td>${esExito?'CORRECTO':'FALLO'}</td>
                </tr>
            `);
        });
        this.ventana.document.write("</table></body></html>");
        this.ventana.document.close();
    }
}
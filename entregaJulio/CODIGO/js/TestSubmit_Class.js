class TestSubmit {
    ejecutar(nombreEntidad) {
        let claseEntidad, pruebas, estructura;
        const validacionCampos=new ValidateFieldsForm();

        try{
            estructura=eval("estructura_"+nombreEntidad);
            pruebas=eval(nombreEntidad+"_TestSubmit");
            claseEntidad=eval(nombreEntidad);
        }catch(e){}

        this.ventana = window.open("", "Resultados test submit", "width=800, height=600");
        this.ventana.document.write("<table border='1'><tr><th>Numero</th><th>Accion</th><th>Atributo</th><th>Esperado</th><th>Obtenido</th><th>Resultado</th></tr>");

        if (typeof claseEntidad !== 'function') {
            this.ventana.document.write(`<h1>Error: '${nombreEntidad}' no es una clase válida (Constructor).</h1>`);
            return;
        }

        if (!pruebas || !estructura) {
            this.ventana.document.write(`<h1>Error: No hay pruebas o estructura para ${nombreEntidad}</h1>`);
            return;
        }
        const entidad=new claseEntidad();

        pruebas.forEach(prueba => {
            const accion=prueba[1];
            const numeroTest=prueba[2];
            const descripcionPrueba=prueba[3];
            const datos=prueba[4];
            const errorEsperado=prueba[5];

            validacionCampos.limpiar();
            //Crea los campos
            for(let nombreAtributo in estructura.attributes){
                let atributo=estructura.attributes[nombreAtributo];
                let valorPrueba=(datos && datos[nombreAtributo]!=='undefined')?datos[nombreAtributo]:"";
                validacionCampos.crearCampo(nombreAtributo,valorPrueba, atributo);
            }
            //Las validaciones
            let resultadoObtenido=true;
            for(let nombreAtributo in estructura.attributes){
                let atributo=estructura.attributes[nombreAtributo];
                let reglas=atributo.rules.validations[accion];
                let campoFallo=false;

                for(let regla in reglas){
                    if(regla==="personalized" && reglas[regla]===true){
                        let metodo=`${nombreAtributo}_personalized_validation`;
                        if(typeof entidad[metodo] === "function"){
                            let resultado=entidad[metodo]();
                            if(resultado!==true){
                                resultadoObtenido=resultado;
                                campoFallo=true;
                                break;
                            }
                        }
                    }else{
                        let hayError=validacionCampos.validarCampo(regla, nombreAtributo, reglas[regla]);
                        if(hayError!==true){
                            resultadoObtenido=`${nombreAtributo}_${regla}_KO`;
                            campoFallo=true;
                            break;
                        }
                    }
                }
            }

            let esExito=(resultadoObtenido===prueba.errorEsperado);
            let colorFila=esExito?"#00ff00":"#ff0000";
            this.ventana.document.write(`
                <tr style="background-color:${colorFila};">
                    <td>${numeroTest}</td>
                    <td>${accion}</td>
                    <td>${descripcionPrueba}</td>
                    <td>${errorEsperado}</td>
                    <td>${resultadoObtenido}</td>
                    <td>${esExito?'CORRECTO':'FALLO'}</td>
                </tr>
            `);
        });
        this.ventana.document.write("</table></body></html>");
        this.ventana.document.close();
    }
}
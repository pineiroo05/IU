class TestForm {
    ejecutar(nombreEntidad){
        this.ventana=window.open("", "Resultados test de atributos", "width=800, height=600");
        this.ventana.document.write("<h1>Resultados test de atributos:"+nombreEntidad+"</h1>");

        const validacionCampos=new ValidateFieldsForm();

        let pruebas, estructura;
        try{
            pruebas = eval(`${nombreEntidad}_pruebas`);
            estructura=eval(`estructura_${nombreEntidad}`);
        }catch(e){}

        let entidad=null;
        try {
            if (typeof window[nombreEntidad + '_class'] !== 'undefined') {
                entidad = new window[nombreEntidad + '_class']();
            }
        }catch(e){}

        this.ventana.document.write("<table border='1'><tr><th>ID</th><th>CAMPO</th><th>VALOR</th><th>ESPERADO</th><th>OBTENIDO</th></tr>");

        pruebas.forEach((prueba, index)=>{
            const campoNombre=prueba[1];
            const accion=prueba[4];
            const valorProbar=prueba[5][0][campoNombre];
            const resultadoEsperado=prueba[6];
            let definicionAtributo=estructura.attributes[campoNombre];
            if(!definicionAtributo) {
                this.ventana.document.write(`
                    <tr style="background-color:#ff0000;">
                        <td>${index}</td>
                        <td>${prueba.campoValidar}</td>
                        <td colspan="3">El campo '${prueba.campoValidar}' no existe</td>
                    </tr>
                `);
                validacionCampos.crearCampo(campoNombre, valorProbar, definicionAtributo);
                let reglas = definicionAtributo.rules.validations[accion];
                let resultadoObtenido = true;

                if (reglas) {
                    for (let tipoValidacion in reglas) {
                        let error = validacionCampos.validarCampo(tipoValidacion, campoNombre, reglas[tipoValidacion]);
                        if (error !== true) {
                            resultadoObtenido = `${campoNombre}_${tipoValidacion}_KO`;
                            break;
                        }
                    }
                }

                const esCorrecto=(resultadoObtenido===resultadoEsperado);
                const filaColor=esCorrecto?"#ff0000":"#00ff00";
                this.ventana.document.write(`
                    <tr style="background-color:${filaColor};">
                        <td>${index}</td>
                        <td>${campoNombre}</td>
                        <td>${accion}</td>
                        <td>${valorProbar}</td>
                        <td>${resultadoEsperado}</td>
                        <td>${resultadoObtenido}</td>
                    </tr>
                `);


            }
        });
        this.ventana.document.write("</table>");
        this.ventana.document.close();
    }
}
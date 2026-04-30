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
            let definicionAtributo=estructura.attributes[prueba.campoValidar];
            validacionCampos.crearCampo(prueba.campoValidar, prueba.valorProbar, definicionAtributo);
            let resultado=true;
            let validacionesObj=definicionAtributo.rules.validations.search;
            if(validacionesObj.personalized && entidad){
                let metodoPersonalizado=`${prueba.campoValidar}_personalized_validation`;
                resultado=entidad[metodoPersonalizado]();
            }else{
                for(let validacion in validacionesObj){
                    if(validacion!=='personalized'){
                        let hayError=validacionCampos.validarCampo(validacion, prueba.campoValidar, validacionesObj[validacion]);
                        if(hayError!==true){
                            resultado=prueba.campoValidar+"_"+validacion+"_KO";
                            break;
                        }
                    }
                }
            }


            const filaColor=(resultado===prueba.resultadoEsperado)?"#059a05":"#ff0000";
            this.ventana.document.write(`
                <tr style="background-color: ${filaColor}">
                    <td>${index}</td>
                    <td>${prueba.campoValidar}</td>
                    <td>${prueba.valorProbar}</td>
                    <td>${prueba.resultadoEsperado}</td>
                    <td>${resultado}</td>
                </tr>`);
            validacionCampos.limpiar();
        });
        this.ventana.document.write("</table>");
        this.ventana.document.close();
    }
}
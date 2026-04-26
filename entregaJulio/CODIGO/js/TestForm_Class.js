class TestForm {
    ejecutar(nombreEntidad){
        this.ventana=window.open("", "Resultados test de atributos", "width=800, height=600");
        this.ventana.document.write("<h1>Resultados test de atributos:"+nombreEntidad+"</h1>");
        this.ventana.document.write("<table border='1'><tr><th>ID</th><th>CAMPO</th><th>VALOR</th><th>ESPERADO</th><th>OBTENIDO</th></tr></table>");

        let entidad=null;
        if(typeof window[nombreEntidad+'_class'] !== 'undefined'){
            entidad=new window[nombreEntidad+'_class']();
        }

        const pruebas=window[nombreEntidad+'_pruebas'];
        const estructura=window[nombreEntidad+'_estructura'];
        const validacionCampos=new ValidateFieldsForm();

        pruebas.forEach((prueba, index)=>{
            let definicionAtributo=estructura.find(atributo=>atributo.nombre === prueba.validarCampo());
            validacionCampos.crearCampo(prueba.campoValidar, prueba.valorProbar, definicionAtributo);
            let resultado=true;
            if(definicionAtributo.validations.personalize && entidad){
                let metodoPersonalizado=`${prueba.campoValidar}_personalized_validation`;
                resultado=entidad[metodoPersonalizado]();
            }else{
                for(let validacion in definicionAtributo.validations){
                    if(validacion!=='personalize'){
                        let validaciones=validacionCampos.validarCampo(validacion, prueba.campoValidar, definicionAtributo.validations[validacion]);
                        if(validaciones!==true){
                            resultado=prueba.campoValidar+"_"+validaciones+"_KO";
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
    }
}
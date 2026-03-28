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

        pruebas.forEach((pruebas)=>{
            validacionCampos.createField(prueba.campoValidar, prueba.valorProbar);
            let definicionAtributo=estructura.find(atributo=>atributo.nombre);
            let resultado;
            if(definicionAtributo.validations.personalize && entidad){
                let metodoPersonalizado=`${prueba.campoValidar}_personalized_validation`;
                resultado=entidad[metodoPersonalizado]();
            }else{

            }
        });
    }
}
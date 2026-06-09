class characteristic{
    constructor(){
        this.entidad="characteristic";
        this.attributes=['id_characteristic', 'name_characteristic', 'description_characteristic', 'data_type_characteristic', 'category_characteristic', 'file_characteristic', 'nuevo_file_characteristic'];
    }

    data_type_characteristic_personalized_validation(accion){
        const valor=document.getElementById('data_type_characteristic').value;
        const permitidos=['number', 'text', 'set'];
        if(accion==='SEARCH' && (valor===''||valor===null||permitidos.some(opcion=>opcion.includes(valor)))){
            return true;
        }
        if(!permitidos.includes(valor)){
            return "data_type_characteristic_valor_permitido_KO";
        }
        return true;
    }

    category_characteristic_personalized_validation(accion){
        const valor=document.getElementById('category_characteristic').value;
        const permitidos=['soil_site', 'soil_chem', 'soil_bio'];
        if(accion==='SEARCH' && (valor===''||valor===null||permitidos.some(opcion=>opcion.includes(valor)))){
            return true;
        }
        if(!permitidos.includes(valor)){
            return "category_characteristic_valor_permitido_KO";
        }
        return true;
    }
}
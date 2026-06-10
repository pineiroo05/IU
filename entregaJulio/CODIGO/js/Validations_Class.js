class Validations {
    constructor(){}

    static min_size(id, minimo){
        let valor=document.getElementById(id).value;
        return valor.length>=minimo;
    }

    static max_size(id, maximo){
        let valor=document.getElementById(id).value;
        return valor.length<=maximo;
    }

    static exp_reg(id, expReg){
        let expresionRegular=new RegExp(expReg);
        let valor=document.getElementById(id).value;
        if(valor.length===0){return true;}
        return expresionRegular.test(valor);
    }

    //Para ficheros
    static not_exist_file(id){
        let file=document.getElementById(id);
        return file.files && file.files.length>0;
    }

    static max_size_file(id, tamMax){
        let file=document.getElementById(id);
        if(!file.files || file.files.length===0){
            return false;
        }
        return file.files[0].size<=tamMax;
    }

    static type_file(id, arrayTipos){
        let file=document.getElementById(id);
        //console.log('type_file - id:', id, 'file:', file, 'files:', file?.files, 'tipo:', file?.files?.[0]?.type, 'arrayTipos:', arrayTipos);
        if(!file.files || file.files.length===0){
            return false;
        }
        return arrayTipos.includes(file.files[0].type);
    }
    static format_name_file(id, expReg){
        let file=document.getElementById(id);
        if(!file.files || file.files.length===0){
            return false;
        }
        let expresionRegular=new RegExp(expReg);
        return expresionRegular.test(file.files[0].name);
    }

    static min_file_name_size(id, minimo){
        let file=document.getElementById(id);
        if(!file.files || file.files.length===0){
            return false;
        }
        return file.files[0].name.length>=minimo;
    }

    static max_file_name_size(id, maximo){
        let file=document.getElementById(id);
        if(!file.files || file.files.length===0){
            return false;
        }
        return file.files[0].name.length<=maximo;
    }
}
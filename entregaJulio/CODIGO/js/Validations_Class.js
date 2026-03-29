class Validations {
    constructor(){}

    static min_size(id, minimo){
        let valor=document.getElementById(id).value;
        return valor.length<minimo;
    }

    static max_size(id, maximo){
        let valor=document.getElementById(id).value;
        return valor.length>maximo;
    }

    static format(id, expReg){
        let expresionRegular=new RegExp(expReg);
        let valor=document.getElementById(id).value;
        return expresionRegular.test(valor);
    }

    //Para ficheros
    static no_exist_file(id){
        let file=document.getElementById(id);
        return file.files[0].length === 0;
    }

    static max_size_file(id, tamMax){
        let file=document.getElementById(id);
        return file.files.length>tamMax;
    }

    static type_file(id, arrayTipos){
        let file=document.getElementById(id);
        return arrayTipos.includes(file.files[0].type);
    }
    static format_name_file(id, expReg){
        let file=document.getElementById(id);
        let expresionRegular=new RegExp(expReg);
        let valor=file.files[0].name;
        return expresionRegular.test(valor);
    }
}
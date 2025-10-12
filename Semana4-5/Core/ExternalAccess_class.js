class ExternalAcces{
    constructor(){

    }

    //action seria lo q quiero hacer, add, edit y eso
    peticionBack(formulario, controlador, action, datosextra=null){
        var datos;
        if(formulario===''){
            datos=new FormData();
        }else{
            var formulario=document.getElementById(formulario);
            datos=new FormData(formulario);
        }
        datos.append('controlador', controlador);
        datos.append('action', action);
        if(datosextra==null){

        }else{
            for(var clave in datosextra){
                datos.append(clave, datosextra[clave]);
            }
        }
        return new Promise(function(resolve){
            $.ajax({
                type :'POST',
                url :"http://193.147.87.202/ET2/index.php",
                data : datos,
                processData : false, //Se pone asi para q jquery no toque los datos
                contentType : false, //Para q jquery no toque encabezados
            })
            .done(res => {
                resolve(res);
            })
            .fail(res => {
                alert('error: '+res.status);
            })
        })
    }
}
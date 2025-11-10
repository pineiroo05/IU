class articulo extends EntidadAbstracta{
    constructor(esTest){
        super();
        this.columnasamostrar=['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN', 'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR', 'FicheropdfA', 'EstadoA'];
        this.mostrarespecial=['FicheropdfA'];
        this.attributes=['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN', 'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR', 'FicheropdfA', 'nuevo_FicheropdfA', 'EstadoA'];
    }
    manual_form_creation(){
        var form_content = `
			<form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_articulo();">

			<label class="label_CodigoA">Código artículo</label>
			<input type='text' id='CodigoA' name='CodigoA'></input>
			<span id="span_error_CodigoA"><a id="error_CodigoA"></a></span>
			<br>

			<label class="label_AutoresA">Nombres autores</label>
			<input type='text' id='AutoresA' name='AutoresA'></input>
			<span id="span_error_AutoresA"><a id="error_AutoresA"></a></span>
			<br>

			<label class="label_TituloA">Título artículo</label>
			<input type='text' id='TituloA' name='TituloA'></input>
			<span id="span_error_TituloA"><a id="error_TituloA"></a></span>
			<br>

			<label class="label_TituloR">Título revista</label>
			<input type='text' id='TituloR' name='TituloR'></input>
			<span id="span_error_TituloR"><a id="error_TituloR"></a></span>
			<br>

			<label class="label_ISSN">ISSN</label>
			<input type='text' id='ISSN' name='ISSN'></input>
			<span id="span_error_ISSN"><a id="error_ISSN"></a></span>
			<br>

			<label class="label_VolumenR">Volumen de la revista</label>
			<input type='text' id='VolumenR' name='VolumenR'></input>
			<span id="span_error_VolumenR"><a id="error_VolumenR"></a></span>
			<br>
			
			<label class="label_PagIniA">Número página inicial artículo</label>
			<input type='text' id='PagIniA' name='PagIniA'></input>
			<span id="span_error_PagIniA"><a id="error_PagIniA"></a></span>
			<br>

			<label class="label_PagFinA">Número página final artículo</label>
			<input type='text' id='PagFinA' name='PagFinA'></input>
			<span id="span_error_PagFinA"><a id="error_PagFinA"></a></span>
			<br>

			<label class="label_FechaPublicacionR">Fecha publicacion artículo</label>
			<input type='date' id='FechaPublicacionR' name='FechaPublicacionR'></input>
			<span id="span_error_FechaPublicacionR"><a id="error_FechaPublicacionR"></a></span>
			<br>

            <label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA">Nuevo fichero articulo</label>
			<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA'></input>
			<span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>

			<label id="label_FicheropdfA" class="label_FicheropdfA">Fichero articulo</label>
			<input type='text' id='FicheropdfA' name='FicheropdfA'></input>
			<span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
			<a id="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/"><img src="./iconos/FILE.png" /></a>
			<br>

            <label for="EstadoA">Estado de tramitación del artículo</label>
            <select id="EstadoA" name="EstadoA">
                <option selected="selected"></option>
                <option value="Publicado">Publicado</option>
                <option value="Enviado">Enviado</option>
                <option value="Revision">Revision</option>
            </select>
            <span id="span_error_EstadoA"><a id="error_EstadoA"></a></span>
		</form>
		`;
        return form_content;
    }

    //Validaciones add
    ADD_CodigoA_validation(){
        if(!(this.validations.min_size('CodigoA', 1))){
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_min_size_KO');
            return "CodigoA_min_size_KO";
        }
        if(!(this.validations.max_size('CodigoA', 11))){
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
            return "CodigoA_max_size_KO";
        }
        if(!(this.validations.format('CodigoA', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
            return "CodigoA_format_KO";
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }
    ADD_AutoresA_validation(){
        if(!(this.validations.min_size('AutoresA', 3))){
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO');
            return "AutoresA_min_size_KO";
        }
        if(!(this.validations.max_size('AutoresA', 200))){
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
            return "AutoresA_max_size_KO";
        }
        if(!(this.validations.format('AutoresA', '^[A-Za-zÁÉÍÓÚáéíóúÇçÑñ ]*$'))){
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
            return "AutoresA_format_KO";
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }
    ADD_TituloA_validation(){
        if(!(this.validations.min_size('TituloA', 4))){
            this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO');
            return "TituloA_min_size_KO";
        }
        if(!(this.validations.max_size('TituloA', 100))){
            this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
            return "TituloA_max_size_KO";
        }
        if(!(this.validations.format('TituloA', '^[0-9A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'))){
            this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
            return "TituloA_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }
    ADD_TituloR_validation(){
        if(!(this.validations.min_size('TituloR', 5))){
            this.dom.mostrar_error_campo('TituloR', 'TituloR_min_size_KO');
            return "TituloR_min_size_KO";
        }
        if(!(this.validations.max_size('TituloR', 100))){
            this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
            return "TituloR_max_size_KO";
        }
        if(!(this.validations.format('TituloR', '^[0-9A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'))){
            this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
            return "TituloR_format_KO";
        }
        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }
    ADD_ISSN_validation(){
        if(!(this.validations.min_size('ISSN', 9))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_min_size_KO');
            return "ISSN_min_size_KO";
        }
        if(!(this.validations.max_size('ISSN', 9))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_max_size_KO');
            return "ISSN_max_size_KO";
        }
        if(!(this.validations.format('ISSN', '^[0-9]{4}-[0-9]{3}[0-9X]$'))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return "ISSN_format_KO";
        }
        if(!(this.personalize_valor_valido('ISSN'))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_valor_valido_KO');
            return "ISSN_valor_valido_KO";
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }
    ADD_VolumenR_validation(){
        if(!(this.validations.min_size('VolumenR', 1))){
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_min_size_KO');
            return "VolumenR_min_size_KO";
        }
        if(!(this.validations.max_size('VolumenR', 4))){
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
            return "VolumenR_max_size_KO";
        }
        if(!(this.validations.format('VolumenR', '^[0-9A-Za-z]*$'))){
            this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
            return "VolumenR_format_KO";
        }
        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }
    ADD_PagIniA_validation(){
        if(!(this.validations.min_size('PagIniA', 1))){
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_min_size_KO');
            return "PagIniA_min_size_KO";
        }
        if(!(this.validations.max_size('PagIniA', 4))){
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
            return "PagIniA_max_size_KO";
        }
        if(this.personalize_rango_pagIni('PagIniA')){
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_rango_KO');
            return "PagIniA_rango_KO";            
        }
        if(!(this.validations.format('PagIniA', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
            return "PagIniA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }
    ADD_PagFinA_validation(){
        if(!(this.validations.min_size('PagFinA', 1))){
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_min_size_KO');
            return "PagFinA_min_size_KO";
        }
        if(!(this.validations.max_size('PagFinA', 4))){
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO');
            return "PagFinA_max_size_KO";
        }
        if(this.personalize_rango_pagFin('PagFinA', 'PagIniA')){
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_rango_KO');
            return "PagFinA_rango_KO";
        }
        if(!(this.validations.format('PagFinA', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
            return "PagFinA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }
    ADD_FechaPublicacionR_validation(){
        if(!(this.personalize_fecha_min_size('FechaPublicacionR', 10))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
            return "FechaPublicacion_min_size_KO";
        }
        if(!(this.personalize_fecha_max_size('FechaPublicacionR', 10))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
            return "FechaPublicacionR_max_size_KO";
        }
        if(!(this.validations.format('FechaPublicacionR', '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
            return "FechaPublicacionR_format_KO";
        }
        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }
    ADD_nuevo_FicheropdfA_validation(){
        if(!(this.validations.not_exist_file('nuevo_FicheropdfA'))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_not_exist_file_KO');
            return "nuevo_FicheropdfA_not_exist_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_FicheropdfA', 2000000))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_file_KO');
            return "nuevo_FicheropdfA_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_FicheropdfA', ['application/pdf']))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_type_file_KO');
            return "nuevo_FicheropdfA_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9._-]*$'))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_name_file_KO');
            return "nuevo_FicheropdfA_format_name_file_KO";
        }
        if(!(this.personalize_min_file_name_size('nuevo_FicheropdfA', 7))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_min_file_name_size_KO');
            return "nuevo_FicheropdfA_min_file_name_size_KO";
        }
        if(!(this.personalize_max_file_name_size('nuevo_FicheropdfA', 20))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_file_name_size_KO');
            return "nuevo_FicheropdfA_max_file_name_size_KO";
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
        return true;
    }
    ADD_EstadoA_validation(){
        const valor=document.getElementById('EstadoA').value;
        const valoresPermitidos=['Enviado', 'Revision', 'Publicado'];
        if(!valoresPermitidos.includes(valor)){
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_valor_KO');
            return "EstadoA_valor_KO";
        }
        if(valor==''){
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_vacio_KO');
            return "EstadoA_vacio_KO";
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }
    ADD_submit_articulo(){
        let result=(this.ADD_CodigoA_validation()&
            this.ADD_AutoresA_validation()&
            this.ADD_TituloA_validation()&
            this.ADD_TituloR_validation()&
            this.ADD_ISSN_validation()&
            this.ADD_VolumenR_validation()&
            this.ADD_PagIniA_validation()&
            this.ADD_PagFinA_validation()&
            this.ADD_FechaPublicacionR_validation()&
            this.ADD_nuevo_FicheropdfA_validation()&
            this.ADD_EstadoA_validation())
        result=Boolean(result);
        return result;
    }

    //Validaciones edit
    EDIT_CodigoA_validation(){
        return this.ADD_CodigoA_validation();
    }
    EDIT_AutoresA_validation(){
        return this.ADD_AutoresA_validation();
    }
    EDIT_TituloA_validation(){
        return this.ADD_TituloA_validation();
    }
    EDIT_TituloR_validation(){
        return this.ADD_TituloR_validation();
    }
    EDIT_ISSN_validation(){
        return this.ADD_ISSN_validation();
    }
    EDIT_VolumenR_validation(){
        return this.ADD_VolumenR_validation();
    }
    EDIT_PagIniA_validation(){
        return this.ADD_PagIniA_validation();
    }
    EDIT_PagFinA_validation(){
        return this.ADD_PagFinA_validation();
    }
    EDIT_FechaPublicacionR_validation(){
        return this.ADD_FechaPublicacionR_validation();
    }
    EDIT_nuevo_FicheropdfA_validation(){
        let fichero=document.getElementById('nuevo_FicheropdfA');
        if(!fichero||fichero.files.length==0){
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_FicheropdfA', 2000000))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_file_KO');
            return "nuevo_FicheropdfA_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_FicheropdfA', ['application/pdf']))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_type_file_KO');
            return "nuevo_FicheropdfA_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9._-]*$'))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_name_file_KO');
            return "nuevo_FicheropdfA_format_name_file_KO";
        }
        if(!(this.personalize_min_file_name_size('nuevo_FicheropdfA', 7))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_min_file_name_size_KO');
            return "nuevo_FicheropdfA_min_file_name_size_KO";
        }
        if(!(this.personalize_max_file_name_size('nuevo_FicheropdfA', 20))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_file_name_size_KO');
            return "nuevo_FicheropdfA_max_file_name_size_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
    }
    EDIT_EstadoA_validation(){
        return this.ADD_EstadoA_validation();
    }
    EDIT_submit_articulo(){
        let result=(this.EDIT_CodigoA_validation()&
            this.EDIT_AutoresA_validation()&
            this.EDIT_TituloA_validation()&
            this.EDIT_TituloR_validation()&
            this.EDIT_ISSN_validation()&
            this.EDIT_VolumenR_validation()&
            this.EDIT_PagIniA_validation()&
            this.EDIT_PagFinA_validation()&
            this.EDIT_FechaPublicacionR_validation()&
            this.EDIT_nuevo_FicheropdfA_validation()&
            this.EDIT_EstadoA_validation())
        result=Boolean(result);
        return true;
    }
/*
    EDIT_submit_articulo(){
        console.log("Comprobacion")
        let result=[this.EDIT_CodigoA_validation(),
            this.EDIT_AutoresA_validation(),
            this.EDIT_TituloA_validation(),
            this.EDIT_TituloR_validation(),
            this.EDIT_ISSN_validation(),
            this.EDIT_VolumenR_validation(),
            this.EDIT_PagIniA_validation(),
            this.EDIT_PagFinA_validation(),
            this.EDIT_FechaPublicacionR_validation(),
            this.EDIT_nuevo_FicheropdfA_validation(),
            this.EDIT_EstadoA_validation()];
        console.log("Resultado validacion: ", result);
        console.log('Datos del formulario:', new FormData(document.getElementById('form_iu')));
        result=Boolean(result);
        return result;
    }
*/
    //Validaciones search
    SEARCH_CodigoA_validation(){
        if(document.getElementById('CodigoA').value !== ''){
            if(!(this.validations.max_size('CodigoA', 11))){
                this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
                return "CodigoA_max_size_KO";
            }
            if(!(this.validations.format('CodigoA', '^[0-9]*$'))){
                this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
                return "CodigoA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }
    SEARCH_AutoresA_validation(){
        if(document.getElementById('AutoresA').value !== ''){
            if(!(this.validations.max_size('AutoresA', 200))){
                this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
                return "AutoresA_max_size_KO";
            }
            if(!(this.validations.format('AutoresA', '^[A-Za-zÁÉÍÓÚáéíóúÇçÑñ ]*$'))){
                this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
                return "AutoresA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }
    SEARCH_TituloA_validation(){
        if(document.getElementById('TituloA').value !== ''){
            if(!(this.validations.max_size('TituloA', 100))){
                this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
                return "TituloA_max_size_KO";
            }
            if(!(this.validations.format('TituloA', '^[0-9A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'))){
                this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
                return "TituloA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }
    SEARCH_TituloR_validation(){
        if(document.getElementById('TituloR').value !== ''){
            if(!(this.validations.max_size('TituloR', 100))){
                this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
                return "TituloR_max_size_KO";
            }
            if(!(this.validations.format('TituloR', '^[0-9A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'))){
                this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
                return "TituloR_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }
    SEARCH_ISSN_validation(){
        if(document.getElementById('ISSN').value !== ''){
            if(!(this.validations.max_size('ISSN', 9))){
                this.dom.mostrar_error_campo('ISSN', 'ISSN_max_size_KO');
                return "ISSN_max_size_KO";
            }
            if(!(this.validations.format('ISSN', '^[0-9]{0,4}(-)?[0-9X]{0,4}$'))){
                this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
                return "ISSN_format_KO";
            }
            if(document.getElementById('ISSN').length===9){
                if(!(this.personalize_valor_valido('ISSN'))){
                    this.dom.mostrar_error_campo('ISSN', 'ISSN_valor_valido_KO');
                    return "ISSN_valor_valido_KO";
                }
            }
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }
    SEARCH_VolumenR_validation(){
        if(document.getElementById('VolumenR').value !== ''){
            if(!(this.validations.max_size('VolumenR', 4))){
                this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
                return "VolumenR_max_size_KO";
            }
            if(!(this.validations.format('VolumenR', '^[0-9A-Za-z]*$'))){
                this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
                return "VolumenR_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }
    SEARCH_PagIniA_validation(){
        if(document.getElementById('PagIniA').value!==''){
            if(!(this.validations.max_size('PagIniA', 4))){
                this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
                return "PagIniA_max_size_KO";
            }
            if(this.personalize_rango_pagIni('PagIniA')){
                this.dom.mostrar_error_campo('PagIniA', 'PagIniA_rango_KO');
                return "PagIniA_rango_KO";            
            }
            if(!(this.validations.format('PagIniA', '^[0-9]*$'))){
                this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
                return "PagIniA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }
    SEARCH_PagFinA_validation(){
        if(document.getElementById('PagFinA').value!==''){
            if(!(this.validations.max_size('PagFinA', 4))){
                this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO');
                return "PagFinA_max_size_KO";
            }
            if(this.personalize_rango_pagFin('PagFinA', 'PagIniA')){
                this.dom.mostrar_error_campo('PagFinA', 'PagFinA_rango_KO');
                return "PagFinA_rango_KO";
            }
            if(!(this.validations.format('PagFinA', '^[0-9]*$'))){
                this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
                return "PagFinA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }
    SEARCH_FechaPublicacionR_validation(){
        if(document.getElementById('FechaPublicacionR').value!==''){
            if(!(this.validations.max_size('FechaPublicacionR', 10))){
                this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
                return "FechaPublicacionR_max_size_KO";
            }
            if(!(this.validations.format('FechaPublicacionR', '^[0-9/]*$'))){
                this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
                return "FechaPublicacionR_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }
    SEARCH_FicheropdfA_validation(){
        if(document.getElementById('FicheropdfA').value !== ''){
            if(!(this.validations.max_size('FicheropdfA', 20))){
                this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_max_size_KO');
                return "FicheropdfA_max_size_KO";
            }
            if(!(this.validations.format('FicheropdfA', '^[a-zA-Z0-9._-]+$'))){
                this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_format_KO');
                return "FicheropdfA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
        return true;
    }
    SEARCH_EstadoA_validation(){
        if(document.getElementById('EstadoA').value !== ''){
            const valor=document.getElementById('EstadoA').value;
            const valoresPermitidos=['Enviado', 'Revision', 'Publicado'];
            const coincide = valoresPermitidos.some(cadena => cadena.includes(valor));
            if(!coincide){
                this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
                return "EstadoA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }
    SEARCH_submit_articulo(){
        let result=(this.SEARCH_CodigoA_validation()&
            this.SEARCH_AutoresA_validation()&
            this.SEARCH_TituloA_validation()&
            this.SEARCH_TituloR_validation()&
            this.SEARCH_ISSN_validation()&
            this.SEARCH_VolumenR_validation()&
            this.SEARCH_PagIniA_validation()&
            this.SEARCH_PagFinA_validation()&
            this.SEARCH_FicheropdfA_validation()&
            this.SEARCH_EstadoA_validation())
        result=Boolean(result);
        return result;
    }
    DELETE_submit_articulo(){
        let confirmacion=confirm("Quieres borrar?");
        if(!confirmacion){
            return false;
        }else{
            return true;
        }
    }
    //Metodos personalizados
    personalize_min_file_name_size(fichero, minimoCaracteres){
        const input=document.getElementById(fichero);
        if(!input||!input.files||input.files.length===0){
            return false;
        }
        const arch=input.files[0];
        let nombre=arch.name;
        const sinExtension=nombre.substring(0, nombre.lastIndexOf('.'));
        return sinExtension.length>=minimoCaracteres;
    }
    personalize_max_file_name_size(fichero, maximoCaracteres){
        const input=document.getElementById(fichero);
        if(!input||!input.files||input.files.length===0){
            return false;
        }
        const arch=input.files[0];
        let nombre=arch.name;
        const sinExtension=nombre.substring(0, nombre.lastIndexOf('.'));
        return sinExtension.length<=maximoCaracteres;
    }
    personalize_rango_pagIni(numPag){
        const inicio=document.getElementById(numPag);
        const final=document.getElementById('PagFinA');
        const valorInicio=inicio.value;
        const valorFinal=final.value
        if(valorInicio===''){
            return false;
        }
        const soloNums=/^[0-9]+$/.test(valorInicio);
        if(!soloNums){
            return false;
        }
        const ini=parseInt(valorInicio, 10);
        if(ini<1||ini>1000){
            return true;
        }
        if (valorFinal!==''){
            const fin=parseInt(valorFinal,10);
            if(!isNaN(fin)&&ini>fin){
                return true;
            }
        }
        return false;
    }
    personalize_rango_pagFin(numPagFin, numPagIni){
        const inicio=document.getElementById(numPagIni);
        const final=document.getElementById(numPagFin);
        const valorInicio=inicio.value;
        const valorFin=final.value;
        if(valorFin===''){
            return false;
        }
        const soloNums=/^[0-9]+$/.test(valorFin);
        if(!soloNums){
            return false;
        }
        const fin=parseInt(valorFin, 10);
        if(valorInicio!==''){
            const ini=parseInt(valorInicio,10);
            if(!isNaN(ini)){
                if(fin<ini){
                    return true;
                }
                if(fin>1000){
                    return true;
                }
            }
        }else{
            if(fin<1||fin>1000){
                return true;
            }
        }
        return false;
    }
    personalize_valor_valido(valorIssn){
        const issn=document.getElementById(valorIssn);
        const valor=issn.value;
        const digitos=valor.replace('-', '');
        //Para sacar el ultimo digito de control
        let sum=0;
        for(let i=0; i<7; i++){
            sum+=parseInt(digitos[i])*(8-i);
        }
        const modulo=sum%11;
        let digitoControl;
        if(modulo===0){
            digitoControl='0';
        }else{
            digitoControl=(11-modulo).toString();
            if(digitoControl==='10'){
                digitoControl='X';
            }
        }
        const digitoControlCadena=digitos[7].toUpperCase();
        return digitoControlCadena===digitoControl;
    }
    personalize_fecha_min_size(fecha, tamMin){
        const input=document.getElementById(fecha).value.trim();
        return input.length>=tamMin;
    }
    personalize_fecha_max_size(fecha, tamMax){
        const input=document.getElementById(fecha).value.trim();
        return input.length<=tamMax;
    }

    //Creacion de formularios
    createForm_ADD(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_ADD');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('FicheropdfA');
        this.dom.hide_element_form('FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }
    createForm_SEARCH(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SEARCH');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        //campos oculto
        this.dom.hide_element('nuevo_FicheropdfA');
        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');
        this.dom.replaceSelectXEmptyInput('FechaPublicacionR');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }
    createForm_EDIT(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_EDIT');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        //acceso
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //fecha
        //fila.FechaPublicacionR=this.mostrarcambioatributo('FechaPublicacionR', fila.FechaPublicacionR);
        //fila.FechaPublicacionR = this.convertirFecha(fila.FechaPublicacionR);
        console.log('Fecha de bd para edit: ', fila.FechaPublicacionR);
        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('CodigoA', 'readonly', 'true');
        this.dom.assign_property_value('FicheropdfA', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }
    createForm_DELETE(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_DELETE');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //rellenar valores
        //fila.FechaPublicacionR=this.mostrarcambioatributo('FechaPublicacionR', fila.FechaPublicacionR);
        //fila.FechaPublicacionR = this.convertirFecha(fila.FechaPublicacionR);
        this.dom.rellenarvaloresform(fila);
        //campos inactivos
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }
    createForm_SHOWCURRENT(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SHOWCURRENT');
        //campos no visibles
        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //rellenar valores
        //fila.FechaPublicacionR=this.mostrarcambioatributo('FechaPublicacionR', fila.FechaPublicacionR);
        //fila.FechaPublicacionR = this.convertirFecha(fila.FechaPublicacionR);
        this.dom.rellenarvaloresform(fila);
        //poner los campos inactivos
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }
    /*convertirFecha(fechaStr) {
        if (!fechaStr) return '';
        // Si ya está en formato YYYY-MM-DD, devuélvela tal cual
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) return fechaStr;
        // Si viene en DD/MM/YYYY, conviértela
        if (fechaStr.includes('/')) {
            let partes = fechaStr.split('/');
            return `${partes[2]}-${partes[1].padStart(2, '0')}-${partes[0].padStart(2, '0')}`;
        }
        // Si es un timestamp o Date, conviértelo
        let fechaObj = new Date(fechaStr);
        if (!isNaN(fechaObj.getTime())) {
            return fechaObj.toISOString().split('T')[0];
        }
        return ''; // Si no es válida, deja vacío
    }*/

    /**
	 * modifica el formato de visualización de un atributo concreto y se devuelve el valor modificado
	 * en el caso de solicitar cambio de formato para un atributo no implementado se lanza una alerta
	 * 
	 * @param {String} atributo string con el nombre del atributo a modificar su valor
	 * @param {String} valorentrada string con el valor de entrada a modificar
	 * @returns 
	 */
	mostrarcambioatributo(atributo, valorentrada){
		switch (atributo){
			case 'FicheropdfA':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
            case 'FechaPublicacionR':
                var a=valorentrada.split('-');
                var dia=a[2];
                var mes=a[1];
                var ano=a[0];
                return dia+'/'+mes+'/'+ano
                break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}
	}
    //Todo lo del back esta en en EntidadAbstracta
}
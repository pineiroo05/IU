class articulo extends EntidadAbstracta{
    constructor(esTest){
        super();
        this.columnasamostrar=['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN', 'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR', 'FicheropdfA'];
        this.mostrarespecial=['FicheropdfA'];
        this.attributes=['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN', 'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR', 'FicheropdfA', 'nuevo_FicheropdfA'];
    }
    manual_form_creation(){
        var form_content = `
			<form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_articulo();">

			<label class="label_CodigoA">Código artículo</label>
			<input type='text' id='CodigoA' name='CodigoA' onblur=" return entidad.ADD_CodigoA_validation();"></input>
			<span id="span_error_CodigoA"><a id="error_CodigoA"></a></span>
			<br>

			<label class="label_AutoresA">Nombres autores</label>
			<input type='text' id='AutoresA' name='AutoresA' onblur=" return entidad.ADD_AutoresA_validation();"></input>
			<span id="span_error_AutoresA"><a id="error_AutoresA"></a></span>
			<br>

			<label class="label_TituloA">Título artículo</label>
			<input type='text' id='TituloA' name='TituloA' onblur=" return entidad.ADD_TituloA_validation();"></input>
			<span id="span_error_TituloA"><a id="error_TituloA"></a></span>
			<br>

			<label class="label_TituloR">Título revista</label>
			<input type='text' id='TituloR' name='TituloR' onblur=" return entidad.ADD_TituloR_validation();"></input>
			<span id="span_error_TituloR"><a id="error_TituloR"></a></span>
			<br>

			<label class="label_ISSN">ISSN</label>
			<input type='text' id='ISSN' name='ISSN' onblur=" return entidad.ADD_ISSN_validation();"></input>
			<span id="span_error_ISSN"><a id="error_ISSN"></a></span>
			<br>

			<label class="label_VolumenR">Volumen de la revista</label>
			<input type='text' id='VolumenR' name='VolumenR' onblur=" return entidad.ADD_VolumenR_validation();""></input>
			<span id="span_error_VolumenR"><a id="error_VolumenR"></a></span>
			<br>
			
			<label class="label_PagIniA">Número página inicial artículo</label>
			<input type='text' id='PagIniA' name='PagIniA' onblur=" return entidad.ADD_PagIniA_validation();"></input>
			<span id="span_error_PagIniA"><a id="error_PagIniA"></a></span>
			<br>

			<label class="label_PagFinA">Número página final artículo</label>
			<input type='text' id='PagFinA' name='PagFinA' onblur=" return entidad.ADD_PagFinA_validation();"></input>
			<span id="span_error_PagFinA"><a id="error_PagFinA"></a></span>
			<br>

			<label class="label_FechaPublicacionR">Fecha publicacion artículo</label>
			<input type='date' id='FechaPublicacionR' name='FechaPublicacionR' onblur=" return entidad.ADD_FechaPublicacionR_validation();"></input>
			<span id="span_error_FechaPublicacionR"><a id="error_FechaPublicacionR"></a></span>
			<br>

			<label id="label_FicheropdfA" class="label_FicheropdfA">Fichero articulo</label>
			<input type='text' id='FicheropdfA' name='FicheropdfA'></input>
			<span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
			<a id="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA">Nuevo fichero articulo</label>
			<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA'></input>
			<span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>
			<br>

            <label for="EstadoA">Estado de tramitación del artículo</label>
            <select id="EstadoA" name="EstadoA">
                <option value="Publicado" selected="selected">Publicado</option>
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
        if(!(this.validations.min_size('CodigoA', 11))){
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
        if(!(this.validations.min_size('AutoresA', 5))){
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
        if(!(this.validations.min_size('TituloA', 10))){
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
        if(!(this.validations.min_size('ISSN', 13))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_min_size_KO');
            return "ISSN_min_size_KO";
        }
        if(!(this.validations.max_size('ISSN', 13))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_max_size_KO');
            return "ISSN_max_size_KO";
        }
        if(!(this.validations.format('ISSN', '^[0-9]{13}'))){
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return "ISSN_format_KO";
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
        if(!(this.validations.format('PagFinA', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
            return "PagFinA_format_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }
    //Revisar este carallo, ver tmb si me conviene evitar que puedan coger fechas futuras
    ADD_FechaPublicacionR_validation(){
        const valor=document.getElementById('FechaPublicacionR').value;
        if(valor==="" || valor===null){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacion_vacio_KO');
            return "FechaPublicacion_vacio_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
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
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9._-]{7-20}$'))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_name_file_KO');
            return "nuevo_FicheropdfA_format_name_file_KO";
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
        return true;
    }
    ADD_EstadoA_validation(){
        const valor=document.getElementById('EstadoA').value;
        const valoresPermitidos=['Enviado', 'Revision', 'Publicado']; //El x defecto es publicado
        if(!valoresPermitidos.includes(valor)){
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
            return "EstadoA_format_KO";
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
        if(!(this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z0-9._-]{7-20}$'))){
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_name_file_KO');
            return "nuevo_FicheropdfA_format_name_file_KO";
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
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
        return result;
    }

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
            if(!(this.validations.max_size('ISSN', 13))){
                this.dom.mostrar_error_campo('ISSN', 'ISSN_max_size_KO');
                return "ISSN_max_size_KO";
            }
            if(!(this.validations.format('ISSN', '^[0-9]{13}'))){
                this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
                return "ISSN_format_KO";
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
        if(document.getElementById('PagIniA').value !== ''){
            if(!(this.validations.max_size('PagIniA', 4))){
                this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
                return "PagIniA_max_size_KO";
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
        if(document.getElementById('PagIniA').value !== ''){
            if(!(this.validations.max_size('PagFinA', 4))){
                this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO');
                return "PagFinA_max_size_KO";
            }
            if(!(this.validations.format('PagFinA', '^[0-9]*$'))){
                this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO');
                return "PagFinA_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }
    /* COMO HAY Q COMPROBAR ESTA COSA????????
    SEARCH_FechaPublicacionR_validation(){
        if(!(this.validations.min_size('FechaPublicacionR', 1))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
            return "FechaPublicacionR_min_size_KO";
        }
        if(!(this.validations.max_size('FechaPublicacionR', 4))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
            return "FechaPublicacionR_max_size_KO";
        }
        if(!(this.validations.format('FechaPublicacionR', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
            return "FechaPublicacionR_format_KO";
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }*/
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
            const valoresPermitidos=['Enviado', 'Revision', 'Publicado']; //El x defecto es publicado
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

    //Creacion de formularios
    createForm_ADD(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('FicheropdfA');
        this.dom.hide_element_form('FicheropdfA');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
    }
    createForm_SEARCH(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('nuevo_FicheropdfA');
        this.dom.hide_element_form('nuevo_FicheropdfA');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
    }
    //como no tengo fecha, aqui no tendría que cambiarle el formato a nada
    createForm_EDIT(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        //acceso al fichero de fotoacto
        this.dom.assign_property_value('nuevo_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //validaciones y campos inactivos
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        //this.dom.assign_property_value('alumnograduacion_dni', 'readonly', 'true');
        this.dom.assign_property_value('FicheropdfA', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
    }
    createForm_DELETE(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        //oculto el nuevo_fotoacto
        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //campos inactivos
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
    }
    createForm_SHOWCURRENT(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //campos no visibles
        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('nuevo_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //poner los campos inactivos
        this.dom.colocartodosreadonly('form_iu');
    }

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
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}
	}
    //Todo lo del back esta en en EntidadAbstracta
}
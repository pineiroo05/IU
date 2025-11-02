class ubicacion extends EntidadAbstracta{
    constructor(esTest){
        super();
        this.columnasamostrar=['id_site', 'site_latitud', 'site_longitud', 'site_altitude', 'site_locality', 'site_provider_login', 'site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        this.mostrarespecial=['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        this.attributes=['id_site', 'site_latitud', 'site_longitud', 'site_altitude', 'site_locality', 'site_provider_login', 'site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo', 'nuevo_site_north_photo', 'nuevo_site_south_photo', 'nuevo_site_east_photo', 'nuevo_site_west_photo'];
    }
    manual_form_creation(){
       var form_content = `
			<form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_ubicacion();">

			<label class="label_id_site">Identificador del sitio</label>
			<input type='text' id='id_site' name='id_site' onblur=" return entidad.ADD_id_site_validation();"></input>
			<span id="span_error_id_site"><a id="error_id_site"></a></span>
			<br>

			<label class="label_site_latitud">Latitud WGS84</label>
			<input type='text' id='site_latitud' name='site_latitud' onblur=" return entidad.ADD_site_latitud_validation();"></input>
			<span id="span_error_site_latitud"><a id="error_site_latitud"></a></span>
			<br>

			<label class="label_site_longitud">Longitud WGS84</label>
			<input type='text' id='site_longitud' name='site_longitud' onblur=" return entidad.ADD_site_longitud_validation();"></input>
			<span id="span_error_site_longitud"><a id="error_site_longitud"></a></span>
			<br>

			<label class="label_site_altitude">Altitud sitio</label>
			<input type='text' id='site_altitude' name='site_altitude' onblur=" return entidad.ADD_site_altitude_validation();"></input>
			<span id="span_error_site_altitude"><a id="error_site_altitude"></a></span>
			<br>

			<label class="label_site_locality">Localidad del sitio</label>
			<input type='text' id='site_locality' name='site_locality' onblur=" return entidad.ADD_site_locality_validation();"></input>
			<span id="span_error_site_locality"><a id="error_site_locality"></a></span>
			<br>

			<label class="label_site_provider_login">Login proveedor sitio</label>
			<input type='text' id='site_provider_login' name='site_provider_login' onblur=" return entidad.ADD_site_provider_login_validation();"></input>
			<span id="span_error_site_provider_login"><a id="error_site_provider_login"></a></span>
			<br>
			
			<label class="label_nuevo_site_north_photo">Nueva foto hacia el norte</label>
			<input type='file' id='nuevo_site_north_photo' name='nuevo_site_north_photo' onblur=" return entidad.ADD_nuevo_site_north_photo_validation();"></input>
			<span id="span_error_nuevo_site_north_photo"><a id="error_nuevo_site_north_photo"></a></span>
			<br>

			<label class="label_nuevo_site_south_photo">Nueva foto hacia el sur</label>
			<input type='file' id='nuevo_site_south_photo' name='nuevo_site_south_photo' onblur=" return entidad.ADD_nuevo_site_south_photo_validation();"></input>
			<span id="span_error_nuevo_site_south_photo"><a id="error_nuevo_site_south_photo"></a></span>
			<br>

			<label class="label_nuevo_site_east_photo">Nueva foto hacia el oeste</label>
			<input type='file' id='nuevo_site_east_photo' name='nuevo_site_east_photo' onblur=" return entidad.ADD_nuevo_site_east_photo_validation();"></input>
			<span id="span_error_nuevo_site_east_photo"><a id="error_nuevo_site_east_photo"></a></span>
			<br>

            <label class="label_nuevo_site_west_photo">Nueva foto hacia el este</label>
			<input type='file' id='nuevo_site_west_photo' name='nuevo_site_west_photo' onblur=" return entidad.ADD_nuevo_site_west_photo_validation();"></input>
			<span id="span_error_nuevo_site_west_photo"><a id="error_nuevo_site_west_photo"></a></span>
			<br>

			<label id="label_site_north_photo" class="label_site_north_photo">Foto hacia el norte</label>
			<input type='text' id='site_north_photo' name='site_north_photo'></input>
			<span id="span_error_site_north_photo"><a id="error_site_north_photo"></a></span>
			<a id="link_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>
			<br>

			<label id="label_site_south_photo" class="label_site_south_photo">Foto hacia el sur</label>
			<input type='text' id='site_south_photo' name='site_south_photo'></input>
			<span id="span_error_site_south_photo"><a id="error_site_south_photo"></a></span>
			<a id="link_south_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/"><img src="./iconos/FILE.png" /></a>
            <br>

            <label id="label_site_east_photo" class="label_site_east_photo">Foto hacia el este</label>
			<input type='text' id='site_east_photo' name='site_east_photo'></input>
			<span id="span_error_site_east_photo"><a id="error_site_east_photo"></a></span>
			<a id="link_east_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/"><img src="./iconos/FILE.png" /></a>
            <br>

            <label id="label_site_west_photo" class="label_site_west_photo">Foto hacia el oeste</label>
			<input type='text' id='site_west_photo' name='site_west_photo'></input>
			<span id="span_error_site_west_photo"><a id="error_site_west_photo"></a></span>
			<a id="link_west_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/"><img src="./iconos/FILE.png" /></a>
		</form>
		`;
        return form_content;        
    }

    //Validaciones add
    ADD_id_site_validation(){
        if(!(this.validations.min_size('id_site', 1))){
            this.dom.mostrar_error_campo('id_site', 'id_site_min_size_KO');
            return "id_site_min_size_KO";
        }
        if(!(this.validations.max_size('id_site', 11))){
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return "id_site_max_size_KO";
        }
        if(!(this.validations.format('id_site', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return "id_site_format_KO";
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }
    ADD_site_latitud_validation(){
        const latitud=document.getElementById('site_latitud').value.trim();
        if(!latitud || latitud ===''){
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_vacio_KO');
            return "site_latitud_vacio_KO";
        }
        if(!this.personalize_coord_formato_rango(latitud, 'latitud')){
            this.mostrar_error_campo('site_latitud', 'site_latitud_formato_rango_KO');
            return "site_latitud_formato_rango_KO";
        }
        if(!this.personalize_coord_decimales(latitud, 6)){
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_decimales_KO');
            return "site_latitud_decimales_KO";
        }
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }
    ADD_site_longitud_validation(){
        const longitud=document.getElementById('site_longitud').value.trim();
        if(!longitud || longitud ===''){
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_vacio_KO');
            return "site_longitud_vacio_KO";
        }
        if(!this.personalize_coord_formato_rango(longitud, 'longitud')){
            this.mostrar_error_campo('site_longitud', 'site_longitud_formato_rango_KO');
            return "site_longitud_formato_rango_KO";
        }
        if(!this.personalize_coord_decimales(longitud, 6)){
            this.dom.mostrar_error_campo('site_lonitud', 'site_longitud_decimales_KO');
            return "site_longitud_decimales_KO";
        }
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }
    ADD_site_altitude_validation(){
        const altitud=document.getElementById('site_altitude').value.trim();
        if(!altitud || altitud===''){
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_vacio_KO');
            return "site_altitude_vacio_KO";
        }
        if(!this.personalize_altitude_coord_formato_rango(altitud)){
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_formato_rango_KO');
            return "site_altitude_formato_rango_KO";
        }
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }
    ADD_site_locality_validation(){
        if(!(this.validations.min_size('site_locality', 3))){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_min_size_KO');
            return "site_locality_min_size_KO";
        }
        if(!(this.validations.max_size('site_locality', 40))){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return "site_locality_max_size_KO";
        }
        if(!(this.validations.format('site_locality', '^[A-Za-zÑñÇçÁÉÍÓÚáéíóú ]*$'))){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return "site_locality_format_KO";
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }
    ADD_site_provider_login_validation(){
        if(!(this.validations.min_size('site_provider_login', 3))){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_min_size_KO');
            return "site_provider_login_min_size_KO";
        }
        if(!(this.validations.max_size('site_provider_login', 30))){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return "site_provider_login_max_size_KO";
        }
        if(!(this.validations.format('site_provider_login', '^[A-Za-z0-9_]*$'))){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return "site_provider_login_format_KO";
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }
    //Mirar de simplificar todos estos metodos en uno solo
    ADD_nuevo_site_north_photo_validation(){
        if(!(this.validations.not_exist_file('nuevo_site_north_photo'))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_not_exist_file_KO');
            return "nuevo_site_north_photo_not_exist_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_site_north_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_file_KO');
            return "nuevo_site_north_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_north_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_north_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_north_photo');
        return true;
    }
    ADD_nuevo_site_south_photo_validation(){
        if(!(this.validations.not_exist_file('nuevo_site_south_photo'))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_not_exist_file_KO');
            return "nuevo_site_south_photo_not_exist_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_site_south_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_file_KO');
            return "nuevo_site_south_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_south_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_south_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_south_photo');
        return true;
    }
    ADD_nuevo_site_east_photo_validation(){
        if(!(this.validations.not_exist_file('nuevo_site_east_photo'))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_not_exist_file_KO');
            return "nuevo_site_east_photo_not_exist_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_site_east_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_file_KO');
            return "nuevo_site_east_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_east_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_east_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_east_photo');
        return true;
    }
    ADD_nuevo_site_west_photo_validation(){
        if(!(this.validations.not_exist_file('nuevo_site_west_photo'))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_not_exist_file_KO');
            return "nuevo_site_west_photo_not_exist_file_KO";
        }
        if(!(this.validations.max_size_file('nuevo_site_west_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_file_KO');
            return "nuevo_site_west_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_west_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_west_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_west_photo');
        return true;
    }
    //Faltan latitud, longitud y altitud
    ADD_submit_ubicacion(){
        let result=(this.ADD_id_site_validation()&
            this.ADD_site_latitud_validation()&
            this.ADD_site_longitud_validation()&
            this.ADD_site_altitude_validation()&
            this.ADD_site_locality_validation()&
            this.ADD_site_provider_login_validation()&
            this.ADD_nuevo_site_north_photo_validation()&
            this.ADD_nuevo_site_south_photo_validation()&
            this.ADD_nuevo_site_east_photo_validation()&
            this.ADD_nuevo_site_west_photo_validation())
        result=Boolean(result);
        return result;
    }

    //Validaciones edit
    EDIT_id_site_validation(){
        return this.ADD_id_site_validation();
    }
    EDIT_site_latitud_validation(){
        return this.ADD_site_latitud_validation();
    }
    EDIT_site_longitud_validation(){
        return this.ADD_site_longitud_validation();
    }
    EDIT_site_altitude_validation(){
        return this.ADD_site_altitude_validation();
    }
    EDIT_site_locality_validation(){
        return this.ADD_site_locality_validation();
    }
    EDIT_site_provider_login_validation(){
        return this.ADD_site_provider_login_validation();
    }
    //Ver de simplificarlo tmb!!!
    EDIT_nuevo_site_north_photo_validation(){
        let fichero=document.getElementById('nuevo_site_north_photo');
        if(!fichero||fichero.files.length==0){
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_site_north_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_file_KO');
            return "nuevo_site_north_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_north_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_north_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_type_file_KO');
            return "nuevo_site_north_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_north_photo');
        return true;
    }
    EDIT_nuevo_site_south_photo_validation(){
        let fichero=document.getElementById('nuevo_site_south_photo');
        if(!fichero||fichero.files.length==0){
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_site_south_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_file_KO');
            return "nuevo_site_south_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_south_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_south_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_type_file_KO');
            return "nuevo_site_south_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_south_photo');
        return true;    
    }
    EDIT_nuevo_site_east_photo_validation(){
        let fichero=document.getElementById('nuevo_site_east_photo');
        if(!fichero||fichero.files.length==0){
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_site_east_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_file_KO');
            return "nuevo_site_east_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_east_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_east_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_type_file_KO');
            return "nuevo_site_east_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_east_photo');
        return true;    
    }
    EDIT_nuevo_site_west_photo_validation(){
        let fichero=document.getElementById('nuevo_site_west_photo');
        if(!fichero||fichero.files.length==0){
            return true;
        }
        if(!(this.validations.max_size_file('nuevo_site_west_photo', 2000000))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_file_KO');
            return "nuevo_site_west_photo_max_size_file_KO";
        }
        if(!(this.validations.type_file('nuevo_site_west_photo', ['image/jpeg']))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        if(!(this.validations.format_name_file('nuevo_site_west_photo', '^[a-zA-Z0-9._-]{7,50}$'))){
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_type_file_KO');
            return "nuevo_site_west_photo_type_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_site_west_photo');
        return true;    
    }
    //Faltan latitud, longitud y altitud
    EDIT_submit_ubicacion(){
        let result=(this.EDIT_id_site_validation()&
            this.EDIT_site_locality_validation()&
            this.EDIT_site_provider_login_validation()&
            this.EDIT_nuevo_site_north_photo_validation()&
            this.EDIT_nuevo_site_south_photo_validation()&
            this.EDIT_nuevo_site_east_photo_validation()&
            this.EDIT_nuevo_site_west_photo_validation())
        result=Boolean(result);
        return result;
    }

    //Validaciones search
    SEARCH_id_site_validation(){
        if(document.getElementById('id_site').value!==''){
            if(!(this.validations.max_size('id_site', 'id_site_max_size_KO'))){
                this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
                return "id_site_max_size_KO";
            }
            if(!(this.validations.format('id_site', '^[0-9]*$'))){
                this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
                return "id_site_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }
    //Aqui deberian ir latitud, longitud y altitud
    SEARCH_site_locality_validation(){
        if(document.getElementById('site_locality').value!==''){
            if(!(this.validations.max_size('site_locality', 40))){
                this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
                return "site_locality_max_size_KO";
            }
            if(!(this.validations.format('site_locality', '^[A-Za-zÑñÇçÁÉÍÓÚáéíóú ]*$'))){
                this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
                return "site_locality_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }
    SEARCH_site_provider_login_validation(){
        if(document.getElementById('site_provider_login').value!==''){
            if(!(this.validations.max_size('site_provider_login', 30))){
                this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
                return "site_provider_login_max_size_KO";
            }
            if(!(this.validations.format('site_provider_login', '^[A-Za-z0-9_]*$'))){
                this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
                return "site_provider_login_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }
    SEARCH_site_north_photo_validation(){
        if(document.getElementById('site_north_photo').value!==''){
            if(!(this.validations.max_size('site_north_photo', 50))){
                this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_max_size_KO');
                return "site_north_photo_max_size_KO";
            }
            if(!(this.validations.format('site_north_photo', '^[a-zA-Z0-9._-]*$'))){
                this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_format_KO');
                return "site_north_photo_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_north_photo');
        return true;
    }
    SEARCH_site_south_photo_validation(){
        if(document.getElementById('site_south_photo').value!==''){
            if(!(this.validations.max_size('site_south_photo', 50))){
                this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_max_size_KO');
                return "site_south_photo_max_size_KO";
            }
            if(!(this.validations.format('site_south_photo', '^[a-zA-Z0-9._-]*$'))){
                this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_format_KO');
                return "site_south_photo_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_south_photo');
        return true;
    }
    SEARCH_site_east_photo_validation(){
        if(document.getElementById('site_east_photo').value!==''){
            if(!(this.validations.max_size('site_east_photo', 50))){
                this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_max_size_KO');
                return "site_east_photo_max_size_KO";
            }
            if(!(this.validations.format('site_east_photo', '^[a-zA-Z0-9._-]*$'))){
                this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_format_KO');
                return "site_east_photo_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_east_photo');
        return true;
    }
    SEARCH_site_west_photo_validation(){
        if(document.getElementById('site_west_photo').value!==''){
            if(!(this.validations.max_size('site_west_photo', 50))){
                this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_max_size_KO');
                return "site_west_photo_max_size_KO";
            }
            if(!(this.validations.format('site_west_photo', '^[a-zA-Z0-9._-]*$'))){
                this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_format_KO');
                return "site_west_photo_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('site_west_photo');
        return true;
    }
    //Faltan altitud, longitud y latitud
    SEARCH_submit_ubicacion(){
        let result=(this.SEARCH_id_site_validation()&
            this.SEARCH_site_locality_validation()&
            this.SEARCH_site_provider_login_validation()&
            this.SEARCH_site_north_photo_validation()&
            this.SEARCH_site_south_photo_validation()&
            this.SEARCH_site_east_photo_validation()&
            this.SEARCH_site_west_photo_validation())
        result=Boolean(result);
        return result;
    }
    DELETE_submit_alumnograduacion(){
        let confirmacion=confirm("Quieres borrar?");
        if(!confirmacion){
            return false;
        }else{
            return true;
        }
    }

    //metodos personalize para latitud, altitud y longitud
    personalize_coord_formato_rango(valor, tipo){
        const expRegular=/^-?[0-9]+(\.[0-9]+)?$/;
        if(!expRegular.test(valor)){
            return false;
        }
        const num=parseFloat(valor);
        if(isNaN(num)){
            return false;
        }
        if(tipo==='latitud'){
            return num>=-90 && num<=90;
        }else if(tipo==='longitud'){
            return num>=-180 && num<=180;
        }
        return false;
    }
    personalize_altitude_coord_formato_rango(valor){
        const expRegular=/-?[0-9]+$/;
        if(!expRegular.test(valor)){
            return false;
        }
        const num=parseInt(valor);
        return num>=-11000 && num<=9000;
    }
    personalize_coord_decimales(valor, maxDecimales){
        const partes=valor.toString().split('.');
        if(partes.length===1){
            //Si el nº de partes en las que se dividio el valor del campo == 1, entonces es un entero y ya cumple
            return true;
        }
        return partes[1].length <= maxDecimales;
    }

    //Creacion formularios
    createForm_ADD(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('site_north_photo');
        this.dom.hide_element_form('site_north_photo');
        this.dom.hide_element('site_south_photo');
        this.dom.hide_element_form('site_south_photo');
        this.dom.hide_element('site_east_photo');
        this.dom.hide_element_form('site_east_photo');
        this.dom.hide_element('site_west_photo');
        this.dom.hide_element_form('site_west_photo');
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
        this.dom.hide_element('nuevo_site_north_photo');
        this.dom.hide_element_form('nuevo_site_north_photo');
        this.dom.hide_element('nuevo_site_south_photo');
        this.dom.hide_element_form('nuevo_site_south_photo');
        this.dom.hide_element('nuevo_site_east_photo');
        this.dom.hide_element_form('nuevo_site_east_photo');
        this.dom.hide_element('nuevo_site_west_photo');
        this.dom.hide_element_form('nuevo_site_west_photo');
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
        this.dom.assign_property_value('nuevo_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
        this.dom.assign_property_value('nuevo_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
        this.dom.assign_property_value('nuevo_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
        this.dom.assign_property_value('nuevo_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //validaciones y campos inactivos
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        //this.dom.assign_property_value('alumnograduacion_dni', 'readonly', 'true');
        this.dom.assign_property_value('site_north_photo', 'readonly', 'true');
        this.dom.assign_property_value('site_south_photo', 'readonly', 'true');
        this.dom.assign_property_value('site_east_photo', 'readonly', 'true');
        this.dom.assign_property_value('site_west_photo', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
    }
    createForm_DELETE(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        //oculto el nuevo_fotoacto
        this.dom.hide_element_form('nuevo_site_north_photo');
        this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
        this.dom.hide_element_form('nuevo_site_south_photo');
        this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
        this.dom.hide_element_form('nuevo_site_east_photo');
        this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
        this.dom.hide_element_form('nuevo_site_west_photo');
        this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);
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
        this.dom.hide_element_form('nuevo_site_north_photo');
        this.dom.assign_property_value('nuevo_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
        this.dom.hide_element_form('nuevo_site_south_photo');
        this.dom.assign_property_value('nuevo_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
        this.dom.hide_element_form('nuevo_site_east_photo');
        this.dom.assign_property_value('nuevo_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
        this.dom.hide_element_form('nuevo_site_west_photo');
        this.dom.assign_property_value('nuevo_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //poner los campos inactivos
        this.dom.colocartodosreadonly('form_iu');
    }

    /* VER SI ME HACE FALTA
    cambiarFormatoFecha(fecha){
        var a=fecha.split('-');
        var dia=a[2];
        var mes=a[1];
        var ano=a[0];
        return dia+'/'+mes+'/'+ano;
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
			case 'site_north_photo':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_site_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
            case 'site_south_photo':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_site_south_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
            case 'site_east_photo':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_site_east_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
            case 'site_west_photo':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_site_west_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
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
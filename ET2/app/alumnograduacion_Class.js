class alumnograduacion extends EntidadAbstracta {

    constructor(esTest) {
        super();
        this.columnasamostrar=['alumnograduacion_login', 'alumnograduacion_password', 'alumnograduacion_nombre', 'alumnograduacion_apellidos', 'alumnograduacion_titulacion', 'alumnograduacion_dni', 'alumnograduacion_telefono', 'alumnograduacion_direccion', 'alumnograduacion_email', 'alumnograduacion_fotoacto'];
        this.mostrarespecial=['alumnograduacion_fotoacto'];
        this.attributes=['alumnograduacion_login', 'alumnograduacion_password', 'alumnograduacion_nombre', 'alumnograduacion_apellidos', 'alumnograduacion_titulacion', 'alumnograduacion_dni', 'alumnograduacion_telefono', 'alumnograduacion_direccion', 'alumnograduacion_email', 'alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto'];
    }

    /**
     * replace the content of section element with a particular entity menu
     * @returns 
     */
    manual_form_creation() {
        var form_content = `
			<form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

			<label id="label_alumnograduacion_login" class="label_alumnograduacion_login">login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login'></input>
			<span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
			<br>

			<label id="label_alumnograduacion_password" class="label_alumnograduacion_password">Contraseña</label>
			<input type='text' id='alumnograduacion_password' name='alumnograduacion_password'></input>
			<span id="span_error_alumnograduacion_password"><a id="error_alumnograduacion_password"></a></span>
			<br>

			<label id="label_alumnograduacion_nombre" class="label_alumnograduacion_nombre">Nombre</label>
			<input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre'></input>
			<span id="span_error_alumnograduacion_nombre"><a id="error_alumnograduacion_nombre"></a></span>
			<br>

			<label id="label_alumnograduacion_apellidos" class="label_alumnograduacion_apellidos">Apellidos</label>
			<input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos'></input>
			<span id="span_error_alumnograduacion_apellidos"><a id="error_alumnograduacion_apellidos"></a></span>
			<br>

            <label class="alumnograduacion_titulacion">Titulacion</label>
            <select id="alumnograduacion_titulacion" name="alumnograduacion_titulacion">
                <option selected="selected"></option>
                <option value="GREI">GREI</option>
                <option value="GRIA">GRIA</option>
                <option value="MEI">MEI</option>
                <option value="MIA">MIA</option>
                <option value="PCEO">PCEO</option>
            </select>
            <span id="span_error_alumnograduacion_titulacion"><a id="error_alumnograduacion_titulacion"></a></span>
            <br>

			<label id="label_alumnograduacion_dni" class="label_alumnograduacion_dni">Dni</label>
			<input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni'></input>
			<span id="span_error_alumnograduacion_dni"><a id="error_alumnograduacion_dni"></a></span>
			<br>
			
			<label id="label_alumnograduacion_telefono" class="label_alumnograduacion_telefono">Telefono</label>
			<input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono'></input>
			<span id="span_error_alumnograduacion_telefono"><a id="error_alumnograduacion_telefono"></a></span>
			<br>

			<label id="label_alumnograduacion_direccion" class="label_alumnograduacion_direccion">Direccion</label>
            <textarea rows="3" cols="33" type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion'></textarea>
            <span id="span_error_alumnograduacion_direccion"><a id="error_alumnograduacion_direccion"></a></span>
            <br>

			<label id="label_alumnograduacion_email" class="label_alumnograduacion_email">Email</label>
			<input type='text' id='alumnograduacion_email' name='alumnograduacion_email'></input>
			<span id="span_error_alumnograduacion_email"><a id="error_alumnograduacion_email"></a></span>
			<br>

            <label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_foto_persona">Nueva Foto acto</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>

			<label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Foto acto</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
			
			<br>
		</form>
		`;
        return form_content;
    }

    ADD_alumnograduacion_login_validation() {
        if (!(this.validations.min_size('alumnograduacion_login', 4))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
            return "alumnograduacion_login_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_login', 15))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return "alumnograduacion_login_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_login', '^[a-zA-Z]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return "alumnograduacion_login_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation() {
        if (!(this.validations.min_size('alumnograduacion_password', 8))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
            return "alumnograduacion_password_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_password', 64))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return "alumnograduacion_password_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_password', '^[a-zA-Z ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return "alumnograduacion_password_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation() {
        if (!(this.validations.min_size('alumnograduacion_nombre', 2))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
            return "alumnograduacion_nombre_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_nombre', 25))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
            return "alumnograduacion_nombre_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return "alumnograduacion_nombre_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }


    ADD_alumnograduacion_apellidos_validation() {
        if (!(this.validations.min_size('alumnograduacion_apellidos', 2))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
            return "alumnograduacion_apellidos_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_apellidos', 35))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
            return "alumnograduacion_apellidos_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
            return "alumnograduacion_apellidos_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }


    ADD_alumnograduacion_titulacion_validation() {
        const valor=document.getElementById('alumnograduacion_titulacion').value;
        const valoresPermitidos=['GREI', 'GRIA','MEI', 'MIA', 'PCEO'];
        if(!valoresPermitidos.includes(valor)){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_valor_KO');
            return "alumnograduacion_titulacion_valor_KO";
        }
        if(valor==''){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_vacio_KO');
            return "alumnograduacion_titulacion_vacio_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    ADD_alumnograduacion_dni_validation() {
        if (!(this.validations.min_size('alumnograduacion_dni', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO');
            return "alumnograduacion_dni_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_dni', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
            return "alumnograduacion_dni_max_size_KO";
        }
        var resp = this.personalize_dni_nie();
        //console.log(resp);
        if (!(resp === true)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', resp);
            return resp;
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    ADD_alumnograduacion_telefono_validation() {
        if (!(this.validations.min_size('alumnograduacion_telefono', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
            return "alumnograduacion_telefono_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_telefono', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
            return "alumnograduacion_telefono_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return "alumnograduacion_telefono_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    ADD_alumnograduacion_direccion_validation() {
        if (!(this.personalize_direccion_min_size('alumnograduacion_direccion', 5))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO');
            return "alumnograduacion_direccion_min_size_KO";
        }
        if (!(this.personalize_direccion_max_size('alumnograduacion_direccion', 100))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
            return "alumnograduacion_direccion_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_direccion', '^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ .,/ºª]+$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return "alumnograduacion_direccion_format_KO";
        }

        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }
    ADD_alumnograduacion_email_validation() {
        if (!(this.validations.min_size('alumnograduacion_email', 5))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
            return "alumnograduacion_email_min_size_KO";
        }
        if (!(this.validations.max_size('alumnograduacion_email', 40))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
            return "alumnograduacion_email_max_size_KO";
        }
        if (!(this.validations.format('alumnograduacion_email', '^[^@]+@[^@]+\.[a-zA-Z]{2,}\.[a-z]{2,}$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return "alumnograduacion_email_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    SEARCH_alumnograduacion_fotoacto_validation() {
        if (document.getElementById('alumnograduacion_fotoacto').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_fotoacto', 40))) {
                this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO');
                return "alumnograduacion_fotoacto_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_fotoacto', '^[a-zA-Z0-9._/-]+$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO');
                return "alumnograduacion_fotoacto_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    ADD_nuevo_alumnograduacion_fotoacto_validation() {
        if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO');
            return "nuevo_alumnograduacion_fotoacto_not_exist_file_KO";
        }
        if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) { // 2MB
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
        }
        if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return "nuevo_alumnograduacion_fotoacto_type_file_KO";
        }
        if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]*$'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
        }
        if(!(this.personalize_min_file_name_size('nuevo_alumnograduacion_fotoacto', 7))){
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_min_file_name_size_KO');
            return "nuevo_alumnograduacion_fotoacto_min_file_name_size_KO";
        }
        if(!(this.personalize_max_file_name_size('nuevo_alumnograduacion_fotoacto', 40))){
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_file_name_size_KO');
            return "nuevo_alumnograduacion_fotoacto_max_file_name_size_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    ADD_submit_alumnograduacion() {
        let result=(this.ADD_alumnograduacion_login_validation() &
            this.ADD_alumnograduacion_password_validation() &
            this.ADD_alumnograduacion_nombre_validation() &
            this.ADD_alumnograduacion_apellidos_validation() &
            this.ADD_alumnograduacion_titulacion_validation() &
            this.ADD_alumnograduacion_telefono_validation() &
            this.ADD_alumnograduacion_dni_validation() &
            this.ADD_alumnograduacion_direccion_validation() &
            this.ADD_alumnograduacion_email_validation() &
            this.ADD_nuevo_alumnograduacion_fotoacto_validation());
        result = Boolean(result);
        return result;
    }

    EDIT_alumnograduacion_login_validation() {
        return this.ADD_alumnograduacion_login_validation();
    }

    EDIT_alumnograduacion_password_validation() {
        return this.ADD_alumnograduacion_password_validation();
    }

    EDIT_alumnograduacion_nombre_validation() {
        return this.ADD_alumnograduacion_nombre_validation();
    }

    EDIT_alumnograduacion_apellidos_validation() {
        return this.ADD_alumnograduacion_apellidos_validation();
    }

    EDIT_alumnograduacion_titulacion_validation() {
        return this.ADD_alumnograduacion_titulacion_validation();
    }

    EDIT_alumnograduacion_dni_validation() {
        return this.ADD_alumnograduacion_dni_validation();
    }

    EDIT_alumnograduacion_telefono_validation() {
        return this.ADD_alumnograduacion_telefono_validation();
    }

    EDIT_alumnograduacion_email_validation() {
        return this.ADD_alumnograduacion_email_validation();
    }

    EDIT_alumnograduacion_direccion_validation() {
        return this.ADD_alumnograduacion_direccion_validation();
    }

    EDIT_nuevo_alumnograduacion_fotoacto_validation() {
        let fichero=document.getElementById('nuevo_alumnograduacion_fotoacto');
        if(!fichero || fichero.files.length==0){
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) { // 2MB
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
        }
        if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return "nuevo_alumnograduacion_fotoacto_type_file_KO";
        }
        if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]*$'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
        }
        if(!(this.personalize_min_file_name_size('nuevo_alumnograduacion_fotoacto', 7))){
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_min_file_name_size_KO');
            return "nuevo_alumnograduacion_fotoacto_min_file_name_size_KO";
        }
        if(!(this.personalize_max_file_name_size('nuevo_alumnograduacion_fotoacto', 40))){
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_file_name_size_KO');
            return "nuevo_alumnograduacion_fotoacto_max_file_name_size_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    EDIT_submit_alumnograduacion() {
        let result = (this.EDIT_alumnograduacion_login_validation() &
            this.EDIT_alumnograduacion_password_validation() &
            this.EDIT_alumnograduacion_nombre_validation() &
            this.EDIT_alumnograduacion_apellidos_validation() &
            this.EDIT_alumnograduacion_titulacion_validation() &
            this.EDIT_alumnograduacion_telefono_validation() &
            this.EDIT_alumnograduacion_dni_validation() &
            this.EDIT_alumnograduacion_direccion_validation() &
            this.EDIT_alumnograduacion_email_validation() &
            this.EDIT_nuevo_alumnograduacion_fotoacto_validation());
        result = Boolean(result);
        return result;
    }

    SEARCH_alumnograduacion_login_validation() {
        if (document.getElementById('alumnograduacion_login').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_login', 14))) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
                return "alumnograduacion_login_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_login', '^[a-zA-Z]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
                return "alumnograduacion_login_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    SEARCH_alumnograduacion_password_validation() {
        if (document.getElementById('alumnograduacion_password').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_password', 64))) {
                this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
                return "alumnograduacion_password_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_password', '^[a-zA-Z ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
                return "alumnograduacion_password_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    SEARCH_alumnograduacion_nombre_validation() {
        if (document.getElementById('alumnograduacion_nombre').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_nombre', 15))) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
                return "alumnograduacion_nombre_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
                return "alumnograduacion_nombre_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    SEARCH_alumnograduacion_apellidos_validation() {
        if (document.getElementById('alumnograduacion_apellidos').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_apellidos', 35))) {
                this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
                return "alumnograduacion_apellidos_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
                return "alumnograduacion_apellidos_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }

	SEARCH_alumnograduacion_titulacion_validation() {
    if (document.getElementById('alumnograduacion_titulacion').value !== '') {
        const value = document.getElementById('alumnograduacion_titulacion').value;
        if(value.length < 1 || value.length > 4) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO');
            return "alumnograduacion_titulacion_max_size_KO";
        }
        if(!(this.validations.format('alumnograduacion_titulacion', '^[A-Z]+$'))){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return "alumnograduacion_titulacion_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
    return true;
}


    SEARCH_alumnograduacion_dni_validation() {
        if (document.getElementById('alumnograduacion_dni').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_dni', 9))) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
                return "alumnograduacion_dni_max_size_KO";
            }
            var dniValue = document.getElementById('alumnograduacion_dni').value.toUpperCase(); // Convertir a mayúsculas

            //9 caracteres mirar que cumpla formato completo y letra
            if (dniValue.length === 9) {
                if (!(this.validations.format('alumnograduacion_dni', '^([0-9]{8}[A-Z]|[XYZ][0-9]{7}[A-Z])$'))) {
                    this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
                    return "alumnograduacion_dni_format_KO";
                }
                var resp = this.personalize_dni_nie();
                if (!(resp === true)) {
                    this.dom.mostrar_error_campo('alumnograduacion_dni', resp);
                    return resp;
                }
            } else {
                //menos de 9 mirar caracteres permitidos
                if (!(this.validations.format('alumnograduacion_dni', '^[0-9XYZxyz]*$'))) {
                    this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
                    return "alumnograduacion_dni_format_KO";
                }
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    SEARCH_alumnograduacion_telefono_validation() {
        if (document.getElementById('alumnograduacion_telefono').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_telefono', 9))) {
                this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
                return "alumnograduacion_telefono_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
                return "alumnograduacion_telefono_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    SEARCH_alumnograduacion_direccion_validation() {
    if (document.getElementById('alumnograduacion_direccion').value !== '') {
        if (!(this.validations.format('alumnograduacion_direccion', '^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ .,\/ºª]+$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
                return "alumnograduacion_direccion_format_KO";
            }
            if (!(this.validations.max_size('alumnograduacion_direccion', 100))) {
                this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
                return "alumnograduacion_direccion_max_size_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    SEARCH_alumnograduacion_email_validation() {
        if (document.getElementById('alumnograduacion_email').value !== '') {
            if (!(this.validations.max_size('alumnograduacion_email', 40))) {
                this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
                return "alumnograduacion_email_max_size_KO";
            }
            if (!(this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9@_.]+$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
                return "alumnograduacion_email_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    SEARCH_submit_alumnograduacion() {
        let result = (this.SEARCH_alumnograduacion_login_validation() &
            this.SEARCH_alumnograduacion_password_validation() &
            this.SEARCH_alumnograduacion_nombre_validation() &
            this.SEARCH_alumnograduacion_apellidos_validation() &
            this.SEARCH_alumnograduacion_titulacion_validation() &
            this.SEARCH_alumnograduacion_telefono_validation() &
            this.SEARCH_alumnograduacion_dni_validation() &
            this.SEARCH_alumnograduacion_direccion_validation() &
            this.SEARCH_alumnograduacion_email_validation() &
            this.SEARCH_alumnograduacion_fotoacto_validation());
        result = Boolean(result);
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

    /**
     * 
     * test dni format in the regular expression
     * @param {string} 
     * @return {bool} true is regular expression is satified false otherwise  
     * */

    personalize_dni_nie() {
        // Buscar el elemento en el contexto correcto
        var dniElement = document.getElementById('alumnograduacion_dni');
        if (!dniElement) {
            // Si no se encuentra en el DOM global, buscar dentro del formulario de test
            var formElement = document.getElementById('form');
            if (formElement) {
                dniElement = formElement.querySelector('#alumnograduacion_dni');
            }
        }

        if (!dniElement) {
            return "ELEMENT_NOT_FOUND";
        }

        var dni = dniElement.value;

        // Primero verificar si es formato DNI
        if (this.personalize_dni_format() == true) {
            if (!(this.personalize_validate_dni(dni))) {
                return "alumnograduacion_dni_format_nif_KO";
            }
        }
        else {
            // Si no es DNI, verificar si es formato NIE
            if (this.personalize_nie_format() === true) {
                if (!(this.personalize_validate_nie(dni))) {
                    return "alumnograduacion_dni_format_nie_KO";
                }
            }
            else {
                return "alumnograduacion_dni_format_KO";
            }
        }
        return true;
    }

    personalize_dni_format() {
        // Buscar el elemento en el contexto correcto
        var dniElement = document.getElementById('alumnograduacion_dni');
        if (!dniElement) {
            var formElement = document.getElementById('form');
            if (formElement) {
                dniElement = formElement.querySelector('#alumnograduacion_dni');
            }
        }

        if (!dniElement) {
            return false;
        }

        var dniValue = dniElement.value;
        var dniRegex = /^[0-9]{8}[A-Z]$/;
        // Eliminar la muestra de error aquí, solo validar
        return dniRegex.test(dniValue);
    }

    personalize_nie_format() {
        // Buscar el elemento en el contexto correcto
        var dniElement = document.getElementById('alumnograduacion_dni');
        if (!dniElement) {
            var formElement = document.getElementById('form');
            if (formElement) {
                dniElement = formElement.querySelector('#alumnograduacion_dni');
            }
        }

        if (!dniElement) {
            return false;
        }

        var dniValue = dniElement.value;
        var nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;
        // Eliminar la muestra de error aquí, solo validar
        return nieRegex.test(dniValue);
    }

    personalize_validate_dni(dni) {
        var dni_letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var numeros = dni.substr(0,8);
        var letraCalculada = dni_letras.charAt(parseInt(numeros, 10) % 23);
        var letraActual = dni.charAt(8);
        return letraCalculada === letraActual;
    }

    personalize_validate_nie(nie) {
        var nie_prefix = nie.charAt(0);

        switch (nie_prefix) {
            case 'X': nie_prefix = '0'; break;
            case 'Y': nie_prefix = '1'; break;
            case 'Z': nie_prefix = '2'; break;
            default: return false;
        }
        var nieNum=nie_prefix + nie.substr(1);
        return this.personalize_validate_dni(nieNum);
    }
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
    personalize_direccion_min_size(direccion, tamMin){
        const input=document.getElementById(direccion).value.trim();
        return input.length>=tamMin;
    }
    personalize_direccion_max_size(direccion, tamMax){
        const input=document.getElementById(direccion).value.trim();
        return input.length<=tamMax;
    }
    /*
        A partir de aqui todo seria para la creacion de los formularios para hacer los add, edit y search
    */
    createForm_ADD(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        //fotoacto oculto
        this.dom.hide_element('alumnograduacion_fotoacto');
        this.dom.hide_element_form('alumnograduacion_fotoacto');
        this.dom.hide_element('link_alumnograduacion_fotoacto');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }
    createForm_SEARCH(){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element('link_alumnograduacion_fotoacto');
        this.dom.replaceSelectXEmptyInput('alumnograduacion_titulacion');
        this.dom.replaceSelectXEmptyInput('alumnograduacion_direccion');
        //validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }
    createForm_EDIT(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        //acceso al fichero de fotoacto
        this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //validaciones y campos inactivos
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.colocarboton('EDIT');
        setLang();
    }
    createForm_DELETE(fila){
        document.getElementById('contenedor_IU_form').innerHTML=this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');
        //action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.DELETE_submit_'+this.nombreentidad+'()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        //oculto el nuevo_fotoacto
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
        //rellenar valores
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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');
        //campos no visibles
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
        //rellenar valores
        this.dom.rellenarvaloresform(fila);
        //poner los campos inactivos
        this.dom.colocartodosreadonly('form_iu');
        setLang();
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
			case 'alumnograduacion_fotoacto':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
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
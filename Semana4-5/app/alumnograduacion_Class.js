class alumnograduacion extends Validations {

    constructor(esTest) {
        super();
        this.dom = new dom();
        this.nombreentidad = 'alumnograduacion';
        this.validations=new Validations();
        this.externalFunctions=new ExternalAccess();
        this.columnasamostrar=[];
        this.mostrarespecial=[];

        if (esTest == 'test') {

        }else {
            document.getElementById('IU_manage_entity').style.display='block'; //muestra mi tabla y botones
            document.getElementById('IU_form').innerHTML=this.manual_form_creation(); //crear formulario vacio
            this.SEARCH(); //ir al back a buscar
        }
    }

    /**
     * replace the content of section element with a particular entity menu
     * @returns 
     */
    manual_form_creation() {
        var form_content = `
			<form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

			<label class="label_alumnograduacion_login">login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur=" return entidad.ADD_alumnograduacion_login_validation();"></input>
			<span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
			<br>

			<label class="label_alumnograduacion_password">Contraseña</label>
			<input type='text' id='alumnograduacion_password' name='alumnograduacion_password' onblur=" return entidad.ADD_alumnograduacion_password_validation();"></input>
			<span id="span_error_alumnograduacion_password"><a id="error_alumnograduacion_password"></a></span>
			<br>

			<label class="label_alumnograduacion_nombre">Nombre</label>
			<input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' onblur=" return entidad.ADD_alumnograduacion_nombre_validation();"></input>
			<span id="span_error_alumnograduacion_nombre"><a id="error_alumnograduacion_nombre"></a></span>
			<br>

			<label class="label_alumnograduacion_apellidos">Apellidos</label>
			<input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' onblur=" return entidad.ADD_alumnograduacion_apellidos_validation();"></input>
			<span id="span_error_alumnograduacion_apellidos"><a id="error_alumnograduacion_apellidos"></a></span>
			<br>

			<label class="label_alumnograduacion_titulacion">Titulacion</label>
			<input type='text' id='alumnograduacion_titulacion' name='alumnograduacion_titulacion' onblur=" return entidad.ADD_alumnograduacion_titulacion_validation();"></input>
			<span id="span_error_alumnograduacion_titulacion"><a id="error_alumnograduacion_titulacion"></a></span>
			<br>

			<label class="label_alumnograduacion_dni">Dni</label>
			<input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' onblur=" return entidad.ADD_alumnograduacion_dni_validation();""></input>
			<span id="span_error_alumnograduacion_dni"><a id="error_alumnograduacion_dni"></a></span>
			<br>
			
			<label class="label_alumnograduacion_telefono">Telefono</label>
			<input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' onblur=" return entidad.ADD_alumnograduacion_telefono_validation();"></input>
			<span id="span_error_alumnograduacion_telefono"><a id="error_alumnograduacion_telefono"></a></span>
			<br>

			<label class="label_alumnograduacion_direccion">Direccion</label>
			<input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion' onblur=" return entidad.ADD_alumnograduacion_direccion_validation();"></input>
			<span id="span_error_alumnograduacion_direccion"><a id="error_alumnograduacion_direccion"></a></span>
			<br>

			<label class="label_alumnograduacion_email">Email</label>
			<input type='text' id='alumnograduacion_email' name='alumnograduacion_email' onblur=" return entidad.ADD_alumnograduacion_email_validation();"></input>
			<span id="span_error_alumnograduacion_email"><a id="error_alumnograduacion_email"></a></span>
			<br>

			<label id="label_alumnograduacion_fotoacto" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
			<br>
		</form>
		`;
        return form_content;

    }

    ADD_alumnograduacion_login_validation() {
        if (!(this.min_size('alumnograduacion_login', 4))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
            return "alumnograduacion_login_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_login', 15))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return "alumnograduacion_login_max_size_KO";
        }
        if (!(this.format('alumnograduacion_login', '^[a-zA-Z]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return "alumnograduacion_login_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation() {
        if (!(this.min_size('alumnograduacion_password', 8))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
            return "alumnograduacion_password_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_password', 64))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return "alumnograduacion_password_max_size_KO";
        }
        if (!(this.format('alumnograduacion_password', '^[a-zA-Z ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return "alumnograduacion_password_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation() {
        if (!(this.min_size('alumnograduacion_nombre', 2))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
            return "alumnograduacion_nombre_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_nombre', 25))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
            return "alumnograduacion_nombre_max_size_KO";
        }
        if (!(this.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return "alumnograduacion_nombre_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }


    ADD_alumnograduacion_apellidos_validation() {
        if (!(this.min_size('alumnograduacion_apellidos', 2))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
            return "alumnograduacion_apellidos_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_apellidos', 35))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
            return "alumnograduacion_apellidos_max_size_KO";
        }
        if (!(this.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
            return "alumnograduacion_apellidos_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }


    ADD_alumnograduacion_titulacion_validation() {
        /*if (!(this.min_size('alumnograduacion_titulacion',1))){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion','alumnograduacion_titulacion_min_size_KO');
            return "alumnograduacion_titulacion_min_size_KO";
        }*/
        const valor = document.getElementById('alumnograduacion_titulacion').value;
        const valoresPermitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if (!valoresPermitidos.includes(valor)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return "alumnograduacion_titulacion_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    ADD_alumnograduacion_dni_validation() {
        if (!(this.min_size('alumnograduacion_dni', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO');
            return "alumnograduacion_dni_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_dni', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
            return "alumnograduacion_dni_max_size_KO";
        }
        var resp = this.personalize_dni_nie();
        console.log(resp);
        if (!(resp === true)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', resp);
            return resp;
        }

        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    ADD_alumnograduacion_telefono_validation() {
        if (!(this.min_size('alumnograduacion_telefono', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
            return "alumnograduacion_telefono_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_telefono', 9))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
            return "alumnograduacion_telefono_max_size_KO";
        }
        if (!(this.format('alumnograduacion_telefono', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return "alumnograduacion_telefono_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    ADD_alumnograduacion_direccion_validation() {
        if (!(this.min_size('alumnograduacion_direccion', 5))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO');
            return "alumnograduacion_direccion_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_direccion', 100))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
            return "alumnograduacion_direccion_max_size_KO";
        }
        // Calle abc, 12, 1ºB, 32001, Ourense -->> ^[a-zA-ZáéíóúÁÉÍÓÚÑñ0-9 ]\,[0-9]{1,}\, 
        if (!(this.format('alumnograduacion_direccion', '^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ,\/ºª]+$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return "alumnograduacion_direccion_format_KO";
        }

        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    ADD_alumnograduacion_email_validation() {
        if (!(this.min_size('alumnograduacion_email', 5))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
            return "alumnograduacion_email_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_email', 40))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
            return "alumnograduacion_email_max_size_KO";
        }
        if (!(this.format('alumnograduacion_email', '^[^@]+@[^@]+\.[a-zA-Z]{2,}\.[a-z]{2,}$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return "alumnograduacion_email_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    SEARCH_alumnograduacion_fotoacto_validation() {
        if (document.getElementById('alumnograduacion_fotoacto').value !== '') {
            if (!(this.max_size('alumnograduacion_fotoacto', 40))) {
                this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO');
                return "alumnograduacion_fotoacto_max_size_KO";
            }
            if (!(this.format('alumnograduacion_fotoacto', '^[a-zA-Z0-9._/-]+$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO');
                return "alumnograduacion_fotoacto_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    ADD_nuevo_alumnograduacion_fotoacto_validation() {

        if (!(this.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO');
            return "nuevo_alumnograduacion_fotoacto_not_exist_file_KO";
        }
        if (!(this.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) { // 2MB
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
        }
        if (!(this.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return "nuevo_alumnograduacion_fotoacto_type_file_KO";
        }
        if (!(this.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]{7,100}$'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    ADD_submit_alumnograduacion() {
        let result = (this.ADD_alumnograduacion_login_validation() &
            this.ADD_alumnograduacion_password_validation() &
            this.ADD_alumnograduacion_nombre_validation() &
            this.ADD_alumnograduacion_apellidos_validation() &
            this.ADD_alumnograduacion_titulacion_validation() &
            this.ADD_alumnograduacion_telefono_validation() &
            this.ADD_alumnograduacion_dni_validation() &
            this.ADD_alumnograduacion_direccion_validation() &
            this.ADD_alumnograduacion_email_validation() &
            this.ADD_nuevo_alumnograduacion_fotoacto_validation())
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
        let fileInput=document.getElementById('nuevo_alumnograduacion_fotoacto');
        if(!fileInput || fileInput.files.length==0){
            return true;
        }

        if (!(this.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000))) { // 2MB
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO');
            return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
        }
        if (!(this.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_type_file_KO');
            return "nuevo_alumnograduacion_fotoacto_type_file_KO";
        }
        if (!(this.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]{7,100}$'))) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO');
            return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
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
            this.EDIT_nuevo_alumnograduacion_fotoacto_validation())
        result = Boolean(result);
        return result;
    }

    SEARCH_alumnograduacion_login_validation() {
        if (document.getElementById('alumnograduacion_login').value !== '') {
            if (!(this.max_size('alumnograduacion_login', 14))) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
                return "alumnograduacion_login_max_size_KO";
            }
            if (!(this.format('alumnograduacion_login', '^[a-zA-Z]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
                return "alumnograduacion_login_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    SEARCH_alumnograduacion_password_validation() {
        if (document.getElementById('alumnograduacion_password').value !== '') {
            if (!(this.max_size('alumnograduacion_password', 64))) {
                this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
                return "alumnograduacion_password_max_size_KO";
            }
            if (!(this.format('alumnograduacion_password', '^[a-zA-Z ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
                return "alumnograduacion_password_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    SEARCH_alumnograduacion_nombre_validation() {
        if (document.getElementById('alumnograduacion_nombre').value !== '') {
            if (!(this.max_size('alumnograduacion_nombre', 15))) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
                return "alumnograduacion_nombre_max_size_KO";
            }
            if (!(this.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
                return "alumnograduacion_nombre_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    SEARCH_alumnograduacion_apellidos_validation() {
        if (document.getElementById('alumnograduacion_apellidos').value !== '') {
            if (!(this.max_size('alumnograduacion_apellidos', 35))) {
                this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
                return "alumnograduacion_apellidos_max_size_KO";
            }
            if (!(this.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
                return "alumnograduacion_apellidos_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }

    SEARCH_alumnograduacion_titulacion_validation() {
        if (document.getElementById('alumnograduacion_titulacion').value !== '') {
            const valor = document.getElementById('alumnograduacion_titulacion').value.toUpperCase();
            const valoresPermitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];

            // Verificar si el valor es una subcadena de algún valor permitido
            const coincide = valoresPermitidos.some(permiso =>
                permiso.includes(valor)
            );

            if (!coincide) {
                this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
                return "alumnograduacion_titulacion_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;

    }

    SEARCH_alumnograduacion_dni_validation() {
        if (document.getElementById('alumnograduacion_dni').value !== '') {
            if (!(this.max_size('alumnograduacion_dni', 9))) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
                return "alumnograduacion_dni_max_size_KO";
            }
            var dniValue = document.getElementById('alumnograduacion_dni').value.toUpperCase(); // Convertir a mayúsculas

            //9 caracteres mirar que cumpla formato completo y letra
            if (dniValue.length === 9) {
                if (!(this.format('alumnograduacion_dni', '^([0-9]{8}[A-Z]|[XYZ][0-9]{7}[A-Z])$'))) {
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
                if (!(this.format('alumnograduacion_dni', '^[0-9XYZxyz]*$'))) {
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
            if (!(this.max_size('alumnograduacion_telefono', 9))) {
                this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
                return "alumnograduacion_telefono_max_size_KO";
            }
            if (!(this.format('alumnograduacion_telefono', '^[0-9]*$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
                return "alumnograduacion_telefono_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    SEARCH_alumnograduacion_direccion_validation() {
        if (document.getElementById('alumnograduacion_direccion').value !== '') {
            if (!(this.max_size('alumnograduacion_direccion', 100))) {
                this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
                return "alumnograduacion_direccion_max_size_KO";
            }
            if (!(this.format('alumnograduacion_direccion', '^^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ,\/ºª]+$'))) {
                this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
                return "alumnograduacion_direccion_format_KO";
            }
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    SEARCH_alumnograduacion_email_validation() {
        if (document.getElementById('alumnograduacion_email').value !== '') {
            if (!(this.max_size('alumnograduacion_email', 40))) {
                this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
                return "alumnograduacion_email_max_size_KO";
            }
            if (!(this.format('alumnograduacion_email', '^[a-zA-Z0-9@_.]+$'))) {
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
            this.SEARCH_alumnograduacion_fotoacto_validation()) // Agregar esta validación
        result = Boolean(result);
        return result;
    }

    DELETE_submit_alumnograduacion(){
        let confirmacion=confir("Quieres borrar?");
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
                return "alumnograduacion_dni_format_nif_KO"; // Cambiado
            }
        }
        else {
            // Si no es DNI, verificar si es formato NIE
            if (this.personalize_nie_format() === true) {
                if (!(this.personalize_validate_nie(dni))) {
                    return "alumnograduacion_dni_format_nie_KO"; // Cambiado
                }
            }
            else {
                return "alumnograduacion_dni_format_KO"; // Cambiado
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
        var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letter = dni_letters.charAt(parseInt(dni, 10) % 23);
        return letter == dni.charAt(8);
    }

    personalize_validate_nie(nie) {
        var nie_prefix = nie.charAt(0);

        switch (nie_prefix) {
            case 'X': nie_prefix = 0; break;
            case 'Y': nie_prefix = 1; break;
            case 'Z': nie_prefix = 2; break;
        }

        return this.personalize_validate_dni(nie_prefix + nie.substr(1));
    }

    /*
        A partir de aqui todo seria para la creacion de los formularios para hacer los add, edit y search
    */
    createForm_ADD(){
        document.getElementById('IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('alumnograduacion_fotoacto');
        this.dom.hide_element_form('alumnograduacion_fotoacto');
        //validaciones
        this.colocarvalidaciones('form_iu', 'ADD');
        this.colocarboton('ADD');
    }
    createForm_SEARCH(){
        document.getElementById('IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        //nuevo_fotoacto oculto
        this.dom.hide_element('nuevo_alumnograduacion_fotoacto');
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        //validaciones
        this.colocarvalidaciones('form_iu', 'SEARCH');
        this.colocarboton('SEARCH');
    }
    //como no tengo fecha, aqui no tendría que cambiarle el formato a nada
    createForm_EDIT(fila){
        document.getElementById('IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_'+this.nombreentidad+'()');
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        //acceso al fichero de fotoacto
        this.dom.assign_property_value('nuevo_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
        //rellenar valores
        this.rellenarvaloresform(fila);
        //validaciones y campos inactivos
        this.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('alumnograduacion_dni', 'readonly', 'true');
        this.dom.assign_property_value('alumnograduacion_fotoacto', 'readonly', 'true');
        this.colocarboton('EDIT');
    }
    createForm_DELETE(fila){
        document.getElementById('IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        //oculto el nuevo_fotoacto
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
        //rellenar valores
        this.rellenarvaloresform(fila);
        //campos inactivos
        this.colocartodosreadonly('form_iu');
        this.colocarboton('DELETE');
    }
    createForm_SHOWCURRENT(fila){
        document.getElementById('IU_form').innerHTML=this.manual_form_creation();
        document.getElementById('Div_IU_form').style.display='block';
        //campos no visibles
        this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
        this.dom.assign_property_value('nuevo_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
        //rellenar valores
        this.rellenarvaloresform(fila);
        //poner los campos inactivos
        this.colocartodosreadonly('form_iu');
    }

    colocarboton(accion){
		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('form_iu').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);
	}

    colocartodosreadonly(id){
        let campos=document.forms[id].elements;
        for(let i=0; i<campos.length; i++){
            document.getElementById(campos[i].id).setAttribute('readonly', true);
        }
    }

    rellenarvaloresform(parametros){
        let campos=document.forms['form_iu'].elements;
        for(let i=0; i<campos.length; i++){
            switch(document.getElementById(campos[i].id).type){
                case 'file':
                    break;
                case 'submit':
                    break;
                case 'textarea':
                    document.getElementById(campos[i].id).innerHTML=parametros[campos[i].id];
                default:
                    document.getElementById(campos[i].id).value=parametros[campos[i].id];
            }
        }
    }

    colocarvalidaciones(idform, accion){
        let campos=document.forms[idform].elements;
        let evento;
        for(let i=0; i<campos.length; i++){
            if((document.getElementById(campos[i].id).tagName == 'INPUT')&&(document.getElementById(campos[i].id).tagName != 'file')){
                evento='onblur';
            }else{
                evento='onchange';
            }
            if (document.getElementById(campos[i].id).type == 'submit'){}
			else{
				document.getElementById(campos[i].id).setAttribute (evento,'entidad.'+accion+'_'+campos[i].id+'_validation'+'();');
			}	
        }
    }

    crearTablaDatos(datos, mostrarespecial){
        document.getElementById('IU_manage_table').innerHTML='';
		var misdatos = datos;
		//recorrer todas las filas de datos y cada atributo para si tiene una funcion de transformación de valor modificarlo en el momento
		if (mostrarespecial > 0){
			for (var i=0; i<misdatos.length; i++){
				for (var clave in misdatos[i]){
					if (clave in mostrarespecial){
						//misdatos[i][clave] = this.cambiarmostrarespecial(clave, misdatos[i][clave]);
					}
				}
			}
		}
		// proceso los datos de la tabla para incluir en cada fila los tres botones conectados a createForm_ACCION()
		for (var i=0; i<misdatos.length; i++){
			var linedit = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(`+JSON.stringify(misdatos[i])+`);'>`;
			var lindelete = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(`+JSON.stringify(misdatos[i])+`);'>`;
			var linshowcurrent = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(`+JSON.stringify(misdatos[i])+`);'>`;
			misdatos[i]['EDIT'] = linedit;
			misdatos[i]['DELETE'] = lindelete;
			misdatos[i]['SHOWCURRENT'] = linshowcurrent;
		}
		//muestro datos en tabla
		this.dom.showData('IU_manage_table', misdatos);
		this.mostrarocultarcolumnas();
		this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
	}

	/**
	 * Redibuja el select en funcion del contenido de columnasamostrar
	 * 
	 * @param {*} columnasamostrar 
	 * @param {*} atributos 
	 */
	crearSeleccionablecolumnas(columnasamostrar,atributos){
		document.getElementById("seleccioncolumnas").innerHTML="";
		for (let atributo of atributos){
			var optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			var textofuncion = "entidad.modificarcolumnasamostrar('"+atributo+"');";
			optionselect.setAttribute("onclick",textofuncion);
			if (columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		//setLang();
	}

// candidatas abstract

	/**
	 * muestra o no las columnas de la tabla segun indique columnasamostrar
	 */
	mostrarocultarcolumnas(){
		var estadodisplay = '';
		// recorro todos los atributos de la tabla
		for (let columna of this.atributos){
			// si el atributo esta en columnas a mostrar lo dejo como esta
			if (this.columnasamostrar.includes(columna)){
				estadodisplay = '';
			}
			// si el atributo no esta en columnas a mostrar lo oculto
			else{
				estadodisplay = 'none';
			}
			//document.querySelector("th[class='tabla-th-"+columna+"']").style.display = estadodisplay;
			let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
			for (let i=0;i<arraytds.length;i++){
				arraytds[i].style.display = estadodisplay;
			}
		}
	}

	//Modifica el array de columnas a mostrar al hacer click sobre el atributo en el select poniendolo como oculto o como visible
	modificarcolumnasamostrar(atributo){

		if (this.columnasamostrar.includes(atributo)){
			// borrar ese atributo
			this.columnasamostrar = this.columnasamostrar.filter(columna => columna != atributo);
		}
		else{
			// añadir
			this.columnasamostrar.push(atributo);
		}
		
		this.mostrarocultarcolumnas();
		this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
	}

    //metodos q hacen peticiones al back
	async SEARCH(){
        await this.externalFunctions.peticionBackGeneral('form_iu', this.nombreentidad, 'SEARCH')
        .then((respuesta) => {
            //limpiar el formulario
			document.getElementById('IU_form').innerHTML = this.manual_form_creation();
            this.dom.hide_element("Div_IU_form");
            if (respuesta['code'] == 'RECORDSET_DATOS'){
				this.datos = respuesta['resource'];
				this.atributos = Object.keys(this.datos[0]);
				//crear la tabla de datos de la entidad del back
            	this.crearTablaDatos(this.datos, this.mostrarespecial);
				//rellenar el select de columnas a mostrar
				//this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
				//this.mostrarocultarcolumnas();
            }
            else{
				document.getElementById("IU_manage_table").style.display = 'block';
				document.getElementById('IU_manage_table').innerHTML = 'No se han encontrado elementos que coincidan con la búsqueda';
                document.getElementById('IU_manage_table').className = 'RECORDSET_VACIO';
            }
			//setLang();
        });
    }

    async ADD(){
        await this.externalFunctions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
        .then((respuesta) => {
            if(respuesta['ok']){
                //limipiar el formulario
                document.getElementById('IU_form').innerHTML=this.manual_form_creation();
                this.dom.hide_element("Div_IU_form");
                this.SEARCH();
            }else{
                //mostrar error de accion
                this.dom.abrirModalError(respuesta['code']);
            }
        });
    }

    async EDIT(){
        await this.externalFunctions.peticionBackGeneral('form_iu', this.nombreentidad, 'EDIT')
        .then((respuesta) => {
            if(respuesta['ok']){
                //limipiar el formulario
                document.getElementById('IU_form').innerHTML=this.manual_form_creation();
                this.dom.hide_element("Div_IU_form");
                this.SEARCH();
            }else{
                //mostrar error de accion
                this.dom.abrirModalError(respuesta['code']);
            }
        });
    }

    async DELETE(){
        await this.externalFunctions.peticionBackGeneral('form_iu', this.nombreentidad, 'DELETE')
        .then((respuesta) => {
            if(respuesta['ok']){
                //limpiar el formulario
                document.getElementById('IU_form').innerHTML=this.manual_form_creation();
                this.dom.hide_element("Div_IU_form");
                this.SEARCH();
            }else{
                //mostrar error de accion
                this.dom.abrirModalError(respuesta['code']);
            }
        });
    }
}
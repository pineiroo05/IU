class persona extends Validations{

	constructor(){
		super();
		this.dom = new dom();
	}	

	/*
		fields validations for ADD
	*/

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	ADD_dni_validation(){
		if (!(this.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_KO');
			return "dni_min_size_KO";
		}
		if (!(this.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_KO');
			return "dni_max_size_KO";
		}
		if (!(this.format('dni', '[0-9]{8}[A-Z]{1}'))){
			this.dom.mostrar_error_campo('dni','dni_format_KO');
			return "dni_format_KO";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

	/** 
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	ADD_nombre_persona_validation(){
		if (!(this.min_size('nombre_persona',4))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_min_size_KO');
			return "nombre_persona_min_size_KO";
		}
		if (!(this.max_size('nombre_persona',8))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			return "nombre_persona_max_size_KO";
		}
		// allowed format aA to zZ letter
		if (!(this.format('nombre_persona', '^[a-zA-Z]'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
			return "nombre_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	//Hay q meter comprobaciones para direccion y foto?
	ADD_apellidos_persona_validation(){
		if(!(this.min_size('apellidos_persona', 4))){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_KO');
			return "apellidos_persona_min_size_KO";
		}
		if(!(this.max_size('apellidos_persona', 20))){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			return "apellidos_persona_max_size_KO";
		}
		if(!(this.format('apellidos_persona', '^[a-zA-Z-]+ [a-zA-Z-]+$'))){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			return "apellidos_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	ADD_fechaNacimiento_persona_validation(){
		if(!(this.min_size('fechaNacimiento_persona', 6))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_min_size_KO');
			return "fechaNacimiento_persona_min_size_KO";
		}
		if(!(this.max_size('fechaNacimiento_persona', 10))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_KO');
			return "fechaNacimiento_persona_max_size_KO";
		}
		//Habria que revisar esta expresion
		if(!(this.format('fechaNacimiento_persona', '^[0-9]{1, 2}\/[0-9]{1, 2}\/[0-9]{2, 4}$'))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return "fechaNacimiento_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	ADD_telefono_persona_validation(){
		if(!(this.min_size('telefono_persona', 9))){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_KO');
			return "telefono_persona_min_size_KO";
		}
		if(!(this.max_size('telefono_persona', 9))){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_KO');
			return "telefono_persona_max_size_KO";
		}
		if(!(this.format('telefono_persona', '^[0-9]{9}'))){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_KO');
			return "telefono_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	ADD_email_persona_validation(){
		if(!(this.min_size('email_persona', 5))){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_min_size_KO');
			return "email_persona_min_size_KO";
		}
		if(!(this.max_size('email_persona', 100))){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			return "email_persona_max_size_KO";
		}
		if(!(this.format('email_persona', ))){
			this.dom.mostrar_error_campo('email_persona', '^[a-zA-Z0-9._-]+@[a-z.-]+\.[a-z]{2, 3}');
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}
	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/

	ADD_submit_persona(){
		let result = ((this.ADD_dni_validation()) & (this.ADD_nombre_persona_validation()))
		result = Boolean(result);
		return result;	
	}
}

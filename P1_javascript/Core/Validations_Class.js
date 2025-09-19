class Validations{

	constructor(){
		
	}
	
	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length<minsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length>maxsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	/*
	@param {string} id of html element
	@param {string} regular expression to testing id html element value
	@return {bool} result of regular expression testing  
	*/
	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

}
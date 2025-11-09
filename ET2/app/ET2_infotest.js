let alumnograduacion_def_tests=Array(
    //Login
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 1, 'tamaño minimo OK', 'ADD', 'alumnograduacion_login_min_size_KO', 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 2, 'tamaño maximo OK', 'ADD', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 3, 'formato OK', 'ADD', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_login', 'input', 5, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_login_min_size_KO', 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 6, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 7, 'formato OK', 'EDIT', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_login', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 10, 'formato OK', 'SEARCH', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Password
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 12, 'tamaño minimo OK', 'ADD', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, debería tener entre 8 y 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 13, 'tamaño maximo OK', 'ADD', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 14, 'formato OK', 'ADD', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 'input', 16, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, deberia tener entre 8 y 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 17, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 18, 'formato OK', 'EDIT', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, debe tener entre 8 y 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 21, 'formato OK', 'SEARCH', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requeridp, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Nombre
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 23, 'tamaño minimo OK', 'ADD', 'alumnograduacion_nombre_min_size_KO', 'El nombre es demasiado corto, debe tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 24, 'tamaño maximo OK', 'ADD', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, debe tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 25, 'formato OK', 'ADD', 'alumnograduacion_nombre_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 26, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 27, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_nombre_min_size_KO', 'El nombre es demasiado corto, deberia tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 28, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, deberia tener entre 2 y 25 catacteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 29, 'formato OK', 'EDIT', 'alumnograduacion_nombre_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 30, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 31, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, deberia tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 32, 'formato OK', 'SEARCH', 'alumnograduacion_nombre_formato_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 33, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 34, 'tamaño minimo OK', 'ADD', 'alumnograduacion_apellidos_min_size_KO', 'Los apellidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 35, 'tamaño maximo OK', 'ADD', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 36, 'formato OK', 'ADD', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 37, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 38, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_apellidos_min_size_KO', 'Los apellidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 39, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 40, 'formato OK', 'EDIT', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 42, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 43, 'formato OK', 'SEARCH', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 44, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Titulacion
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 45, 'contenido OK', 'ADD', 'alumnograduacion_titulacion_vacio_KO', 'Error, la titulacion no puede quedar vacia'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 46, 'valor OK', 'ADD', 'alumnograduacion_titulacion_valor_KO', 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 47, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 48, 'contenido OK', 'EDIT', 'alumnograduacion_titulacion_vacio_KO', 'Error, la titulacion no puede quedar vacia'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 49, 'valor OK', 'EDIT', 'alumnograduacion_titulacion_valor_KO', 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'select', 50, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 'input', 51, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_titulacion_min_size_KO', 'Error, valor demasiado grande. No se pueden exceder los 4 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'input', 52, 'formato OK', 'SEARCH', 'alumnograduacion_titulacion_format_KO', 'Formato incorrecto, solo se pueden meter caracteres alfabeticos en mayusculas'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'input', 53, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //Dni
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 54, 'tamaño minimo OK', 'ADD', 'alumnograduacion_dni_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 55, 'tamaño maximo OK', 'ADD', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 56, 'formato OK', 'ADD', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 57, 'formato nif OK', 'ADD', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 58, 'formato nie OK', 'ADD', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 59, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 60, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_dni_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 61, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 63, 'formato OK', 'EDIT', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 64, 'formato nif OK', 'EDIT', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 65, 'formato nie OK', 'EDIT', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 66, 'todo correcto', 'EDIT', true, 'Valor correcto'),
    
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 67, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 68, 'formato OK', 'SEARCH', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 69, 'formato nif OK', 'SEARCH', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 70, 'formato nie OK', 'SEARCH', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 71, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Telefono
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 72, 'tamaño minimo OK', 'ADD', 'alumnograduacion_telefono_min_size_KO', 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 73, 'tamaño maximo OK', 'ADD', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 74, 'formato OK', 'ADD', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 75, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 76, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_telefono_min_size_KO', 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 77, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 78, 'formato OK', 'EDIT', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 79, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 80, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 81, 'formato OK', 'SEARCH', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 82, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Direccion
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 83, 'tamaño minimo OK', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'Error, la direccion es demasiado corta.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 84, 'tamaño maximo OK', 'ADD', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 85, 'formato OK', 'ADD', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 86, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 87, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_direccion_min_size_KO', 'Error, la direccion es demasiado corta.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 88, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 89, 'formato OK', 'EDIT', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 90, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 91, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 92, 'formato OK', 'SEARCH', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 93, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 94, 'tamaño minimo OK', 'ADD', 'alumnograduacion_email_min_size_KO', 'Error, el email es demasiado corto.'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 95, 'tamaño maximo OK', 'ADD', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 96, 'formato OK', 'ADD', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 97, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_email', 'input', 98, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_email_min_size_KO', 'Error, el email es demasiado corto.'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 99, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 100, 'formato OK', 'EDIT', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 101, 'todo correcto', 'EDIT', true, 'Valor correcto'),  
    
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 102, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 103, 'formato OK', 'SEARCH', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 104, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Fotoacto
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'input', 105, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'input', 106, 'formato OK', 'SEARCH', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'input', 107, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Nuevo_fotoacto
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 108, 'existe el fichero', 'ADD', 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO', 'Error, si vas a subir una foto debe haber un fichero subido.'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 109, 'tamaño maximo OK', 'ADD', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 110, 'tipo fichero OK', 'ADD', 'nuevo_alumnograduacion_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 111, 'nombre OK', 'ADD', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO', 'El nombre no es valido, solo se caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 112, 'tamaño minimo nombre OK', 'ADD', 'nuevo_alumnograduacion_fotoacto_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 113, 'tamaño maximo nombre OK', 'ADD', 'nuevo_alumnograduacion_fotoacto_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 114, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 115, 'tamaño maximo OK', 'EDIT', 'nuevo_alumnograduacion_fotoacto_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 116, 'tipo fichero OK', 'EDIT', 'nuevo_alumnograduacion_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 117, 'nombre OK', 'EDIT', 'nuevo_alumnograduacion_fotoacto_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 119, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_alumnograduacion_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 120, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_alumnograduacion_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'inputfile', 121, 'todo correcto', 'EDIT', true, 'Fichero correcto'),
);

let alumnograduacion_tests_fields=Array(
    //login
    Array('alumnograduacion', 'alumnograduacion_login', 1, 1, 'ADD', [{alumnograduacion_login:'aaa'}], 'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 2, 'ADD', [{alumnograduacion_login:'a'.repeat(16)}], 'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 3, 'ADD', [{alumnograduacion_login:'áaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 4, 'ADD', [{alumnograduacion_login:'aaáa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 5, 'ADD', [{alumnograduacion_login:'aaaá'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 6, 'ADD', [{alumnograduacion_login:'ñaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 7, 'ADD', [{alumnograduacion_login:'aaña'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 8, 'ADD', [{alumnograduacion_login:'aaañ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 9, 'ADD', [{alumnograduacion_login:'enriquepl'}], true),

    Array('alumnograduacion', 'alumnograduacion_login', 5, 10, 'EDIT', [{alumnograduacion_login:'aaa'}], 'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 6, 11, 'EDIT', [{alumnograduacion_login:'a'.repeat(16)}], 'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 12, 'EDIT', [{alumnograduacion_login:'áaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 13, 'EDIT', [{alumnograduacion_login:'aaáa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 14, 'EDIT', [{alumnograduacion_login:'aaaá'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 15, 'EDIT', [{alumnograduacion_login:'ñaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 16, 'EDIT', [{alumnograduacion_login:'aaña'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 17, 'EDIT', [{alumnograduacion_login:'aaañ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 8, 18, 'EDIT', [{alumnograduacion_login:'enriquepl'}], true),

    Array('alumnograduacion', 'alumnograduacion_login', 9, 19, 'SEARCH', [{alumnograduacion_login:'a'.repeat(16)}], 'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 20, 'SEARCH', [{alumnograduacion_login:'á'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 21, 'SEARCH', [{alumnograduacion_login:'ñ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 22, 'SEARCH', [{alumnograduacion_login:'áaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 23, 'SEARCH', [{alumnograduacion_login:'aaáa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 24, 'SEARCH', [{alumnograduacion_login:'aaaá'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 25, 'SEARCH', [{alumnograduacion_login:'ñaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 26, 'SEARCH', [{alumnograduacion_login:'aaña'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 27, 'SEARCH', [{alumnograduacion_login:'aaañ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 28, 'SEARCH', [{alumnograduacion_login:''}], true),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 29, 'SEARCH', [{alumnograduacion_login:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 30, 'SEARCH', [{alumnograduacion_login:'enriquepl'}], true),

    //password
    Array('alumnograduacion', 'alumnograduacion_password', 12, 31, 'ADD', [{alumnograduacion_password:'aaaaaa'}], 'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 13, 32, 'ADD', [{alumnograduacion_password:'a'.repeat(65)}], 'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 14, 33, 'ADD', [{alumnograduacion_password:'aaa aaaañ'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 34, 'ADD', [{alumnograduacion_password:'ñaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 35, 'ADD', [{alumnograduacion_password:'aaa ñaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 36, 'ADD', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 37, 'ADD', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 38, 'ADD', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 39, 'ADD', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 40, 'ADD', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 14, 41, 'ADD', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 15, 42, 'ADD', [{alumnograduacion_password:'epl abcdef'}], true),

    Array('alumnograduacion', 'alumnograduacion_password', 16, 43, 'EDIT', [{alumnograduacion_password:'aaaaaa'}], 'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 17, 44, 'EDIT', [{alumnograduacion_password:'a'.repeat(65)}], 'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 18, 44, 'EDIT', [{alumnograduacion_password:'aaa aaaañ'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 45, 'EDIT', [{alumnograduacion_password:'ñaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 46, 'EDIT', [{alumnograduacion_password:'aaa ñaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 47, 'EDIT', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 48, 'EDIT', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 49, 'EDIT', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 50, 'EDIT', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 51, 'EDIT', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 18, 52, 'EDIT', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 19, 53, 'EDIT', [{alumnograduacion_password:'epl abcdef'}], true),

    Array('alumnograduacion', 'alumnograduacion_password', 20, 54, 'SEARCH', [{alumnograduacion_password:'a'.repeat(65)}], 'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 21, 55, 'SEARCH', [{alumnograduacion_password:'á'}], 'alumnograduacion_password_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 21, 56, 'SEARCH', [{alumnograduacion_password:'ñ'}], 'alumnograduacion_password_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 21, 57, 'SEARCH', [{alumnograduacion_password:'aaa aaaañ'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 58, 'SEARCH', [{alumnograduacion_password:'ñaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 59, 'SEARCH', [{alumnograduacion_password:'aaa ñaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 61, 'SEARCH', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 62, 'SEARCH', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 63, 'SEARCH', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 64, 'SEARCH', [{alumnograduacion_password:'aaa aaaaá'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 65, 'SEARCH', [{alumnograduacion_password:'aaa áaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 21, 66, 'SEARCH', [{alumnograduacion_password:'áaa aaaaa'}], 'alumnograduacion_password_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_password', 22, 67, 'SEARCH', [{alumnograduacion_password:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_password', 22, 68, 'SEARCH', [{alumnograduacion_password:'epl a'}], true),
    Array('alumnograduacion', 'alumnograduacion_password', 22, 69, 'SEARCH', [{alumnograduacion_password:'epl abcdef'}], true),
    
    //nombre
    Array('alumnograduacion', 'alumnograduacion_nombre', 23, 70, 'ADD', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 24, 71, 'ADD', [{alumnograduacion_nombre:'a'.repeat(26)}], 'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 25, 72, 'ADD', [{alumnograduacion_nombre:'1aa'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 25, 73, 'ADD', [{alumnograduacion_nombre:'a1a'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 25, 74, 'ADD', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 26, 75, 'ADD', [{alumnograduacion_nombre:'José'}], true),

    Array('alumnograduacion', 'alumnograduacion_nombre', 27, 76, 'EDIT', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 28, 77, 'EDIT', [{alumnograduacion_nombre:'a'.repeat(26)}], 'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 78, 'EDIT', [{alumnograduacion_nombre:'1aa'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 79, 'EDIT', [{alumnograduacion_nombre:'a1a'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 80, 'EDIT', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 81, 'EDIT', [{alumnograduacion_nombre:'Enrique'}], true),

    Array('alumnograduacion', 'alumnograduacion_nombre', 31, 82, 'SEARCH', [{alumnograduacion_nombre:'a'.repeat(26)}], 'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 83, 'SEARCH', [{alumnograduacion_nombre:'1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 84, 'SEARCH', [{alumnograduacion_nombre:'1aa'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 85, 'SEARCH', [{alumnograduacion_nombre:'a1a'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 86, 'SEARCH', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 87, 'SEARCH', [{alumnograduacion_nombre:'E'}], true),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 88, 'SEARCH', [{alumnograduacion_nombre:'Enrique'}], true),

    //apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 34, 89, 'ADD', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 35, 90, 'ADD', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 91, 'ADD', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 92, 'ADD', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 93, 'ADD', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 94, 'ADD', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 38, 95, 'EDIT', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 39, 96, 'EDIT', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 97, 'EDIT', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 98, 'EDIT', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 99, 'EDIT', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 100, 'EDIT', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 42, 101, 'SEARCH', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 102, 'SEARCH', [{alumnograduacion_apellidos:'1'}], 'alumnograduacion_apellidos_format_KO'),     
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 103, 'SEARCH', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 104, 'SEARCH', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 105, 'SEARCH', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 106, 'SEARCH', [{alumnograduacion_apellidos:'P'}], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 107, 'SEARCH', [{alumnograduacion_apellidos:'Piñeiro L'}], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 108, 'SEARCH', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    //titulacion
    Array('alumnograduacion', 'alumnograduacion_titulacion', 45, 109, 'ADD', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_vacio_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 110, 'ADD', [{alumnograduacion_titulacion:'GREIx'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 111, 'ADD', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 112, 'ADD', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 113, 'ADD', [{alumnograduacion_titulacion:'GREI'}], true),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 48, 114, 'EDIT', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_vacio_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 115, 'EDIT', [{alumnograduacion_titulacion:'GREIx'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 116, 'EDIT', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 117, 'EDIT', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 118, 'EDIT', [{alumnograduacion_titulacion:'GREI'}], true),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 119, 'SEARCH', [{alumnograduacion_titulacion:'a'.repeat(5)}], 'alumnograduacion_titulacion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 120, 'SEARCH', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 121, 'SEARCH', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_valor_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 122, 'SEARCH', [{alumnograduacion_titulacion:'G'}], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 123, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}], true),

    //dni
    Array('alumnograduacion', 'alumnograduacion_dni', 53, 124, 'ADD', [{alumnograduacion_dni:'a'.repeat(8)}], 'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 54, 125, 'ADD', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 126, 'ADD', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 127, 'ADD', [{alumnograduacion_dni:'12345678_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 128, 'ADD', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 129, 'ADD', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 130, 'ADD', [{alumnograduacion_dni:'123A45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 131, 'ADD', [{alumnograduacion_dni:'A123456A8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 132, 'ADD', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 133, 'ADD', [{alumnograduacion_dni:'45145215A'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 57, 134, 'ADD', [{alumnograduacion_dni:'Y6671688S'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 135, 'ADD', [{alumnograduacion_dni:'45145215X'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 136, 'ADD', [{alumnograduacion_dni:'Y6671688T'}], true),

    Array('alumnograduacion', 'alumnograduacion_dni', 59, 137, 'EDIT', [{alumnograduacion_dni:'a'.repeat(8)}], 'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 60, 138, 'EDIT', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 139, 'EDIT', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 140, 'EDIT', [{alumnograduacion_dni:'12345678_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 141, 'EDIT', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 142, 'EDIT', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 143, 'EDIT', [{alumnograduacion_dni:'123A45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 144, 'EDIT', [{alumnograduacion_dni:'A123456A8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 145, 'EDIT', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 146, 'EDIT', [{alumnograduacion_dni:'45145215A'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 147, 'EDIT', [{alumnograduacion_dni:'Y6671688S'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 148, 'EDIT', [{alumnograduacion_dni:'45145215X'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 149, 'EDIT', [{alumnograduacion_dni:'Y6671688T'}], true),

    Array('alumnograduacion', 'alumnograduacion_dni', 65, 134, 'SEARCH', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 135, 'SEARCH', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 136, 'SEARCH', [{alumnograduacion_dni:'1234568_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 137, 'SEARCH', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 138, 'SEARCH', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 139, 'SEARCH', [{alumnograduacion_dni:'123A45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 140, 'SEARCH', [{alumnograduacion_dni:'A123456A8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 141, 'SEARCH', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 67, 142, 'SEARCH', [{alumnograduacion_dni:'45145215A'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 143, 'SEARCH', [{alumnograduacion_dni:'Y6671688S'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 144, 'SEARCH', [{alumnograduacion_dni:'4'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 145, 'SEARCH', [{alumnograduacion_dni:'X'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 146, 'SEARCH', [{alumnograduacion_dni:'45145215'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 147, 'SEARCH', [{alumnograduacion_dni:'45145215X'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 148, 'SEARCH', [{alumnograduacion_dni:'Y6671688T'}], true),

    //telefono
    Array('alumnograduacion', 'alumnograduacion_telefono', 70, 149, 'ADD', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 71, 150, 'ADD', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 151, 'ADD', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 152, 'ADD', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 153, 'ADD', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 73, 154, 'ADD', [{alumnograduacion_telefono:'123456789'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 155, 'EDIT', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 156, 'EDIT', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 157, 'EDIT', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 158, 'EDIT', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 159, 'EDIT', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 77, 160, 'EDIT', [{alumnograduacion_telefono:'123456789'}], true),

    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 161, 'SEARCH', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 162, 'SEARCH', [{alumnograduacion_telefono:'a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 163, 'SEARCH', [{alumnograduacion_telefono:'a1'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 164, 'SEARCH', [{alumnograduacion_telefono:'1a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 165, 'SEARCH', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 166, 'SEARCH', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 80, 167, 'SEARCH', [{alumnograduacion_telefono:'1'}], true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 80, 168, 'SEARCH', [{alumnograduacion_telefono:'123456789'}], true),

    //direccion
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 169, 'ADD', [{alumnograduacion_direccion:'a'.repeat(4)}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 170, 'ADD', [{alumnograduacion_direccion:'a'.repeat(101)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 171, 'ADD', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 172, 'ADD', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 173, 'ADD', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 174, 'ADD', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 84, 175, 'ADD', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),
    
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 176, 'EDIT', [{alumnograduacion_direccion:'a'.repeat(4)}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 86, 177, 'EDIT', [{alumnograduacion_direccion:'a'.repeat(101)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 178, 'EDIT', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 179, 'EDIT', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 180, 'EDIT', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 181, 'EDIT', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 88, 182, 'EDIT', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),

    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 183, 'SEARCH', [{alumnograduacion_direccion:'a'.repeat(101)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 184, 'SEARCH', [{alumnograduacion_direccion:'_'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 185, 'SEARCH', [{alumnograduacion_direccion:'&'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 186, 'SEARCH', [{alumnograduacion_direccion:'$'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 187, 'SEARCH', [{alumnograduacion_direccion:'%'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 188, 'SEARCH', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 189, 'SEARCH', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 190, 'SEARCH', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 191, 'SEARCH', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 91, 192, 'SEARCH', [{alumnograduacion_direccion:'abc'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 91, 193, 'SEARCH', [{alumnograduacion_direccion:'32001, Ourense'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 91, 194, 'SEARCH', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 92, 195, 'ADD', [{alumnograduacion_email:'abcd'}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 93, 196, 'ADD', [{alumnograduacion_email:'a'.repeat(41)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 197, 'ADD', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 198, 'ADD', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 199, 'ADD', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 95, 200, 'ADD', [{alumnograduacion_email:'enrique@gmail.com'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_email', 96, 201, 'EDIT', [{alumnograduacion_email:'abcd'}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 97, 202, 'EDIT', [{alumnograduacion_email:'a'.repeat(41)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 98, 203, 'EDIT', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 98, 204, 'EDIT', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 98, 205, 'EDIT', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 99, 206, 'EDIT', [{alumnograduacion_email:'enrique@gmail.com'}], true),

    Array('alumnograduacion', 'alumnograduacion_email', 100, 207, 'SEARCH', [{alumnograduacion_email:'a'.repeat(41)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 101, 208, 'SEARCH', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 101, 209, 'SEARCH', [{alumnograduacion_email:'enrique@gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 101, 210, 'SEARCH', [{alumnograduacion_email:'enrique/gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 102, 211, 'SEARCH', [{alumnograduacion_email:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 102, 212, 'SEARCH', [{alumnograduacion_email:'@gmail.com'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 102, 213, 'SEARCH', [{alumnograduacion_email:'enrique@gmail.com'}], true),

    //fotoacto
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 103, 214, 'SEARCH', [{alumnograduacion_fotoacto:'a'.repeat(41)}], 'alumnograduacion_fotoacto_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 215, 'SEARCH', [{alumnograduacion_fotoacto:'á'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 216, 'SEARCH', [{alumnograduacion_fotoacto:'ñ'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 217, 'SEARCH', [{alumnograduacion_fotoacto:'a ñ'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 218, 'SEARCH', [{alumnograduacion_fotoacto:'ñombre.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 219, 'SEARCH', [{alumnograduacion_fotoacto:'nómbre.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 220, 'SEARCH', [{alumnograduacion_fotoacto:'n ombre.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 221, 'SEARCH', [{alumnograduacion_fotoacto:'a'}], true),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 222, 'SEARCH', [{alumnograduacion_fotoacto:'nombre'}], true),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 223, 'SEARCH', [{alumnograduacion_fotoacto:'nombre.jpg'}], true),
);

let alumnograduacion_tests_files=Array(
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 106, 1, 'ADD', 'existe el fichero', [], 'nuevo_alumnograduacion_fotoacto_not_exist_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 107, 2, 'ADD', 'tamaño maximo OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:20000000}], 'nuevo_alumnograduacion_fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 108, 3, 'ADD', 'tipo fichero OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/png'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_type_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 109, 4, 'ADD', 'nombre OK', [{format_name_file:'ñombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 109, 5, 'ADD', 'nombre OK', [{format_name_file:'nómbre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 109, 6, 'ADD', 'nombre OK', [{format_name_file:'n ombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 7, 'ADD', 'tamaño minimo nombre OK', [{min_file_name_size:'aaaaaa'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_min_file_name_size_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 111, 8, 'ADD', 'tamaño maximo nombre OK', [{min_file_name_size:'a'.repeat(41)}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_max_file_name_size_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 112, 9, 'ADD', 'todo correcto', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], true),
    
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 113, 10, 'EDIT', 'tamaño maximo OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:20000000}], 'nuevo_alumnograduacion_fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 114, 11, 'EDIT', 'tipo fichero OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/png'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_type_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 115, 12, 'EDIT', 'nombre OK', [{format_name_file:'ñombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 115, 13, 'EDIT', 'nombre OK', [{format_name_file:'nómbre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 115, 14, 'EDIT', 'nombre OK', [{format_name_file:'n ombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 116, 15, 'EDIT', 'tamaño minimo nombre OK', [{min_file_name_size:'aaaaaa'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_min_file_name_size_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 16, 'EDIT', 'tamaño maximo nombre OK', [{min_file_name_size:'a'.repeat(41)}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'nuevo_alumnograduacion_fotoacto_max_file_name_size_KO'),    
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 118, 17, 'EDIT', 'todo correcto', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], true),
);

let articulo_def_tests=Array(
    //CodigoA
    Array('articulo', 'CodigoA', 'input', 1, 'tamaño minimo OK', 'ADD', 'CodigoA_min_size_KO', 'Error, el codigo es demasiado corto. Debe tener minimo 1 caracter'),
    Array('articulo', 'CodigoA', 'input', 2, 'tamaño maximo OK', 'ADD', 'CodigoA_max_size_KO', 'Error, el codigo es demasiado largo. Debe tener como maximo 11 caracteres'),
    Array('articulo', 'CodigoA', 'input', 3, 'formato OK', 'ADD', 'CodigoA_format_KO', 'Error, el codigo del articulo solo acepta caracteres numericos'),
    Array('articulo', 'CodigoA', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'CodigoA', 'input', 5, 'tamaño minimo OK', 'EDIT', 'CodigoA_min_size_KO', 'Error, el codigo es demasiado corto. Debe tener 11 caracteres'),
    Array('articulo', 'CodigoA', 'input', 6, 'tamaño maximo OK', 'EDIT', 'CodigoA_max_size_KO', 'Error, el codigo es demasiado largo. Debe tener 11 caracteres'),
    Array('articulo', 'CodigoA', 'input', 7, 'formato OK', 'EDIT', 'CodigoA_format_KO', 'Error, el codigo del articulo solo acepta caracteres numericos'),
    Array('articulo', 'CodigoA', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'CodigoA', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'CodigoA_max_size_KO', 'Error, el codigo es demasiado largo. Debe tener 11 caracteres'),
    Array('articulo', 'CodigoA', 'input', 10, 'formato OK', 'SEARCH', 'CodigoA_format_KO', 'Error, el codigo del articulo solo acepta caracteres numericos'),
    Array('articulo', 'CodigoA', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //AutoresA
    Array('articulo', 'AutoresA', 'input', 12, 'tamaño minimo OK', 'ADD', 'AutoresA_min_size_KO', 'Error, el nombre de los autores es demasiado corto. Deberia tener como minimo 5 caracteres'),
    Array('articulo', 'AutoresA', 'input', 13, 'tamaño maximo OK', 'ADD', 'AutoresA_max_size_KO', 'Error, el nombre de los autores es demasiado largo. Deberia tener como maximo 200 caracteres'),
    Array('articulo', 'AutoresA', 'input', 14, 'formato OK', 'ADD', 'CodigoA_format_KO', 'Error, el formato del nombre solo acepta caracteres alfabeticos con acentos, ñ y ç'),
    Array('articulo', 'AutoresA', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'AutoresA', 'input', 16, 'tamaño minimo OK', 'EDIT', 'AutoresA_min_size_KO', 'Error, el nombre de los autores es demasiado corto. Deberia tener como minimo 5 caracteres'),
    Array('articulo', 'AutoresA', 'input', 17, 'tamaño maximo OK', 'EDIT', 'AutoresA_max_size_KO', 'Error, el nombre de los autores es demasiado largo. Deberia tener como maximo 200 caracteres'),
    Array('articulo', 'AutoresA', 'input', 18, 'formato OK', 'EDIT', 'CodigoA_format_KO', 'Error, el formato del nombre solo acepta caracteres alfabeticos con acentos, ñ y ç'),
    Array('articulo', 'AutoresA', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'AutoresA', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'AutoresA_max_size_KO', 'Error, el nombre de los autores es demasiado largo. Deberia tener como maximo 5 caracteres'),
    Array('articulo', 'AutoresA', 'input', 21, 'formato OK', 'SEARCH', 'CodigoA_format_KO', 'Error, el formato del nombre solo acepta caracteres alfabeticos con acentos, ñ y ç'),
    Array('articulo', 'AutoresA', 'input', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //TituloA
    Array('articulo', 'TituloA', 'input', 23, 'tamaño minimo OK', 'ADD', 'TituloA_min_size_KO', 'Error, el titulo es demasiado corto. Deberia tener como minimo 10 caracteres'),
    Array('articulo', 'TituloA', 'input', 24, 'tamaño maximo OK', 'ADD', 'TituloA_max_size_KO', 'Error, el titulo es demasiado largo. Deberia tener como maximo 100 caracteres'),
    Array('articulo', 'TituloA', 'input', 25, 'formato OK', 'ADD', 'TituloA_format_KO', 'Error, el formato del titulo solo acepta caracteres alfabeticos con acentos, espacios y ñ'),
    Array('articulo', 'TituloA', 'input', 26, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'TituloA', 'input', 27, 'tamaño minimo OK', 'EDIT', 'TituloA_min_size_KO', 'Error, el titulo es demasiado corto. Deberia tener como minimo 10 caracteres'),
    Array('articulo', 'TituloA', 'input', 28, 'tamaño maximo OK', 'EDIT', 'TituloA_max_size_KO', 'Error, el titulo es demasiado largo. Deberia tener como maximo 100 caracteres'),
    Array('articulo', 'TituloA', 'input', 29, 'formato OK', 'EDIT', 'TituloA_format_KO', 'Error, el formato del titulo solo acepta caracteres alfabeticos con acentos, espacios y ñ'),
    Array('articulo', 'TituloA', 'input', 30, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'TituloA', 'input', 31, 'tamaño maximo OK', 'SEARCH', 'TituloA_max_size_KO', 'Error, el titulo es demasiado largo. Deberia tener como maximo 100 caracteres'),
    Array('articulo', 'TituloA', 'input', 32, 'formato OK', 'SEARCH', 'TituloA_format_KO', 'Error, el formato del titulo solo acepta caracteres alfabeticos con acentos, espacios y ñ'),
    Array('articulo', 'TituloA', 'input', 33, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //TituloR
    Array('articulo', 'TituloR', 'input', 34, 'tamaño minimo OK', 'ADD', 'TituloR_min_size_KO', 'Error, el titulo de la revista es demasiado corto. Debería tener como minimo 5 caracteres'),
    Array('articulo', 'TituloR', 'input', 35, 'tamaño maximo OK', 'ADD', 'TituloR_max_size_KO', 'Error, el titulo de la revista es demasiado largo. Debería tener como maximo 100 caracteres'),
    Array('articulo', 'TituloR', 'input', 36, 'formato OK', 'ADD', 'TituloR_format_KO', 'Error, el formato del titulo solo acepta cartacteres alfabeticos, con acentos, ñ y espacios incluidos'),
    Array('articulo', 'TituloR', 'input', 37, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'TituloR', 'input', 38, 'tamaño minimo OK', 'EDIT', 'TituloR_min_size_KO', 'Error, el titulo de la revista es demasiado corto. Debería tener como minimo 5 caracteres'),
    Array('articulo', 'TituloR', 'input', 39, 'tamaño maximo OK', 'EDIT', 'TituloR_max_size_KO', 'Error, el titulo de la revista es demasiado largo. Debería tener como maximo 100 caracteres'),
    Array('articulo', 'TituloR', 'input', 40, 'formato OK', 'EDIT', 'TituloR_format_KO', 'Error, el formato del titulo solo acepta cartacteres alfabeticos, con acentos, ñ y espacios incluidos'),
    Array('articulo', 'TituloR', 'input', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'TituloR', 'input', 42, 'tamaño maximo OK', 'SEARCH', 'TituloR_max_size_KO', 'Error, el titulo de la revista es demasiado largo. Debería tener como maximo 100 caracteres'),
    Array('articulo', 'TituloR', 'input', 43, 'formato OK', 'SEARCH', 'TituloR_format_KO', 'Error, el formato del titulo solo acepta cartacteres alfabeticos, con acentos, ñ y espacios incluidos'),
    Array('articulo', 'TituloR', 'input', 44, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //ISSN
    Array('articulo', 'ISSN', 'input', 45, 'tamaño minimo OK', 'ADD', 'ISSN_min_size_KO', 'Error, el issn no puede tener menos de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 46, 'tamaño maximo OK', 'ADD', 'ISSN_max_size_KO', 'Error, el issn no puede tener mas de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 47, 'formato OK', 'ADD', 'ISSN_format_KO', 'Error, el issn solo puede tener una cadena de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 48, 'valor OK', 'ADD', 'ISSN_valor_valido_KO', 'Error, el valor introducido es erroneo. El digito de control no se corresponde con los digitos.'),
    Array('articulo', 'ISSN', 'input', 49, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'ISSN', 'input', 50, 'tamaño minimo OK', 'EDIT', 'ISSN_min_size_KO', 'Error, el issn no puede tener menos de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 51, 'tamaño maximo OK', 'EDIT', 'ISSN_max_size_KO', 'Error, el issn no puede tener mas de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 52, 'formato OK', 'EDIT', 'ISSN_format_KO', 'Error, el issn solo puede tener una cadena de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 53, 'valor OK', 'EDIT', 'ISSN_valor_valido_KO', 'Error, el valor introducido es erroneo. El digito de control no se corresponde con los digitos.'),
    Array('articulo', 'ISSN', 'input', 54, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'ISSN', 'input', 55, 'tamaño maximo OK', 'SEARCH', 'ISSN_max_size_KO', 'Error, el issn no puede tener mas de 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 56, 'formato OK', 'SEARCH', 'ISSN_format_KO', 'Error, el issn solo puede tener una cadena de 9 caracteres numericos'),
    Array('articulo', 'ISSN', 'input', 57, 'valor OK', 'ADD', 'ISSN_valor_valido_KO', 'Error, el valor introducido es erroneo. El digito de control no se corresponde con los digitos.'),
    Array('articulo', 'ISSN', 'input', 58, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //VolumenR
    Array('articulo', 'VolumenR', 'input', 59, 'tamaño minimo OK', 'ADD', 'VolumenR_min_size_KO', 'Error, el volumen es demasiado pequeño. No puede ser inferior a 1'),
    Array('articulo', 'VolumenR', 'input', 60, 'tamaño maximo OK', 'ADD', 'VolumenR_max_size_KO', 'Error, el volumen es demasiado grande. No puede superar al 9999'),
    Array('articulo', 'VolumenR', 'input', 61, 'formato OK', 'ADD', 'VolumenR_format_KO', 'Error, el volumen solo acepta numericos y alfabeticos'),
    Array('articulo', 'VolumenR', 'input', 62, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'VolumenR', 'input', 63, 'tamaño minimo OK', 'EDIT', 'VolumenR_min_size_KO', 'Error, el volumen es demasiado pequeño. No puede ser inferior a 1'),
    Array('articulo', 'VolumenR', 'input', 64, 'tamaño maximo OK', 'EDIT', 'VolumenR_max_size_KO', 'Error, el volumen es demasiado grande. No puede superar al 9999'),
    Array('articulo', 'VolumenR', 'input', 65, 'formato OK', 'EDIT', 'VolumenR_format_KO', 'Error, el volumen solo acepta numericos y alfabeticos'),
    Array('articulo', 'VolumenR', 'input', 66, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'VolumenR', 'input', 67, 'tamaño maximo OK', 'SEARCH', 'VolumenR_max_size_KO', 'Error, el volumen es demasiado grande. No puede superar al 9999'),
    Array('articulo', 'VolumenR', 'input', 68, 'formato OK', 'SEARCH', 'VolumenR_format_KO', 'Error, el volumen solo acepta numericos y alfabeticos'),
    Array('articulo', 'VolumenR', 'input', 69, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //PagIniA
    Array('articulo', 'PagIniA', 'input', 70, 'tamaño minimo OK', 'ADD', 'PagIniA_min_size_KO', 'Error, el nº de pagina de inicio es demasiado pequeño.'),
    Array('articulo', 'PagIniA', 'input', 71, 'tamaño maximo OK', 'ADD', 'PagIniA_max_size_KO', 'Error, el nº de pagina de inicio es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagIniA', 'input', 72, 'rango OK', 'ADD', 'PagIniA_rango_KO', 'Error, la pagina tiene que estar dentro del rango 1 a 9999'),
    Array('articulo', 'PagIniA', 'input', 73, 'formato OK', 'ADD', 'PagIniA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagIniA', 'input', 74, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'PagIniA', 'input', 75, 'tamaño minimo OK', 'EDIT', 'PagIniA_min_size_KO', 'Error, el nº de pagina de inicio es demasiado pequeño.'),
    Array('articulo', 'PagIniA', 'input', 76, 'tamaño maximo OK', 'EDIT', 'PagIniA_max_size_KO', 'Error, el nº de pagina de inicio es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagIniA', 'input', 77, 'rango OK', 'EDIT', 'PagIniA_rango_KO', 'Error, la pagina tiene que estar dentro del rango 1 a 9999'),
    Array('articulo', 'PagIniA', 'input', 78, 'formato OK', 'EDIT', 'PagIniA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagIniA', 'input', 79, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'PagIniA', 'input', 80, 'tamaño maximo OK', 'SEARCH', 'PagIniA_max_size_KO', 'Error, el nº de pagina de inicio es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagIniA', 'input', 81, 'rango OK', 'SEARCH', 'PagIniA_rango_KO', 'Error, la pagina tiene que estar dentro del rango 1 a 9999'),    
    Array('articulo', 'PagIniA', 'input', 82, 'formato OK', 'SEARCH', 'PagIniA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagIniA', 'input', 83, 'todo correcto', 'SEARCH', true, 'Valor correcto'),    

    //PagFinA
    Array('articulo', 'PagFinA', 'input', 84, 'tamaño minimo OK', 'ADD', 'PagFinA_min_size_KO', 'Error, el nº de pagina final es demasiado pequeño.'),
    Array('articulo', 'PagFinA', 'input', 85, 'tamaño maximo OK', 'ADD', 'PagFinA_max_size_KO', 'Error, el nº de pagina final es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagFinA', 'input', 86, 'rango OK', 'ADD', 'PagFinA_rango_KO', 'Error, el numero de pagina debe estar entre la pagina inicial y 9999'),
    Array('articulo', 'PagFinA', 'input', 87, 'formato OK', 'ADD', 'PagFinA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagFinA', 'input', 88, 'final mayor/igual a inicial OK', 'ADD', 'PagFinA_mayor_igual_inicial_KO', 'Error, la pagina final del articulo no puede ser menor a la inicial'),
    Array('articulo', 'PagFinA', 'input', 89, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'PagFinA', 'input', 90, 'tamaño minimo OK', 'EDIT', 'PagFinA_min_size_KO', 'Error, el nº de pagina final es demasiado pequeño.'),
    Array('articulo', 'PagFinA', 'input', 91, 'tamaño maximo OK', 'EDIT', 'PagFinA_max_size_KO', 'Error, el nº de pagina final es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagFinA', 'input', 92, 'rango OK', 'EDIT', 'PagFinA_rango_KO', 'Error, el numero de pagina debe estar entre la inicial y 9999'),    
    Array('articulo', 'PagFinA', 'input', 93, 'formato OK', 'EDIT', 'PagFinA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagFinA', 'input', 94, 'final mayor/igual a inicial OK', 'EDIT', 'PagFinA_mayor_igual_inicial_KO', 'Error, la pagina final del articulo no puede ser menor a la inicial'),
    Array('articulo', 'PagFinA', 'input', 95, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'PagFinA', 'input', 96, 'tamaño maximo OK', 'SEARCH', 'PagFinA_max_size_KO', 'Error, el nº de pagina final es demasiado grande. No puede tener mas de 4 caracteres'),
    Array('articulo', 'PagFinA', 'input', 97, 'rango OK', 'SEARCH', 'PagFinA_rango_KO', 'Error, el numero de pagina debe estar entre la inicial y 9999'),        
    Array('articulo', 'PagFinA', 'input', 98, 'formato OK', 'SEARCH', 'PagFinA_format_KO', 'Error, la pagina solo se puede representar mediante numericos'),
    Array('articulo', 'PagFinA', 'input', 99, 'final mayor/igual a inicial OK', 'PagFinA_mayor_igual_inicial_KO', 'Error, la pagina final del articulo no puede ser menor a la inicial'),
    Array('articulo', 'PagFinA', 'input', 100, 'todo correcto', 'ADD', true, 'Valor correcto'),

    //FechaPublicacionR
    Array('articulo', 'FechaPublicacionR', 'input', 101, 'tamaño minimo OK', 'ADD', 'FechaPublicacionR_min_size_KO', 'Error, la fecha es demasiado corta. Debe tener 10 caracteres.'),
    Array('articulo', 'FechaPublicacionR', 'input', 102, 'tamaño maximo OK', 'ADD', 'FechaPublicacionR_max_size_KO', 'Error, la fecha es demasiado larga. Debe tener 10 caracteres.'),
    Array('articulo', 'FechaPublicacionR', 'input', 103, 'formato OK', 'ADD', 'FechaPublicacionR_format_KO', 'Error, la fecha debe contener numeros separados por barras (dd/mm/aaaa'),
    Array('articulo', 'FechaPublicacionR', 'input', 104, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'FechaPublicacionR', 'input', 105, 'tamaño minimo OK', 'EDIT', 'FechaPublicacionR_min_size_KO', 'Error, la fecha es demasiado corta. Debe tener 10 caracteres.'),
    Array('articulo', 'FechaPublicacionR', 'input', 106, 'tamaño maximo OK', 'EDIT', 'FechaPublicacionR_max_size_KO', 'Error, la fecha es demasiado larga. Debe tener 10 caracteres.'),
    Array('articulo', 'FechaPublicacionR', 'input', 107, 'formato OK', 'EDIT', 'FechaPublicacionR_format_KO', 'Error, la fecha debe contener numeros separados por barras (dd/mm/aaaa'),
    Array('articulo', 'FechaPublicacionR', 'input', 108, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'FechaPublicacionR', 'input', 109, 'tamaño maximo OK', 'SEARCH', 'FechaPublicacionR_max_size_KO', 'Error, la fecha es demasiado larga. Debe tener 10 caracteres.'),
    Array('articulo', 'FechaPublicacionR', 'input', 110, 'formato OK', 'SEARCH', 'FechaPublicacionR_format_KO', 'Error, la fecha debe contener numeros separados por barras (dd/mm/aaaa'),
    Array('articulo', 'FechaPublicacionR', 'input', 111, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //FicheropdfA
    Array('articulo', 'FicheropdfA', 'input', 112, 'tamaño maximo OK', 'SEARCH', 'FicheropdfA_max_size_KO', 'Error, el nombre del fichero no puede ser superior a 20 caracteres'),
    Array('articulo', 'FicheropdfA', 'input', 113, 'formato OK', 'SEARCH', 'FicheropdfA_format_KO', 'Error, el fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('articulo', 'FicheropdfA', 'input', 114, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //nuevo_FicheropdfA
    Array('articulo', 'FicheropdfA', 'inputfile', 115, 'tamaño minimo nombre OK', 'ADD', 'nuevo_FicheropdfA_min_file_name_size_KO', 'Error, el nombre del fichero es demasiado corto. No puede ser menor a 7 caracteres.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 116, 'tamaño maximo nombre OK', 'ADD', 'nuevo_FicheropdfA_max_file_name_size_KO', 'Error, el nombre del fichero es demasiado largo. No puede ser mayor a 7 caracteres.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 117, 'existe el fichero', 'ADD', 'nuevo_FicheropdfA_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 118, 'tamaño maximo OK', 'ADD', 'nuevo_FicheropdfA_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('articulo', 'FicheropdfA', 'inputfile', 119, 'tipo fichero OK', 'ADD', 'nuevo_FicheropdfA_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf'),
    Array('articulo', 'FicheropdfA', 'inputfile', 119, 'nombre OK', 'ADD', 'nuevo_FicheropdfA_fotoacto_format_name_file_KO', 'El formato no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 120, 'todo correcto', 'ADD', true, 'Fichero correcto'),

    Array('articulo', 'FicheropdfA', 'inputfile', 121, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_FicheropdfA_min_file_name_size_KO', 'Error, el nombre del fichero es demasiado corto. No puede ser menor a 7 caracteres.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 122, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_FicheropdfA_max_file_name_size_KO', 'Error, el nombre del fichero es demasiado largo. No puede ser mayor a 7 caracteres.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 123, 'existe el fichero', 'EDIT', 'nuevo_FicheropdfA_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 124, 'tamaño maximo OK', 'EDIT', 'nuevo_FicheropdfA_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('articulo', 'FicheropdfA', 'inputfile', 125, 'tipo fichero OK', 'EDIT', 'nuevo_FicheropdfA_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf'),
    Array('articulo', 'FicheropdfA', 'inputfile', 126, 'nombre OK', 'EDIT', 'nuevo_FicheropdfA_fotoacto_format_name_file_KO', 'El formato no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('articulo', 'FicheropdfA', 'inputfile', 127, 'todo correcto', 'EDIT', true, 'Fichero correcto'),
    
    //EstadoA
    Array('articulo', 'EstadoA', 'select', 128, 'no vacio OK', 'ADD', 'EstadoA_vacio_KO', 'Error, el campo no puede quedar vacio'),
    Array('articulo', 'EstadoA', 'select', 129, 'valor valido OK', 'ADD', 'EstadoA_valor_KO', 'Error, solo hay 3 estados posibles: enviado, revision, publicado'),
    Array('articulo', 'EstadoA', 'select', 130, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('articulo', 'EstadoA', 'select', 131, 'no vacio OK', 'ADD', 'EstadoA_vacio_KO', 'Error, el campo no puede quedar vacio'),
    Array('articulo', 'EstadoA', 'select', 132, 'valor valido OK', 'EDIT', 'EstadoA_valor_KO', 'Error, solo hay 3 estados posibles: enviado, revision, publicado'),
    Array('articulo', 'EstadoA', 'select', 133, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('articulo', 'EstadoA', 'select', 134, 'valor valido OK', 'SEARCH', 'EstadoA_valor_KO', 'Error, solo hay 3 estados posibles: enviado, revision, publicado'),
    Array('articulo', 'EstadoA', 'select', 135, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
);

let articulo_tests_fields=Array(
    //CodigoA
    Array('articulo', 'CodigoA', 1, 1, 'ADD', [{CodigoA:''}], 'CodigoA_min_size_KO'),
    Array('articulo', 'CodigoA', 2, 2, 'ADD', [{CodigoA:'1'.repeat(12)}], 'CodigoA_max_size_KO'),
    Array('articulo', 'CodigoA', 3, 3, 'ADD', [{CodigoA:'a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 3, 4, 'ADD', [{CodigoA:'1a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 3, 5, 'ADD', [{CodigoA:'a1'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 4, 6, 'ADD', [{CodigoA:'1111'}], true),

    Array('articulo', 'CodigoA', 5, 7, 'EDIT', [{CodigoA:''}], 'CodigoA_min_size_KO'),
    Array('articulo', 'CodigoA', 6, 8, 'EDIT', [{CodigoA:'1'.repeat(12)}], 'CodigoA_max_size_KO'),
    Array('articulo', 'CodigoA', 7, 9, 'EDIT', [{CodigoA:'a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 7, 10, 'EDIT', [{CodigoA:'1a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 7, 11, 'EDIT', [{CodigoA:'a1'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 8, 12, 'EDIT', [{CodigoA:'1111'}], true),

    Array('articulo', 'CodigoA', 9, 13, 'SEARCH', [{CodigoA:'1'.repeat(12)}], 'CodigoA_max_size_KO'),
    Array('articulo', 'CodigoA', 10, 14, 'SEARCH', [{CodigoA:'a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 10, 15, 'SEARCH', [{CodigoA:'1a'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 10, 16, 'SEARCH', [{CodigoA:'a1'}], 'CodigoA_format_KO'),
    Array('articulo', 'CodigoA', 11, 17, 'SEARCH', [{CodigoA:''}], true),
    Array('articulo', 'CodigoA', 11, 18, 'SEARCH', [{CodigoA:'1111'}], true),

    //AutoresA
    Array('articulo', 'AutoresA', 12, 19, 'ADD', [{AutoresA:'aa'}], 'AutoresA_min_size_KO'),
    Array('articulo', 'AutoresA', 13, 20, 'ADD', [{AutoresA:'a'.repeat(201)}], 'AutoresA_max_size_KO'),
    Array('articulo', 'AutoresA', 14, 21, 'ADD', [{AutoresA:'abc-21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 14, 22, 'ADD', [{AutoresA:'abc_21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 14, 23, 'ADD', [{AutoresA:'abc(21)'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 14, 24, 'ADD', [{AutoresA:'212'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 15, 25, 'ADD', [{AutoresA:'Pepito Fulanito'}], true),

    Array('articulo', 'AutoresA', 16, 19, 'EDIT', [{AutoresA:'aa'}], 'AutoresA_min_size_KO'),
    Array('articulo', 'AutoresA', 17, 20, 'EDIT', [{AutoresA:'a'.repeat(201)}], 'AutoresA_max_size_KO'),
    Array('articulo', 'AutoresA', 18, 21, 'EDIT', [{AutoresA:'abc-21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 18, 22, 'EDIT', [{AutoresA:'abc_21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 18, 23, 'EDIT', [{AutoresA:'abc(21)'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 18, 24, 'EDIT', [{AutoresA:'212'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 19, 25, 'EDIT', [{AutoresA:'Pepito Fulanito'}], true),
    
    Array('articulo', 'AutoresA', 20, 20, 'SEARCH', [{AutoresA:'a'.repeat(201)}], 'AutoresA_max_size_KO'),
    Array('articulo', 'AutoresA', 21, 21, 'SEARCH', [{AutoresA:'-'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 22, 'SEARCH', [{AutoresA:'_'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 23, 'SEARCH', [{AutoresA:'()'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 24, 'SEARCH', [{AutoresA:'abc-21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 25, 'SEARCH', [{AutoresA:'abc_21'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 26, 'SEARCH', [{AutoresA:'abc(21)'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 21, 27, 'SEARCH', [{AutoresA:'212'}], 'AutoresA_format_KO'),
    Array('articulo', 'AutoresA', 22, 28, 'SEARCH', [{AutoresA:''}], true),
    Array('articulo', 'AutoresA', 22, 29, 'SEARCH', [{AutoresA:'Pep'}], true),
    Array('articulo', 'AutoresA', 22, 30, 'SEARCH', [{AutoresA:'Pepito Fulanito'}], true),

    //TituloA
    Array('articulo', 'TituloA', 23, 31, 'ADD', [{TituloA:'aaa'}], 'TituloA_min_size_KO'),
    Array('articulo', 'TituloA', 24, 32, 'ADD', [{TituloA:'a'.repeat(101)}], 'TituloA_max_size_KO'),
    Array('articulo', 'TituloA', 25, 33, 'ADD', [{TituloA:'ab-cd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 25, 34, 'ADD', [{TituloA:'ab_cd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 25, 35, 'ADD', [{TituloA:'ab çd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 26, 36, 'ADD', [{TituloA:'Titulo del articulo 2'}], true),

    Array('articulo', 'TituloA', 27, 37, 'EDIT', [{TituloA:'aaa'}], 'TituloA_min_size_KO'),
    Array('articulo', 'TituloA', 28, 38, 'EDIT', [{TituloA:'a'.repeat(101)}], 'TituloA_max_size_KO'),
    Array('articulo', 'TituloA', 29, 39, 'EDIT', [{TituloA:'ab-cd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 29, 40, 'EDIT', [{TituloA:'ab_cd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 29, 41, 'EDIT', [{TituloA:'ab çd'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 30, 42, 'EDIT', [{TituloA:'Titulo del articulo 2'}], true), 

    Array('articulo', 'TituloA', 31, 43, 'SEARCH', [{TituloA:'a'.repeat(101)}], 'TituloA_max_size_KO'),
    Array('articulo', 'TituloA', 32, 44, 'SEARCH', [{TituloA:'-'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 32, 45, 'SEARCH', [{TituloA:'_'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 32, 44, 'SEARCH', [{TituloA:'a-b'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 32, 45, 'SEARCH', [{TituloA:'a_b'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 32, 46, 'SEARCH', [{TituloA:'a ç'}], 'TituloA_format_KO'),
    Array('articulo', 'TituloA', 33, 47, 'SEARCH', [{TituloA:''}], true), 
    Array('articulo', 'TituloA', 33, 48, 'SEARCH', [{TituloA:'Tit'}], true), 
    Array('articulo', 'TituloA', 33, 49, 'SEARCH', [{TituloA:'Titulo del articulo 2'}], true), 

    //TituloR
    Array('articulo', 'TituloR', 34, 50, 'ADD', [{TituloR:'a'.repeat(4)}], 'TituloR_min_size_KO'),
    Array('articulo', 'TituloR', 35, 51, 'ADD', [{TituloR:'a'.repeat(101)}], 'TituloR_max_size_KO'),
    Array('articulo', 'TituloR', 36, 52, 'ADD', [{TituloR:'abc-cd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 36, 53, 'ADD', [{TituloR:'abc_cd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 36, 54, 'ADD', [{TituloR:'abc çd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 37, 55, 'ADD', [{TituloR:'Revista muy importante'}], true),

    Array('articulo', 'TituloR', 38, 56, 'EDIT', [{TituloR:'a'.repeat(4)}], 'TituloR_min_size_KO'),
    Array('articulo', 'TituloR', 39, 57, 'EDIT', [{TituloR:'a'.repeat(101)}], 'TituloR_max_size_KO'),
    Array('articulo', 'TituloR', 40, 59, 'EDIT', [{TituloR:'abc-cd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 40, 60, 'EDIT', [{TituloR:'abc_cd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 40, 61, 'EDIT', [{TituloR:'abc çd'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 41, 62, 'EDIT', [{TituloR:'Revista muy importante'}], true),

    Array('articulo', 'TituloR', 42, 63, 'SEARCH', [{TituloR:'a'.repeat(101)}], 'TituloR_max_size_KO'),
    Array('articulo', 'TituloR', 43, 64, 'SEARCH', [{TituloR:'-'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 43, 65, 'SEARCH', [{TituloR:'_'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 43, 66, 'SEARCH', [{TituloR:'a-b'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 43, 67, 'SEARCH', [{TituloR:'a_b'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 43, 68, 'SEARCH', [{TituloR:'a ç'}], 'TituloR_format_KO'),
    Array('articulo', 'TituloR', 44, 69, 'SEARCH', [{TituloR:''}], true), 
    Array('articulo', 'TituloR', 44, 70, 'SEARCH', [{TituloR:'Rev'}], true), 
    Array('articulo', 'TituloR', 44, 71, 'SEARCH', [{TituloR:'Revista muy importante'}], true), 

    //ISSN
    Array('articulo', 'ISSN', 45, 72, 'ADD', [{ISSN:'1'.repeat(8)}], 'ISSN_min_size_KO'),
    Array('articulo', 'ISSN', 46, 73, 'ADD', [{ISSN:'1'.repeat(10)}], 'ISSN_max_size_KO'),
    Array('articulo', 'ISSN', 47, 74, 'ADD', [{ISSN:'1111_1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 47, 75, 'ADD', [{ISSN:'1111$1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 47, 76, 'ADD', [{ISSN:'1111/1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 48, 77, 'ADD', [{ISSN:'0000-000X'}], 'ISSN_valor_valido_KO'),
    Array('articulo', 'ISSN', 49, 78, 'ADD', [{ISSN:'0000-0000'}], true),

    Array('articulo', 'ISSN', 50, 79, 'EDIT', [{ISSN:'1'.repeat(8)}], 'ISSN_min_size_KO'),
    Array('articulo', 'ISSN', 51, 80, 'EDIT', [{ISSN:'1'.repeat(10)}], 'ISSN_max_size_KO'),
    Array('articulo', 'ISSN', 52, 81, 'EDIT', [{ISSN:'1111_1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 52, 82, 'EDIT', [{ISSN:'1111$1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 52, 83, 'EDIT', [{ISSN:'1111/1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 53, 84, 'EDIT', [{ISSN:'0000-000X'}], 'ISSN_valor_valido_KO'),
    Array('articulo', 'ISSN', 54, 85, 'EDIT', [{ISSN:'0000-0000'}], true),   

    Array('articulo', 'ISSN', 55, 87, 'SEARCH', [{ISSN:'1'.repeat(10)}], 'ISSN_max_size_KO'),
    Array('articulo', 'ISSN', 56, 88, 'SEARCH', [{ISSN:'_'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 56, 89, 'SEARCH', [{ISSN:'$'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 56, 90, 'SEARCH', [{ISSN:'/'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 56, 91, 'SEARCH', [{ISSN:'1111_1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 56, 92, 'SEARCH', [{ISSN:'1111$1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 56, 93, 'SEARCH', [{ISSN:'1111/1111'}], 'ISSN_format_KO'),
    Array('articulo', 'ISSN', 57, 94, 'SEARCH', [{ISSN:'0000-000X'}], 'ISSN_valor_valido_KO'),
    Array('articulo', 'ISSN', 58, 95, 'SEARCH', [{ISSN:''}], true), 
    Array('articulo', 'ISSN', 58, 96, 'SEARCH', [{ISSN:'000'}], true), 
    Array('articulo', 'ISSN', 58, 97, 'SEARCH', [{ISSN:'0000-0000'}], true), 

    //VolumenR
    Array('articulo', 'VolumenR', 59, 98, 'ADD', [{VolumenR:''}], 'VolumenR_min_size_KO'),
    Array('articulo', 'VolumenR', 60, 99, 'ADD', [{VolumenR:'1'.repeat(5)}], 'VolumenR_max_size_KO'),
    Array('articulo', 'VolumenR', 61, 100, 'ADD', [{VolumenR:'111_'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 61, 101, 'ADD', [{VolumenR:'_111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 61, 102, 'ADD', [{VolumenR:'111-'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 61, 103, 'ADD', [{VolumenR:'-111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 62, 104, 'ADD', [{VolumenR:'123a'}], true),

    Array('articulo', 'VolumenR', 63, 105, 'EDIT', [{VolumenR:''}], 'VolumenR_min_size_KO'),
    Array('articulo', 'VolumenR', 64, 106, 'EDIT', [{VolumenR:'1'.repeat(5)}], 'VolumenR_max_size_KO'),
    Array('articulo', 'VolumenR', 65, 107, 'EDIT', [{VolumenR:'111_'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 65, 108, 'EDIT', [{VolumenR:'_111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 65, 109, 'EDIT', [{VolumenR:'111-'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 65, 110, 'EDIT', [{VolumenR:'-111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 66, 111, 'EDIT', [{VolumenR:'123a'}], true),

    Array('articulo', 'VolumenR', 67, 112, 'SEARCH', [{VolumenR:'1'.repeat(5)}], 'VolumenR_max_size_KO'),
    Array('articulo', 'VolumenR', 68, 113, 'SEARCH', [{VolumenR:'_'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 68, 114, 'SEARCH', [{VolumenR:'-'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 68, 115, 'SEARCH', [{VolumenR:'111_'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 68, 116, 'SEARCH', [{VolumenR:'_111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 68, 117, 'SEARCH', [{VolumenR:'111-'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 68, 118, 'SEARCH', [{VolumenR:'-111'}], 'VolumenR_format_KO'),
    Array('articulo', 'VolumenR', 69, 119, 'SEARCH', [{VolumenR:''}], true),
    Array('articulo', 'VolumenR', 69, 120, 'SEARCH', [{VolumenR:'1a'}], true),
    Array('articulo', 'VolumenR', 69, 121, 'SEARCH', [{VolumenR:'123a'}], true),

    //PagIniA
    Array('articulo', 'PagIniA', 70, 122, 'ADD', [{PagIniA:''}], 'PagIniA_min_size_KO'),
    Array('articulo', 'PagIniA', 71, 123, 'ADD', [{PagIniA:'1'.repeat(5)}], 'PagIniA_max_size_KO'),
    Array('articulo', 'PagIniA', 72, 124, 'ADD', [{PagIniA:'0'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 72, 125, 'ADD', [{PagIniA:'12345'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 73, 126, 'ADD', [{PagIniA:'111a'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 73, 127, 'ADD', [{PagIniA:'_111'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 73, 128, 'ADD', [{PagIniA:'1_11'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 73, 129, 'ADD', [{PagIniA:'11_1'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 74, 130, 'ADD', [{PagIniA:'33'}], true),

    Array('articulo', 'PagIniA', 75, 131, 'EDIT', [{PagIniA:''}], 'PagIniA_min_size_KO'),
    Array('articulo', 'PagIniA', 76, 132, 'EDIT', [{PagIniA:'1'.repeat(5)}], 'PagIniA_max_size_KO'),
    Array('articulo', 'PagIniA', 76, 133, 'EDIT', [{PagIniA:'0'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 78, 134, 'EDIT', [{PagIniA:'12345'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 78, 136, 'EDIT', [{PagIniA:'111a'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 78, 137, 'EDIT', [{PagIniA:'_111'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 78, 138, 'EDIT', [{PagIniA:'1_11'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 78, 139, 'EDIT', [{PagIniA:'11_1'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 79, 140, 'EDIT', [{PagIniA:'33'}], true),

    Array('articulo', 'PagIniA', 80, 141, 'SEARCH', [{PagIniA:'1'.repeat(5)}], 'PagIniA_max_size_KO'),
    Array('articulo', 'PagIniA', 81, 142, 'SEARCH', [{PagIniA:'0'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 81, 143, 'SEARCH', [{PagIniA:'12345'}], 'PagIniA_rango_KO'),
    Array('articulo', 'PagIniA', 82, 144, 'SEARCH', [{PagIniA:'a'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 145, 'SEARCH', [{PagIniA:'/'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 146, 'SEARCH', [{PagIniA:'_'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 147, 'SEARCH', [{PagIniA:'$'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 148, 'SEARCH', [{PagIniA:'111a'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 149, 'SEARCH', [{PagIniA:'_111'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 150, 'SEARCH', [{PagIniA:'1_11'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 82, 151, 'SEARCH', [{PagIniA:'11_1'}], 'PagIniA_format_KO'),
    Array('articulo', 'PagIniA', 83, 152, 'SEARCH', [{PagIniA:''}], true),
    Array('articulo', 'PagIniA', 83, 153, 'SEARCH', [{PagIniA:'33'}], true),

    //PagFinA
    Array('articulo', 'PagFinA', 84, 154, 'ADD', [{PagFinA:''}], 'PagFinA_min_size_KO'),
    Array('articulo', 'PagFinA', 85, 155, 'ADD', [{PagFinA:'1'.repeat(5)}], 'PagFinA_max_size_KO'),
    Array('articulo', 'PagFinA', 86, 156, 'ADD', [{PagFinA:'0'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 86, 157, 'ADD', [{PagFinA:'12345'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 87, 158, 'ADD', [{PagFinA:'111a'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 87, 159, 'ADD', [{PagFinA:'_111'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 87, 160, 'ADD', [{PagFinA:'1_11'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 87, 161, 'ADD', [{PagFinA:'11_1'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 88, 162, 'ADD', [{PagFinA:'33'}, {PagIniA:'35'}], 'PagFinA_mayor_igual_inicial_KO'),
    Array('articulo', 'PagFinA', 89, 163, 'ADD', [{PagFinA:'33'}, {PagIniA:'33'}], true),
    Array('articulo', 'PagFinA', 89, 164, 'ADD', [{PagFinA:'33'}, {PagIniA:'32'}], true),
    
    Array('articulo', 'PagFinA', 90, 165, 'EDIT', [{PagFinA:''}], 'PagFinA_min_size_KO'),
    Array('articulo', 'PagFinA', 91, 166, 'EDIT', [{PagFinA:'1'.repeat(5)}], 'PagFinA_max_size_KO'),
    Array('articulo', 'PagFinA', 92, 167, 'EDIT', [{PagFinA:'0'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 92, 168, 'EDIT', [{PagFinA:'12345'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 93, 169, 'EDIT', [{PagFinA:'111a'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 93, 170, 'EDIT', [{PagFinA:'_111'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 93, 171, 'EDIT', [{PagFinA:'1_11'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 93, 172, 'EDIT', [{PagFinA:'11_1'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 94, 173, 'EDIT', [{PagFinA:'33'}, {PagIniA:'35'}], 'PagFinA_mayor_igual_inicial_KO'),
    Array('articulo', 'PagFinA', 95, 174, 'EDIT', [{PagFinA:'33'}, {PagIniA:'33'}], true),
    Array('articulo', 'PagFinA', 95, 175, 'EDIT', [{PagFinA:'33'}, {PagIniA:'32'}], true),

    Array('articulo', 'PagFinA', 96, 176, 'SEARCH', [{PagFinA:'1'.repeat(5)}], 'PagFinA_max_size_KO'),
    Array('articulo', 'PagFinA', 97, 177, 'SEARCH', [{PagFinA:'0'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 97, 178, 'SEARCH', [{PagFinA:'12345'}], 'PagFinA_rango_KO'),
    Array('articulo', 'PagFinA', 98, 179, 'SEARCH', [{PagFinA:'a'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 180, 'SEARCH', [{PagFinA:'/'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 181, 'SEARCH', [{PagFinA:'_'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 182, 'SEARCH', [{PagFinA:'11_1'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 183, 'SEARCH', [{PagFinA:'111a'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 184, 'SEARCH', [{PagFinA:'_111'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 185, 'SEARCH', [{PagFinA:'1_11'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 98, 186, 'SEARCH', [{PagFinA:'11_1'}], 'PagFinA_format_KO'),
    Array('articulo', 'PagFinA', 99, 187, 'SEARCH', [{PagFinA:'33'}, {PagIniA:'35'}], 'PagFinA_mayor_igual_inicial_KO'),
    Array('articulo', 'PagFinA', 100, 188, 'SEARCH', [{PagFinA:''}, {PagIniA:''}], true),
    Array('articulo', 'PagFinA', 100, 189, 'SEARCH', [{PagFinA:'33'}, {PagIniA:''}], true),
    Array('articulo', 'PagFinA', 100, 190, 'SEARCH', [{PagFinA:'33'}, {PagIniA:'33'}], true),
    Array('articulo', 'PagFinA', 100, 191, 'SEARCH', [{PagFinA:'33'}, {PagIniA:'32'}], true),

    //FechaPublicacionR
    Array('articulo', 'FechaPublicacionR', 101, 192, 'ADD', [{FechaPublicacionR:'a'.repeat(8)}], 'FechaPublicacionR_min_size_KO'),
    Array('articulo', 'FechaPublicacionR', 102, 193, 'ADD', [{FechaPublicacionR:'a'.repeat(11)}], 'FechaPublicacionR_max_size_KO'),
    Array('articulo', 'FechaPublicacionR', 103, 194, 'ADD', [{FechaPublicacionR:'01_02_2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 103, 195, 'ADD', [{FechaPublicacionR:'01|02|2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 103, 196, 'ADD', [{FechaPublicacionR:'01/02/2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 103, 197, 'ADD', [{FechaPublicacionR:'1/2/25'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 103, 198, 'ADD', [{FechaPublicacionR:'01-02-2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 104, 199, 'ADD', [{FechaPublicacionR:'2025-02-01'}], true),

    Array('articulo', 'FechaPublicacionR', 105, 200, 'EDIT', [{FechaPublicacionR:'a'.repeat(8)}], 'FechaPublicacionR_min_size_KO'),
    Array('articulo', 'FechaPublicacionR', 106, 201, 'EDIT', [{FechaPublicacionR:'a'.repeat(11)}], 'FechaPublicacionR_max_size_KO'),
    Array('articulo', 'FechaPublicacionR', 107, 202, 'EDIT', [{FechaPublicacionR:'01_02_2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 107, 203, 'EDIT', [{FechaPublicacionR:'01|02|2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 107, 204, 'EDIT', [{FechaPublicacionR:'01/02/2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 107, 205, 'EDIT', [{FechaPublicacionR:'1/2/25'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 107, 206, 'EDIT', [{FechaPublicacionR:'01-02-2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 108, 207, 'EDIT', [{FechaPublicacionR:'2025-02-01'}], true),

    Array('articulo', 'FechaPublicacionR', 109, 208, 'SEARCH', [{FechaPublicacionR:'a'.repeat(11)}], 'FechaPublicacionR_max_size_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 209, 'SEARCH', [{FechaPublicacionR:'_'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 210, 'SEARCH', [{FechaPublicacionR:'|'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 211, 'SEARCH', [{FechaPublicacionR:'/'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 212, 'SEARCH', [{FechaPublicacionR:'01_02_2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 213, 'SEARCH', [{FechaPublicacionR:'01|02|2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 214, 'SEARCH', [{FechaPublicacionR:'01/02/2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 215, 'SEARCH', [{FechaPublicacionR:'1/2/25'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 110, 216, 'SEARCH', [{FechaPublicacionR:'01-02-2025'}], 'FechaPublicacionR_format_KO'),
    Array('articulo', 'FechaPublicacionR', 111, 217, 'SEARCH', [{FechaPublicacionR:''}], true),
    Array('articulo', 'FechaPublicacionR', 111, 218, 'SEARCH', [{FechaPublicacionR:'01'}], true),
    Array('articulo', 'FechaPublicacionR', 111, 219, 'SEARCH', [{FechaPublicacionR:'-01'}], true),
    Array('articulo', 'FechaPublicacionR', 111, 220, 'SEARCH', [{FechaPublicacionR:'02-01'}], true),
    Array('articulo', 'FechaPublicacionR', 111, 221, 'SEARCH', [{FechaPublicacionR:'2025-02-01'}], true),

    //FicheropdfA
    Array('articulo', 'FicheropdfA', 112, 222, 'SEARCH', [{FicheropdfA:'a'.repeat(21)}], 'FicheropdfA_max_size_KO'),
    Array('articulo', 'FicheropdfA', 113, 223, 'SEARCH', [{FicheropdfA:'á'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 113, 224, 'SEARCH', [{FicheropdfA:'ñ'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 113, 225, 'SEARCH', [{FicheropdfA:'a ñ'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 113, 226, 'SEARCH', [{FicheropdfA:'ñombre.pdf'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 113, 227, 'SEARCH', [{FicheropdfA:'nómbre.pdf'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 113, 228, 'SEARCH', [{FicheropdfA:'n ombre.pdf'}], 'FicheropdfA_format_KO'),
    Array('articulo', 'FicheropdfA', 114, 229, 'SEARCH', [{FicheropdfA:''}], true),
    Array('articulo', 'FicheropdfA', 114, 230, 'SEARCH', [{FicheropdfA:'a'}], true),
    Array('articulo', 'FicheropdfA', 114, 231, 'SEARCH', [{FicheropdfA:'nombre'}], true),
    Array('articulo', 'FicheropdfA', 114, 232, 'SEARCH', [{FicheropdfA:'nombre.pdf'}], true),

    //EstadoA
    Array('articulo', 'EstadoA', 128, 233, 'ADD', [{EstadoA:''}], 'EstadoA_vacio_KO'),
    Array('articulo', 'EstadoA', 129, 234, 'ADD', [{EstadoA:'HOLA RODEIRO!!!'}], 'Estado_valor_KO'),
    Array('articulo', 'EstadoA', 130, 235, 'ADD', [{EstadoA:'Enviado'}], true),

    Array('articulo', 'EstadoA', 131, 236, 'EDIT', [{EstadoA:''}], 'EstadoA_vacio_KO'),
    Array('articulo', 'EstadoA', 132, 237, 'EDIT', [{EstadoA:'HOLA RODEIRO!!!'}], 'Estado_valor_KO'),
    Array('articulo', 'EstadoA', 133, 238, 'EDIT', [{EstadoA:'Enviado'}], true),

    Array('articulo', 'EstadoA', 134, 239, 'SEARCH', [{EstadoA:'HOLA RODEIRO!!!'}], 'Estado_valor_KO'),
    Array('articulo', 'EstadoA', 135, 240, 'SEARCH', [{EstadoA:''}], true),
    Array('articulo', 'EstadoA', 135, 241, 'SEARCH', [{EstadoA:'Env'}], true),
    Array('articulo', 'EstadoA', 135, 242, 'SEARCH', [{EstadoA:'Enviado'}], true),
);

let articulo_tests_files=Array(

);

let ubicacion_def_tests=Array(
    //id_site
    Array('ubicacion', 'id_site', 'input', 1, 'tamaño minimo OK', 'ADD', 'id_site_min_size_KO', 'Error, el identificador del sitio es demasiado corto. Debe tener minimo 1 caracter'),
    Array('ubicacion', 'id_site', 'input', 2, 'tamaño maximo OK', 'ADD', 'id_site_max_size_KO', 'Error, el identificador del sitio es demasiado largo. No puede superar los 11 caracteres'),
    Array('ubicacion', 'id_site', 'input', 3, 'formato OK', 'ADD', 'id_site_format_KO', 'Error, el identificador solo acepta caracteres numericos'),
    Array('ubicacion', 'id_site', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('ubicacion', 'id_site', 'input', 5, 'tamaño minimo OK', 'EDIT', 'id_site_min_size_KO', 'Error, el identificador del sitio es demasiado corto. Debe tener mas de 3 caracteres'),
    Array('ubicacion', 'id_site', 'input', 6, 'tamaño maximo OK', 'EDIT', 'id_site_max_size_KO', 'Error, el identificador del sitio es demasiado largo. No puede superar los 11 caracteres'),
    Array('ubicacion', 'id_site', 'input', 7, 'formato OK', 'EDIT', 'id_site_format_KO', 'Error, el identificador solo acepta caracteres numericos'),
    Array('ubicacion', 'id_site', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('ubicacion', 'id_site', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'id_site_max_size_KO', 'Error, el identificador del sitio es demasiado largo. No puede superar los 11 caracteres'),
    Array('ubicacion', 'id_site', 'input', 10, 'formato OK', 'SEARCH', 'id_site_format_KO', 'Error, el identificador solo acepta caracteres numericos'),
    Array('ubicacion', 'id_site', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //site_latitud
    Array('ubicacion', 'site_latitud', 'input', 12, 'valor añadido OK', 'ADD', 'site_latitud_vacio_KO', 'Error, la latitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_latitud', 'input', 13, 'formato y rangos OK', 'ADD', 'site_latitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -90 y 90'),
    Array('ubicacion', 'site_latitud', 'input', 14, 'longitud decimales OK', 'ADD', 'site_latitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_latitud', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('ubicacion', 'site_latitud', 'input', 16, 'valor añadido OK', 'EDIT', 'site_latitud_vacio_KO', 'Error, la latitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_latitud', 'input', 17, 'formato y rangos OK', 'EDIT', 'site_latitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -90 y 90'),
    Array('ubicacion', 'site_latitud', 'input', 18, 'longitud decimales OK', 'EDIT', 'site_latitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_latitud', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('ubicacion', 'site_latitud', 'input', 20, 'formato y rangos OK', 'SEARCH', 'site_latitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -90 y 90'),
    Array('ubicacion', 'site_latitud', 'input', 21, 'longitud decimales OK', 'SEARCH', 'site_latitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_latitud', 'input', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //site_longitud
    Array('ubicacion', 'site_longitud', 'input', 23, 'valor añadido OK', 'ADD', 'site_longitud_vacio_KO', 'Error, la longitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_longitud', 'input', 24, 'formato y rangos OK', 'ADD', 'site_longitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -180 y 180'),
    Array('ubicacion', 'site_longitud', 'input', 25, 'longitud decimales OK', 'ADD', 'site_longitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_longitud', 'input', 26, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('ubicacion', 'site_longitud', 'input', 27, 'valor añadido OK', 'EDIT', 'site_longitud_vacio_KO', 'Error, la longitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_longitud', 'input', 28, 'formato y rangos OK', 'EDIT', 'site_longitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -180 y 180'),
    Array('ubicacion', 'site_longitud', 'input', 29, 'longitud decimales OK', 'EDIT', 'site_longitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_longitud', 'input', 30, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('ubicacion', 'site_longitud', 'input', 31, 'formato y rangos OK', 'SEARCH', 'site_longitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -180 y 180'),
    Array('ubicacion', 'site_longitud', 'input', 32, 'longitud decimales OK', 'SEARCH', 'site_longitud_decimales_KO', 'Error, no puede haber + de 6 decimales'),
    Array('ubicacion', 'site_longitud', 'input', 33, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //site_altitude 
    Array('ubicacion', 'site_altitude', 'input', 34, 'valor añadido OK', 'ADD', 'site_altitude_vacio_KO', 'Error, la altitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_altitude', 'input', 35, 'formato y rangos OK', 'ADD', 'site_altitude_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros entre -11000 y 9000'),
    Array('ubicacion', 'site_altitude', 'input', 36, 'todo correcto', 'ADD', true, 'Valor correcto'),
    
    Array('ubicacion', 'site_altitude', 'input', 37, 'valor añadido OK', 'EDIT', 'site_longitud_vacio_KO', 'Error, la longitud del sitio no puede ser vacia'),
    Array('ubicacion', 'site_altitude', 'input', 38, 'formato y rangos OK', 'EDIT', 'site_longitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -180 y 180'),
    Array('ubicacion', 'site_altitude', 'input', 39, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('ubicacion', 'site_altitude', 'input', 40, 'formato y rangos OK', 'EDIT', 'site_longitud_formato_rango_KO', 'Error, el formato no es valido. Solo se pueden meter valores enteros o decimales entre -180 y 180'),
    Array('ubicacion', 'site_altitude', 'input', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    //site_locality
    Array('ubicacion', 'site_locality', 'input', 42, 'tamaño minimo OK', 'ADD', 'site_locality_min_size_KO', 'Error, el nombre de la localidad es demasiado corto. Deberia tener mas de 3 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 43, 'tamaño maximo OK', 'ADD', 'site_locality_max_size_KO', 'Error, el nombre de la localidad es demasiado largo. No puede tener mas de 40 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 44, 'formato OK', 'ADD', 'site_locality_format_KO', 'Error, solo se aceptan caracteres alfabeticos (acentos, ñ y ç incluidos) y espacios'),
    Array('ubicacion', 'site_locality', 'input', 45, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('ubicacion', 'site_locality', 'input', 46, 'tamaño minimo OK', 'EDIT', 'site_locality_min_size_KO', 'Error, el nombre de la localidad es demasiado corto. Deberia tener mas de 3 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 47, 'tamaño maximo OK', 'EDIT', 'site_locality_max_size_KO', 'Error, el nombre de la localidad es demasiado largo. No puede tener mas de 40 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 48, 'formato OK', 'EDIT', 'site_locality_format_KO', 'Error, solo se aceptan caracteres alfabeticos (acentos, ñ y ç incluidos) y espacios'),
    Array('ubicacion', 'site_locality', 'input', 49, 'todo correcto', 'EDIT', true, 'Valor correcto'),
    
    Array('ubicacion', 'site_locality', 'input', 50, 'tamaño maximo OK', 'SEARCH', 'site_locality_max_size_KO', 'Error, el nombre de la localidad es demasiado largo. No puede tener mas de 40 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 51, 'formato OK', 'SEARCH', 'site_locality_format_KO', 'Error, solo se aceptan caracteres alfabeticos (acentos, ñ y ç incluidos) y espacios'),
    Array('ubicacion', 'site_locality', 'input', 52, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //site_provider_login
    Array('ubicacion', 'site_provider_login', 'input', 53, 'tamaño minimo OK', 'ADD', 'site_provider_login_min_size_KO', 'Error, el login es demasiado corto. Deberia tener por lo menos 3 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 54, 'tamaño maximo OK', 'ADD', 'site_provider_login_max_size_KO', 'Error, el login es demasiado largo. No puede superar los 30 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 55, 'formato OK', 'ADD', 'site_provider_login_format_KO', 'Error, el formato no es valido. Solo se pueden insertar caracteres alfanumericos y _'),
    Array('ubicacion', 'site_provider_login', 'input', 56, 'todo correcto', 'ADD', true, 'Valor correcto'),
    
    Array('ubicacion', 'site_provider_login', 'input', 57, 'tamaño minimo OK', 'EDIT', 'site_provider_login_min_size_KO', 'Error, el login es demasiado corto. Deberia tener por lo menos 3 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 58, 'tamaño maximo OK', 'EDIT', 'site_provider_login_max_size_KO', 'Error, el login es demasiado largo. No puede superar los 30 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 59, 'formato OK', 'EDIT', 'site_provider_login_format_KO', 'Error, el formato no es valido. Solo se pueden insertar caracteres alfanumericos y _'),
    Array('ubicacion', 'site_provider_login', 'input', 60, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('ubicacion', 'site_provider_login', 'input', 61, 'tamaño maximo OK', 'SEARCH', 'site_provider_login_max_size_KO', 'Error, el login es demasiado largo. No puede superar los 30 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 62, 'formato OK', 'SEARCH', 'site_provider_login_format_KO', 'Error, el formato no es valido. Solo se pueden insertar caracteres alfanumericos y _'),
    Array('ubicacion', 'site_provider_login', 'input', 63, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //site_north_photo
    Array('ubicacion', 'site_north_photo', 'input', 64, 'tamaño maximo OK', 'SEARCH', 'site_north_photo_max_size_KO', 'Error, el nombre del archivo es demasiado largo. Debe tener menos de 50 caracteres'),
    Array('ubicacion', 'site_north_photo', 'input', 65, 'formato OK', 'SEARCH', 'site_north_photo_format_KO', 'Error, el nombre del archivo no es valido. Solo se aceptan alfanumericos, puntos, - o _'),
    Array('ubicacion', 'site_north_photo', 'input', 66, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //nuevo_site_north_photo
    Array('ubicacion', 'site_north_photo', 'inputfile', 67, 'existe el fichero', 'ADD', 'nuevo_site_north_photo_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 68, 'tamaño maximo OK', 'ADD', 'nuevo_site_north_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 69, 'tipo fichero OK', 'ADD', 'nuevo_site_north_photo_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 70, 'nombre OK', 'ADD', 'nuevo_site_north_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 71, 'tamaño minimo nombre', 'ADD', 'nuevo_site_north_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 72, 'tamaño maximo nombre', 'ADD', 'nuevo_site_north_photo_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 73, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('ubicacion', 'site_north_photo', 'inputfile', 74, 'tamaño maximo OK', 'EDIT', 'nuevo_site_north_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 75, 'tipo fichero OK', 'EDIT', 'nuevo_site_north_photo_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 76, 'nombre OK', 'EDIT', 'nuevo_site_north_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 77, 'tamaño minimo nombre', 'EDIT', 'nuevo_site_north_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 78, 'tamaño maximo nombre', 'EDIT', 'nuevo_site_north_photo_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_north_photo', 'inputfile', 79, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    //site_south_photo
    Array('ubicacion', 'site_south_photo', 'input', 80, 'tamaño maximo OK', 'SEARCH', 'site_south_photo_max_size_KO', 'Error, el nombre del archivo es demasiado largo. Debe tener menos de 50 caracteres'),
    Array('ubicacion', 'site_south_photo', 'input', 81, 'formato OK', 'SEARCH', 'site_south_photo_format_KO', 'Error, el nombre del archivo no es valido. Solo se aceptan alfanumericos, puntos, - o _'),
    Array('ubicacion', 'site_south_photo', 'input', 82, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //nuevo_site_south_photo
    Array('ubicacion', 'site_south_photo', 'inputfile', 83, 'existe el fichero', 'ADD', 'nuevo_site_south_photo_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 84, 'tamaño maximo OK', 'ADD', 'nuevo_site_south_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 85, 'tipo fichero OK', 'ADD', 'nuevo_site_south_photo_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 86, 'nombre OK', 'ADD', 'nuevo_site_south_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 87, 'tamaño minimo nombre', 'ADD', 'nuevo_site_south_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 88, 'tamaño maximo nombre', 'ADD', 'nuevo_site_south_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 89, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('ubicacion', 'site_south_photo', 'inputfile', 90, 'tamaño maximo OK', 'EDIT', 'nuevo_site_south_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 91, 'tipo fichero OK', 'EDIT', 'nuevo_site_south_photo_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 92, 'nombre OK', 'EDIT', 'nuevo_site_south_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 93, 'tamaño minimo nombre', 'EDIT', 'nuevo_site_south_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 94, 'tamaño maximo nombre', 'EDIT', 'nuevo_site_south_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_south_photo', 'inputfile', 95, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    //site_east_photo
    Array('ubicacion', 'site_east_photo', 'input', 96, 'tamaño maximo OK', 'SEARCH', 'site_east_photo_max_size_KO', 'Error, el nombre del archivo es demasiado largo. Debe tener menos de 50 caracteres'),
    Array('ubicacion', 'site_east_photo', 'input', 97, 'formato OK', 'SEARCH', 'site_east_photo_format_KO', 'Error, el nombre del archivo no es valido. Solo se aceptan alfanumericos, puntos, - o _'),
    Array('ubicacion', 'site_east_photo', 'input', 98, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //nuevo_site_east_photo
    Array('ubicacion', 'site_east_photo', 'inputfile', 99, 'existe el fichero', 'ADD', 'nuevo_site_east_photo_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 100, 'tamaño maximo OK', 'ADD', 'nuevo_site_east_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 101, 'tipo fichero OK', 'ADD', 'nuevo_site_east_photo_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 101, 'nombre OK', 'ADD', 'nuevo_site_east_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 102, 'tamaño minimo nombre', 'ADD', 'nuevo_site_east_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 102, 'tamaño maximo nombre', 'ADD', 'nuevo_site_east_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 103, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('ubicacion', 'site_east_photo', 'inputfile', 104, 'tamaño maximo OK', 'EDIT', 'nuevo_site_east_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 105, 'tipo fichero OK', 'EDIT', 'nuevo_site_east_photo_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 106, 'nombre OK', 'EDIT', 'nuevo_site_east_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 107, 'tamaño minimo nombre', 'EDIT', 'nuevo_site_east_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 108, 'tamaño maximo nombre', 'EDIT', 'nuevo_site_east_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_east_photo', 'inputfile', 109, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    //site_west_photo
    Array('ubicacion', 'site_west_photo', 'input', 110, 'tamaño maximo OK', 'SEARCH', 'site_west_photo_max_size_KO', 'Error, el nombre del archivo es demasiado largo. Debe tener menos de 50 caracteres'),
    Array('ubicacion', 'site_west_photo', 'input', 111, 'formato OK', 'SEARCH', 'site_west_photo_format_KO', 'Error, el nombre del archivo no es valido. Solo se aceptan alfanumericos, puntos, - o _'),
    Array('ubicacion', 'site_west_photo', 'input', 112, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //nuevo_site_west_photo
    Array('ubicacion', 'site_west_photo', 'inputfile', 113, 'existe el fichero', 'ADD', 'nuevo_site_west_photo_not_exist_file_KO', 'Error, si vas a subir un archivo debe haber un fichero subido.'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 114, 'tamaño maximo OK', 'ADD', 'nuevo_site_west_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 115, 'tipo fichero OK', 'ADD', 'nuevo_site_west_photo_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 116, 'nombre OK', 'ADD', 'nuevo_site_west_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 117, 'tamaño minimo nombre', 'ADD', 'nuevo_site_west_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 118, 'tamaño maximo nombre', 'ADD', 'nuevo_site_west_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 119, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('ubicacion', 'site_west_photo', 'inputfile', 120, 'tamaño maximo OK', 'EDIT', 'nuevo_site_west_photo_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 121, 'tipo fichero OK', 'EDIT', 'nuevo_site_west_photo_fotoacto_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter jpg'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 122, 'nombre OK', 'EDIT', 'nuevo_site_west_photo_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 123, 'tamaño minimo nombre', 'EDIT', 'nuevo_site_west_photo_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 124, 'tamaño maximo nombre', 'EDIT', 'nuevo_site_west_photo_min_file_name_size_KO', 'Error, el nombre no puede tener mas de 50 caracteres'),
    Array('ubicacion', 'site_west_photo', 'inputfile', 125, 'todo correcto', 'EDIT', true, 'Fichero correcto'),
);

let ubicacion_tests_fields=Array(
    //id_site
    Array('ubicacion', 'id_site', 1, 1, 'ADD', [{id_site:''}], 'id_site_min_size_KO'),
    Array('ubicacion', 'id_site', 2, 2, 'ADD', [{id_site:'1'.repeat(12)}], 'id_site_max_size_KO'),
    Array('ubicacion', 'id_site', 3, 3, 'ADD', [{id_site:'11a'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 3, 4, 'ADD', [{id_site:'1a1'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 3, 5, 'ADD', [{id_site:'a11'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 4, 6, 'ADD', [{id_site:'33'}], true),

    Array('ubicacion', 'id_site', 5, 7, 'EDIT', [{id_site:''}], 'id_site_min_size_KO'),
    Array('ubicacion', 'id_site', 6, 8, 'EDIT', [{id_site:'1'.repeat(12)}], 'id_site_max_size_KO'),
    Array('ubicacion', 'id_site', 7, 9, 'EDIT', [{id_site:'11a'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 7, 10, 'EDIT', [{id_site:'1a1'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 7, 11, 'EDIT', [{id_site:'a11'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 8, 12, 'EDIT', [{id_site:'33'}], true),

    Array('ubicacion', 'id_site', 9, 13, 'SEARCH', [{id_site:'1'.repeat(12)}], 'id_site_max_size_KO'),
    Array('ubicacion', 'id_site', 10, 14, 'SEARCH', [{id_site:'a'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 10, 15, 'SEARCH', [{id_site:'11a'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 10, 16, 'SEARCH', [{id_site:'1a1'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 10, 17, 'SEARCH', [{id_site:'a11'}], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 11, 18, 'SEARCH', [{id_site:''}], true),
    Array('ubicacion', 'id_site', 11, 19, 'SEARCH', [{id_site:'33'}], true),

    //site_latitud
    Array('ubicacion', 'site_latitud', 12, 20, 'ADD', [{site_latitud:''}], 'site_latitud_vacio_KO'),
    Array('ubicacion', 'site_latitud', 13, 21, 'ADD', [{site_latitud:'90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 13, 22, 'ADD', [{site_latitud:'91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 13, 23, 'ADD', [{site_latitud:'-90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 13, 24, 'ADD', [{site_latitud:'-91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 14, 25, 'ADD', [{site_latitud:'89.9999999'}], 'site_latitud_decimales_KO'),
    Array('ubicacion', 'site_latitud', 15, 26, 'ADD', [{site_latitud:'12.345'}], true),

    Array('ubicacion', 'site_latitud', 16, 27, 'EDIT', [{site_latitud:''}], 'site_latitud_vacio_KO'),
    Array('ubicacion', 'site_latitud', 17, 28, 'EDIT', [{site_latitud:'90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 17, 29, 'EDIT', [{site_latitud:'91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 17, 30, 'EDIT', [{site_latitud:'-90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 17, 31, 'EDIT', [{site_latitud:'-91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 18, 32, 'EDIT', [{site_latitud:'89.9999999'}], 'site_latitud_decimales_KO'),
    Array('ubicacion', 'site_latitud', 19, 33, 'EDIT', [{site_latitud:'12.345'}], true),

    Array('ubicacion', 'site_latitud', 20, 28, 'SEARCH', [{site_latitud:'90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 21, 29, 'SEARCH', [{site_latitud:'91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 21, 30, 'SEARCH', [{site_latitud:'-90.999999'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 21, 31, 'SEARCH', [{site_latitud:'-91'}], 'site_latitud_formato_rango_KO'),
    Array('ubicacion', 'site_latitud', 21, 32, 'SEARCH', [{site_latitud:'89.9999999'}], 'site_latitud_decimales_KO'),
    Array('ubicacion', 'site_latitud', 22, 33, 'SEARCH', [{site_latitud:'12'}], true),
    Array('ubicacion', 'site_latitud', 22, 33, 'SEARCH', [{site_latitud:'12.345'}], true),

    //site_longitud
    Array('ubicacion', 'site_longitud', 23, 34, 'ADD', [{site_longitud:''}], 'site_longitud_vacio_KO'),
    Array('ubicacion', 'site_longitud', 24, 35, 'ADD', [{site_longitud:'180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 24, 36, 'ADD', [{site_longitud:'181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 24, 37, 'ADD', [{site_longitud:'-180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 24, 38, 'ADD', [{site_longitud:'-181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 25, 39, 'ADD', [{site_longitud:'89.9999999'}], 'site_longitud_decimales_KO'),
    Array('ubicacion', 'site_longitud', 26, 40, 'ADD', [{site_longitud:'12.345'}], true),

    Array('ubicacion', 'site_longitud', 27, 41, 'EDIT', [{site_longitud:''}], 'site_longitud_vacio_KO'),
    Array('ubicacion', 'site_longitud', 28, 42, 'EDIT', [{site_longitud:'180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 28, 43, 'EDIT', [{site_longitud:'181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 28, 44, 'EDIT', [{site_longitud:'-180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 28, 45, 'EDIT', [{site_longitud:'-181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 29, 46, 'EDIT', [{site_longitud:'89.9999999'}], 'site_longitud_decimales_KO'),
    Array('ubicacion', 'site_longitud', 30, 47, 'EDIT', [{site_longitud:'12.345'}], true),

    Array('ubicacion', 'site_longitud', 31, 48, 'SEARCH', [{site_longitud:'180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 31, 49, 'SEARCH', [{site_longitud:'181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 31, 50, 'SEARCH', [{site_longitud:'-180.999999'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 31, 51, 'SEARCH', [{site_longitud:'-181'}], 'site_longitud_formato_rango_KO'),
    Array('ubicacion', 'site_longitud', 32, 52, 'SEARCH', [{site_longitud:'89.9999999'}], 'site_longitud_decimales_KO'),
    Array('ubicacion', 'site_longitud', 33, 53, 'SEARCH', [{site_longitud:'12'}], true),
    Array('ubicacion', 'site_longitud', 33, 54, 'SEARCH', [{site_longitud:'12.345'}], true),

    //site_altitude
    Array('ubicacion', 'site_altitude', 34, 55, 'ADD', [{site_altitude:''}], 'site_altitude_vacio_KO'),
    Array('ubicacion', 'site_altitude', 35, 56, 'ADD', [{site_altitude:'10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 35, 57, 'ADD', [{site_altitude:'-10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 36, 58, 'ADD', [{site_altitude:'-998'}], true),

    Array('ubicacion', 'site_altitude', 37, 59, 'EDIT', [{site_altitude:''}], 'site_altitude_vacio_KO'),
    Array('ubicacion', 'site_altitude', 38, 60, 'EDIT', [{site_altitude:'10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 38, 61, 'EDIT', [{site_altitude:'-10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 39, 62, 'EDIT', [{site_altitude:'-998'}], true),

    Array('ubicacion', 'site_altitude', 40, 63, 'SEARCH', [{site_altitude:'10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 40, 64, 'SEARCH', [{site_altitude:'-10000'}], 'site_altitude_formato_rango_KO'),
    Array('ubicacion', 'site_altitude', 41, 65, 'SEARCH', [{site_altitude:'-998'}], true),
    
    //site_locality
    Array('ubicacion', 'site_locality', 42, 66, 'ADD', [{site_locality:'ab'}], 'site_locality_min_size_KO'),
    Array('ubicacion', 'site_locality', 43, 67, 'ADD', [{site_locality:'a'.repeat(41)}], 'site_locality_max_size_KO'),
    Array('ubicacion', 'site_locality', 44, 68, 'ADD', [{site_locality:'1abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 44, 69, 'ADD', [{site_locality:'abc1'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 44, 70, 'ADD', [{site_locality:'_abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 44, 71, 'ADD', [{site_locality:'abc_'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 45, 72, 'ADD', [{site_locality:'Ourense'}], true),

    Array('ubicacion', 'site_locality', 46, 73, 'EDIT', [{site_locality:'ab'}], 'site_locality_min_size_KO'),
    Array('ubicacion', 'site_locality', 47, 74, 'EDIT', [{site_locality:'a'.repeat(41)}], 'site_locality_max_size_KO'),
    Array('ubicacion', 'site_locality', 48, 75, 'EDIT', [{site_locality:'1abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 48, 76, 'EDIT', [{site_locality:'abc1'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 48, 77, 'EDIT', [{site_locality:'_abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 48, 78, 'EDIT', [{site_locality:'abc_'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 49, 79, 'EDIT', [{site_locality:'Ourense'}], true),

    Array('ubicacion', 'site_locality', 50, 80, 'SEARCH', [{site_locality:'a'.repeat(41)}], 'site_locality_max_size_KO'),
    Array('ubicacion', 'site_locality', 51, 81, 'SEARCH', [{site_locality:'1'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 51, 82, 'SEARCH', [{site_locality:'_'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 51, 83, 'SEARCH', [{site_locality:'1abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 51, 84, 'SEARCH', [{site_locality:'abc1'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 51, 85, 'SEARCH', [{site_locality:'_abc'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 51, 86, 'SEARCH', [{site_locality:'abc_'}], 'site_locality_format_KO'),
    Array('ubicacion', 'site_locality', 52, 87, 'SEARCH', [{site_locality:''}], true),
    Array('ubicacion', 'site_locality', 52, 88, 'SEARCH', [{site_locality:'Ou'}], true),
    Array('ubicacion', 'site_locality', 52, 89, 'SEARCH', [{site_locality:'Ourense'}], true),
    
    //site_provider_login
    Array('ubicacion', 'site_provider_login', 53, 90, 'ADD', [{site_provider_login:'aa'}], 'site_provider_login_min_size_KO'),
    Array('ubicacion', 'site_provider_login', 54, 91, 'ADD', [{site_provider_login:'a'.repeat(31)}], 'site_provider_login_max_size_KO'),
    Array('ubicacion', 'site_provider_login', 55, 92, 'ADD', [{site_provider_login:'aaa.'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 93, 'ADD', [{site_provider_login:'.aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 94, 'ADD', [{site_provider_login:'aaa,'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 95, 'ADD', [{site_provider_login:',aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 96, 'ADD', [{site_provider_login:'aaa$'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 97, 'ADD', [{site_provider_login:'$aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 55, 98, 'ADD', [{site_provider_login:'aaa a'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 56, 99, 'ADD', [{site_provider_login:'enrique_pl05'}], true),

    Array('ubicacion', 'site_provider_login', 57, 100, 'EDIT', [{site_provider_login:'aa'}], 'site_provider_login_min_size_KO'),
    Array('ubicacion', 'site_provider_login', 58, 101, 'EDIT', [{site_provider_login:'a'.repeat(31)}], 'site_provider_login_max_size_KO'),
    Array('ubicacion', 'site_provider_login', 59, 102, 'EDIT', [{site_provider_login:'aaa.'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 103, 'EDIT', [{site_provider_login:'.aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 104, 'EDIT', [{site_provider_login:'aaa,'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 105, 'EDIT', [{site_provider_login:',aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 106, 'EDIT', [{site_provider_login:'aaa$'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 107, 'EDIT', [{site_provider_login:'$aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 59, 108, 'EDIT', [{site_provider_login:'aaa a'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 60, 109, 'EDIT', [{site_provider_login:'enrique_pl05'}], true),

    Array('ubicacion', 'site_provider_login', 61, 110, 'SEARCH', [{site_provider_login:'a'.repeat(31)}], 'site_provider_login_max_size_KO'),
    Array('ubicacion', 'site_provider_login', 62, 111, 'SEARCH', [{site_provider_login:'.'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 112, 'SEARCH', [{site_provider_login:','}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 113, 'SEARCH', [{site_provider_login:'$'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 114, 'SEARCH', [{site_provider_login:'aaa.'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 115, 'SEARCH', [{site_provider_login:'.aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 116, 'SEARCH', [{site_provider_login:'aaa,'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 117, 'SEARCH', [{site_provider_login:',aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 118, 'SEARCH', [{site_provider_login:'aaa$'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 119, 'SEARCH', [{site_provider_login:'$aaa'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 62, 120, 'SEARCH', [{site_provider_login:'aaa a'}], 'site_provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 63, 121, 'SEARCH', [{site_provider_login:''}], true),
    Array('ubicacion', 'site_provider_login', 63, 122, 'SEARCH', [{site_provider_login:'e'}], true),
    Array('ubicacion', 'site_provider_login', 63, 123, 'SEARCH', [{site_provider_login:'enrique_pl05'}], true),
    
    //site_north_photo

    //site_south_photo

    //site_east_photo

    //site_west_photo
);

let ubicacion_tests_files=Array(

);
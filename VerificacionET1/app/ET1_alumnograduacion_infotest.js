/*
    SOLO FALTA NUEVO_FOTOACTO EN EL METODO ESE DE TEST_FILES
*/
let alumnograduacion_def_tests=Array(
    //Login
    Array('alumnograduacion', 'alumnograduacion_login', 1, 'tamaño minimo OK', 'ADD', 'alumnograduacion_login_min_size_KO', 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'tamaño maximo OK', 'ADD', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'formato OK', 'ADD', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_login', 5, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_login_min_size_KO', 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 6, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 'formato OK', 'EDIT', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_login', 9, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_login_max_size_KO', 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 'formato OK', 'SEARCH', 'alumnograduacion_login_format_KO', 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Password
    Array('alumnograduacion', 'alumnograduacion_password', 12, 'tamaño minimo OK', 'ADD', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, debería tener entre 8 y 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 13, 'tamaño maximo OK', 'ADD', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 14, 'formato OK', 'ADD', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 16, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, deberia tener entre 8 y 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 17, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 18, 'formato OK', 'EDIT', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 20, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, debe tener entre 8 y 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 21, 'formato OK', 'SEARCH', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requeridp, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Nombre
    Array('alumnograduacion', 'alumnograduacion_nombre', 23, 'tamaño minimo OK', 'ADD', 'alumnograduacion_nombre_min_size_KO', 'El nombre es demasiado corto, debe tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 24, 'tamaño maximo OK', 'ADD', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, debe tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 25, 'formato OK', 'ADD', 'alumnograduacion_nombre_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 26, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 27, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_nombre_min_size_KO', 'El nombre es demasiado corto, deberia tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 28, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, deberia tener entre 2 y 25 catacteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 'formato OK', 'EDIT', 'alumnograduacion_nombre_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 31, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_nombre_max_size_KO', 'El nombre es demasiado largo, deberia tener entre 2 y 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 'formato OK', 'SEARCH', 'alumnograduacion_nombre_formato_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 34, 'tamaño minimo OK', 'ADD', 'alumnograduacion_apellidos_min_size_KO', 'Los apellidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 35, 'tamaño maximo OK', 'ADD', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 'formato OK', 'ADD', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 38, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_apellidos_min_size_KO', 'Los apellidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 39, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 'formato OK', 'EDIT', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 42, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_apellidos_max_size_KO', 'Los apellidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 'formato OK', 'SEARCH', 'alumnograduacion_apellidos_format_KO', 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Titulacion
    Array('alumnograduacion', 'alumnograduacion_titulacion', 45, 'tamaño minimo OK', 'ADD', 'alumnograduacion_titulacion_min_size_KO', 'El campo de titulacion no puede quedar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 'valor OK', 'ADD', 'alumnograduacion_titulacion_format_KO', 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 48, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_titulacion_min_size_KO', 'El campo de titulacion no puede quedar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 'valor OK', 'EDIT', 'alumnograduacion_titulacion_format_KO', 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 'valor OK', 'SEARCH', 'alumnograduacion_titulacion_format_KO', 'Titulacion invalida. Solo tenemis GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //Dni
    Array('alumnograduacion', 'alumnograduacion_dni', 53, 'tamaño minimo OK', 'ADD', 'alumnograduacion_dni_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 54, 'tamaño maximo OK', 'ADD', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 'formato OK', 'ADD', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 'formato nif OK', 'ADD', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 57, 'formato nie OK', 'ADD', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_dni', 59, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_dni_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 60, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 'formato OK', 'EDIT', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 'formato nif OK', 'EDIT', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 'formato nie OK', 'EDIT', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_dni', 65, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_dni_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 'formato OK', 'SEARCH', 'alumnograduacion_dni_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 67, 'formato nif OK', 'SEARCH', 'alumnograduacion_dni_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 'formato nie OK', 'SEARCH', 'alumnograduacion_dni_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Telefono
    Array('alumnograduacion', 'alumnograduacion_telefono', 70, 'tamaño minimo OK', 'ADD', 'alumnograduacion_telefono_min_size_KO', 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 71, 'tamaño maximo OK', 'ADD', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 'formato OK', 'ADD', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 73, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_telefono_min_size_KO', 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 'formato OK', 'EDIT', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 77, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_telefono_max_size_KO', 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 'formato OK', 'SEARCH', 'alumnograduacion_telefono_format_KO', 'Error, solo se aceptan valores de tipo numerico'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 80, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Direccion
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 'tamaño minimo OK', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'Error, la direccion es demasiado corta.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 'tamaño maximo OK', 'ADD', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 'formato OK', 'ADD', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 84, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_direccion_min_size_KO', 'Error, la direccion es demasiado corta.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 86, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 'formato OK', 'EDIT', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 88, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_direccion_max_size_KO', 'Error, la direccion es demasiado larga.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 'formato OK', 'SEARCH', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios. Ademas debe seguir el formato Calle (nombre de la calle), portal, piso, codigo postal, ciudad.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 91, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 92, 'tamaño minimo OK', 'ADD', 'alumnograduacion_email_min_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 93, 'tamaño maximo OK', 'ADD', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 'formato OK', 'ADD', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 95, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_email', 96, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_email_min_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 97, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 98, 'formato OK', 'EDIT', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 99, 'todo correcto', 'EDIT', true, 'Valor correcto'),  
    
    Array('alumnograduacion', 'alumnograduacion_email', 100, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_email_max_size_KO', 'Error, el email es demasiado largo.'),
    Array('alumnograduacion', 'alumnograduacion_email', 101, 'formato OK', 'SEARCH', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 102, 'todo correcto', 'SEARCH', true, 'Valor correcto'),   

    //Fotoacto
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 103, 'tamaño minimo OK', 'ADD', 'alumnograduacion_fotoacto_min_size_KO', 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 'tamaño maximo OK', 'ADD', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 'formato OK', 'ADD', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 106, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_fotoacto_min_size_KO', 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 108, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 109, 'formato OK', 'EDIT', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 110, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 112, 'formato OK', 'SEARCH', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 113, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //Nuevo_fotoacto
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 111, 'tamaño de fichero OK', 'ADD', 'alumnograduacion_nuevo_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 112, 'tipo de fichero OK', 'ADD', 'alumnograduacion_nuevo_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 113, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 114, 'tamaño de fichero OK', 'EDIT', 'alumnograduacion_nuevo_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 115, 'tipo de fichero OK', 'EDIT', 'alumnograduacion_nuevo_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 116, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 117, 'tamaño de fichero OK', 'SEARCH', 'alumnograduacion_nuevo_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 118, 'tipo de fichero OK', 'SEARCH', 'alumnograduacion_nuevo_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 119, 'todo correcto', 'SEARCH', true, 'Fichero correcto'),
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

    Array('alumnograduacion', 'alumnograduacion_login', 9, 19, 'SEARCH', [{alumnograduacion_login:'a'.repeat(16)}], 'alumnograduacion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 20, 'SEARCH', [{alumnograduacion_login:''}], 'alumnograduacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 21, 'SEARCH', [{alumnograduacion_login:'á'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 22, 'SEARCH', [{alumnograduacion_login:'ñ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 23, 'SEARCH', [{alumnograduacion_login:'áaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 24, 'SEARCH', [{alumnograduacion_login:'aaáa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 25, 'SEARCH', [{alumnograduacion_login:'aaaá'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 26, 'SEARCH', [{alumnograduacion_login:'ñaaa'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 27, 'SEARCH', [{alumnograduacion_login:'aaña'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 10, 28, 'SEARCH', [{alumnograduacion_login:'aaañ'}], 'alumnograduacion_login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 29, 'SEARCH', [{alumnograduacion_login:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 30, 'SEARCH', [{alumnograduacion_login:'enriquepl'}], true),

    //password
    Array('alumnograduacion', 'alumnograduacion_password', 12, 31, 'ADD', [{alumnograduacion_password:'aaaaaa'}], 'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 13, 32, 'ADD', [{alumnograduacion_password:'a'.repeat(41)}], 'alumnograduacion_password_max_size_KO'),
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
    Array('alumnograduacion', 'alumnograduacion_password', 17, 44, 'EDIT', [{alumnograduacion_password:'a'.repeat(41)}], 'alumnograduacion_password_max_size_KO'),
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

    Array('alumnograduacion', 'alumnograduacion_password', 20, 54, 'SEARCH', [{alumnograduacion_password:'a'.repeat(41)}], 'alumnograduacion_password_max_size_KO'),
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
    Array('alumnograduacion', 'alumnograduacion_nombre', 26, 74, 'ADD', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 27, 75, 'ADD', [{alumnograduacion_nombre:'José'}], true),

    Array('alumnograduacion', 'alumnograduacion_nombre', 28, 76, 'EDIT', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 77, 'EDIT', [{alumnograduacion_nombre:'a'.repeat(26)}], 'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 78, 'EDIT', [{alumnograduacion_nombre:'1aa'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 79, 'EDIT', [{alumnograduacion_nombre:'a1a'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 80, 'EDIT', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 31, 81, 'EDIT', [{alumnograduacion_nombre:'Enrique'}], true),

    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 82, 'SEARCH', [{alumnograduacion_nombre:'a'.repeat(26)}], 'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 83, 'SEARCH', [{alumnograduacion_nombre:'1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 84, 'SEARCH', [{alumnograduacion_nombre:'1aa'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 85, 'SEARCH', [{alumnograduacion_nombre:'a1a'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 86, 'SEARCH', [{alumnograduacion_nombre:'aa1'}], 'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 34, 87, 'SEARCH', [{alumnograduacion_nombre:'E'}], true),
    Array('alumnograduacion', 'alumnograduacion_nombre', 34, 88, 'SEARCH', [{alumnograduacion_nombre:'Enrique'}], true),

    //apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 35, 89, 'ADD', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 90, 'ADD', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 91, 'ADD', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 92, 'ADD', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 93, 'ADD', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 38, 94, 'ADD', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 39, 95, 'EDIT', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 96, 'EDIT', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 97, 'EDIT', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 98, 'EDIT', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 99, 'EDIT', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 42, 100, 'EDIT', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 101, 'SEARCH', [{alumnograduacion_apellidos:'a'.repeat(36)}], 'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 102, 'SEARCH', [{alumnograduacion_apellidos:'1'}], 'alumnograduacion_apellidos_format_KO'),     
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 103, 'SEARCH', [{alumnograduacion_apellidos:'aaa1'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 104, 'SEARCH', [{alumnograduacion_apellidos:'aa1a'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 105, 'SEARCH', [{alumnograduacion_apellidos:'1aaa'}], 'alumnograduacion_apellidos_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_apellidos', 45, 106, 'SEARCH', [{alumnograduacion_apellidos:'P'}], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 45, 107, 'SEARCH', [{alumnograduacion_apellidos:'Piñeiro L'}], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 45, 108, 'SEARCH', [{alumnograduacion_apellidos:'Piñeiro López'}], true),

    //titulacion
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 109, 'ADD', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 110, 'ADD', [{alumnograduacion_titulacion:'GREIx'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 111, 'ADD', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 112, 'ADD', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 48, 113, 'ADD', [{alumnograduacion_titulacion:'GREI'}], true),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 114, 'EDIT', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 115, 'EDIT', [{alumnograduacion_titulacion:'GREIx'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 116, 'EDIT', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 117, 'EDIT', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 118, 'EDIT', [{alumnograduacion_titulacion:'GREI'}], true),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 119, 'SEARCH', [{alumnograduacion_titulacion:'GREIx'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 120, 'SEARCH', [{alumnograduacion_titulacion:'xGREI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 121, 'SEARCH', [{alumnograduacion_titulacion:'GRxEI'}], 'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 53, 122, 'SEARCH', [{alumnograduacion_titulacion:'G'}], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 53, 123, 'EDIT', [{alumnograduacion_titulacion:'GREI'}], true),

    //dni
    Array('alumnograduacion', 'alumnograduacion_dni', 54, 124, 'ADD', [{alumnograduacion_dni:'a'.repeat(8)}], 'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 125, 'ADD', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 126, 'ADD', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 127, 'ADD', [{alumnograduacion_dni:'12345678_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 128, 'ADD', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 129, 'ADD', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 130, 'ADD', [{alumnograduacion_dni:'123a45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 131, 'ADD', [{alumnograduacion_dni:'a123456a8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 132, 'ADD', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 57, 133, 'ADD', [{alumnograduacion_dni:'45145215a'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 134, 'ADD', [{alumnograduacion_dni:'y6671688s'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 59, 135, 'ADD', [{alumnograduacion_dni:'45145215x'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 59, 136, 'ADD', [{alumnograduacion_dni:'y6671688b'}], true),

    Array('alumnograduacion', 'alumnograduacion_dni', 60, 137, 'EDIT', [{alumnograduacion_dni:'a'.repeat(8)}], 'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 138, 'EDIT', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 139, 'EDIT', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 140, 'EDIT', [{alumnograduacion_dni:'12345678_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 141, 'EDIT', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 142, 'EDIT', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 143, 'EDIT', [{alumnograduacion_dni:'123a45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 144, 'EDIT', [{alumnograduacion_dni:'a123456a8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 145, 'EDIT', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 146, 'EDIT', [{alumnograduacion_dni:'45145215a'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 147, 'EDIT', [{alumnograduacion_dni:'y6671688s'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 65, 148, 'EDIT', [{alumnograduacion_dni:'45145215x'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 65, 149, 'EDIT', [{alumnograduacion_dni:'y6671688b'}], true),

    Array('alumnograduacion', 'alumnograduacion_dni', 66, 134, 'SEARCH', [{alumnograduacion_dni:'a'.repeat(10)}], 'alumnograduacion_dni_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 67, 135, 'SEARCH', [{alumnograduacion_dni:'12345678*'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 136, 'SEARCH', [{alumnograduacion_dni:'1234568_'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 137, 'SEARCH', [{alumnograduacion_dni:'12345678-'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 138, 'SEARCH', [{alumnograduacion_dni:'12345678$'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 139, 'SEARCH', [{alumnograduacion_dni:'123a45678'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 140, 'SEARCH', [{alumnograduacion_dni:'a123456a8'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 141, 'SEARCH', [{alumnograduacion_dni:'123456789'}], 'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 142, 'SEARCH', [{alumnograduacion_dni:'45145215a'}], 'alumnograduacion_dni_format_nif_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 70, 143, 'SEARCH', [{alumnograduacion_dni:'y6671688s'}], 'alumnograduacion_dni_format_nie_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 144, 'SEARCH', [{alumnograduacion_dni:'4'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 145, 'SEARCH', [{alumnograduacion_dni:'x'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 146, 'SEARCH', [{alumnograduacion_dni:'45145215'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 147, 'SEARCH', [{alumnograduacion_dni:'45145215x'}], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 148, 'SEARCH', [{alumnograduacion_dni:'y6671688b'}], true),


    //telefono Los numeros irian entre '' o sin??
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 149, 'ADD', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 73, 150, 'ADD', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 151, 'ADD', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 152, 'ADD', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 153, 'ADD', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 154, 'ADD', [{alumnograduacion_telefono:'123456789'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 155, 'EDIT', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 77, 156, 'EDIT', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 157, 'EDIT', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 158, 'EDIT', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 159, 'EDIT', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 79, 160, 'EDIT', [{alumnograduacion_telefono:'123456789'}], true),

    Array('alumnograduacion', 'alumnograduacion_telefono', 80, 161, 'SEARCH', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_min_size'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 81, 162, 'SEARCH', [{alumnograduacion_telefono:'a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 81, 163, 'SEARCH', [{alumnograduacion_telefono:'a1'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 81, 164, 'SEARCH', [{alumnograduacion_telefono:'1a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 81, 165, 'SEARCH', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 81, 166, 'SEARCH', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 82, 167, 'SEARCH', [{alumnograduacion_telefono:'1'}], true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 82, 168, 'SEARCH', [{alumnograduacion_telefono:'123456789'}], true),

    //direccion
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 169, 'ADD', [{alumnograduacion_direccion:'a'.repeat(12)}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 84, 170, 'ADD', [{alumnograduacion_direccion:'a'.repeat(41)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 171, 'ADD', [{alumnograduacion_direccion:'Calle abc'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 172, 'ADD', [{alumnograduacion_direccion:'Calle abc, aa'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 173, 'ADD', [{alumnograduacion_direccion:'12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 174, 'ADD', [{alumnograduacion_direccion:'32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 175, 'ADD', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 176, 'ADD', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 177, 'ADD', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 178, 'ADD', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 86, 179, 'ADD', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),
    
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 180, 'EDIT', [{alumnograduacion_direccion:'a'.repeat(12)}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 88, 181, 'EDIT', [{alumnograduacion_direccion:'a'.repeat(41)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 182, 'EDIT', [{alumnograduacion_direccion:'Calle abc'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 183, 'EDIT', [{alumnograduacion_direccion:'Calle abc, aa'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 184, 'EDIT', [{alumnograduacion_direccion:'12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 185, 'EDIT', [{alumnograduacion_direccion:'32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 186, 'EDIT', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 187, 'EDIT', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 188, 'EDIT', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 89, 189, 'EDIT', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 90, 190, 'EDIT', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),

    Array('alumnograduacion', 'alumnograduacion_direccion', 91, 191, 'SEARCH', [{alumnograduacion_direccion:'a'.repeat(41)}], 'alumnograduacion_direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 192, 'SEARCH', [{alumnograduacion_direccion:'_'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 193, 'SEARCH', [{alumnograduacion_direccion:'&'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 194, 'SEARCH', [{alumnograduacion_direccion:'$'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 195, 'SEARCH', [{alumnograduacion_direccion:'%'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 196, 'SEARCH', [{alumnograduacion_direccion:'Calle %abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 197, 'SEARCH', [{alumnograduacion_direccion:'Calle &abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 198, 'SEARCH', [{alumnograduacion_direccion:'Calle _abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 92, 199, 'SEARCH', [{alumnograduacion_direccion:'Calle $abc, 12, 1ºB, 32001, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 93, 200, 'SEARCH', [{alumnograduacion_direccion:'abc'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 93, 201, 'SEARCH', [{alumnograduacion_direccion:'32001, Ourense'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 93, 202, 'SEARCH', [{alumnograduacion_direccion:'Calle abc, 12, 1ºB, 32001, Ourense'}], true),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 94, 203, 'ADD', [{alumnograduacion_email:'abcd'}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 95, 204, 'ADD', [{alumnograduacion_email:'a'.repeat(40)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 96, 205, 'ADD', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 96, 206, 'ADD', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 96, 207, 'ADD', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 97, 208, 'ADD', [{alumnograduacion_email:'enrique@gmail.com'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_email', 98, 209, 'EDIT', [{alumnograduacion_email:''}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 99, 210, 'EDIT', [{alumnograduacion_email:'a'.repeat(40)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 100, 211, 'EDIT', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 100, 212, 'EDIT', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 100, 213, 'EDIT', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 101, 214, 'EDIT', [{alumnograduacion_email:'enrique@gmail.com'}], true),

    Array('alumnograduacion', 'alumnograduacion_email', 102, 215, 'SEARCH', [{alumnograduacion_email:'a'.repeat(40)}], 'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 103, 216, 'SEARCH', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 103, 217, 'SEARCH', [{alumnograduacion_email:'enrique@gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 103, 218, 'SEARCH', [{alumnograduacion_email:'enrique/gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 104, 219, 'SEARCH', [{alumnograduacion_email:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 104, 220, 'SEARCH', [{alumnograduacion_email:'@gmail.com'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 104, 221, 'SEARCH', [{alumnograduacion_email:'enrique@gmail.com'}], true),

    //fotoacto
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 222, 'ADD', [{alumnograduacion_fotoacto:'aaaaaa'}], 'alumnograduacion_fotoacto_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 106, 223, 'ADD', [{alumnograduacion_fotoacto:'a'.repeat(41)}], 'alumnograduacion_fotoacto_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 224, 'ADD', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 225, 'ADD', [{alumnograduacion_fotoacto:'/home usuario/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 226, 'ADD', [{alumnograduacion_fotoacto:'/home/usuñrio/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 227, 'ADD', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 108, 228, 'ADD', [{alumnograduacion_fotoacto:'/home/usuario/Imagenes/foto.jpg'}], true),
    
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 109, 229, 'EDIT', [{alumnograduacion_fotoacto:'aaaaaa'}], 'alumnograduacion_fotoacto_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 110, 230, 'EDIT', [{alumnograduacion_fotoacto:'a'.repeat(41)}], 'alumnograduacion_fotoacto_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 231, 'EDIT', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 232, 'EDIT', [{alumnograduacion_fotoacto:'/home usuario/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 233, 'EDIT', [{alumnograduacion_fotoacto:'/home/usuñrio/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 234, 'EDIT', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 112, 235, 'EDIT', [{alumnograduacion_fotoacto:'/home/usuario/Imagenes/foto.jpg'}], true),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 113, 236, 'SEARCH', [{alumnograduacion_fotoacto:'a'.repeat(41)}], 'alumnograduacion_fotoacto_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 237, 'SEARCH', [{alumnograduacion_fotoacto:'á'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 238, 'SEARCH', [{alumnograduacion_fotoacto:'ñ'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 239, 'SEARCH', [{alumnograduacion_fotoacto:'a ñ'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 240, 'SEARCH', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 241, 'SEARCH', [{alumnograduacion_fotoacto:'/home usuario/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 242, 'SEARCH', [{alumnograduacion_fotoacto:'/home/usuñrio/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 243, 'SEARCH', [{alumnograduacion_fotoacto:'/home/usuário/Imagenes/foto.jpg'}], 'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 115, 244, 'SEARCH', [{alumnograduacion_fotoacto:'a'}], true),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 115, 245, 'SEARCH', [{alumnograduacion_fotoacto:'foto'}], true),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 115, 246, 'SEARCH', [{alumnograduacion_fotoacto:'/home/usuario/Imagenes/foto.jpg'}], true),

);

let alumnograduacion_tests_files=Array(
    //nuevo_fotoacto
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 116, 247, 'ADD', 'existe el fichero', [], 'alumnograduacion_nuevo_fotoacto_not_exist_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 117, 248, 'ADD', 'tamaño maximo OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:20000000}], 'alumnograduacion_nuevo_fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 118, 249, 'ADD', 'tipo fichero OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/png'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_type_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 119, 250, 'ADD', 'nombre OK', [{format_name_file:'ñombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 119, 251, 'ADD', 'nombre OK', [{format_name_file:'nómbre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 119, 252, 'ADD', 'nombre OK', [{format_name_file:'n ombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 120, 253, 'ADD', 'todo correcto', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], true),

    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 121, 254, 'EDIT', 'existe el fichero', [], 'alumnograduacion_nuevo_fotoacto_not_exist_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 122, 255, 'EDIT', 'tamaño maximo OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:20000000}], 'alumnograduacion_nuevo_fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 123, 256, 'EDIT', 'tipo fichero OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/png'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_type_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 124, 257, 'EDIT', 'nombre OK', [{format_name_file:'ñombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 124, 258, 'EDIT', 'nombre OK', [{format_name_file:'nómbre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 124, 259, 'EDIT', 'nombre OK', [{format_name_file:'n ombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 125, 260, 'EDIT', 'todo correcto', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], true),

    /*
        Habria que hacer busquedas x tamaño o formato cuando solo se aceptan jpgs??
        Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 126, 261, 'SEARCH', 'tamaño maximo OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:20000000}], 'alumnograduacion_nuevo_fotoacto_max_size_file_KO'),
        Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 127, 249, 'SEARCH', 'tipo fichero OK', [{format_name_file:'nombre.jpg'}, {type_file:'image/png'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_type_file_KO'),
    */   
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 250, 'SEARCH', 'nombre OK', [{format_name_file:'ñ'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 250, 'SEARCH', 'nombre OK', [{format_name_file:'ó'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 250, 'SEARCH', 'nombre OK', [{format_name_file:'n o'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 250, 'SEARCH', 'nombre OK', [{format_name_file:'ñombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 251, 'SEARCH', 'nombre OK', [{format_name_file:'nómbre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 128, 252, 'SEARCH', 'nombre OK', [{format_name_file:'n ombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], 'alumnograduacion_nuevo_fotoacto_format_name_file_KO'),  
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 129, 253, 'SEARCH', 'todo correcto', [{format_name_file:'n'}], true),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 129, 253, 'SEARCH', 'todo correcto', [{format_name_file:'nombre.jpg'}], true),
    Array('alumnograduacion', 'alumnograduacion_nuevo_fotoacto', 129, 253, 'SEARCH', 'todo correcto', [{format_name_file:'nombre.jpg'}, {type_file:'image/jpeg'}, {max_size_file:2000000}], true),
);
//TOTAL DE HORAS HECHAS HASTA AHORA: 17
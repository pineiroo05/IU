let alumnograduacion_def_tests=Array(
    /*
        OJOOOOO: Habria que tener solo un fotoacto, o como en la mierda de semana 3 poner 2??????
    */
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
    Array('alumnograduacion', 'alumnograduacion_password', 12, 'tamaño minimo OK', 'ADD', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, debería tener entre 8 y 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 13, 'tamaño maximo OK', 'ADD', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 14, 'formato OK', 'ADD', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 16, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_password_min_size_KO', 'La contraseña es demasiado corta, deberia tener entre 8 y 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 17, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_password_max_size_KO', 'La contraseña es demasiado larga, deberia tener entre 8 y 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 18, 'formato OK', 'EDIT', 'alumnograduacion_password_format_KO', 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_password', 20, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_password_max_size', 'La contraseña es demasiado larga, debe tener entre 8 y 100 caracteres'),
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
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 'todo correcto', true, 'Valor correcto'),

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
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 'todo correcto', 'EDIT', false, 'Valor correcto'),

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
    Array('alumnograduacion', 'alumnograduacion_dni', 53, 'tamaño minimo OK', 'ADD', 'alumnograduacion_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 54, 'tamaño maximo OK', 'ADD', 'alumnograduacion_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 55, 'formato OK', 'ADD', 'alumnograduacion_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 56, 'formato nif OK', 'ADD', 'alumnograduacion_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 57, 'formato nie OK', 'ADD', 'alumnograduacion_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_dni', 59, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_min_size_KO', 'El dni/nie es demasiado corto. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 60, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 'formato OK', 'EDIT', 'alumnograduacion_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 'formato nif OK', 'EDIT', 'alumnograduacion_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 'formato nie OK', 'EDIT', 'alumnograduacion_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_dni', 65, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_max_size_KO', 'El dni/nie es demasiado largo. Debe tener 9 caracteres.'),
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 'formato OK', 'SEARCH', 'alumnograduacion_format_KO', 'Error, la cadena introducida no es valida. El formato debe ser 12345678X(para nif) o x1234567x(para nie'),
    Array('alumnograduacion', 'alumnograduacion_dni', 67, 'formato nif OK', 'SEARCH', 'alumnograduacion_format_nif_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 'formato nie OK', 'SEARCH', 'alumnograduacion_format_nie_KO', 'Error, la cadena introducida no es valida, la letra no se corresponde para esa combinacion de numeros'),
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
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 'tamaño minimo OK', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'El campo de direccion no puede estar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 'formato OK', 'ADD', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 84, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_direccion_min_size_KO', 'El campo de direccion no puede estar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 'formato OK', 'EDIT', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 86, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 'formato OK', 'SEARCH', 'alumnograduacion_direccion_format_KO', 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 88, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 89, 'tamaño minimo OK', 'ADD', 'alumnograduacion_email_min_size_KO', 'El campo de email no puede estar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_email', 90, 'formato OK', 'ADD', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 91, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('alumnograduacion', 'alumnograduacion_email', 92, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_email_min_size_KO', 'El campo de email no puede estar vacio.'),
    Array('alumnograduacion', 'alumnograduacion_email', 93, 'formato OK', 'EDIT', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 'todo correcto', 'EDIT', true, 'Valor correcto'),  
    
    Array('alumnograduacion', 'alumnograduacion_email', 95, 'formato OK', 'SEARCH', 'alumnograduacion_email_format_KO', 'El email introducido no cumple el formato valido (usuario@dominio.extension).'),
    Array('alumnograduacion', 'alumnograduacion_email', 96, 'todo correcto', 'SEARCH', true, 'Valor correcto'),   

    //Foto
    //Este estaria bien con todas estas pruebas???
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 100, 'tamaño minimo OK', 'ADD', 'alumnograduacion_fotoacto_min_size_KO', 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 101, 'tamaño maximo OK', 'ADD', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 102, 'formato OK', 'ADD', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 103, 'tamaño de fichero OK', 'ADD', 'alumnograducion_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 104, 'tipo de fichero OK', 'ADD', 'alumnograduacion_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 105, 'todo correcto', 'ADD', true, 'Fichero correcto'),
    
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 106, 'tamaño minimo OK', 'EDIT', 'alumnograduacion_fotoacto_min_size_KO', 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 'tamaño maximo OK', 'EDIT', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 108, 'formato OK', 'EDIT', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 109, 'tamaño de fichero OK', 'EDIT', 'alumnograducion_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 110, 'tipo de fichero OK', 'EDIT', 'alumnograduacion_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 111, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 112, 'tamaño maximo OK', 'SEARCH', 'alumnograduacion_fotoacto_max_size_KO', 'El nombre del archivo no puede tener mas de 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 113, 'formato OK', 'SEARCH', 'alumnograduacion_fotoacto_format_KO', 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 114, 'tamaño de fichero OK', 'SEARCH', 'alumnograducion_fotoacto_max_size_file_KO', 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 115, 'tipo de fichero OK', 'SEARCH', 'alumnograduacion_fotoacto_type_file_KO', 'El tipo de fichero no es valido, solo se aceptan .jpg'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 116, 'todo correcto', 'SEARCH', true, 'Fichero correcto'),
);

let alumnograduacion_tests_fields=Array(
    /*
        EN LOGIN Y PASSWORD TENDRIA QUE ACEPTAR TMB NUMEROS??????
    */
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
    Array('alumnograduacion', 'alumnograduacion_password', 13, 32, 'ADD', [{alumnograduacion_password:'a'.repeat(101)}], 'alumnograduacion_password_max_size_KO'),
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
    Array('alumnograduacion', 'alumnograduacion_password', 17, 44, 'EDIT', [{alumnograduacion_password:'a'.repeat(101)}], 'alumnograduacion_password_max_size_KO'),
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

    Array('alumnograduacion', 'alumnograduacion_password', 20, 54, 'SEARCH', [{alumnograduacion_password:'a'.repeat(101)}], 'alumnograduacion_password_max_size_KO'),
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

    //AQUI DEBERIA IR EL DE DNI

    //telefono Los numeros irian entre '' o sin??
    Array('alumnograduacion', 'alumnograduacion_telefono', 54, 124, 'ADD', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 55, 125, 'ADD', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 56, 126, 'ADD', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 57, 127, 'ADD', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 57, 128, 'ADD', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 58, 129, 'ADD', [{alumnograduacion_telefono:'123456789'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_telefono', 59, 130, 'EDIT', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 60, 131, 'EDIT', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 61, 132, 'EDIT', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 61, 133, 'EDIT', [{alumnograduacion_telefono:'12345678a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 61, 134, 'EDIT', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 62, 135, 'EDIT', [{alumnograduacion_telefono:'123456789'}], true),

    Array('alumnograduacion', 'alumnograduacion_telefono', 63, 136, 'SEARCH', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 137, 'SEARCH', [{alumnograduacion_telefono:'a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 138, 'SEARCH', [{alumnograduacion_telefono:'a1'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 139, 'SEARCH', [{alumnograduacion_telefono:'1a'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 140, 'SEARCH', [{alumnograduacion_telefono:'a12345678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 141, 'SEARCH', [{alumnograduacion_telefono:'1234a5678'}], 'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 65, 142, 'SEARCH', [{alumnograduacion_telefono:'1'}], true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 65, 143, 'SEARCH', [{alumnograduacion_telefono:'123456789'}], true),

    //direccion
    Array('alumnograduacion', 'alumnograduacion_direccion', 66, 144, 'ADD', [{alumnograduacion_direccion:''}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 145, 'ADD', [{alumnograduacion_direccion:'Calle-abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 146, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD-Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 147, 'ADD', [{alumnograduacion_direccion:'Calle abc 23-1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 148, 'ADD', [{alumnograduacion_direccion:'Calle_abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 149, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD_Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 150, 'ADD', [{alumnograduacion_direccion:'Calle abc 23_1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 151, 'ADD', [{alumnograduacion_direccion:'Calle/abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 152, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD/Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 153, 'ADD', [{alumnograduacion_direccion:'Calle abc 23/1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 154, 'ADD', [{alumnograduacion_direccion:'Calle (abc) 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 155, 'ADD', [{alumnograduacion_direccion:'Calle abc (23) 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 156, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD (Ourense)'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 157, 'ADD', [{alumnograduacion_direccion:'Calle$abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 158, 'ADD', [{alumnograduacion_direccion:'Calle abc$23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 159, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD$Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 160, 'ADD', [{alumnograduacion_direccion:'Calle%abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 161, 'ADD', [{alumnograduacion_direccion:'Calle abc%23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 162, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD%Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 163, 'ADD', [{alumnograduacion_direccion:'Calle, abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 164, 'ADD', [{alumnograduacion_direccion:'Calle abc, 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 165, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 166, 'ADD', [{alumnograduacion_direccion:'Calle. abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 167, 'ADD', [{alumnograduacion_direccion:'Calle abc. 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 168, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD. Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 68, 169, 'ADD', [{alumnograduacion_direccion:'Calle abc 23 1ºD Ourense'}], true),

    Array('alumnograduacion', 'alumnograduacion_direccion', 69, 170, 'EDIT', [{alumnograduacion_direccion:''}], 'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 171, 'EDIT', [{alumnograduacion_direccion:'Calle-abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 172, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD-Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 173, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23-1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 174, 'EDIT', [{alumnograduacion_direccion:'Calle_abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 175, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD_Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 176, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23_1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 177, 'EDIT', [{alumnograduacion_direccion:'Calle/abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 178, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD/Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 179, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23/1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 180, 'EDIT', [{alumnograduacion_direccion:'Calle (abc) 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 181, 'EDIT', [{alumnograduacion_direccion:'Calle abc (23) 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 182, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD (Ourense)'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 183, 'EDIT', [{alumnograduacion_direccion:'Calle$abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 184, 'EDIT', [{alumnograduacion_direccion:'Calle abc$23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 185, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD$Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 186, 'EDIT', [{alumnograduacion_direccion:'Calle%abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 187, 'EDIT', [{alumnograduacion_direccion:'Calle abc%23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 188, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD%Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 189, 'EDIT', [{alumnograduacion_direccion:'Calle, abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 190, 'EDIT', [{alumnograduacion_direccion:'Calle abc, 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 191, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD, Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 192, 'EDIT', [{alumnograduacion_direccion:'Calle. abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 193, 'EDIT', [{alumnograduacion_direccion:'Calle abc. 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 70, 194, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD. Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 71, 195, 'EDIT', [{alumnograduacion_direccion:'Calle abc 23 1ºD Ourense'}], true),

    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 196, 'SEARCH', [{alumnograduacion_direccion:'-'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 197, 'SEARCH', [{alumnograduacion_direccion:'_'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 198, 'SEARCH', [{alumnograduacion_direccion:'/'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 199, 'SEARCH', [{alumnograduacion_direccion:'()'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 200, 'SEARCH', [{alumnograduacion_direccion:'$'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 201, 'SEARCH', [{alumnograduacion_direccion:'%'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 202, 'SEARCH', [{alumnograduacion_direccion:','}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 203, 'SEARCH', [{alumnograduacion_direccion:'.'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 204, 'SEARCH', [{alumnograduacion_direccion:'Calle-abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 205, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD-Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 206, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23-1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 207, 'SEARCH', [{alumnograduacion_direccion:'Calle_abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 208, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD_Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 209, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23_1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 210, 'SEARCH', [{alumnograduacion_direccion:'Calle/abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 211, 'SEARCH', [{alumnograduacion_direccion:'Calle abc/23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 212, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD/Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 213, 'SEARCH', [{alumnograduacion_direccion:'Calle (abc) 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 214, 'SEARCH', [{alumnograduacion_direccion:'Calle abc (23) 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 215, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD (Ourense)'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 216, 'SEARCH', [{alumnograduacion_direccion:'Calle$abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 217, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD$Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 218, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23$1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 219, 'SEARCH', [{alumnograduacion_direccion:'Calle abc 23 1ºD%Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 220, 'SEARCH', [{alumnograduacion_direccion:'Calle%abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 221, 'SEARCH', [{alumnograduacion_direccion:'Calle abc%23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 222, 'SEARCH', [{alumnograduacion_direccion:'Calle, abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 223, 'SEARCH', [{alumnograduacion_direccion:'Calle abc, 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 225, 'SEARCH', [{alumnograduacion_direccion:'Calle. abc 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 226, 'SEARCH', [{alumnograduacion_direccion:'Calle abc. 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 227, 'SEARCH', [{alumnograduacion_direccion:'Calle abc. 23 1ºD Ourense'}], 'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 73, 228, 'SEARCH', [{alumnograduacion_direccion:'C'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 73, 229, 'SEARCH', [{alumnograduacion_direccion:'Calle a'}], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 73, 230, 'SEARCH', [{alumnograduacion_direccion:'Calle abc, 23, 1ºD, Ourense'}], true),

    //email
    Array('alumnograduacion', 'alumnograduacion_email', 74, 231, 'ADD', [{alumnograduacion_email:''}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 75, 232, 'ADD', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 75, 233, 'ADD', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 75, 234, 'ADD', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 76, 235, 'ADD', [{alumnograduacion_email:'enrique@gmail.com'}], true),
        
    Array('alumnograduacion', 'alumnograduacion_email', 77, 236, 'EDIT', [{alumnograduacion_email:''}], 'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 78, 237, 'EDIT', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 78, 238, 'EDIT', [{alumnograduacion_email:'enrique@gmail.'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 78, 239, 'EDIT', [{alumnograduacion_email:'enrique@gmail'}], 'alumnograduacion_email_format_KO'), 
    Array('alumnograduacion', 'alumnograduacion_email', 79, 240, 'EDIT', [{alumnograduacion_email:'enrique@gmail.com'}], true),

    Array('alumnograduacion', 'alumnograduacion_email', 80, 241, 'SEARCH', [{alumnograduacion_email:'enrique/gmail.com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 80, 242, 'SEARCH', [{alumnograduacion_email:'enrique@gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 80, 243, 'SEARCH', [{alumnograduacion_email:'enrique/gmail,com'}], 'alumnograduacion_email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 81, 244, 'SEARCH', [{alumnograduacion_email:'e'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 81, 245, 'SEARCH', [{alumnograduacion_email:'@gmail.com'}], true),
    Array('alumnograduacion', 'alumnograduacion_email', 81, 246, 'SEARCH', [{alumnograduacion_email:'enrique@gmail.com'}], true),
);

let alumnograduacion_tests_files=Array(
    //COMO SERIA EL TRUE AQUI??????
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 1, 1, 'ADD', 'format_name_file', [[]], 'alumnograduacion_fotoacto_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 2, 2, 'ADD', 'format_name_file', [[]], 'alumnograduacion_fotoacto_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 3, 'ADD', 'format_name_file', [[]], 'alumnograduacion_fotoacto_format_KO'), //Caso con acentos
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 4, 'ADD', 'format_name_file', [[]], 'alumnograduacion_fotoacto_format_KO'), //Caso con ñ
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 4, 'ADD', 'format_name_file', [[]], 'alumnograduacion_fotoacto_format_KO'), //Caso con espacios
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 4, 5, 'ADD', 'max_size_file', [[]], 'alumnograduacion_fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 5, 6, 'ADD', 'type_file', [[]], 'alumnograduacion_fotoacto_type_file_KO'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 6, 7, 'ADD', ),
);
//TOTAL DE HORAS HECHAS HASTA AHORA: 13
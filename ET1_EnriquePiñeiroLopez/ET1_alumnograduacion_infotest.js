    let alumnograduacion_def_tests=Array(
        //Login
        Array('alumnograduacion', 'alumnograduacion_login', 1, 'tamaño inferior a 4', 'ADD', false, 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 2, 'tamaño superior a 15', 'ADD', false, 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 'formato incorrecto', 'ADD', false, 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
        Array('alumnograduacion', 'alumnograduacion_login', 4, 'tamaño entre 4 y 15, y formato correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_login', 1, 'tamaño inferior a 4', 'EDIT', false, 'Ellogin es demasiado corto, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 2, 'tamaño superior a 15', 'EDIT', false, 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 'formato incorrecto', 'EDIT', false, 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
        Array('alumnograduacion', 'alumnograduacion_login', 4, 'tamaño entre 4 y 15, y formato correcto', 'EDIT', true, 'Valor correcto'),

        //Password
        Array('alumnograduacion', 'alumnograduacion_password', 1, 'tamaño inferior a 8', 'ADD', false, 'La contraseña es demasiado corta, debería tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 2, 'tamaño superior a 100', 'ADD', false, 'La contraseña es demasiado larga, deberia tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 'formato incorrecto', 'ADD', false, 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
        Array('alumnograduacion', 'alumnograduacion_password', 4, 'tamaño entre 8 y 100, y formato correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_password', 1, 'tamaño inferior a 8', 'EDIT', false, 'La contraseña es demasiado corta, deberia tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 2, 'tamaño superior a 100', 'EDIT', false, 'La contraseña es demasiado larga, deberia tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 'formato incorrecto', 'EDIT', false, 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
        Array('alumnograduacion', 'alumnograduacion_password', 4, 'tamaño entre 8 y 100, y formato correcto', 'EDIT', true, 'Valor correcto'),

        //Nombre
        Array('alumnograduacion', 'alumnograduacion_nombre', 1, 'tamaño inferior a 2', 'ADD', false, 'El nombre es demasiado corto, debe tener entre 2 y 25 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 2, 'tamaño superior a 25', 'ADD', false, 'El nombre es demasiado largo, debe tener entre 2 y 25 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 3, 'formato incorrecto', 'ADD', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 4, 'tamaño entre 2 y 25, y formato correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_nombre', 1, 'tamaño inferior a 2', 'EDIT', false, 'El nombre es demasiado corto, deberia tener entre 2 y 25 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 2, 'tamaño superior a 25', 'EDIT', false, 'El nombre es demasiado largo, deberia tener entre 2 y 25 catacteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 3, 'formato incorrecto', 'EDIT', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 4, 'tamaño entre 2 y 25, y formato correcto', true, 'Valor correcto'),
        
        //Apellidos
        Array('alumnograduacion', 'alumnograduacion_apellidos', 1, 'tamaño inferior a 2', 'ADD', false, 'Los apellidos introducidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 2, 'tamaño superior a 35', 'ADD', false, 'Los apellidos introducidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 3, 'formato incorrecto', 'ADD', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 4, 'tamaño entre 2 y 35, y formato correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_apellidos', 1, 'tamaño inferior a 2', 'EDIT', false, 'Los apellidos introducidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 2, 'tamaño superior a 35', 'EDIT', false, 'Los apellidos introducidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 3, 'formato incorrecto', 'EDIT', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 4, 'tamaño entre 2 y 35, y formato correcto', 'EDIT', false, 'Valor correcto'),

        //Titulacion
        Array('alumnograduacion', 'alumnograduacion_titulacion', 1, 'valor incorrecto', 'ADD', false, 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 2, 'valor correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_titulacion', 1, 'valor incorrecto', 'EDIT', false, 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 2, 'valor correcto', 'EDIT', true, 'Valor correcto'),

        //Dni
        //Faltaria hacer el de dni/nie 

        //Telefono
        //Aqui habria que hacer 2 comprobaciones para min y max, o vale con solo 1???
        Array('alumnograduacion', 'alumnograduacion_telefono', 1, 'longitud inferior a 9', 'ADD', false, 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 2, 'longitud superior a 9', 'ADD', false, 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 3, 'formato incorrecto', 'ADD', false, 'Error, solo se aceptan valores de tipo numerico'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 4, 'longitud 9 con solo numeros', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_telefono', 1, 'longitud inferior a 9', 'EDIT', false, 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 2, 'longitud superior a 9', 'EDIT', false, 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 3, 'formato incorrecto', 'EDIT', false, 'Error, solo se aceptan valores de tipo numerico'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 4, 'longitud 9 con solo numeros', 'EDIT', true, 'Valor correcto'),

        //Direccion
        //Habria que comprobar la longitud/si queda vacio el campo???
        Array('alumnograduacion', 'alumnograduacion_direccion', 1, 'formato incorrecto', 'ADD', false, 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios'),
        Array('alumnograduacion', 'alumnograduacion_direccion', 2, 'formato correcto', 'ADD', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_email', 1, 'formato incorrecto', 'ADD', false, 'Error, lo que escribas deberia tener un formato del tipo usuario@dominio'),
        Array('alumnograduacion', 'alumnograduacion_email', 2, 'formato correcto', 'ADD', true, 'Valor correcto'),

        //Foto
        //Este estaria bien con todas estas pruebas???
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 1, 'longitud inferior a 7', 'ADD', false, 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 2, 'longitud superior a 100', 'ADD', false, 'El nombre del archivo no puede tener mas de 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 'formato incorrecto', 'ADD', false, 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 4, 'tamaño de fichero demasiado grande', 'ADD', false, 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 5, 'tipo de fichero erroneo', 'ADD', false, 'El tipo de fichero no es valido, solo se aceptan .jpg'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 6, 'longitud entre 7 y 100, tamaño correcto, y formato y tipo de fichero correctos', 'ADD', true, 'Fichero correcto'),
    
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 1, 'longitud inferior a 7', 'EDIT', false, 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 2, 'longitud superior a 100', 'EDIT', false, 'El nombre del archivo no puede tener mas de 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 'formato incorrecto', 'EDIT', false, 'El formato no es valido, solo se puede meter alfabeticos sin acentos, ni ñ, ni espacios'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 4, 'tamaño de fichero demasiado grande', 'EDIT', false, 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 5, 'tipo de fichero erroneo', 'EDIT', false, 'El tipo de fichero no es valido, solo se aceptan .jpg'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 6, 'longitud entre 7 y 100, tamaño correcto, y formato y tipo de fichero correctos', 'EDIT', true, 'Valor correcto'),
    );

    alumnograduacion_tests_fields=
    Array(
        //login
        Array('alumnograduacion', 'alumnograduacion_login', 1, 1, 'ADD', [[]], 'alumnograduacion_login_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 2, 2, 'ADD', [[]], 'alumnograduacion_login_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 3, 'ADD', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 4, 'ADD', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 5, 'ADD', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 4, 6, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_login', 1, 1, 'EDIT', [[]], 'alumnograduacion_login_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 2, 2, 'EDIT', [[]], 'alumnograduacion_login_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 3, 'EDIT', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 4, 'EDIT', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 5, 'EDIT', [[]], 'alumnograduacion_login_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_login', 4, 6, 'EDIT', [[]], true),

        //password
        Array('alumnograduacion', 'alumnograduacion_password', 1, 1, 'ADD', [[]], 'alumnograduacion_password_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 2, 2, 'ADD', [[]], 'alumnograduacion_password_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 3, 'ADD', [[]], 'alumnograduacion_password_format_KO'), //Caso donde se mete numerico
        Array('alumnograduacion', 'alumnograduacion_password', 3, 4, 'ADD', [[]], 'alumnograduacion_password_format_KO'), //Caso donde se mete acentos
        Array('alumnograduacion', 'alumnograduacion_password', 3, 5, 'ADD', [[]], 'alumnograduacion_password_format_KO'), //Caso donde se mete ñ
        Array('alumnograduacion', 'alumnograduacion_password', 4, 6, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_password', 1, 1, 'EDIT', [[]], 'alumnograduacion_password_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 2, 2, 'EDIT', [[]], 'alumnograduacion_password_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 3, 'EDIT', [[]], 'alumnograduacion_password_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 4, 'EDIT', [[]], 'alumnograduacion_password_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 5, 'EDIT', [[]], 'alumnograduacion_password_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 6, 'EDIT', [[]], true),

        //nombre
        Array('alumnograduacion', 'alumnograduacion_nombre', 1, 1, 'ADD', [[]], 'alumnograduacion_nombre_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 2, 2, 'ADD', [[]], 'alumnograduacion_nombre_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 3, 3, 'ADD', [[]], 'alumnograduacion_nombre_format_KO'), //Caso donde se meten numeros
        Array('alumnograduacion', 'alumnograduacion_nombre', 4, 4, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_nombre', 1, 1, 'EDIT', [[]], 'alumnograduacion_nombre_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 2, 2, 'EDIT', [[]], 'alumnograduacion_nombre_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 3, 3, 'EDIT', [[]], 'alumnograduacion_nombre_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 4, 4, 'EDIT', [[]], true),

        //apellidos
        Array('alumnograduacion', 'alumnograduacion_apellidos', 1, 1, 'ADD', [[]], 'alumnograduacion_apellidos_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 2, 2, 'ADD', [[]], 'alumnograduacion_apellidos_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 3, 3, 'ADD', [[]], 'alumnograduacion_apellidos_format_KO'), //Caso donde se meten numeros
        Array('alumnograduacion', 'alumnograduacion_apellidos', 4, 4, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_apellidos', 1, 1, 'EDIT', [[]], 'alumnograduacion_apellidos_min_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 2, 2, 'EDIT', [[]], 'alumnograduacion_apellidos_max_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 3, 3, 'EDIT', [[]], 'alumnograduacion_apellidos_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 4, 4, 'EDIT', [[]], true),

        //titulacion
        Array('alumnograduacion', 'alumnograduacion_titulacion', 1, 1, 'ADD', [[]], 'alumnograduacion_titulacion_format_KO'), //Caso donde se mete algo q no sean los valores
        Array('alumnograduacion', 'alumnograduacion_titulacion', 2, 2, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_titulacion', 1, 1, 'EDIT', [[]], 'alumnograduacion_titulacion_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 2, 2, 'EDIT', [[]], true),

        //AQUI DEBERIA IR EL DE DNI

        //telefono
        Array('alumnograduacion', 'alumnograduacion_telefono', 1, 1, 'ADD', [[]], 'alumnograduacion_telefono_size_KO'), //longitud
        Array('alumnograduacion', 'alumnograduacion_telefono', 2, 2, 'ADD', [[]], 'alumnograduacion_telefono_format_KO'), //Caso donde se meten letras
        Array('alumnograduacion', 'alumnograduacion_telefono', 3, 3, 'ADD', [[]], true),
        
        Array('alumnograduacion', 'alumnograduacion_telefono', 1, 1, 'EDIT', [[]], 'alumnograduacion_telefono_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 2, 2, 'EDIT', [[]], 'alumnograduacion_telefono_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 3, 3, 'EDIT', [[]], true),

        //direccion
        Array('alumnograduacion', 'alumnograduacion_direccion', 1, 1, 'ADD', [[]], 'alumnograduacion_direccion_size_KO'), //Caso donde queda vacio el campo
        Array('alumnograduacion', 'alumnograduacion_direccion', 2, 2, 'ADD', [[]], 'alumnograduacion_direccion_format_KO'), //Caso formato?
        Array('alumnograduacion', 'alumnograduacion_direccion', 3, 3, 'ADD', [[]], true),

        Array('alumnograduacion', 'alumnograduacion_direccion', 1, 1, 'EDIT', [[]], 'alumnograduacion_direccion_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_direccion', 2, 2, 'EDIT', [[]], 'alumnograduacion_direccion_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_direccion', 3, 3, 'EDIT', [[]], true),

        //email
        Array('alumnograduacion', 'alumnograduacion_email', 1, 1, 'ADD', [[]], 'alumnograduacion_email_size_KO'), //Caso campo vacio
        Array('alumnograduacion', 'alumnograduacion_email', 2, 2, 'ADD', [[]], 'alumnograduacion_email_format_KO'), //Caso donde incumple el formato
        Array('alumnograduacion', 'alumnograduacion_email', 3, 3, 'ADD', [[]], true),
        
        Array('alumnograduacion', 'alumnograduacion_email', 1, 1, 'EDIT', [[]], 'alumnograduacion_email_size_KO'),
        Array('alumnograduacion', 'alumnograduacion_email', 2, 2, 'EDIT', [[]], 'alumnograduacion_email_format_KO'),
        Array('alumnograduacion', 'alumnograduacion_email', 3, 3, 'EDIT', [[]], true),
    );

    alumnograduacion_tests_files=
    Array(
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

    //TOTAL DE HORAS HECHAS HASTA AHORA: 10

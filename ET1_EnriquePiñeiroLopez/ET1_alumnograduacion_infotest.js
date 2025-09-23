<script type="text/javascript">
    alumnograduacion_def_tests=
    Array(
        //En 'accion a realizar' no se q carallo hay que poner
        Array('alumnograduacion', 'alumnograduacion_login', 1, 'tamaño inferior a 4', '', false, 'El login es demasiado corto, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 2, 'tamaño superior a 15', '', false, 'El login es demasiado largo, deberia tener entre 4 y 15 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_login', 3, 'formato incorrecto', '', false, 'El login solo acepta caracteres alfabeticos sin acentos ni ñ'),
        Array('alumnograduacion', 'alumnograduacion_login', 4, 'tamaño entre 4 y 15, y formato correcto', '', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_password', 1, 'tamaño inferior a 8', '', false, 'La contraseña es demasiado corta, debería tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 2, 'tamaño superior a 100', '', false, 'La contraseña es demasiado larga, deberia tener entre 8 y 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_password', 3, 'formato incorrecto', '', false, 'La contraseña incumple el formato requerido, solo se aceptan caracteres alfabeticos sin acentos ni ñ, y espacios'),
        Array('alumnograduacion', 'alumnograduacion_password', 4, 'tamaño entre 8 y 100, y formato correcto', '', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_nombre', 1, 'tamaño inferior a 2', '', false, 'El nombre es demasiado corto, debe tener entre 2 y 25 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 2, 'tamaño superior a 25', '', false, 'El nombre es demasiado largo, debe tener entre 2 y 25 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 3, 'formato incorrecto', '', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_nombre', 4, 'tamaño entre 2 y 25, y formato correcto', '', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_apellidos', 1, 'tamaño inferior a 2', '', false, 'Los apellidos introducidos son demasiado cortos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 2, 'tamaño superior a 35', '', false, 'Los apellidos introducidos son demasiado largos, debe tener entre 2 y 35 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 3, 'formato incorrecto', '', false, 'Error, solo se aceptan caracteres alfabeticos, ñ y acentos incluidos'),
        Array('alumnograduacion', 'alumnograduacion_apellidos', 4, 'tamaño entre 2 y 35, y formato correcto', '', true, 'Valor correcto'),

        //EN ESTE DE AQUI OJO, PQ NO SE SI HABRIA QUE HACER COMPROBACIONES DE LONGITUD MIN Y MAX, O SI SOLO VALE CON FORMATO
        Array('alumnograduacion', 'alumnograduacion_titulacion', 1, 'tamaño inferior a 3 caracteres', '', false, 'Las titulaciones de la esei tienen como minimo 3 caracteres alfabeticos'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 2, 'tamaño superior a 4 caracteres', '', false, 'Las titulaciones de la esei tienen como maximo 4 caracteres alfabeticos'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 3, 'valor distinto a grei, gria, mei, mia, pceo', '', false, 'Titulacion invalida. Solo tenemos GREI, GRIA, MEI, MIA o PCEO'),
        Array('alumnograduacion', 'alumnograduacion_titulacion', 4, 'longitud y valor correctos', '', true, 'Valor correcto'),

        //HASTA AQUI MAS O MENOS 3-4 HORAS

        //Faltaria hacer el de dni/nie 

        //Aqui habria que hacer 2 comprobaciones para min y max, o vale con solo 1???
        Array('alumnograduacion', 'alumnograduacion_telefono', 1, 'longitud inferior a 9', '', false, 'Los numeros de telefono no pueden tener menos de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 2, 'longitud superior a 9', '', false, 'Los numeros de telefono no pueden tener mas de 9 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 3, 'formato incorrecto', '', false, 'Error, solo se aceptan valores de tipo numerico'),
        Array('alumnograduacion', 'alumnograduacion_telefono', 4, 'longitud 9 con solo numeros', '', true, 'Valor correcto'),

        //Habria que comprobar la longitud/si queda vacio el campo???
        Array('alumnograduacion', 'alumnograduacion_direccion', 1, 'formato incorrecto', '', false, 'Error, solo se pueden introducir caracteres alfanuméricos, acentos y ñ incluidos, y espacios'),
        Array('alumnograduacion', 'alumnograduacion_direccion', 2, 'formato correcto', '', true, 'Valor correcto'),

        Array('alumnograduacion', 'alumnograduacion_email', 1, 'formato incorrecto', '', false, 'Error, lo que escribas deberia tener un formato del tipo usuario@dominio'),
        Array('alumnograduacion', 'alumnograduacion_email', 2, 'formato correcto', '', true, 'Valor correcto'),

        //Este estaria bien con todas estas pruebas???
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 1, 'longitud inferior a 7', '', false, 'El nombre del archivo debe tener por lo menos 7 caracteres o mas'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 2, 'longitud superior a 100', '', false, 'El nombre del archivo no puede tener mas de 100 caracteres'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 3, 'formato incorrecto', '', false, 'El fomato no es valido, solo se pueden meter alfabeticos sin acentos, ni ñ, ni espacios'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 4, 'tamaño de fichero demasiado grande', '', false, 'El tamaño del fichero introducido no puede superar los 2000000 bytes'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 5, 'tipo de fichero erroneo', '', false, 'El tipo de fichero no es valido, solo se aceptan .jpg'),
        Array('alumnograduacion', 'alumnograduacion_fotoacto', 6, 'longitud entre 7 y 100, tamaño correcto, y formato y tipo de fichero corrctos', '', true, 'Fichero correcto'),
    
        //HASTA AQUI OTRAS 3 HORAS
    );

    alumnograduacion_tests_fields=
    Array(

    );

    alumnograduacion_tests_files=
    Array(

    );
</script>
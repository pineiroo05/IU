let analysis_preparation_def_tests=Array(
    //id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 1, 'tamaño minimo OK', 'ADD', 'id_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe estar entre 1 y 11'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 2, 'tamaño maximo OK', 'ADD', 'id_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe estar entre 1 y 11'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 3, 'formato OK', 'ADD', 'id_analysis_preparation_format_KO', 'Formato no valido, solo se aceptan numeros'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'id_analysis_preparation', 'input', 5, 'tamaño minimo OK', 'EDIT', 'id_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe estar entre 1 y 11'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 6, 'tamaño maximo OK', 'EDIT', 'id_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe estar entre 1 y 11'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 7, 'formato OK', 'EDIT', 'id_analysis_preparation_format_KO', 'Formato no valido, solo se aceptan numeros'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'id_analysis_preparation', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'id_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe estar entre 1 y 11'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 10, 'formato OK', 'SEARCH', 'id_analysis_preparation_format_KO', 'Formato no valido, solo se aceptan numeros'),
    Array('analysis_preparation', 'id_analysis_preparation', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 12, 'tamaño minimo OK', 'ADD', 'analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 13, 'tamaño maximo OK', 'ADD', 'analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 14, 'formato OK', 'ADD', 'analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'name_analysis_preparation', 'input', 16, 'tamaño minimo OK', 'EDIT', 'analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 17, 'tamaño maximo OK', 'EDIT', 'analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 18, 'formato OK', 'EDIT', 'analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'name_analysis_preparation', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 21, 'formato OK', 'SEARCH', 'analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //descripion_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 23, 'tamaño minimo OK', 'ADD', 'description_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 80 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 24, 'tamaño maximo OK', 'ADD', 'description_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 25, 'formato OK', 'ADD', 'description_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 26, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 27, 'tamaño minimo OK', 'EDIT', 'description_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 80 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 28, 'tamaño maximo OK', 'EDIT', 'description_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 29, 'formato OK', 'EDIT', 'description_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 30, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 31, 'tamaño maximo OK', 'SEARCH', 'description_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 5000 caracteres'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 32, 'formato OK', 'SEARCH', 'description_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin acentos ni ñ'),
    Array('analysis_preparation', 'description_analysis_preparation', 'textarea', 33, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 34, 'tamaño minimo OK', 'ADD', 'bib_analysis_min_size_KO', 'Tamaño demasiado corto. Debe tener mas de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 35, 'tamaño maximo OK', 'ADD', 'bib_analysis_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 36, 'formato OK', 'ADD', 'bib_analysis_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 37, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 38, 'tamaño minimo OK', 'EDIT', 'bib_analysis_min_size_KO', 'Tamaño demasiado corto. Debe tener mas de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 39, 'tamaño maximo OK', 'EDIT', 'bib_analysis_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 40, 'formato OK', 'EDIT', 'bib_analysis_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 42, 'tamaño maximo OK', 'SEARCH', 'bib_analysis_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 43, 'formato OK', 'SEARCH', 'bib_analysis_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 44, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 45, 'tamaño maximo OK', 'SEARCH', 'file_analysis_preparation_min_size_KO', 'El tamaño es demasiado largo. Debe estar entre 7 y 100 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 46, 'formato OK', 'SEARCH', 'file_analysis_preparation_format_KO', 'Formato no valido, solo se aceptan alfabeticos con punto, sin ñ, acentos ni espacios'),
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 47, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //nuevo_file_analysis_preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 41, 'existe el fichero', 'ADD', 'nuevo_file_analysis_preparation_not_exist_file_KO', 'Error, si vas a subir un documento debe haber un fichero subido.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 42, 'tamaño maximo OK', 'ADD', 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 43, 'tipo fichero OK', 'ADD', 'nuevo_file_analysis_preparation_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 44, 'nombre OK', 'ADD', 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre no es valido, solo se caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 45, 'tamaño minimo nombre OK', 'ADD', 'nuevo_file_analysis_preparation_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 46, 'tamaño maximo nombre OK', 'ADD', 'nuevo_file_analysis_preparation_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 47, 'todo correcto', 'ADD', true, 'Fichero correcto'),

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 48, 'tamaño maximo OK', 'EDIT', 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 49, 'tipo fichero OK', 'EDIT', 'nuevo_file_analysis_preparation_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 50, 'nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 51, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 52, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 53, 'todo correcto', 'EDIT', true, 'Fichero correcto')
);

let analysis_preparation_pruebas = Array(
    // id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 1, 'ADD', [{id_analysis_preparation: ''}], 'id_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 2, 'ADD', [{id_analysis_preparation: '123456789012'}], 'id_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 3, 3, 'ADD', [{id_analysis_preparation: 'abc'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 3, 4, 'ADD', [{id_analysis_preparation: '12.3'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 4, 5, 'ADD', [{id_analysis_preparation: '123'}], true),

    Array('analysis_preparation', 'id_analysis_preparation', 5, 6, 'EDIT', [{id_analysis_preparation: ''}], 'id_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 6, 7, 'EDIT', [{id_analysis_preparation: '123456789012'}], 'id_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 7, 8, 'EDIT', [{id_analysis_preparation: 'abc'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 7, 9, 'EDIT', [{id_analysis_preparation: '12.3'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 8, 10, 'EDIT', [{id_analysis_preparation: '123'}], true),

    Array('analysis_preparation', 'id_analysis_preparation', 9, 11, 'SEARCH', [{id_analysis_preparation: '123456789012'}], 'id_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 10, 12, 'SEARCH', [{id_analysis_preparation: 'a'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 10, 13, 'SEARCH', [{id_analysis_preparation: '.'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 10, 14, 'SEARCH', [{id_analysis_preparation: 'abc'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 10, 15, 'SEARCH', [{id_analysis_preparation: '12.3'}], 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 11, 16, 'SEARCH', [{id_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'id_analysis_preparation', 11, 17, 'SEARCH', [{id_analysis_preparation: '123'}], true),

    // name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 12, 13, 'ADD', [{name_analysis_preparation: 'abc'}], 'analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 13, 14, 'ADD', [{name_analysis_preparation: 'a'.repeat(101)}], 'analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 15, 'ADD', [{name_analysis_preparation: 'aaaaaaaaá'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 16, 'ADD', [{name_analysis_preparation: 'aaaaaa aaa'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 17, 'ADD', [{name_analysis_preparation: 'aaaaaaaañ'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 15, 18, 'ADD', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    Array('analysis_preparation', 'name_analysis_preparation', 16, 19, 'EDIT', [{name_analysis_preparation: 'abc'}], 'analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 17, 20, 'EDIT', [{name_analysis_preparation: 'a'.repeat(101)}], 'analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 21, 'EDIT', [{name_analysis_preparation: 'aaaaaaaaá'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 22, 'EDIT', [{name_analysis_preparation: 'aaaaaa aaa'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 23, 'EDIT', [{name_analysis_preparation: 'aaaaaaaañ'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 19, 24, 'EDIT', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    Array('analysis_preparation', 'name_analysis_preparation', 20, 25, 'SEARCH', [{name_analysis_preparation: 'a'.repeat(101)}], 'analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 26, 'SEARCH', [{name_analysis_preparation: 'á'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 27, 'SEARCH', [{name_analysis_preparation: 'a a'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 28, 'SEARCH', [{name_analysis_preparation: 'ñ'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 29, 'SEARCH', [{name_analysis_preparation: 'aaaaaaaaá'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 30, 'SEARCH', [{name_analysis_preparation: 'aaaaaa aaa'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 31, 'SEARCH', [{name_analysis_preparation: 'aaaaaaaañ'}], 'analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 32, 'SEARCH', [{name_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 33, 'SEARCH', [{name_analysis_preparation: 'n'}], true),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 34, 'SEARCH', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 23, 35, 'ADD', [{description_analysis_preparation: 'aaaaa'}], 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 24, 36, 'ADD', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 25, 37, 'ADD', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 25, 38, 'ADD', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 26, 39, 'ADD', [{description_analysis_preparation: 'Esta es una descripcion valida sin acentos ni eñes que tiene mas de ochenta caracteres para pasar el test'}], true),

    Array('analysis_preparation', 'description_analysis_preparation', 27, 40, 'EDIT', [{description_analysis_preparation: 'aaaaa'}], 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 28, 41, 'EDIT', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 29, 42, 'EDIT', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 29, 43, 'EDIT', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 30, 44, 'EDIT', [{description_analysis_preparation: 'Esta es una descripcion valida sin acentos ni eñes que tiene mas de ochenta caracteres para pasar el test'}], true),

    Array('analysis_preparation', 'description_analysis_preparation', 31, 45, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 46, 'SEARCH', [{description_analysis_preparation: 'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 47, 'SEARCH', [{description_analysis_preparation: 'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 48, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 49, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 50, 'SEARCH', [{description_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 51, 'SEARCH', [{description_analysis_preparation: 'Esta'}], true),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 52, 'SEARCH', [{description_analysis_preparation: 'Esta es una descripcion valida sin acentos ni eñes que tiene mas de ochenta caracteres para pasar el test'}], true),

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 34, 53, 'ADD', [{bib_analysis_preparation: 'abc'}], 'bib_analysis_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 35, 54, 'ADD', [{bib_analysis_preparation: 'a'.repeat(101)}], 'bib_analysis_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 55, 'ADD', [{bib_analysis_preparation: 'a'.repeat(100)+'1'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 56, 'ADD', [{bib_analysis_preparation: 'a'.repeat(100)+'_'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 57, 'ADD', [{bib_analysis_preparation: 'a'.repeat(100)+'-'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 58, 'ADD', [{bib_analysis_preparation: 'a'.repeat(100)+'ç'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 37, 59, 'ADD', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios OK'}], true),

    Array('analysis_preparation', 'bib_analysis_preparation', 38, 53, 'EDIT', [{bib_analysis_preparation: 'abc'}], 'bib_analysis_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 39, 54, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(101)}], 'bib_analysis_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 55, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(100)+'1'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 56, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(100)+'_'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 57, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(100)+'-'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 58, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(100)+'ç'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 41, 59, 'EDIT', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios OK'}], true),

    Array('analysis_preparation', 'bib_analysis_preparation', 42, 60, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(101)}], 'bib_analysis_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 61, 'SEARCH', [{bib_analysis_preparation: '1'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 62, 'SEARCH', [{bib_analysis_preparation: '_'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 63, 'SEARCH', [{bib_analysis_preparation: '-'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 64, 'SEARCH', [{bib_analysis_preparation: 'ç'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 65, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(100)+'1'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 66, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(100)+'_'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 67, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(100)+'-'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 68, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(100)+'ç'}], 'bib_analysis_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 69, 'SEARCH', [{bib_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 70, 'SEARCH', [{bib_analysis_preparation: 'Bibliografía '}], true),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 71, 'SEARCH', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios OK'}], true),

    // file_analysis_preparation (SEARCH)
    Array('analysis_preparation', 'file_analysis_preparation', 45, 72, 'SEARCH', [{file_analysis_preparation: 'a'.repeat(101)}], 'file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 73, 'SEARCH', [{file_analysis_preparation: 'a a.pdf'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 74, 'SEARCH', [{file_analysis_preparation: 'añ.doc'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 75, 'SEARCH', [{file_analysis_preparation: 'archivo con espacio.pdf'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 76, 'SEARCH', [{file_analysis_preparation: 'archivoñ.doc'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 77, 'SEARCH', [{file_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 78, 'SEARCH', [{file_analysis_preparation: 'ar'}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 79, 'SEARCH', [{file_analysis_preparation: 'archivo'}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 80, 'SEARCH', [{file_analysis_preparation: 'archivo.pdf'}], true),

    // nuevo_file_analysis_preparation
    // FALTA ESTOOOOOOO!!!!!
);
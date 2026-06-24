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
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 12, 'tamaño minimo OK', 'ADD', 'name_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 13, 'tamaño maximo OK', 'ADD', 'name_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 14, 'formato OK', 'ADD', 'name_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'name_analysis_preparation', 'input', 16, 'tamaño minimo OK', 'EDIT', 'name_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 17, 'tamaño maximo OK', 'EDIT', 'name_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 18, 'formato OK', 'EDIT', 'name_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'name_analysis_preparation', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'name_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 'input', 21, 'formato OK', 'SEARCH', 'name_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos, sin ñ, espacios o acentos'),
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
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 34, 'tamaño minimo OK', 'ADD', 'bib_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener mas de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 35, 'tamaño maximo OK', 'ADD', 'bib_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 36, 'formato OK', 'ADD', 'bib_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 37, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 38, 'tamaño minimo OK', 'EDIT', 'bib_analysis_preparation_min_size_KO', 'Tamaño demasiado corto. Debe tener mas de 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 39, 'tamaño maximo OK', 'EDIT', 'bib_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 40, 'formato OK', 'EDIT', 'bib_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 41, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 42, 'tamaño maximo OK', 'SEARCH', 'bib_analysis_preparation_max_size_KO', 'Tamaño demasiado largo. Debe tener menos de 100 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 43, 'formato OK', 'SEARCH', 'bib_analysis_preparation_format_KO', 'Formato no valido. Solo se aceptan alfabeticos con ñ, espacios y acentos incluidos'),
    Array('analysis_preparation', 'bib_analysis_preparation', 'textarea', 44, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 45, 'tamaño maximo OK', 'SEARCH', 'file_analysis_preparation_min_size_KO', 'El tamaño es demasiado largo. Debe estar entre 7 y 100 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 46, 'formato OK', 'SEARCH', 'file_analysis_preparation_format_KO', 'Formato no valido, solo se aceptan alfabeticos con punto, sin ñ, acentos ni espacios'),
    Array('analysis_preparation', 'file_analysis_preparation', 'input', 47, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //nuevo_file_analysis_preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 48, 'existe el fichero', 'ADD', 'nuevo_file_analysis_preparation_not_exist_file_KO', 'Error, si vas a subir un documento debe haber un fichero subido.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 49, 'tamaño maximo OK', 'ADD', 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 50, 'tipo fichero OK', 'ADD', 'nuevo_file_analysis_preparation_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 51, 'nombre OK', 'ADD', 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre no es valido, solo se caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 52, 'tamaño minimo nombre OK', 'ADD', 'nuevo_file_analysis_preparation_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 53, 'tamaño maximo nombre OK', 'ADD', 'nuevo_file_analysis_preparation_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 54, 'todo correcto', 'ADD', true, 'Fichero correcto'),

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 55, 'tamaño maximo OK', 'EDIT', 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 56, 'tipo fichero OK', 'EDIT', 'nuevo_file_analysis_preparation_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 57, 'nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 58, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 59, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_file_analysis_preparation_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 'inputfile', 60, 'todo correcto', 'EDIT', true, 'Fichero correcto')
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
    Array('analysis_preparation', 'name_analysis_preparation', 12, 18, 'ADD', [{name_analysis_preparation: 'abc'}], 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 13, 19, 'ADD', [{name_analysis_preparation: 'a'.repeat(101)}], 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 20, 'ADD', [{name_analysis_preparation: 'aaaaaaaaá'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 21, 'ADD', [{name_analysis_preparation: 'aaaaaa_aa'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 14, 22, 'ADD', [{name_analysis_preparation: 'aaaaaaaañ'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 15, 23, 'ADD', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    Array('analysis_preparation', 'name_analysis_preparation', 16, 24, 'EDIT', [{name_analysis_preparation: 'abc'}], 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 17, 25, 'EDIT', [{name_analysis_preparation: 'a'.repeat(101)}], 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 26, 'EDIT', [{name_analysis_preparation: 'aaaaaaaaá'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 27, 'EDIT', [{name_analysis_preparation: 'aaaaaa_aa'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 18, 28, 'EDIT', [{name_analysis_preparation: 'aaaaaaaañ'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 19, 29, 'EDIT', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    Array('analysis_preparation', 'name_analysis_preparation', 20, 30, 'SEARCH', [{name_analysis_preparation: 'a'.repeat(101)}], 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 31, 'SEARCH', [{name_analysis_preparation: 'á'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 32, 'SEARCH', [{name_analysis_preparation: 'a_a'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 33, 'SEARCH', [{name_analysis_preparation: 'ñ'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 34, 'SEARCH', [{name_analysis_preparation: 'aaaaaaaaá'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 35, 'SEARCH', [{name_analysis_preparation: 'aaaaaa_aá'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 36, 'SEARCH', [{name_analysis_preparation: 'aaaaaaaañ'}], 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 37, 'SEARCH', [{name_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 38, 'SEARCH', [{name_analysis_preparation: 'n'}], true),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 39, 'SEARCH', [{name_analysis_preparation: 'nombreCorrecto'}], true),

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 23, 40, 'ADD', [{description_analysis_preparation: 'aaaaa'}], 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 24, 41, 'ADD', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 25, 42, 'ADD', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 25, 43, 'ADD', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 26, 44, 'ADD', [{description_analysis_preparation: 'Esta es una descripcion correctaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}], true),

    Array('analysis_preparation', 'description_analysis_preparation', 27, 45, 'EDIT', [{description_analysis_preparation: 'aaaaa'}], 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 28, 46, 'EDIT', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 29, 47, 'EDIT', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 29, 48, 'EDIT', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 30, 49, 'EDIT', [{description_analysis_preparation: 'Esta es una descripcion correctaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}], true),

    Array('analysis_preparation', 'description_analysis_preparation', 31, 50, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 51, 'SEARCH', [{description_analysis_preparation: 'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 52, 'SEARCH', [{description_analysis_preparation: 'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 53, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(80)+'á'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 32, 54, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(80)+'ñ'}], 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 55, 'SEARCH', [{description_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 56, 'SEARCH', [{description_analysis_preparation: 'Esta'}], true),
    Array('analysis_preparation', 'description_analysis_preparation', 33, 57, 'SEARCH', [{description_analysis_preparation: 'Esta es una descripcion correctaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}], true),

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 34, 58, 'ADD', [{bib_analysis_preparation: 'abc'}], 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 35, 59, 'ADD', [{bib_analysis_preparation: 'a'.repeat(201)}], 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 60, 'ADD', [{bib_analysis_preparation: 'a'.repeat(16)+'1'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 61, 'ADD', [{bib_analysis_preparation: 'a'.repeat(16)+'_'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 62, 'ADD', [{bib_analysis_preparation: 'a'.repeat(16)+'-'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 36, 63, 'ADD', [{bib_analysis_preparation: 'a'.repeat(16)+'ç'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 37, 64, 'ADD', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios'}], true),

    Array('analysis_preparation', 'bib_analysis_preparation', 38, 65, 'EDIT', [{bib_analysis_preparation: 'abc'}], 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 39, 66, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(201)}], 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 67, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(16)+'1'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 68, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(16)+'_'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 69, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(16)+'-'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 40, 70, 'EDIT', [{bib_analysis_preparation: 'a'.repeat(16)+'ç'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 41, 71, 'EDIT', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios'}], true),

    Array('analysis_preparation', 'bib_analysis_preparation', 42, 72, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(201)}], 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 73, 'SEARCH', [{bib_analysis_preparation: '1'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 74, 'SEARCH', [{bib_analysis_preparation: '_'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 75, 'SEARCH', [{bib_analysis_preparation: '-'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 76, 'SEARCH', [{bib_analysis_preparation: 'ç'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 77, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(16)+'1'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 78, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(16)+'_'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 79, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(16)+'-'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 43, 80, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(16)+'ç'}], 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 81, 'SEARCH', [{bib_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 82, 'SEARCH', [{bib_analysis_preparation: 'Bibliografía '}], true),
    Array('analysis_preparation', 'bib_analysis_preparation', 44, 83, 'SEARCH', [{bib_analysis_preparation: 'Bibliografía con eñe, acentos y espacios'}], true),

    // file_analysis_preparation (SEARCH)
    Array('analysis_preparation', 'file_analysis_preparation', 45, 84, 'SEARCH', [{file_analysis_preparation: 'a'.repeat(101)}], 'file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 85, 'SEARCH', [{file_analysis_preparation: 'a a.pdf'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 86, 'SEARCH', [{file_analysis_preparation: 'añ.doc'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 87, 'SEARCH', [{file_analysis_preparation: 'archivo con espacio.pdf'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 46, 88, 'SEARCH', [{file_analysis_preparation: 'archivoñ.doc'}], 'file_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 89, 'SEARCH', [{file_analysis_preparation: ''}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 90, 'SEARCH', [{file_analysis_preparation: 'ar'}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 91, 'SEARCH', [{file_analysis_preparation: 'archivo'}], true),
    Array('analysis_preparation', 'file_analysis_preparation', 47, 92, 'SEARCH', [{file_analysis_preparation: 'archivo.pdf'}], true),

    // nuevo_file_analysis_preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 48, 93, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:'',type_file:'',format_name_file:''}}], 'nuevo_file_analysis_preparation_not_exist_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 49, 94, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:20000000,type_file:'application/pdf',format_name_file:'documento.pdf'}}], 'nuevo_file_analysis_preparation_max_size_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 50, 95, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'image/png',format_name_file:'documento.pdf'}}], 'nuevo_file_analysis_preparation_type_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 51, 96, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documentó.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 51, 97, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documeñto.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 51, 98, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'docume nto.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 52, 99, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'do.pdf'}}], 'nuevo_file_analysis_preparation_min_file_name_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 53, 100, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'a'.repeat(104)}}], 'nuevo_file_analysis_preparation_max_file_name_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 54, 101, 'ADD', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documento.pdf'}}], true),

    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 55, 102, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:20000000,type_file:'application/pdf',format_name_file:'documento.pdf'}}], 'nuevo_file_analysis_preparation_max_size_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 56, 103, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'image/png',format_name_file:'documento.pdf'}}], 'nuevo_file_analysis_preparation_type_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 57, 104, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documentó.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 57, 105, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documeñto.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 57, 106, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'docume nto.pdf'}}], 'nuevo_file_analysis_preparation_format_name_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 58, 107, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'do.pdf'}}], 'nuevo_file_analysis_preparation_min_file_name_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 59, 108, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'a'.repeat(104)}}], 'nuevo_file_analysis_preparation_max_file_name_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 60, 109, 'EDIT', [{nuevo_file_analysis_preparation:{max_size_file:2000000 ,type_file:'application/pdf',format_name_file:'documento.pdf'}}], true),
);
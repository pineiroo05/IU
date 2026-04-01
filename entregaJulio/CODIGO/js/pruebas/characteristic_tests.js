let characteristic_def_tests=Array(
    //id_characteristic
    Array('characteristic', 'id_characteristic', 'input', 1, 'tamaño minimo OK', 'ADD', 'id_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 1 y 11'),
    Array('characteristic', 'id_characteristic', 'input', 2, 'tamaño maximo OK', 'ADD', 'id_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('characteristic', 'id_characteristic', 'input', 3, 'formato OK', 'ADD', 'id_characteristic_format_KO', 'Formato no valido. Solo se aceptan numeros'),
    Array('characteristic', 'id_characteristic', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('characteristic', 'id_characteristic', 'input', 5, 'tamaño minimo OK', 'EDIT', 'id_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 1 y 11'),
    Array('characteristic', 'id_characteristic', 'input', 6, 'tamaño maximo OK', 'EDIT', 'id_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('characteristic', 'id_characteristic', 'input', 7, 'formato OK', 'EDIT', 'id_characteristic_format_KO', 'Formato no valido. Solo se aceptan numeros'),
    Array('characteristic', 'id_characteristic', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('characteristic', 'id_characteristic', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'id_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('characteristic', 'id_characteristic', 'input', 10, 'formato OK', 'SEARCH', 'id_characteristic_format_KO', 'Formato no valido. Solo se aceptan numeros'),
    Array('characteristic', 'id_characteristic', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //name_characteristic
    Array('characteristic', 'name_characteristic', 'input', 12, 'tamaño minimo OK', 'ADD', 'name_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 8 y 100 caracteres'),
    Array('characteristic', 'name_characteristic', 'input', 13, 'tamaño maximo OK', 'ADD', 'name_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 100 caracteres'),
    Array('characteristic', 'name_characteristic', 'input', 14, 'formato OK', 'ADD', 'name_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'name_characteristic', 'input', 15, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('characteristic', 'name_characteristic', 'input', 16, 'tamaño minimo OK', 'EDIT', 'name_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 8 y 100 caracteres'),
    Array('characteristic', 'name_characteristic', 'input', 17, 'tamaño maximo OK', 'EDIT', 'name_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 100 caracteres'),
    Array('characteristic', 'name_characteristic', 'input', 18, 'formato OK', 'EDIT', 'name_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'name_characteristic', 'input', 19, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('characteristic', 'name_characteristic', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'name_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 100 caracteres'),
    Array('characteristic', 'name_characteristic', 'input', 21, 'formato OK', 'SEARCH', 'name_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'name_characteristic', 'input', 22, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //description_characteristic
    Array('characteristic', 'description_characteristic', 'textarea', 23, 'tamaño minimo OK', 'ADD', 'description_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 80 y 500 caracteres'),
    Array('characteristic', 'description_characteristic', 'textarea', 24, 'tamaño maximo OK', 'ADD', 'description_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 80 y 500 caracteres'),
    Array('characteristic', 'description_characteristic', 'textarea', 25, 'formato OK', 'ADD', 'description_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'description_characteristic', 'textarea', 26, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('characteristic', 'description_characteristic', 'textarea', 27, 'tamaño minimo OK', 'EDIT', 'description_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 80 y 500 caracteres'),
    Array('characteristic', 'description_characteristic', 'textarea', 28, 'tamaño maximo OK', 'EDIT', 'description_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 80 y 500 caracteres'),
    Array('characteristic', 'description_characteristic', 'textarea', 29, 'formato OK', 'EDIT', 'description_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'description_characteristic', 'textarea', 30, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('characteristic', 'description_characteristic', 'textarea', 31, 'tamaño maximo OK', 'SEARCH', 'description_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 80 y 500 caracteres'),
    Array('characteristic', 'description_characteristic', 'textarea', 32, 'formato OK', 'SEARCH', 'description_characteristic_format_KO', 'Formato no valido. Solo se aceptan alfabeticos y espacios, sin ñ ni acentos'),
    Array('characteristic', 'description_characteristic', 'textarea', 33, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //data_type_characteristic
    Array('characteristic', 'data_type_characteristic', 'select', 34, 'tamaño minimo OK', 'ADD', 'data_type_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 3 y 6 caracteres'),
    Array('characteristic', 'data_type_characteristic', 'select', 35, 'tamaño maximo OK', 'ADD', 'data_type_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 3 y 6 caracteres'),
    Array('characteristic', 'data_type_characteristic', 'select', 36, 'formato OK', 'ADD', 'data_type_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'data_type_characteristic', 'select', 37, 'valor OK', 'ADD', 'data_type_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan number, text o set'),
    Array('characteristic', 'data_type_characteristic', 'select', 38, 'todo correcto OK', 'ADD', true, 'Todo correcto'),

    Array('characteristic', 'data_type_characteristic', 'select', 39, 'tamaño minimo OK', 'EDIT', 'data_type_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 3 y 6 caracteres'),
    Array('characteristic', 'data_type_characteristic', 'select', 40, 'tamaño maximo OK', 'EDIT', 'data_type_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 3 y 6 caracteres'),
    Array('characteristic', 'data_type_characteristic', 'select', 41, 'formato OK', 'EDIT', 'data_type_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'data_type_characteristic', 'select', 42, 'valor OK', 'EDIT', 'data_type_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan number, text o set'),
    Array('characteristic', 'data_type_characteristic', 'select', 43, 'todo correcto OK', 'EDIT', true, 'Todo correcto'),

    Array('characteristic', 'data_type_characteristic', 'select', 44, 'tamaño maximo OK', 'SEARCH', 'data_type_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 3 y 6 caracteres'),
    Array('characteristic', 'data_type_characteristic', 'select', 45, 'formato OK', 'SEARCH', 'data_type_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'data_type_characteristic', 'select', 46, 'valor OK', 'SEARCH', 'data_type_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan number, text o set'),
    Array('characteristic', 'data_type_characteristic', 'select', 47, 'todo correcto OK', 'SEARCH', true, 'Todo correcto'),

    //category_characteristc
    Array('characteristic', 'category_characteristic', 'select', 48, 'tamaño minimo OK', 'ADD', 'category_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 8 y 9 caracteres'),
    Array('characteristic', 'category_characteristic', 'select', 49, 'tamaño minimo OK', 'ADD', 'category_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 9 caracteres'),
    Array('characteristic', 'category_characteristic', 'select', 50, 'formato OK', 'ADD', 'category_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'category_characteristic', 'select', 51, 'valor OK', 'ADD', 'category_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan soil_site, soil_chem o soil_bio'),
    Array('characteristic', 'category_characteristic', 'select', 52, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('characteristic', 'category_characteristic', 'select', 53, 'tamaño minimo OK', 'EDIT', 'category_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 8 y 9 caracteres'),
    Array('characteristic', 'category_characteristic', 'select', 54, 'tamaño minimo OK', 'EDIT', 'category_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 9 caracteres'),
    Array('characteristic', 'category_characteristic', 'select', 55, 'formato OK', 'EDIT', 'category_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'category_characteristic', 'select', 56, 'valor OK', 'EDIT', 'category_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan soil_site, soil_chem o soil_bio'),
    Array('characteristic', 'category_characteristic', 'select', 57, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('characteristic', 'category_characteristic', 'select', 58, 'tamaño minimo OK', 'SEARCH', 'category_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 8 y 9 caracteres'),
    Array('characteristic', 'category_characteristic', 'select', 59, 'formato OK', 'SEARCH', 'category_characteristic_format_KO', 'Formato no valido solo se aceptan alfebeticos, sin espacios, acentos o ñ'),
    Array('characteristic', 'category_characteristic', 'select', 60, 'valor OK', 'SEARCH', 'category_characteristic_valor_permitido_KO', 'El valor no se permite. Solo se aceptan soil_site, soil_chem o soil_bio'),
    Array('characteristic', 'category_characteristic', 'select', 61, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 'textarea', 62, 'tamaño minimo OK', 'ADD', 'bibref_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 16 y 200 caracteres'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 63, 'tamaño maximo OK', 'ADD', 'bibref_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 16 y 200 caracteres'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 64, 'formato OK', 'ADD', 'bibref_characteristic_format_KO', 'Formato no valido, solo se aceptan alfabeticos, con ñ, acentos, espacios, y puntuaciones incluidas'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 65, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('characteristic', 'bibref_characteristic', 'textarea', 66, 'tamaño minimo OK', 'EDIT', 'bibref_characteristic_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 16 y 200 caracteres'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 67, 'tamaño maximo OK', 'EDIT', 'bibref_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 16 y 200 caracteres'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 68, 'formato OK', 'EDIT', 'bibref_characteristic_format_KO', 'Formato no valido, solo se aceptan alfabeticos, con ñ, acentos, espacios, y puntuaciones incluidas'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 69, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('characteristic', 'bibref_characteristic', 'textarea', 70, 'tamaño maximo OK', 'SEARCH', 'bibref_characteristic_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 16 y 200 caracteres'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 71, 'formato OK', 'SEARCH', 'bibref_characteristic_format_KO', 'Formato no valido, solo se aceptan alfabeticos, con ñ, acentos, espacios, y puntuaciones incluidas'),
    Array('characteristic', 'bibref_characteristic', 'textarea', 72, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //file_characteristic
    Array('characteristic', 'file_characteristic', 'input', 73, 'tamaño maximo OK', 'SEARCH', 'file_characteristic_min_size_KO', 'El tamaño es demasiado largo. Debe estar entre 7 y 100 caracteres'),
    Array('characteristic', 'file_characteristic', 'input', 74, 'formato OK', 'SEARCH', 'file_characteristic_format_KO', 'Formato no valido, solo se aceptan alfabeticos con punto, sin ñ, acentos ni espacios'),
    Array('characteristic', 'file_characteristic', 'input', 75, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //nuevo_file_characteristic
    Array('characteristic', 'file_characteristic', 'inputfile', 76, 'existe el fichero', 'ADD', 'nuevo_file_characteristic_not_exist_file_KO', 'Error, si vas a subir una foto debe haber un fichero subido.'),
    Array('characteristic', 'file_characteristic', 'inputfile', 77, 'tamaño maximo OK', 'ADD', 'nuevo_file_characteristic_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('characteristic', 'file_characteristic', 'inputfile', 78, 'tipo fichero OK', 'ADD', 'nuevo_file_characteristic_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('characteristic', 'file_characteristic', 'inputfile', 79, 'nombre OK', 'ADD', 'nuevo_file_characteristic_format_name_file_KO', 'El nombre no es valido, solo se caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('characteristic', 'file_characteristic', 'inputfile', 80, 'tamaño minimo nombre OK', 'ADD', 'nuevo_file_characteristic_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('characteristic', 'file_characteristic', 'inputfile', 81, 'tamaño maximo nombre OK', 'ADD', 'nuevo_file_characteristic_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('characteristic', 'file_characteristic', 'inputfile', 82, 'todo correcto', 'ADD', true, 'Fichero correcto'),

    Array('characteristic', 'file_characteristic', 'inputfile', 83, 'tamaño maximo OK', 'EDIT', 'nuevo_file_characteristic_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('characteristic', 'file_characteristic', 'inputfile', 84, 'tipo fichero OK', 'EDIT', 'nuevo_file_characteristic_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('characteristic', 'file_characteristic', 'inputfile', 85, 'nombre OK', 'EDIT', 'nuevo_file_characteristic_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('characteristic', 'file_characteristic', 'inputfile', 86, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_alumnograduacion_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('characteristic', 'file_characteristic', 'inputfile', 87, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_alumnograduacion_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('characteristic', 'file_characteristic', 'inputfile', 88, 'todo correcto', 'EDIT', true, 'Fichero correcto')
);

let characteristic_pruebas=Array(
    //id_characteristic
    Array('characteristic', 'id_characteristic', 1, 1, 'ADD', [{id_characteristic: ''}], 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 2, 'ADD', [{id_characteristic: '123456789012'}], 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 3, 3, 'ADD', [{id_characteristic: '12-3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 3, 4, 'ADD', [{id_characteristic: 'abc'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 3, 5, 'ADD', [{id_characteristic: '12.3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 3, 6, 'ADD', [{id_characteristic: '12 3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 4, 7, 'ADD', [{id_characteristic: '123'}], true),

    Array('characteristic', 'id_characteristic', 5, 8, 'EDIT', [{id_characteristic: ''}], 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 6, 9, 'EDIT', [{id_characteristic: '123456789012'}], 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 7, 10, 'EDIT', [{id_characteristic: '12-3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 7, 11, 'EDIT', [{id_characteristic: 'abc'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 7, 12, 'EDIT', [{id_characteristic: '12.3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 7, 13, 'EDIT', [{id_characteristic: '12 3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 8, 14, 'EDIT', [{id_characteristic: '123'}], true),

    Array('characteristic', 'id_characteristic', 9, 14, 'SEARCH', [{id_characteristic: '123456789012'}], 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 10, 15, 'SEARCH', [{id_characteristic: 'abc'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 10, 16, 'SEARCH', [{id_characteristic: '-'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 10, 17, 'SEARCH', [{id_characteristic: '12-3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 10, 18, 'SEARCH', [{id_characteristic: 'abc'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 10, 19, 'SEARCH', [{id_characteristic: '12.3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 10, 20, 'SEARCH', [{id_characteristic: '12 3'}], 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 11, 21, 'SEARCH', [{id_characteristic: ''}], true),
    Array('characteristic', 'id_characteristic', 11, 22, 'SEARCH', [{id_characteristic: '1'}], true),
    Array('characteristic', 'id_characteristic', 11, 23, 'SEARCH', [{id_characteristic: '123'}], true),

    //name_characteristic
    Array('characteristic', 'name_characteristic', 12, 24, 'ADD', [{name_characteristic:'a'.repeat(6)}], 'name_characteristoc_min_size_KO'),
    Array('characteristic', 'name_characteristic', 13, 25, 'ADD', [{name_characteristic:'a'.repeat(102)}], 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 14, 26, 'ADD', [{name_characteristic:'abcñefgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 14, 27, 'ADD', [{name_characteristic:'abc efgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 14, 28, 'ADD', [{name_characteristic:'abcdéfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 14, 29, 'ADD', [{name_characteristic:'abc_dfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 15, 30, 'ADD', [{name_characteristic:'abcdefghi'}], true),

    Array('characteristic', 'name_characteristic', 16, 31, 'EDIT', [{name_characteristic:'a'.repeat(6)}], 'name_characteristoc_min_size_KO'),
    Array('characteristic', 'name_characteristic', 17, 32, 'EDIT', [{name_characteristic:'a'.repeat(102)}], 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 18, 33, 'EDIT', [{name_characteristic:'abcñefgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 18, 34, 'EDIT', [{name_characteristic:'abc efgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 18, 35, 'EDIT', [{name_characteristic:'abcdéfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 18, 36, 'EDIT', [{name_characteristic:'abc_dfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 19, 37, 'EDIT', [{name_characteristic:'abcdefghi'}], true),

    Array('characteristic', 'name_characteristic', 20, 25, 'SEARCH', [{name_characteristic:'a'.repeat(102)}], 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 21, 26, 'SEARCH', [{name_characteristic:'ñ'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 27, 'SEARCH', [{name_characteristic:' '}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 28, 'SEARCH', [{name_characteristic:'_'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 29, 'SEARCH', [{name_characteristic:'abcñefgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 30, 'SEARCH', [{name_characteristic:'abc efgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 31, 'SEARCH', [{name_characteristic:'abcdéfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 21, 32, 'SEARCH', [{name_characteristic:'abc_dfgh'}], 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 22, 33, 'SEARCH', [{name_characteristic:''}], true),
    Array('characteristic', 'name_characteristic', 22, 34, 'SEARCH', [{name_characteristic:'a'}], true),
    Array('characteristic', 'name_characteristic', 22, 35, 'SEARCH', [{name_characteristic: 'abcdefghi'}], true),

    //description_characteristic
);
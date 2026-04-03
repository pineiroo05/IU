let project_def_tests=Array(
    //id_project
    Array('project', 'id_project', 'input', 1, 'tamaño minimo OK', 'ADD', 'id_project_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 1 y 11'),
    Array('project', 'id_project', 'input', 2, 'tamaño maximo OK', 'ADD', 'id_project_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('project', 'id_project', 'input', 3, 'formato OK', 'ADD', 'id_project_format_KO', 'Formato no valido. Solo se aceptan numericos'),
    Array('project', 'id_project', 'input', 4, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'id_project', 'input', 5, 'tamaño minimo OK', 'EDIT', 'id_project_min_size_KO', 'El tamaño es demasiado corto. Debe estar entre 1 y 11'),
    Array('project', 'id_project', 'input', 6, 'tamaño maximo OK', 'EDIT', 'id_project_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('project', 'id_project', 'input', 7, 'formato OK', 'EDIT', 'id_project_format_KO', 'Formato no valido. Solo se aceptan numericos'),
    Array('project', 'id_project', 'input', 8, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'id_project', 'input', 9, 'tamaño maximo OK', 'SEARCH', 'id_project_max_size_KO', 'El tamaño es demasiado largo. Debe estar entre 1 y 11'),
    Array('project', 'id_project', 'input', 10, 'formato OK', 'SEARCH', 'id_project_format_KO', 'Formato no valido. Solo se aceptan numericos'),
    Array('project', 'id_project', 'input', 11, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //name_project
    Array('project', 'name_project', 'input', 12, 'tamaño minimo OK', 'ADD', 'name_project_min_size_KO', 'El tamaño es demasiado corto. Debe haber como minimo 15 caracteres'),
    Array('project', 'name_project', 'input', 13, 'tamaño maximo OK', 'ADD', 'name_project_max_size_KO', 'El tamaño es demasiado largo. Debe haber como maximo 100 caracteres'),
    Array('project', 'name_project', 'input', 14, 'formato OK', 'ADD', 'name_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos y espacios, sin ñ ni acentos'),
    Array('project', 'name_project', 'input', 15, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'name_project', 'input', 16, 'tamaño minimo OK', 'EDIT', 'name_project_min_size_KO', 'El tamaño es demasiado corto. Debe haber como minimo 15 caracteres'),
    Array('project', 'name_project', 'input', 17, 'tamaño maximo OK', 'EDIT', 'name_project_max_size_KO', 'El tamaño es demasiado largo. Debe haber como maximo 100 caracteres'),
    Array('project', 'name_project', 'input', 18, 'formato OK', 'EDIT', 'name_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos y espacios, sin ñ ni acentos'),
    Array('project', 'name_project', 'input', 19, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'name_project', 'input', 20, 'tamaño maximo OK', 'SEARCH', 'name_project_max_size_KO', 'El tamaño es demasiado largo. Debe haber como maximo 100 caracteres'),
    Array('project', 'name_project', 'input', 21, 'formato OK', 'SEARCH', 'name_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos y espacios, sin ñ ni acentos'),
    Array('project', 'name_project', 'input', 22, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //start_date_project
    Array('project', 'start_date_project', 'input', 23, 'tamaño minimo OK', 'ADD', 'start_date_project_min_size_KO', 'Tamaño demasiado corto. No puede haber menos de 10 caracteres'),
    Array('project', 'start_date_project', 'input', 24, 'tamaño maximo OK', 'ADD', 'start_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'start_date_project', 'input', 25, 'formato OK', 'ADD', 'start_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    Array('project', 'start_date_project', 'input', 26, 'fecha inicio/fin OK', 'ADD', 'fecha_inicio_mayor_fin_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'start_date_project', 'input', 27, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'start_date_project', 'input', 28, 'tamaño minimo OK', 'EDIT', 'start_date_project_min_size_KO', 'Tamaño demasiado corto. No puede haber menos de 10 caracteres'),
    Array('project', 'start_date_project', 'input', 29, 'tamaño maximo OK', 'EDIT', 'start_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'start_date_project', 'input', 30, 'formato OK', 'EDIT', 'start_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    Array('project', 'start_date_project', 'input', 31, 'fecha inicio/fin OK', 'EDIT', 'fecha_inicio_mayor_fin_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'start_date_project', 'input', 32, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'start_date_project', 'input', 33, 'tamaño maximo OK', 'SEARCH', 'start_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'start_date_project', 'input', 34, 'formato OK', 'SEARCH', 'start_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    //Array('project', 'start_date_project', 'input', 26, 'fecha inicio/fin OK', 'ADD', 'fecha_inicio_mayor_fin_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'start_date_project', 'input', 35, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //end_date_project
    Array('project', 'end_date_project', 'input', 36, 'tamaño minimo OK', 'ADD', 'end_date_project_min_size_KO', 'Tamaño demasiado corto. No puede haber menos de 10 caracteres'),
    Array('project', 'end_date_project', 'input', 37, 'tamaño maximo OK', 'ADD', 'end_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'end_date_project', 'input', 38, 'formato OK', 'ADD', 'end_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    Array('project', 'end_date_project', 'input', 39, 'fecha inicio/fin OK', 'ADD', 'fecha_fin_menor_inicio_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'end_date_project', 'input', 40, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'end_date_project', 'input', 41, 'tamaño minimo OK', 'EDIT', 'end_date_project_min_size_KO', 'Tamaño demasiado corto. No puede haber menos de 10 caracteres'),
    Array('project', 'end_date_project', 'input', 42, 'tamaño maximo OK', 'EDIT', 'end_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'end_date_project', 'input', 43, 'formato OK', 'EDIT', 'end_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    Array('project', 'end_date_project', 'input', 44, 'fecha inicio/fin OK', 'EDIT', 'fecha_fin_menor_inicio_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'end_date_project', 'input', 45, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'end_date_project', 'input', 46, 'tamaño maximo OK', 'SEARCH', 'end_date_project_max_size_KO', 'Tamaño demasiado largo. No puede haber mas de 10 caracteres'),
    Array('project', 'end_date_project', 'input', 47, 'formato OK', 'SEARCH', 'end_date_project_format_KO', 'Formato no valido, debe seguir el formato dd/mm/aaaa'),
    //Array('project', 'end_date_project', 'input', 26, 'fecha inicio/fin OK', 'ADD', 'fecha_fin_menor_inicio_KO', 'Error, la fecha de inicio no puede ser mayor a la de fin'),
    Array('project', 'end_date_project', 'input', 48, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //responsable_project
    Array('project', 'responsable_project', 'input', 49, 'tamaño minimo OK', 'ADD', 'responsable_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 6 caracteres'),
    Array('project', 'responsable_project', 'input', 50, 'tamaño maximo OK', 'ADD', 'responsable_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 60 caracteres'),
    Array('project', 'responsable_project', 'input', 51, 'formato OK', 'ADD', 'responsable_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'responsable_project', 'input', 52, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('project', 'responsable_project', 'input', 53, 'tamaño minimo OK', 'EDIT', 'responsable_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 6 caracteres'),
    Array('project', 'responsable_project', 'input', 54, 'tamaño maximo OK', 'EDIT', 'responsable_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 60 caracteres'),
    Array('project', 'responsable_project', 'input', 55, 'formato OK', 'EDIT', 'responsable_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'responsable_project', 'input', 56, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('project', 'responsable_project', 'input', 57, 'tamaño maximo OK', 'SEARCH', 'responsable_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 60 caracteres'),
    Array('project', 'responsable_project', 'input', 58, 'formato OK', 'SEARCH', 'responsable_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'responsable_project', 'input', 59, 'todo correcto', 'SEARCH', true, 'Todo correcto'),
    
    //organization_project
    Array('project', 'organization_project', 'input', 60, 'tamaño minimo OK', 'ADD', 'organization_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 6 caracteres'),
    Array('project', 'organization_project', 'input', 61, 'tamaño maximo OK', 'ADD', 'organization_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 100 caracteres'),
    Array('project', 'organization_project', 'input', 62, 'formato OK', 'ADD', 'organization_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'organization_project', 'input', 63, 'todo correcto', 'ADD', true, 'Todo correcto'),

    Array('project', 'organization_project', 'input', 64, 'tamaño minimo OK', 'EDIT', 'organization_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 6 caracteres'),
    Array('project', 'organization_project', 'input', 65, 'tamaño maximo OK', 'EDIT', 'organization_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 100 caracteres'),
    Array('project', 'organization_project', 'input', 66, 'formato OK', 'EDIT', 'organization_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'organization_project', 'input', 67, 'todo correcto', 'EDIT', true, 'Todo correcto'),

    Array('project', 'organization_project', 'input', 68, 'tamaño maximo OK', 'SEARCH', 'organization_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 100 caracteres'),
    Array('project', 'organization_project', 'input', 69, 'formato OK', 'SEARCH', 'organization_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos, ñ, espacios y acentos incluidos'),
    Array('project', 'organization_project', 'input', 70, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //description_project ME HACE FALTA COMPROBAR FORMATO?????????
    Array('project', 'description_project', 'textarea', 71, 'tamaño minimo OK', 'ADD', 'description_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 30 caracteres'),
    Array('project', 'description_project', 'textarea', 72, 'tamaño maximo OK', 'ADD', 'description_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 500 caracteres'),
    Array('project', 'description_project', 'textarea', 73, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'description_project', 'textarea', 74, 'tamaño minimo OK', 'EDIT', 'description_project_min_size_KO', 'Tamaño demasiado corto. Debe tener minimo 30 caracteres'),
    Array('project', 'description_project', 'textarea', 75, 'tamaño maximo OK', 'EDIT', 'description_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 500 caracteres'),
    Array('project', 'description_project', 'textarea', 76, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'description_project', 'textarea', 77, 'tamaño maximo OK', 'SEARCH', 'description_project_max_size_KO', 'Tamaño demasiado largo. Debe tener maximo 500 caracteres'),
    Array('project', 'description_project', 'textarea', 78, 'todo correcto', 'SEARCH', true, 'Valor correcto'),
    
    //file_project
    Array('project', 'file_project', 'input', 79, 'tamaño maximo OK', 'SEARCH', 'file_project_min_size_KO', 'El tamaño es demasiado largo. Debe estar entre 7 y 100 caracteres'),
    Array('project', 'file_project', 'input', 80, 'formato OK', 'SEARCH', 'file_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos con punto, sin ñ, acentos ni espacios'),
    Array('project', 'file_project', 'input', 81, 'todo correcto', 'SEARCH', true, 'Todo correcto'),

    //nuevo_file_project
    Array('project', 'nuevo_file_project', 'inputfile', 82, 'existe el fichero', 'ADD', 'nuevo_file_project_not_exist_file_KO', 'Error, si vas a subir un documento debe haber un fichero subido.'),
    Array('project', 'nuevo_file_project', 'inputfile', 83, 'tamaño maximo OK', 'ADD', 'nuevo_file_project_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('project', 'nuevo_file_project', 'inputfile', 84, 'tipo fichero OK', 'ADD', 'nuevo_file_project_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('project', 'nuevo_file_project', 'inputfile', 85, 'nombre OK', 'ADD', 'nuevo_file_project_format_name_file_KO', 'El nombre no es valido, solo se caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('project', 'nuevo_file_project', 'inputfile', 86, 'tamaño minimo nombre OK', 'ADD', 'nuevo_file_project_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('project', 'nuevo_file_project', 'inputfile', 87, 'tamaño maximo nombre OK', 'ADD', 'nuevo_file_project_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('project', 'nuevo_file_project', 'inputfile', 88, 'todo correcto', 'ADD', true, 'Fichero correcto'),

    Array('project', 'nuevo_file_project', 'inputfile', 89, 'tamaño maximo OK', 'EDIT', 'nuevo_file_project_max_size_file_KO', 'El archivo no puede tener mas de 20MB'),
    Array('project', 'nuevo_file_project', 'inputfile', 90, 'tipo fichero OK', 'EDIT', 'nuevo_file_project_type_file_KO', 'El tipo de archivo no es valido, solo puedes meter pdf, doc o docx'),
    Array('project', 'nuevo_file_project', 'inputfile', 91, 'nombre OK', 'EDIT', 'nuevo_file_project_format_name_file_KO', 'El nombre no es valido, solo se aceptan caracteres alfanumericos, sin ñ acentos ni espacios.'),
    Array('project', 'nuevo_file_project', 'inputfile', 92, 'tamaño minimo nombre OK', 'EDIT', 'nuevo_file_project_min_file_name_size_KO', 'Error, el nombre no puede tener menos de 7 caracteres.'),
    Array('project', 'nuevo_file_project', 'inputfile', 93, 'tamaño maximo nombre OK', 'EDIT', 'nuevo_file_project_max_file_name_size_KO', 'Error, el nombre no puede tener mas de 100 caracteres'),
    Array('project', 'nuevo_file_project', 'inputfile', 94, 'todo correcto', 'EDIT', true, 'Fichero correcto'),

    //code_project
    Array('project', 'code_project', 'input', 95, 'tamaño minimo OK', 'ADD', 'code_project_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 6 caracteres'),
    Array('project', 'code_project', 'input', 96, 'tamaño maximo OK', 'ADD', 'code_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 50 caracteres'),
    Array('project', 'code_project', 'input', 97, 'formato OK', 'ADD', 'code_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos con ñ, espacios y puntuacion, pero sin acentos'),
    Array('project', 'code_project', 'input', 98, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'code_project', 'input', 99, 'tamaño minimo OK', 'EDIT', 'code_project_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 6 caracteres'),
    Array('project', 'code_project', 'input', 100, 'tamaño maximo OK', 'EDIT', 'code_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 50 caracteres'),
    Array('project', 'code_project', 'input', 101, 'formato OK', 'EDIT', 'code_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos con ñ, espacios y puntuacion, pero sin acentos'),
    Array('project', 'code_project', 'input', 102, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'code_project', 'input', 103, 'tamaño maximo OK', 'SEARCH', 'code_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 50 caracteres'),
    Array('project', 'code_project', 'input', 104, 'formato OK', 'SEARCH', 'code_project_format_KO', 'Formato no valido, solo se aceptan caracteres alfabeticos con ñ, espacios y puntuacion, pero sin acentos'),
    Array('project', 'code_project', 'input', 105, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //acronym_project
    Array('project', 'acronym_project', 'input', 106, 'tamaño minimo OK', 'ADD', 'acronym_project_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 6 caracteres'),
    Array('project', 'acronym_project', 'input', 107, 'tamaño maximo OK', 'ADD', 'acronym_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 15 caracteres'),
    Array('project', 'acronym_project', 'input', 108, 'formato OK', 'ADD', 'acronym_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos con ñ y puntuaciones, pero sin acentos ni espacios'),
    Array('project', 'acronym_project', 'input', 109, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'acronym_project', 'input', 110, 'tamaño minimo OK', 'EDIT', 'acronym_project_min_size_KO', 'Tamaño demasiado corto. Debe tener como minimo 6 caracteres'),
    Array('project', 'acronym_project', 'input', 111, 'tamaño maximo OK', 'EDIT', 'acronym_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 15 caracteres'),
    Array('project', 'acronym_project', 'input', 112, 'formato OK', 'EDIT', 'acronym_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos con ñ y puntuaciones, pero sin acentos ni espacios'),
    Array('project', 'acronym_project', 'input', 113, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'acronym_project', 'input', 114, 'tamaño maximo OK', 'SEARCH', 'acronym_project_max_size_KO', 'Tamaño demasiado largo. Debe tener como maximo 15 caracteres'),
    Array('project', 'acronym_project', 'input', 115, 'formato OK', 'SEARCH', 'acronym_project_format_KO', 'Formato no valido, solo se aceptan alfabeticos con ñ y puntuaciones, pero sin acentos ni espacios'),
    Array('project', 'acronym_project', 'input', 116, 'todo correcto', 'SEARCH', true, 'Valor correcto'),

    //id_sampling_methodology
    Array('project', 'id_sampling_methodology_project', 'input', 117, 'tamaño minimo OK', 'ADD', 'id_sampling_methodology_project_min_size_KO', 'Tamaño demasido corto, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology_project', 'input', 118, 'tamaño maximo OK', 'ADD', 'id_sampling_methodology_project_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology_project', 'input', 119, 'formato OK', 'ADD', 'id_sampling_methodology_project_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology_project', 'input', 120, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'id_sampling_methodology_project', 'input', 121, 'tamaño minimo OK', 'EDIT', 'id_sampling_methodology_project_min_size_KO', 'Tamaño demasido corto, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology_project', 'input', 122, 'tamaño maximo OK', 'EDIT', 'id_sampling_methodology_project_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology_project', 'input', 123, 'formato OK', 'EDIT', 'id_sampling_methodology_project_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology_project', 'input', 124, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'id_sampling_methodology_project', 'input', 125, 'tamaño maximo OK', 'SEARCH', 'id_sampling_methodology_project_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology_project', 'input', 126, 'formato OK', 'SEARCH', 'id_sampling_methodology_project_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology_project', 'input', 127, 'todo correcto', 'SEARCH', true, 'Valor correcto')
);

let project_pruebas = Array(
    //id_project
    Array('project', 'id_project', 1, 1, 'ADD', [{id_project: ''}], 'id_project_min_size_KO'),
    Array('project', 'id_project', 2, 2, 'ADD', [{id_project: '123456789012'}], 'id_project_max_size_KO'),
    Array('project', 'id_project', 3, 3, 'ADD', [{id_project: 'abc'}], 'id_project_format_KO'),
    Array('project', 'id_project', 3, 4, 'ADD', [{id_project: '12.3'}], 'id_project_format_KO'),
    Array('project', 'id_project', 3, 5, 'ADD', [{id_project: '12-3'}], 'id_project_format_KO'),
    Array('project', 'id_project', 4, 6, 'ADD', [{id_project: '123'}], true),

    Array('project', 'id_project', 5, 7, 'EDIT', [{id_project: ''}], 'id_project_min_size_KO'),
    Array('project', 'id_project', 6, 8, 'EDIT', [{id_project: '123456789012'}], 'id_project_max_size_KO'),
    Array('project', 'id_project', 7, 9, 'EDIT', [{id_project: 'abc'}], 'id_project_format_KO'),
    Array('project', 'id_project', 7, 10, 'EDIT', [{id_project: '12.3'}], 'id_project_format_KO'),
    Array('project', 'id_project', 7, 11, 'EDIT', [{id_project: '12-3'}], 'id_project_format_KO'),
    Array('project', 'id_project', 8, 12, 'EDIT', [{id_project: '456'}], true),

    Array('project', 'id_project', 9, 13, 'SEARCH', [{id_project: '123456789012'}], 'id_project_max_size_KO'),
    Array('project', 'id_project', 10, 14, 'SEARCH', [{id_project: 'abc'}], 'id_project_format_KO'),
    Array('project', 'id_project', 10, 15, 'SEARCH', [{id_project: '.'}], 'id_project_format_KO'),
    Array('project', 'id_project', 10, 16, 'SEARCH', [{id_project: '-'}], 'id_project_format_KO'),
    Array('project', 'id_project', 10, 17, 'SEARCH', [{id_project: ' '}], 'id_project_format_KO'),
    Array('project', 'id_project', 10, 18, 'SEARCH', [{id_project: '1a'}], 'id_project_format_KO'),
    Array('project', 'id_project', 10, 19, 'SEARCH', [{id_project: '@'}], 'id_project_format_KO'),
    Array('project', 'id_project', 11, 20, 'SEARCH', [{id_project: ''}], true),
    Array('project', 'id_project', 11, 21, 'SEARCH', [{id_project: '1'}], true),
    Array('project', 'id_project', 11, 22, 'SEARCH', [{id_project: '123'}], true),

    //name_project
    Array('project', 'name_project', 12, 23, 'ADD', [{name_project: 'Corto'}], 'name_project_min_size_KO'),
    Array('project', 'name_project', 13, 24, 'ADD', [{name_project: 'a'.repeat(101)}], 'name_project_max_size_KO'),
    Array('project', 'name_project', 14, 25, 'ADD', [{name_project: 'Proyecto con ñ'}], 'name_project_format_KO'),
    Array('project', 'name_project', 14, 26, 'ADD', [{name_project: 'Proyecto con á'}], 'name_project_format_KO'),
    Array('project', 'name_project', 14, 27, 'ADD', [{name_project: 'Proyecto 123'}], 'name_project_format_KO'),
    Array('project', 'name_project', 15, 28, 'ADD', [{name_project: 'Proyecto de Investigacion Experimental'}], true),

    Array('project', 'name_project', 16, 29, 'EDIT', [{name_project: 'Corto'}], 'name_project_min_size_KO'),
    Array('project', 'name_project', 17, 30, 'EDIT', [{name_project: 'a'.repeat(101)}], 'name_project_max_size_KO'),
    Array('project', 'name_project', 18, 31, 'EDIT', [{name_project: 'Proyecto con ñ'}], 'name_project_format_KO'),
    Array('project', 'name_project', 18, 32, 'EDIT', [{name_project: 'Proyecto con á'}], 'name_project_format_KO'),
    Array('project', 'name_project', 18, 33, 'EDIT', [{name_project: 'Proyecto_Error'}], 'name_project_format_KO'),
    Array('project', 'name_project', 19, 34, 'EDIT', [{name_project: 'Nombre de Proyecto Valido'}], true),

    Array('project', 'name_project', 20, 35, 'SEARCH', [{name_project: 'a'.repeat(101)}], 'name_project_max_size_KO'),
    Array('project', 'name_project', 21, 36, 'SEARCH', [{name_project: 'ñ'}], 'name_project_format_KO'),
    Array('project', 'name_project', 21, 37, 'SEARCH', [{name_project: 'á'}], 'name_project_format_KO'),
    Array('project', 'name_project', 21, 38, 'SEARCH', [{name_project: '1'}], 'name_project_format_KO'),
    Array('project', 'name_project', 21, 39, 'SEARCH', [{name_project: '_'}], 'name_project_format_KO'),
    Array('project', 'name_project', 21, 40, 'SEARCH', [{name_project: '.'}], 'name_project_format_KO'),
    Array('project', 'name_project', 21, 41, 'SEARCH', [{name_project: ','}], 'name_project_format_KO'),
    Array('project', 'name_project', 22, 42, 'SEARCH', [{name_project: ''}], true),
    Array('project', 'name_project', 22, 43, 'SEARCH', [{name_project: 'Proyecto'}], true),
    Array('project', 'name_project', 22, 44, 'SEARCH', [{name_project: 'Investigacion'}], true),

    //start_date_project
    Array('project', 'start_date_project', 23, 45, 'ADD', [{start_date_project: '01/01'}], 'start_date_project_min_size_KO'),
    Array('project', 'start_date_project', 24, 46, 'ADD', [{start_date_project: '01/01/2022/1'}], 'start_date_project_max_size_KO'),
    Array('project', 'start_date_project', 25, 47, 'ADD', [{start_date_project: '01-01-2022'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 25, 48, 'ADD', [{start_date_project: '01.01.2022'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 25, 49, 'ADD', [{start_date_project: 'aa/bb/cccc'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 26, 50, 'ADD', [{start_date_project: '10/10/2026', end_date_project: '01/10/2026'}], 'fecha_inicio_mayor_fin_KO'),
    Array('project', 'start_date_project', 27, 51, 'ADD', [{start_date_project: '01/01/2026'}], true),

    Array('project', 'start_date_project', 28, 52, 'EDIT', [{start_date_project: '01/01'}], 'start_date_project_min_size_KO'),
    Array('project', 'start_date_project', 29, 53, 'EDIT', [{start_date_project: '01/01/2022/1'}], 'start_date_project_max_size_KO'),
    Array('project', 'start_date_project', 30, 54, 'EDIT', [{start_date_project: '2022/01/01'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 30, 55, 'EDIT', [{start_date_project: '01 01 2022'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 30, 56, 'EDIT', [{start_date_project: '01/01/22'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 31, 57, 'EDIT', [{start_date_project: '15/12/2026', end_date_project: '01/12/2026'}], 'fecha_inicio_mayor_fin_KO'),
    Array('project', 'start_date_project', 32, 58, 'EDIT', [{start_date_project: '01/12/2026'}], true),

    Array('project', 'start_date_project', 33, 59, 'SEARCH', [{start_date_project: '01/01/2022/1'}], 'start_date_project_max_size_KO'),
    Array('project', 'start_date_project', 34, 60, 'SEARCH', [{start_date_project: '01-01'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 61, 'SEARCH', [{start_date_project: '01/01'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 62, 'SEARCH', [{start_date_project: 'aaaa'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 63, 'SEARCH', [{start_date_project: '2026'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 64, 'SEARCH', [{start_date_project: '..'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 65, 'SEARCH', [{start_date_project: '20/20'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 35, 66, 'SEARCH', [{start_date_project: ''}], true),
    Array('project', 'start_date_project', 35, 67, 'SEARCH', [{start_date_project: '01/01/2026'}], true),
    Array('project', 'start_date_project', 35, 68, 'SEARCH', [{start_date_project: '12/2026'}], true),

    //responsable_project
    Array('project', 'responsable_project', 49, 69, 'ADD', [{responsable_project: 'Jose'}], 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 50, 70, 'ADD', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 51, 71, 'ADD', [{responsable_project: 'Jose 123'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 51, 72, 'ADD', [{responsable_project: 'Jose_Gomez'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 51, 73, 'ADD', [{responsable_project: 'Jose-Maria'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 52, 74, 'ADD', [{responsable_project: 'Ramón Núñez de la Vega'}], true),

    Array('project', 'responsable_project', 53, 75, 'EDIT', [{responsable_project: 'Jose'}], 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 54, 76, 'EDIT', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 55, 77, 'EDIT', [{responsable_project: 'Jose 123'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 55, 78, 'EDIT', [{responsable_project: 'Jose_Gomez'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 55, 79, 'EDIT', [{responsable_project: 'Jose-Maria'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 56, 80, 'EDIT', [{responsable_project: 'Ramón Núñez de la Vega'}], true),

    Array('project', 'responsable_project', 57, 81, 'SEARCH', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 58, 82, 'SEARCH', [{responsable_project: '1'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 83, 'SEARCH', [{responsable_project: '_'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 84, 'SEARCH', [{responsable_project: '-'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 85, 'SEARCH', [{responsable_project: '.'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 86, 'SEARCH', [{responsable_project: ','}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 87, 'SEARCH', [{responsable_project: '@'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 59, 88, 'SEARCH', [{responsable_project: ''}], true),
    Array('project', 'responsable_project', 59, 89, 'SEARCH', [{responsable_project: 'Ramón'}], true),
    Array('project', 'responsable_project', 59, 90, 'SEARCH', [{responsable_project: 'Núñez'}], true),

    //organization_project
    Array('project', 'organization_project', 60, 91, 'ADD', [{organization_project: 'Jose'}], 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 61, 92, 'ADD', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 62, 93, 'ADD', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 62, 94, 'ADD', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 62, 95, 'ADD', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 63, 96, 'ADD', [{organization_project: 'Organizacion del proyecto'}], true),

    Array('project', 'organization_project', 64, 97, 'EDIT', [{organization_project: 'Jose'}], 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 65, 98, 'EDIT', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 66, 99, 'EDIT', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 66, 100, 'EDIT', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 66, 101, 'EDIT', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 67, 101, 'EDIT', [{organization_project: 'Organizacion del proyecto'}], true),

    Array('project', 'organization_project', 68, 102, 'SEARCH', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 69, 103, 'SEARCH', [{organization_project: '1'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 104, 'SEARCH', [{organization_project: '_'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 105, 'SEARCH', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 106, 'SEARCH', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 107, 'SEARCH', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 70, 108, 'SEARCH', [{organization_project: ''}], true),
    Array('project', 'organization_project', 70, 109, 'SEARCH', [{organization_project: 'Ramón'}], true),
    Array('project', 'organization_project', 70, 110, 'SEARCH', [{organization_project: 'Núñez'}], true),

    //description_project
    Array('project', 'description_project', 71, 111, 'ADD', [{description_project: 'Descripción muy corta'}], 'description_project_min_size_KO'),
    Array('project', 'description_project', 72, 112, 'ADD', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 73, 113, 'ADD', [{description_project: 'Esta es una descripción válida que supera los treinta caracteres obligatorios.'}], true),

    Array('project', 'description_project', 74, 114, 'EDIT', [{description_project: 'Corta'}], 'description_project_min_size_KO'),
    Array('project', 'description_project', 75, 115, 'EDIT', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 76, 116, 'EDIT', [{description_project: 'Descripción editada correctamente para pasar el test de validación.'}], true),

    Array('project', 'description_project', 77, 117, 'SEARCH', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 78, 118, 'SEARCH', [{description_project: ''}], true),
    Array('project', 'description_project', 78, 119, 'SEARCH', [{description_project: 'Proyecto'}], true),
    Array('project', 'description_project', 78, 120, 'SEARCH', [{description_project: 'Validación'}], true),

    //file_project
    Array('project', 'file_project', 79, 121, 'SEARCH', [{file_project: 'a'.repeat(101)}], 'file_project_min_size_KO'),
    Array('project', 'file_project', 80, 122, 'SEARCH', [{file_project: 'archivo ñ.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 123, 'SEARCH', [{file_project: 'archivo á.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 124, 'SEARCH', [{file_project: 'archivo 1.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 125, 'SEARCH', [{file_project: 'archivo_pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 126, 'SEARCH', [{file_project: ' '}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 127, 'SEARCH', [{file_project: '-'}], 'file_project_format_KO'),
    Array('project', 'file_project', 81, 128, 'SEARCH', [{file_project: ''}], true),
    Array('project', 'file_project', 81, 129, 'SEARCH', [{file_project: 'manual.pdf'}], true),
    Array('project', 'file_project', 81, 130, 'SEARCH', [{file_project: 'doc'}], true),

    //nuevo_file_project
    //COMO VA ESTO????????

    //code_project
    Array('project', 'code_project', 95, 148, 'ADD', [{code_project: 'ABC'}], 'code_project_min_size_KO'),
    Array('project', 'code_project', 96, 149, 'ADD', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 97, 150, 'ADD', [{code_project: 'CÓDIGO-01'}], 'code_project_format_KO'), // Error por acento
    Array('project', 'code_project', 97, 151, 'ADD', [{code_project: 'PROY 123'}], 'code_project_format_KO'),  // Error por número
    Array('project', 'code_project', 97, 152, 'ADD', [{code_project: 'PROY_Á_99'}], 'code_project_format_KO'), // Mixto
    Array('project', 'code_project', 98, 153, 'ADD', [{code_project: 'PROY.Ñ-TEST.ESP'}], true),

    Array('project', 'code_project', 99, 154, 'EDIT', [{code_project: 'ABC'}], 'code_project_min_size_KO'),
    Array('project', 'code_project', 100, 155, 'EDIT', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 101, 156, 'EDIT', [{code_project: 'ACCIÓN'}], 'code_project_format_KO'),
    Array('project', 'code_project', 101, 157, 'EDIT', [{code_project: 'CODE_001'}], 'code_project_format_KO'),
    Array('project', 'code_project', 101, 158, 'EDIT', [{code_project: 'CODE+TEST'}], 'code_project_format_KO'),
    Array('project', 'code_project', 102, 159, 'EDIT', [{code_project: 'PRUEBA.Ñ.FINAL'}], true),

    Array('project', 'code_project', 103, 160, 'SEARCH', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 104, 161, 'SEARCH', [{code_project: 'á'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 162, 'SEARCH', [{code_project: '1'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 163, 'SEARCH', [{code_project: '@'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 164, 'SEARCH', [{code_project: '#'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 165, 'SEARCH', [{code_project: '/'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 166, 'SEARCH', [{code_project: '='}], 'code_project_format_KO'),
    Array('project', 'code_project', 105, 167, 'SEARCH', [{code_project: ''}], true),
    Array('project', 'code_project', 105, 168, 'SEARCH', [{code_project: 'PROY'}], true),
    Array('project', 'code_project', 105, 169, 'SEARCH', [{code_project: 'TEST.Ñ'}], true),

    //acronym_project
    Array('project', 'acronym_project', 106, 170, 'ADD', [{acronym_project: 'ABC'}], 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 107, 171, 'ADD', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 108, 172, 'ADD', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 108, 173, 'ADD', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 108, 174, 'ADD', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 109, 175, 'ADD', [{acronym_project: 'PROY.Ñ-01'}], true),

    Array('project', 'acronym_project', 110, 176, 'EDIT', [{acronym_project: 'ABC'}], 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 111, 177, 'EDIT', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 112, 178, 'EDIT', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 112, 179, 'EDIT', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 112, 180, 'EDIT', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 113, 181, 'EDIT', [{acronym_project: 'PROY.Ñ-01'}], true),

    Array('project', 'acronym_project', 114, 182, 'SEARCH', [{acronym_project: 'ABC'}], 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 115, 183, 'SEARCH', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 115, 184, 'SEARCH', [{acronym_project: 'Á'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 185, 'SEARCH', [{acronym_project: '1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 186, 'SEARCH', [{acronym_project: 'A a'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 187, 'SEARCH', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 188, 'SEARCH', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 189, 'SEARCH', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 116, 190, 'SEARCH', [{acronym_project: ''}], true),
    Array('project', 'acronym_project', 116, 191, 'SEARCH', [{acronym_project: 'PRO'}], true),
    Array('project', 'acronym_project', 116, 192, 'SEARCH', [{acronym_project: 'PROY.Ñ-01'}], true),

    //id_sampling_methodology_project
    Array('project', 'id_sampling_methodology_project', 117, 193, 'ADD', [{id_sampling_methodology_project: ''}], 'id_sampling_methodology_project_min_size_KO'),
    Array('project', 'id_sampling_methodology_project', 118, 194, 'ADD', [{id_sampling_methodology_project: '123456789012'}], 'id_sampling_methodology_project_max_size_KO'),
    Array('project', 'id_sampling_methodology_project', 119, 195, 'ADD', [{id_sampling_methodology_project: 'abc'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 119, 196, 'ADD', [{id_sampling_methodology_project: '12.3'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 119, 197, 'ADD', [{id_sampling_methodology_project: '12-3'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 120, 198, 'ADD', [{id_sampling_methodology_project: '77'}], true),

    Array('project', 'id_sampling_methodology_project', 121, 199, 'EDIT', [{id_sampling_methodology_project: ''}], 'id_sampling_methodology_project_min_size_KO'),
    Array('project', 'id_sampling_methodology_project', 122, 200, 'EDIT', [{id_sampling_methodology_project: '123456789012'}], 'id_sampling_methodology_project_max_size_KO'),
    Array('project', 'id_sampling_methodology_project', 123, 201, 'EDIT', [{id_sampling_methodology_project: 'abc'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 123, 202, 'EDIT', [{id_sampling_methodology_project: ' '}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 123, 203, 'EDIT', [{id_sampling_methodology_project: '@'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 124, 204, 'EDIT', [{id_sampling_methodology_project: '88'}], true),

    Array('project', 'id_sampling_methodology_project', 125, 205, 'SEARCH', [{id_sampling_methodology_project: '123456789012'}], 'id_sampling_methodology_project_max_size_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 206, 'SEARCH', [{id_sampling_methodology_project: 'abc'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 207, 'SEARCH', [{id_sampling_methodology_project: '-'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 208, 'SEARCH', [{id_sampling_methodology_project: '.'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 209, 'SEARCH', [{id_sampling_methodology_project: ' '}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 210, 'SEARCH', [{id_sampling_methodology_project: '1_'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 126, 211, 'SEARCH', [{id_sampling_methodology_project: '!!'}], 'id_sampling_methodology_project_format_KO'),
    Array('project', 'id_sampling_methodology_project', 127, 212, 'SEARCH', [{id_sampling_methodology_project: ''}], true),
    Array('project', 'id_sampling_methodology_project', 127, 213, 'SEARCH', [{id_sampling_methodology_project: '1'}], true),
    Array('project', 'id_sampling_methodology_project', 127, 214, 'SEARCH', [{id_sampling_methodology_project: '99'}], true)
);
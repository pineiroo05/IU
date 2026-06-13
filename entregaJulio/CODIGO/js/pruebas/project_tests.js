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
    Array('project', 'id_sampling_methodology', 'input', 117, 'tamaño minimo OK', 'ADD', 'id_sampling_methodology_min_size_KO', 'Tamaño demasido corto, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology', 'input', 118, 'tamaño maximo OK', 'ADD', 'id_sampling_methodology_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology', 'input', 119, 'formato OK', 'ADD', 'id_sampling_methodology_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology', 'input', 120, 'todo correcto', 'ADD', true, 'Valor correcto'),

    Array('project', 'id_sampling_methodology', 'input', 121, 'tamaño minimo OK', 'EDIT', 'id_sampling_methodology_min_size_KO', 'Tamaño demasido corto, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology', 'input', 122, 'tamaño maximo OK', 'EDIT', 'id_sampling_methodology_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology', 'input', 123, 'formato OK', 'EDIT', 'id_sampling_methodology_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology', 'input', 124, 'todo correcto', 'EDIT', true, 'Valor correcto'),

    Array('project', 'id_sampling_methodology', 'input', 125, 'tamaño maximo OK', 'SEARCH', 'id_sampling_methodology_max_size_KO', 'Tamaño demasido largo, debe estar entre 1 y 11'),
    Array('project', 'id_sampling_methodology', 'input', 126, 'formato OK', 'SEARCH', 'id_sampling_methodology_format_KO', 'Formato no valido, solo se aceptan caracteres numericos'),
    Array('project', 'id_sampling_methodology', 'input', 127, 'todo correcto', 'SEARCH', true, 'Valor correcto')
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
    Array('project', 'name_project', 14, 25, 'ADD', [{name_project: 'Proyectoooo con ñ'}], 'name_project_format_KO'),
    Array('project', 'name_project', 14, 26, 'ADD', [{name_project: 'Proyectoooo con á'}], 'name_project_format_KO'),
    Array('project', 'name_project', 14, 27, 'ADD', [{name_project: 'Proyectoooo 123'}], 'name_project_format_KO'),
    Array('project', 'name_project', 15, 28, 'ADD', [{name_project: 'Proyectoooo de investigacion'}], true),

    Array('project', 'name_project', 16, 29, 'EDIT', [{name_project: 'Corto'}], 'name_project_min_size_KO'),
    Array('project', 'name_project', 17, 30, 'EDIT', [{name_project: 'a'.repeat(101)}], 'name_project_max_size_KO'),
    Array('project', 'name_project', 18, 31, 'EDIT', [{name_project: 'Proyectoooo con ñ'}], 'name_project_format_KO'),
    Array('project', 'name_project', 18, 32, 'EDIT', [{name_project: 'Proyectoooo con á'}], 'name_project_format_KO'),
    Array('project', 'name_project', 18, 33, 'EDIT', [{name_project: 'Proyectoooo_Error'}], 'name_project_format_KO'),
    Array('project', 'name_project', 19, 34, 'EDIT', [{name_project: 'Proyectoooo de investigacion'}], true),

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
    Array('project', 'start_date_project', 30, 56, 'EDIT', [{start_date_project: '01-01-2026'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 31, 57, 'EDIT', [{start_date_project: '15/12/2026', end_date_project: '01/12/2026'}], 'fecha_inicio_mayor_fin_KO'),
    Array('project', 'start_date_project', 32, 58, 'EDIT', [{start_date_project: '01/12/2026'}], true),

    Array('project', 'start_date_project', 33, 59, 'SEARCH', [{start_date_project: '01/01/2022/1'}], 'start_date_project_max_size_KO'),
    Array('project', 'start_date_project', 34, 60, 'SEARCH', [{start_date_project: '01-01'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 61, 'SEARCH', [{start_date_project: '01\01'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 62, 'SEARCH', [{start_date_project: 'aaaa'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 63, 'SEARCH', [{start_date_project: '202a'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 64, 'SEARCH', [{start_date_project: '..'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 34, 65, 'SEARCH', [{start_date_project: '20_20'}], 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 35, 66, 'SEARCH', [{start_date_project: ''}], true),
    Array('project', 'start_date_project', 35, 67, 'SEARCH', [{start_date_project: '01/01/2026'}], true),
    Array('project', 'start_date_project', 35, 68, 'SEARCH', [{start_date_project: '12/2026'}], true),

    //end_date_project
    Array('project', 'end_date_project', 36, 69, 'ADD', [{end_date_project: '01/01'}], 'end_date_project_min_size_KO'),
    Array('project', 'end_date_project', 37, 70, 'ADD', [{end_date_project: '01/01/2022/1'}], 'end_date_project_max_size_KO'),
    Array('project', 'end_date_project', 38, 71, 'ADD', [{end_date_project: '01-01-2022'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 38, 72, 'ADD', [{end_date_project: '01.01.2022'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 38, 73, 'ADD', [{end_date_project: 'aa/bb/cccc'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 39, 74, 'ADD', [{start_date_project: '10/10/2026', end_date_project: '01/01/2026'}], 'fecha_inicio_mayor_fin_KO'),
    Array('project', 'end_date_project', 40, 75, 'ADD', [{end_date_project: '01/01/2026'}], true),

    Array('project', 'end_date_project', 41, 76, 'EDIT', [{end_date_project: '01/01'}], 'end_date_project_min_size_KO'),
    Array('project', 'end_date_project', 42, 77, 'EDIT', [{end_date_project: '01/01/2022/1'}], 'end_date_project_max_size_KO'),
    Array('project', 'end_date_project', 43, 78, 'EDIT', [{end_date_project: '2022/01/01'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 43, 79, 'EDIT', [{end_date_project: '01 01 2022'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 43, 80, 'EDIT', [{end_date_project: '01-01-2026'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 44, 81, 'EDIT', [{start_date_project: '10/10/2026', end_date_project: '01/01/2026'}], 'fecha_inicio_mayor_fin_KO'),
    Array('project', 'end_date_project', 45, 82, 'EDIT', [{end_date_project: '01/12/2026'}], true),

    Array('project', 'end_date_project', 46, 83, 'SEARCH', [{end_date_project: '01/01/2022/1'}], 'end_date_project_max_size_KO'),
    Array('project', 'end_date_project', 47, 84, 'SEARCH', [{end_date_project: '01-01'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 47, 85, 'SEARCH', [{end_date_project: '01\01'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 47, 86, 'SEARCH', [{end_date_project: 'aaaa'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 47, 87, 'SEARCH', [{end_date_project: '202a'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 47, 88, 'SEARCH', [{end_date_project: '..'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 47, 89, 'SEARCH', [{end_date_project: '20_20'}], 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 48, 90, 'SEARCH', [{end_date_project: ''}], true),
    Array('project', 'end_date_project', 48, 91, 'SEARCH', [{end_date_project: '01/01/2026'}], true),
    Array('project', 'end_date_project', 48, 92, 'SEARCH', [{end_date_project: '12/2026'}], true),

    //responsable_project
    Array('project', 'responsable_project', 49, 93, 'ADD', [{responsable_project: 'Jose'}], 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 50, 94, 'ADD', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 51, 95, 'ADD', [{responsable_project: 'Jose 123'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 51, 96, 'ADD', [{responsable_project: 'Jose_Gomez'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 51, 97, 'ADD', [{responsable_project: 'Jose-Maria'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 52, 98, 'ADD', [{responsable_project: 'Ramón Núñez de la Vega'}], true),

    Array('project', 'responsable_project', 53, 99, 'EDIT', [{responsable_project: 'Jose'}], 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 54, 100, 'EDIT', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 55, 101, 'EDIT', [{responsable_project: 'Jose 123'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 55, 102, 'EDIT', [{responsable_project: 'Jose_Gomez'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 55, 103, 'EDIT', [{responsable_project: 'Jose-Maria'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 56, 104, 'EDIT', [{responsable_project: 'Ramón Núñez de la Vega'}], true),

    Array('project', 'responsable_project', 57, 105, 'SEARCH', [{responsable_project: 'a'.repeat(61)}], 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 58, 106, 'SEARCH', [{responsable_project: '1'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 107, 'SEARCH', [{responsable_project: '_'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 108, 'SEARCH', [{responsable_project: '-'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 109, 'SEARCH', [{responsable_project: '.'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 110, 'SEARCH', [{responsable_project: ','}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 58, 111, 'SEARCH', [{responsable_project: '@'}], 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 59, 112, 'SEARCH', [{responsable_project: ''}], true),
    Array('project', 'responsable_project', 59, 113, 'SEARCH', [{responsable_project: 'Ramón'}], true),
    Array('project', 'responsable_project', 59, 114, 'SEARCH', [{responsable_project: 'Núñez'}], true),

    //organization_project
    Array('project', 'organization_project', 60, 115, 'ADD', [{organization_project: 'Jose'}], 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 61, 116, 'ADD', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 62, 117, 'ADD', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 62, 118, 'ADD', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 62, 119, 'ADD', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 63, 120, 'ADD', [{organization_project: 'Organizacion del proyecto'}], true),

    Array('project', 'organization_project', 64, 121, 'EDIT', [{organization_project: 'Jose'}], 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 65, 122, 'EDIT', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 66, 123, 'EDIT', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 66, 124, 'EDIT', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 66, 125, 'EDIT', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 67, 126, 'EDIT', [{organization_project: 'Organizacion del proyecto'}], true),

    Array('project', 'organization_project', 68, 127, 'SEARCH', [{organization_project: 'a'.repeat(101)}], 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 69, 128, 'SEARCH', [{organization_project: '1'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 129, 'SEARCH', [{organization_project: '_'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 130, 'SEARCH', [{organization_project: 'aaaaaa 123'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 131, 'SEARCH', [{organization_project: 'aaaaaa_aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 69, 132, 'SEARCH', [{organization_project: 'aaaaaa-aa'}], 'organization_project_format_KO'),
    Array('project', 'organization_project', 70, 133, 'SEARCH', [{organization_project: ''}], true),
    Array('project', 'organization_project', 70, 134, 'SEARCH', [{organization_project: 'Ramón'}], true),
    Array('project', 'organization_project', 70, 135, 'SEARCH', [{organization_project: 'Núñez'}], true),

    //description_project
    Array('project', 'description_project', 71, 136, 'ADD', [{description_project: 'Descripción muy corta'}], 'description_project_min_size_KO'),
    Array('project', 'description_project', 72, 137, 'ADD', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 73, 138, 'ADD', [{description_project: 'Esta es una descripción válida que supera los treinta caracteres obligatorios.'}], true),

    Array('project', 'description_project', 74, 139, 'EDIT', [{description_project: 'Corta'}], 'description_project_min_size_KO'),
    Array('project', 'description_project', 75, 140, 'EDIT', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 76, 141, 'EDIT', [{description_project: 'Descripción editada correctamente para pasar el test de validación.'}], true),

    Array('project', 'description_project', 77, 142, 'SEARCH', [{description_project: 'a'.repeat(501)}], 'description_project_max_size_KO'),
    Array('project', 'description_project', 78, 143, 'SEARCH', [{description_project: ''}], true),
    Array('project', 'description_project', 78, 144, 'SEARCH', [{description_project: 'Proyecto'}], true),
    Array('project', 'description_project', 78, 145, 'SEARCH', [{description_project: 'Validación'}], true),

    //file_project
    Array('project', 'file_project', 79, 146, 'SEARCH', [{file_project: 'a'.repeat(101)}], 'file_project_max_size_KO'),
    Array('project', 'file_project', 80, 147, 'SEARCH', [{file_project: 'archivo ñ.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 148, 'SEARCH', [{file_project: 'archivo á.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 149, 'SEARCH', [{file_project: 'archivo 1.pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 150, 'SEARCH', [{file_project: 'archivo_pdf'}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 151, 'SEARCH', [{file_project: ' '}], 'file_project_format_KO'),
    Array('project', 'file_project', 80, 152, 'SEARCH', [{file_project: '-'}], 'file_project_format_KO'),
    Array('project', 'file_project', 81, 153, 'SEARCH', [{file_project: ''}], true),
    Array('project', 'file_project', 81, 154, 'SEARCH', [{file_project: 'manual.pdf'}], true),
    Array('project', 'file_project', 81, 155, 'SEARCH', [{file_project: 'doc'}], true),

    //nuevo_file_project
    Array('project', 'nuevo_file_project', 82, 156, 'ADD', [{nuevo_file_project:{max_size_file:'', type_file:'', format_name_file:''}}], 'nuevo_file_project_not_exist_file_KO'),
    Array('project', 'nuevo_file_project', 83, 157, 'ADD', [{nuevo_file_project:{max_size_file: 20000000,type_file:'application/pdf', format_name_file:'documento.pdf'}}], 'nuevo_file_project_max_size_file_KO'),
    Array('project', 'nuevo_file_project', 84, 158, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'image/png', format_name_file:'imagen.png'}}], 'nuevo_file_project_type_file_KO'),
    Array('project', 'nuevo_file_project', 85, 159, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documentó.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 85, 160, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documeñto.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 85, 161, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'docume nto.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 86, 162, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'do.pdf'}}], 'nuevo_file_project_min_file_name_size_KO'),
    Array('project', 'nuevo_file_project', 87, 163, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'d'.repeat(100)+'.pdf'}}], 'nuevo_file_project_max_file_name_size_KO'),
    Array('project', 'nuevo_file_project', 88, 164, 'ADD', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documento.pdf'}}], true),

    Array('project', 'nuevo_file_project', 89, 165, 'EDIT', [{nuevo_file_project:{max_size_file: 20000000,type_file:'application/pdf', format_name_file:'documento.pdf'}}], 'nuevo_file_project_max_size_file_KO'),
    Array('project', 'nuevo_file_project', 90, 166, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'image/png', format_name_file:'imagen.png'}}], 'nuevo_file_project_type_file_KO'),
    Array('project', 'nuevo_file_project', 91, 167, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documentó.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 91, 168, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documeñto.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 91, 169, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'docume nto.pdf'}}], 'nuevo_file_project_format_name_file_KO'),
    Array('project', 'nuevo_file_project', 92, 170, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'do.pdf'}}], 'nuevo_file_project_min_file_name_size_KO'),
    Array('project', 'nuevo_file_project', 93, 171, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'d'.repeat(100)+'.pdf'}}], 'nuevo_file_project_max_file_name_size_KO'),
    Array('project', 'nuevo_file_project', 94, 172, 'EDIT', [{nuevo_file_project:{max_size_file: 2000000,type_file:'application/pdf', format_name_file:'documento.pdf'}}], true),


    //code_project
    Array('project', 'code_project', 95, 173, 'ADD', [{code_project: 'ABC'}], 'code_project_min_size_KO'),
    Array('project', 'code_project', 96, 174, 'ADD', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 97, 175, 'ADD', [{code_project: 'CÓDIGO-01'}], 'code_project_format_KO'), // Error por acento
    Array('project', 'code_project', 97, 176, 'ADD', [{code_project: 'PROY 123'}], 'code_project_format_KO'),  // Error por número
    Array('project', 'code_project', 97, 177, 'ADD', [{code_project: 'PROY_Á_99'}], 'code_project_format_KO'), // Mixto
    Array('project', 'code_project', 98, 178, 'ADD', [{code_project: 'PROY.Ñ-TEST.ESP'}], true),

    Array('project', 'code_project', 99, 179, 'EDIT', [{code_project: 'ABC'}], 'code_project_min_size_KO'),
    Array('project', 'code_project', 100, 180, 'EDIT', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 101, 181, 'EDIT', [{code_project: 'ACCIÓN'}], 'code_project_format_KO'),
    Array('project', 'code_project', 101, 182, 'EDIT', [{code_project: 'CODE_001'}], 'code_project_format_KO'),
    Array('project', 'code_project', 101, 183, 'EDIT', [{code_project: 'CODE+TEST'}], 'code_project_format_KO'),
    Array('project', 'code_project', 102, 184, 'EDIT', [{code_project: 'PRUEBA.Ñ.FINAL'}], true),

    Array('project', 'code_project', 103, 185, 'SEARCH', [{code_project: 'a'.repeat(51)}], 'code_project_max_size_KO'),
    Array('project', 'code_project', 104, 186, 'SEARCH', [{code_project: 'á'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 187, 'SEARCH', [{code_project: '1'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 188, 'SEARCH', [{code_project: '@'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 189, 'SEARCH', [{code_project: '#'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 190, 'SEARCH', [{code_project: '/'}], 'code_project_format_KO'),
    Array('project', 'code_project', 104, 191, 'SEARCH', [{code_project: '='}], 'code_project_format_KO'),
    Array('project', 'code_project', 105, 192, 'SEARCH', [{code_project: ''}], true),
    Array('project', 'code_project', 105, 193, 'SEARCH', [{code_project: 'PROY'}], true),
    Array('project', 'code_project', 105, 194, 'SEARCH', [{code_project: 'TEST.Ñ'}], true),

    //acronym_project
    Array('project', 'acronym_project', 106, 195, 'ADD', [{acronym_project: 'ABC'}], 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 107, 196, 'ADD', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 108, 197, 'ADD', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 108, 198, 'ADD', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 108, 199, 'ADD', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 109, 200, 'ADD', [{acronym_project: 'PROY.Ñ-'}], true),

    Array('project', 'acronym_project', 110, 201, 'EDIT', [{acronym_project: 'ABC'}], 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 111, 202, 'EDIT', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 112, 203, 'EDIT', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 112, 204, 'EDIT', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 112, 205, 'EDIT', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 113, 206, 'EDIT', [{acronym_project: 'PROY.Ñ-'}], true),

    Array('project', 'acronym_project', 114, 207, 'SEARCH', [{acronym_project: 'A'.repeat(16)}], 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 115, 208, 'SEARCH', [{acronym_project: 'Á'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 209, 'SEARCH', [{acronym_project: '1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 210, 'SEARCH', [{acronym_project: 'A a'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 211, 'SEARCH', [{acronym_project: 'AAAAAAÁ'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 212, 'SEARCH', [{acronym_project: 'AAAAAA1'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 115, 213, 'SEARCH', [{acronym_project: 'AAAAAA A'}], 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 116, 214, 'SEARCH', [{acronym_project: ''}], true),
    Array('project', 'acronym_project', 116, 215, 'SEARCH', [{acronym_project: 'PRO'}], true),
    Array('project', 'acronym_project', 116, 216, 'SEARCH', [{acronym_project: 'PROY.Ñ-'}], true),

    //id_sampling_methodology
    Array('project', 'id_sampling_methodology', 117, 217, 'ADD', [{id_sampling_methodology: ''}], 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 118, 218, 'ADD', [{id_sampling_methodology: '123456789012'}], 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 119, 219, 'ADD', [{id_sampling_methodology: 'abc'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 119, 220, 'ADD', [{id_sampling_methodology: '12.3'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 119, 221, 'ADD', [{id_sampling_methodology: '12-3'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 120, 222, 'ADD', [{id_sampling_methodology: '77'}], true),

    Array('project', 'id_sampling_methodology', 121, 223, 'EDIT', [{id_sampling_methodology: ''}], 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 122, 224, 'EDIT', [{id_sampling_methodology: '123456789012'}], 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 123, 225, 'EDIT', [{id_sampling_methodology: 'abc'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 123, 226, 'EDIT', [{id_sampling_methodology: ' '}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 123, 227, 'EDIT', [{id_sampling_methodology: '@'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 124, 228, 'EDIT', [{id_sampling_methodology: '88'}], true),

    Array('project', 'id_sampling_methodology', 125, 229, 'SEARCH', [{id_sampling_methodology: '123456789012'}], 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 126, 230, 'SEARCH', [{id_sampling_methodology: 'abc'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 126, 231, 'SEARCH', [{id_sampling_methodology: '-'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 126, 232, 'SEARCH', [{id_sampling_methodology: '.'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 126, 233, 'SEARCH', [{id_sampling_methodology: ' '}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 126, 234, 'SEARCH', [{id_sampling_methodology: '1_'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 126, 235, 'SEARCH', [{id_sampling_methodology: '!!'}], 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 127, 236, 'SEARCH', [{id_sampling_methodology: ''}], true),
    Array('project', 'id_sampling_methodology', 127, 237, 'SEARCH', [{id_sampling_methodology: '1'}], true),
    Array('project', 'id_sampling_methodology', 127, 238, 'SEARCH', [{id_sampling_methodology: '99'}], true)
);
var analysis_preparation_TestSubmit=Array(
    //ADD
    ['analysis_preparation', 'ADD', 1, 'ADD_id_analysis_minimo_OK', {id_analysis_preparation:'',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'ADD', 2, 'ADD_id_analysis_maximo_OK', {id_analysis_preparation:'1'.repeat(12),name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 3, 'ADD_id_analysis_formato_OK', {id_analysis_preparation:'a',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 4, 'ADD_name_analysis_minimo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'abc',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'ADD', 5, 'ADD_name_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(101),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 6, 'ADD_name_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'ñaaaaaaaa',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 7, 'ADD_description_analysis_minimo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(76),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'ADD', 8, 'ADD_description_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(501),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 9, 'ADD_description_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'1'.repeat(76),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 10, 'ADD_bib_analysis_minimo_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'ADD', 11, 'ADD_bib_analysis_maximo_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(202),nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 12, 'ADD_bib_analysis_formato_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_format_KO'],

    //estos son los de ficheros, pero no se como ponerlos...
    ['analysis_preparation', 'ADD', 13, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],
    ['analysis_preparation', 'ADD', 14, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],
    ['analysis_preparation', 'ADD', 15, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],

    ['analysis_preparation', 'ADD', 16, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],

    //EDIT
    ['analysis_preparation', 'EDIT', 17, 'EDIT_id_analysis_minimo_OK', {id_analysis_preparation:'',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'EDIT', 18, 'EDIT_id_analysis_maximo_OK', {id_analysis_preparation:'1'.repeat(12),name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'EDIT', 19, 'EDIT_id_analysis_formato_OK', {id_analysis_preparation:'a',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'id_analysis_preparation_format_KO'],

    ['analysis_preparation', 'EDIT', 20, 'EDIT_name_analysis_minimo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'abc',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'EDIT', 21, 'EDIT_name_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(101),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'EDIT', 22, 'EDIT_name_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'ñaaaaaaaa',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'name_analysis_preparation_format_KO'],

    ['analysis_preparation', 'EDIT', 23, 'EDIT_description_analysis_minimo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(76),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'EDIT', 24, 'EDIT_description_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(501),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'EDIT', 25, 'EDIT_description_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'1'.repeat(76),bib_analysis_preparation:'a'.repeat(7), nuevo_file_analysis_preparation:{ }},'description_analysis_preparation_format_KO'],

    ['analysis_preparation', 'EDIT', 26, 'EDIT_bib_analysis_minimo_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_min_size_KO'],
    ['analysis_preparation', 'EDIT', 27, 'EDIT_bib_analysis_maximo_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(202),nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'EDIT', 28, 'EDIT_bib_analysis_formato_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',nuevo_file_analysis_preparation:{ }},'bib_analysis_preparation_format_KO'],

    //estos son los de ficheros, pero no se como ponerlos...
    ['analysis_preparation', 'EDIT', 29, 'EDIT_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],
    ['analysis_preparation', 'EDIT', 30, 'EDIT_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],
    ['analysis_preparation', 'EDIT', 31, 'EDIT_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],

    ['analysis_preparation', 'EDIT', 32, 'EDIT_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),nuevo_file_analysis_preparation:{ }}, true],

    //SEARCH
    ['analysis_preparation', 'ADD', 33, 'ADD_id_analysis_maximo_OK', {id_analysis_preparation:'1'.repeat(12),name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'id_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 34, 'ADD_id_analysis_formato_OK', {id_analysis_preparation:'a',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'id_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 35, 'ADD_name_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(101),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'name_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 36, 'ADD_name_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'ñaaaaaaaa',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'name_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 37, 'ADD_description_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(501),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'description_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 38, 'ADD_description_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'1'.repeat(76),bib_analysis_preparation:'a'.repeat(7), file_analysis_preparation:'fichero.pdf'},'description_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 39, 'ADD_bib_analysis_maximo_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(202),file_analysis_preparation:'fichero.pdf'},'bib_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 40, 'ADD_bib_analysis_formato_OK', {id_analysis_preparation:'1', name_analysis_preparation:'a'.repeat(8),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',file_analysis_preparation:'fichero.pdf'},'bib_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 41, 'ADD_file_analysis_maximo_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'a'.repeat(102)+'.pdf'}, 'file_analysis_preparation_max_size_KO'],
    ['analysis_preparation', 'ADD', 42, 'ADD_file_analysis_formato_OK', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'ficheró.pdf'}, 'file_analysis_preparation_format_KO'],

    ['analysis_preparation', 'ADD', 43, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 44, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:''}, true],

    ['analysis_preparation', 'ADD', 45, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 46, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 47, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'',bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 48, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'',file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 49, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:''}, true],

    ['analysis_preparation', 'ADD', 50, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 51, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a',bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 52, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a',file_analysis_preparation:'fichero.pdf'}, true],
    ['analysis_preparation', 'ADD', 53, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:'f'}, true],

    ['analysis_preparation', 'ADD', 54, 'ADD_correcto', {id_analysis_preparation:'1',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 55, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'a',description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 56, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'a',bib_analysis_preparation:'',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 57, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'a',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 58, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:'f'}, true],

    ['analysis_preparation', 'ADD', 59, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'a'.repeat(9),description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 60, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'a'.repeat(81),bib_analysis_preparation:'',file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 61, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'a'.repeat(7),file_analysis_preparation:''}, true],
    ['analysis_preparation', 'ADD', 62, 'ADD_correcto', {id_analysis_preparation:'',name_analysis_preparation:'',description_analysis_preparation:'',bib_analysis_preparation:'',file_analysis_preparation:'fichero.pdf'}, true],
);
Codigo sacado a partir de verificacionET1, aqui tuvimos q meter una tabla de muestra de filas de la entidad, y con unos botones de add, search, edit, showcurrent y delete. Lo mismo q siempre, a partir del codigo del profesor hubo que cambiar cosas y adaptarlo.

-Ns pq mierdas el querySelector para elegir los campos a mostrar no vaaaaa

-Delete y showcurrent arreglados creo, era con el assign_property_value() le estaba poniendo un id erroneo.

-ESTA SIN ACABAR, FALTAN AUN COSAS-

El edit muestra todo bien, y parece hacer el edit correctamente, pero saca algunos errores en la consola q no acabo de pillar bien.
Uncaught TypeError: can't access property "size", objfile.files[0] is undefined
    max_size_file file:///home/enrique/Escritorio/IU-main/Semana4-5/Core/Validations_Class.js:105
    EDIT_nuevo_alumnograduacion_fotoacto_validation file:///home/enrique/Escritorio/IU-main/Semana4-5/app/alumnograduacion_Class.js:336
    EDIT_submit_alumnograduacion file:///home/enrique/Escritorio/IU-main/Semana4-5/app/alumnograduacion_Class.js:362
    onsubmit file:///home/enrique/Escritorio/IU-main/Semana4-5/index.html:1
Validations_Class.js:105:7

Hay otro problema, y es q cuando edito/toco el gestionar entidad vuelve a sacarme toda la tabla debajo de la vieja en vez de actualizar la q ya tenia de antes.
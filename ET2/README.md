ERRORES ENCONTRADOS:
--alumnograduacion
- Falla todo POR CULPA DEL RADIO, cuando titulacion era text no daba fallos
- En el momento de hacer el submit en add, y en segun que campos en el edit me sale una ventanita y no hace lo de añadir.
- Search, busca bien pero saca esto:
Uncaught TypeError: can't access property "value", document.getElementById(...) is null
    SEARCH_alumnograduacion_titulacion_validation http://127.0.0.1:5500/app/alumnograduacion_Class.js:427
    onchange http://127.0.0.1:5500/:1

--en articulo la fecha luego nunca se muestra en los menus de edicion, borrado. Tampoco van los delete y edit. Sospecho que sea algo relacionado con ids.
- El add por lo que sea ya no me deja meter el pdf.

--ubicacion mas o menos igual que en alumnograduacion.

TEMA VALIDACIONES
- En issn, hay un formato muy especifico. Ver como implementar una funcion personalize.

POR LO QUE SEA EN LOS TEST DE DATOS NO PILLA LOS METODOS DE CADA ENTIDAD

OJO -> DEBERIA HECHARLE UN VISTAZO A LAS EXPRESIONES REGULARES DE LAS VALIDACIONES DE FORMATO
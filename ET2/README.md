ERRORES ENCONTRADOS:

PROBLEMA GENERAL, el fichero que tengo subido, luego como si no se mantuviese subido al entrar en los formularios. Casi seguro pq no esta cogiendo la fila.

--alumnograduacion
- Edit tiene un fallo rarisimo, resulta que si intentas editar algo que incumplia formato ya de antes, sale la ventanita del add.
- En delete me pasa lo del fallo general de arriba.

- OJO CON EL RADIO, PQ ME ESTA DANDO FALLO POR TODOS LADOS, AHORA ESTA COMO TEXT, PERO CUANDO LO CAMBIO FALLA MUCHISIMO.
- OJO CON EL RADIO 2.0, hay un metodo que es rellenarvalorradio en dom_table

--articulo: el fallo general de arriba, por lo demas a simple vista esta bien.

--ubicacion 
- add y edit bien
- search, delete y showcurrent me dan el sig error.
Uncaught TypeError: can't access property "style", document.getElementById(...) is null
    hide_element http://127.0.0.1:5500/Core/Dom_Class.js:21
    hide_element_form http://127.0.0.1:5500/Core/Dom_Class.js:33
    createForm_SHOWCURRENT http://127.0.0.1:5500/app/ubicacion_Class.js:565
    onclick http://127.0.0.1:5500/:1
-OJO -> falta por meter las validaciones del search en altitud, longitud y latitud, tanto en ubicacion_Class, como en ET2_infotest.
-OJO 2.0 -> como seria el rango maximo y minimo de valores que acepta altitude?????

TEMA VALIDACIONES, en issn, hay un formato muy especifico. Ver como implementar una funcion personalize.
OJO -> DEBERIA HECHARLE UN VISTAZO A LAS EXPRESIONES REGULARES DE LAS VALIDACIONES DE FORMATO
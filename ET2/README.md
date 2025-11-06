ERRORES ENCONTRADOS:

PROBLEMA GENERAL, el fichero que tengo subido, luego es como si no lo recuperase, pq al darle al delete me dice que el campo esta vacio.
OTRO FALLO: ns pq carallo no puedo cambiar el id una vez metido

------------
--alumnograduacion: fallo general de arriba, por lo demas a simple vista bien.
- Select metido en la titulacion, ahora habria que adaptar las validaciones

--articulo.
- MIRAR DE METER UN DATE
- Con los personalizes, me haria falta la mierda del min y max_size ????
- ISSN es de 9, o 13 digitos??????
 ##ADD, SEARCH Y SHOWCURRENT BIEN, EDIT CREO Y DELETE NO BORRA PERO NO SACA FALLO, ES POR EL FALLO GENERAL.


--ubicacion 
- add y edit bien
- search, delete y showcurrent me dan el sig error. NO TIENE NINGUN TIPO DE SENTIDO QUE ME DE ESE ERROR
Uncaught TypeError: can't access property "style", document.getElementById(...) is null
    hide_element http://127.0.0.1:5500/Core/Dom_Class.js:21
    hide_element_form http://127.0.0.1:5500/Core/Dom_Class.js:33
    createForm_SHOWCURRENT http://127.0.0.1:5500/app/ubicacion_Class.js:565
    onclick http://127.0.0.1:5500/:1

- altitud puede ser negativa :(
- falta por meter las validaciones del search en altitud, longitud y latitud, tanto en ubicacion_Class, como en ET2_infotest.
- como seria el rango maximo y minimo de valores que acepta altitude?????


FALTAN ACABAR LAS TRADUCCIONES
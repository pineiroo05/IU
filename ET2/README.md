ERRORES ENCONTRADOS:

PROBLEMA GENERAL, el fichero que tengo subido, luego como si no se mantuviese subido al entrar en los formularios. Casi seguro pq no esta cogiendo la fila.

--alumnograduacion: fallo general de arriba, por lo demas a simple vista bien.
- OJO CON EL RADIO, PQ ME ESTA DANDO FALLO POR TODOS LADOS, AHORA ESTA COMO TEXT, PERO CUANDO LO CAMBIO FALLA MUCHISIMO.

--articulo: el fallo general de arriba, por lo demas a simple vista esta bien.
- MIRAR DE METER UN DATE
- meter personalizes para el rango de paginas
- meter personalize para que la pag final no sea inferior a la inicial
- En volumen puede ser con numero o letra -> tocar la regEx
- ISSN son 6 digitos guion y 6 digitos

--ubicacion 
- add y edit bien
- search, delete y showcurrent me dan el sig error.
- altitud puede ser negativa :(
Uncaught TypeError: can't access property "style", document.getElementById(...) is null
    hide_element http://127.0.0.1:5500/Core/Dom_Class.js:21
    hide_element_form http://127.0.0.1:5500/Core/Dom_Class.js:33
    createForm_SHOWCURRENT http://127.0.0.1:5500/app/ubicacion_Class.js:565
    onclick http://127.0.0.1:5500/:1

-OJO -> falta por meter las validaciones del search en altitud, longitud y latitud, tanto en ubicacion_Class, como en ET2_infotest.
-OJO 2.0 -> como seria el rango maximo y minimo de valores que acepta altitude?????

TEMA VALIDACIONES, en issn, hay un formato muy especifico. Ver como implementar una funcion personalize.

FALTAN ACABAR LAS TRADUCCIONES
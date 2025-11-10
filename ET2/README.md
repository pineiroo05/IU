ERRORES ENCONTRADOS:

PROBLEMA GENERAL, el fichero que tengo subido, luego es como si no lo recuperase en el delete.
PROBLEMA EN UBICACION Y ARTICULO: el id_site y CodigoA se estan rellenando con los valores q quiere. Son autoincrementales, por lo tanto seria el back quien haga esa asignacion.
- En el add deberia no poner esos campos.
- Tengo tmb que eliminar sus validaciones.
PROBLEMA EN ARTICULO: la fecha y los input date, fallan y da sql_KO. EL BACK SOLO ACEPTA AHORA DE REPENTE dd/mm/yyyy

------------
-- alumnograduacion: fallo general de arriba, por lo demas a simple vista bien.

-- articulo: fallo general de arriba, por lo demas a simple vista bien. 

-- ubicacion: fallo general de arriba, por lo demas a simple vista bien.

- validaciones de latitud... Mirar de darle una vuelta y ver si podria buscar solo con un '-', o poniendo 9. (Actualmente no deja).

ARREGLAR COSAS RELACIONADAS CON LAS PRUEBAS QUE ME DAN INCORRECTAS.
DE LAS PRUEBAS ECHARLE OJO A LOS DATE Y SELECT. TAMBIEN AL TEMA DE RANGO Y TAL EN PagFinA


- VALIDACIONES UBICACION LIMPIAS
Pryecto Con nodeJs y docker

En este proyecto podemos ver la creacion de una base de datos en mongo dockereada y diferentes servicios que crean, consultan, actualizan y eliminan un registro de la base de datos por medio de codigo en nodeJS

Prerequisitos:

para poder ejecutar este proyecto correctamente se debe tener instalado Docker desktop, nodeJS y en caso de querer ver los registros de mongo se recomiendo usar ROBO3T y para poder hacer pruebas de los diferentes servicios de la apliccion se recomienda utilizar postman

Ejecutando Pruebas:

para porder ejecutar pruebas en los diferentes servicios se debe tener en cuenta que algunos nesecitan enviar un body para funcionar a continuacion se mostraran ejemplos de los diferenetes servicio

Servicio para crear un nuevo usuario:

[![ServicioPost.png](https://github.com/SergioIPG00/talle1Master/blob/b9d8b8cc800416a2390d7ed180c41cb69727af01/img/ServicioPost.PNG)

en este servcio se debe user un body que contenga un json con la estuctura del modelo que se expone en user.js en la carpeta models

Servicio para traer la lista de la coleccion:

[![SericioGetList.png](https://github.com/SergioIPG00/talle1Master/blob/ccd14fabb89e7327521a709c763cf7b2230af689/img/SericioGetList.PNG)

en este servcio se debe user un body que contenga un json con la informacion por la cual se quiere filtrar en la coleccion si embargo no es necesario enviar el json

Servicio para elmininar un usuario:

[![ServicioDelete.png](https://github.com/SergioIPG00/talle1Master/blob/ccd14fabb89e7327521a709c763cf7b2230af689/img/ServicioDelete.PNG)

En este servcio se debe agregar el documento que se desea elminar como se muestra en la imagen

Servicio de actulzar un usuario:

[![servicioPut.png](https://github.com/SergioIPG00/talle1Master/blob/ccd14fabb89e7327521a709c763cf7b2230af689/img/servicioPut.PNG)

En este servcio se debe agregar el documento que se desea actulizar como se mestra en la imagen, de igual manera en el body se debe enviar un json que contenga los campos que se desean actulizar, en caso de que sea un numero de documento que no existe en la coleccion se debe agregar en body toda la informacion del usuario a excepcion del numero documento que lo tomara del numero puesto en la url como parametro

Despliegue:

para poder ejecutar el proyecto debemos ejecutar los comandos:

docker-compose build

docker-compose up

Autor:

Sergio Ivan Pedraza Gutierrez

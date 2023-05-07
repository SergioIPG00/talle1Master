Pryecto Con nodeJs y docker

En este proyecto podemos ver la creacion de una base de datos en mongo dockereada y diferentes servicios que crean, consultan, actualizan y eliminan un registro de la base de datos por medio de codigo en nodeJS

Prerequieistos

para poder ejecutar este proyecto correctamente se debe tener instalado Docker desktop, nodeJS y en caso de querer ver los registros de mongo se recomiendo usar ROBO3T y para poder hacer pruebas de los diferentes servicios de la apliccion se recomienda utilizar postman

Ejecutando Pruebas

para porder ejecutar pruebas en los diferentes servicios se debe tener en cuenta que algunos nesecitan enviar un body para funcionar a continuacion se mostraran ejemplos de los diferenetes servicio

Servicio para crear un nuevo usuario:

[![ServicioPost.png](https://github.com/SergioIPG00/talle1Master/blob/b9d8b8cc800416a2390d7ed180c41cb69727af01/img/ServicioPost.PNG)

en este servcio se debe user un body que contenga un json con la estuctura del modelo que se expone en user.js en la carpeta models


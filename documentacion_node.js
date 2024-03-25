//--------------------------------------------------
//--roles de reuniones entre informaticos
//--------------------------------------------------
// Daily Scrum: Es una reunión diaria de no más de 15 minutos donde el equipo de desarrollo sincroniza el trabajo y establece el plan para las próximas 24 horas. Su propósito es evaluar el progreso hacia el objetivo del sprint y adaptar el Sprint Backlog si es necesario12.
// Scrum Diario: Similar al Daily Scrum, es un evento clave en Scrum que fomenta la comunicación, colaboración y transparencia dentro del equipo de desarrollo2.
// Sprint Backlog: Es una lista de tareas seleccionadas del Product Backlog que el equipo se compromete a completar durante el sprint actual. Ayuda a mantener al equipo enfocado y organiza el trabajo que se debe realizar en el sprint34.
// Scrum Master: Es el líder y facilitador del equipo Scrum, encargado de asegurar que se sigan los principios y prácticas de Scrum. Ayuda al equipo a mantenerse enfocado y a mejorar continuamente en el marco de trabajo ágil56.
// Product Owner: Es el representante de los stakeholders dentro del equipo Scrum, responsable de maximizar el valor del producto y de gestionar el Product Backlog. Prioriza las tareas y asegura que las necesidades del cliente se reflejen en el trabajo del equipo78.
// Un stakeholder, o parte interesada, es una persona o grupo que tiene un interés en una empresa o proyecto y que puede ser afectado por sus actividades o decisiones. En el contexto empresarial, los stakeholders pueden incluir empleados, clientes, proveedores, accionistas, inversores, y la comunidad, entre otros12. Son fundamentales para el éxito de una empresa, ya que sus necesidades y opiniones pueden influir en la dirección y estrategias del negocio1.
// console.log(chalk.underline.bgRedBright.bold.italic(JSON.stringify(persona, null, 2)));
//👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
//---------------------------------------------------
//--estructura carpetas handlebars--
//---------------------------------------------------
//guardar archivo y ejecutar servidor para que actualice
//ctrl d selecciona mas de un elemento y ctrl shift l selecciona todos los elementos o codigos
//html contenido dentro de carpeta public o assets y dejar estatica
//layout o diseños en carpeta views => enlaces
//partialts => css y bootstraps
//botones recorri el array colores desde html o hbs cuando llamas al parcialt botones
//--req.params es parte de la ruta
//--req.query es parte de la consulta que se envia con la ruta.
//const color = req.params.color => forma Acceso directo
//const { color } = req.params; => forma Desestructuración
//---------------------------------------------------
//--terminal con node express y mas dependencias--
//---------------------------------------------------
//--iniciar json => npm init -y => crea json con toda configuracion inicial
//--agrega carpetas modules, json y lock => npm i express o npm install o npm install express --save
//--npm install express@5.0.0-beta.1 --save //ultima version
//--npm install express express-handlebars
//--npm i bootstrap jquery
//--npm i nodemon => queda como dependencia, no usar, porque lo subiria a internet = remoto
//--npm install -g nodemon => global, en el pc
//--npm i -D nodemon => dependencia de desarrollo, uso local
//--npm i nodemon --save-dev => dependencia de desarrollo, uso local

// Instalación de paquetes necesarios:
// Axios: Para hacer solicitudes a la API Random User.
// UUID: Para generar IDs únicos para cada usuario. si ejecutas console.log nuevamente genera otro ID. Es equivalente a type serial en SQL.
// Moment: Para formatear las fechas.
// Lodash: Para dividir el arreglo de usuarios por sexo.
// Chalk: Para imprimir en la consola con colores.version 5.3 con import
// npm i express-handlebars bootstrap jquery path chalk@4.1.2 uuid moment lodash axios cli-table3 jimp
//👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
// npm i --- instala todas las dependencias registradas en json ---👨🏽‍💻
// npm i cli-table3 ------
// npm i chalk@5.3.0 ---pide module import
// npm i chalk@4.1.2 ---pide require
//npm uninstall chalk
//npm update chalk@4.1.2
//npm update chalk
//---------------------------------------------------
//--UUID vs date.now()
//---------------------------------------------------
/*
UUID garantiza la unicidad absoluta
Date.now(): Esto devuelve el número de milisegundos transcurridos desde la medianoche del 1 de enero de 1970 (conocido como el “epoch” o “época”) hasta el momento actual. Básicamente, es un timestamp que representa la fecha y hora actual.
    => no es recomendable para generar valores unicos
    Los valores devueltos por Date.now() son únicos solo en el contexto de, un único proceso.
    si ubiesen dos procesos asincronicos ejecutandose al mismo tiempo, 
    podrian generar el mismo valor, pero agregando Math.random a date.now,
    es muy extraño que genere el mismo id
.toString(36): Aquí estamos convirtiendo ese timestamp en una cadena de texto. El argumento 36 indica que queremos representar el número en base 36. En base 36, los dígitos van desde 0 hasta 9 y luego de la ‘a’ a la ‘z’.
.slice(2): Finalmente, tomamos una subcadena de la cadena resultante. El índice 2 indica que queremos eliminar los primeros dos caracteres de la cadena. Esto se hace para eliminar el prefijo “0o” que se agrega automáticamente cuando convertimos a base 36.
En resumen, la expresión Date.now().toString(36).slice(2) nos da una cadena que representa el timestamp actual en base 36, sin el prefijo “0o”. Por ejemplo, si ejecutamos esta línea de código ahora mismo, obtendríamos algo como "1krs6j".
-------------------------
La época Unix es una fecha concreta a partir de la cual se cuentan los segundos, lo que da como resultado una nueva medida de tiempo. Esta medida se utiliza en sistemas operativos como Unix o Linux, así como en algunos lenguajes de programación como PHP. El tiempo en estos sistemas operativos se mide en segundos desde el 1 de enero de 1970, a las cero horas (medianoche UTC/GMT) 1.
Literalmente hablando, el epoch es el Unix time 0, que corresponde a la medianoche del 1 de enero de 1970. Sin embargo, el término “epoch” a menudo se utiliza como sinónimo de Unix time.
Este sistema de medición es ampliamente utilizado en programación y sistemas informáticos para representar fechas y horas de manera uniforme. Por ejemplo, cuando ves un timestamp en un archivo o en una base de datos, es probable que esté basado en la época Unix.
*/
//---------------------------------------------------
//--JSON--los scripts invocan al nodemon instalado para cada archivo .js--
//---------------------------------------------------
//scrip de nodemon lo invoca sin instalarlo, me funciona el script o shortcut
/*
 "scripts": {
   "server": "node index.js",
   "server-watch": "node --watch index.js",
   "server-nodemon": "nodemon index.js",
   "start": "nodemon --watch index.js"
 },
*/
/*
 "scripts": {
   "server": "node index.js || echo 'Error: No se puede iniciar el servidor con node, asegúrate de que index.js existe.'",
   "server-watch": "node --watch index.js || echo 'Error: No se puede iniciar el servidor con watch node, asegúrate de que index.js existe.'",
   "server-nodemon": "nodemon index.js || echo 'Error: No se puede iniciar el servidor con nodemon, asegúrate de que index.js existe.'",
   "start": "nodemon --watch index.js || echo 'Error: No se puede iniciar el servidor con watch nodemon, asegúrate de que index.js existe.'"
 },
 */
// Requerimiento 0: Crear un servidor con Node en el puerto 3000
/*const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  if (req.url == "/inicio" && req.method == "get") {
    res.end("hola mundo! servidor con node js puro");    //.end no .send
  }
})
.listen(port, () => {                                    //.listen no app.listen
  console.log(`🔥Servidor corriendo en el puerto🔥http://localhost:${port}`);
});
*/
// Requerimiento 1: Crear un servidor con Express en el puerto 3000
import express from 'express' //en json debajo de main "type": "module", => asi funciona import = modo nuevo
const express = require('express'); // Importa el módulo Express = modo antiguo
require('bootstrap');
const $ = require('jquery');
const path = require("path");
const chalk = require('chalk');
const uuid = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const axios = require('axios');
const table = require('cli-table3');
const jimp = require('jimp');
moment.locale('es'); // idioma fecha
moment().format('DD-MM-YYYY HH:mm:ss')

const l = console.log; //variable que almacena console.log

const routes = express.Router //modo nuevo importa rutas
const routes = require('/routes/routes'); //modo antiguo importa rutas
const app = express(); //instanciar express
const port = process.env.PORT || 3000; //Define el puerto del servidor, usa variable de entorno o 3000 por defecto
const exphbs = require("express-handlebars"); //Importa el motor de plantillas express-handlebars

// Requerimiento 2: Definir la carpeta “assets” como carpeta pública del servidor
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));// extension => Define el motor de plantillas con la extensión .hbs
app.set("view engine", ".hbs");// app => Establece Handlebars como el motor de vistas
app.set("views", "./views");// carpeta vista => Define la carpeta de vistas para las plantillas Handlebars
//use = usa todo lo dentro de la carpeta, ejemplo todas las rutas y con get solo la ruta raiz
app.use(express.static('assets')); //middleware => Define la carpeta 'assets' como estática para servir archivos directamente => en html y css no pones assets, en js si lo pones para ruta archivos.
app.use("/bootstrap_css",express.static('./node_modules/bootstrap/dist/css'));// Sirve los archivos CSS de Bootstrap desde node_modules
app.use("/bootstrap_js",express.static('./node_modules/bootstrap/dist/js'));// Sirve los archivos JS de Bootstrap desde node_modules
app.use("/jquery",express.static('./node_modules/jquery/dist'));// Sirve jQuery desde node_modules

// Requerimiento 3: Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"]; //arreglo
//ruta raiz
app.get('/', (req, res) => { //req consulta y res respuesta
  res.send('⭐⭐⭐⭐⭐🎉¡Bienvenido a la página de inicio!🎉⭐⭐⭐⭐⭐');
});// Envía un mensaje de bienvenida
// Renderizar la vista con el parcial Dashboard y los datos de los usuarios
app.get('/', (req, res) => { //req consulta y res respuesta
  res.render('home', { // Renderiza la vista 'home' con los datos de los usuarios
    usuarios: ['Juan', 'Jocelyn', 'Astrid', 'Maria', "Ignacia", "Javier", "Brian"] //arreglo
  }) 
});

//ruta devuelve json
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({ usuarios });
});
// Requerimiento 4: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario_ruta = req.params.usuario //aqui capturamos el usuario de la ruta dinamica
  const isUser = usuarios.map((u) => u.toLowerCase()).includes(usuario_ruta.toLowerCase()); //aqui verificamos si el nombre de la ruta esta en el array
//tolowercase es para buscar usuario con mayuscula o minuscula
  isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg");     //captura imagen incognita      
  }); 

app.get('/abracadabra/juego/:usuario', (req, res) => { //ruta devuelve imagen incognita
  res.sendFile(__dirname + '/index.html')              //ruta nombre array devuelve html 
});                            //ejemplo: http://localhost:3000/abracadabra/juego/astrid
// Requerimiento 5: Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.
app.get('/abracadabra/conejo/:n', (req, res) => { 
  const n = req.params.n //aqui capturamos el numero de la ruta dinamica
  const numero = Math.floor(Math.random() * (5 - 1)) + 1; //numero aleatorio
  if (n == numero) {
      res.sendFile(__dirname + '/assets/img/conejito.jpg'); // Devolver imagen del Conejo si coincide
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg'); // Devolver imagen de Voldemort si no coincide
  }
}); 
//valida nombre
app.get("/usuario/:nombre", (req, res) => {
  // const nombre = req.params.nombre; // Acceso directo
     const { nombre } = req.params; //Desestructuración
     const test = nombre.match(/^[aeiouAEIOU]/)//(^) al principio => expresion regular 
     test                                      
     ? res.send("Si, tu nombre empieza con una vocal")//?=if
     : res.send("No, tu nombre no empieza con una vocal");//:=else
    });
//redirecciona a otra ruta
app.get("/musica", (req, res) => {
  res.redirect("https://www.spotify.com/cl/");
 }); 
//valida color
app.use("/colores/:color", (req, res, next) => {
  const { color } = req.params;
  color == "Azul" ? next() : res.send("No es azúl");
 });
app.get("/colores/:color", (req, res, next) => {
  res.send("Si, es azúl")
});
// Requerimiento 6: Crear una ruta genérica que devuelva un mensaje para rutas no definidas
app.get('*', (req, res) => { //ultima ruta la generica 
  res.send("<center><h1>🤣🤣🤣🤣🤣Esta página no existe...🤣🤣🤣🤣🤣 </h1></center>");
});//windows + . = inserta iconos

// Iniciar el servidor => muestra enlace ruta string e invoca numero de port
app.listen(port, () => { 
  console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
});//levantarmiento servidor
app.listen(PORT, () => { 
  console.log(chalk.underline.bgCyanBright.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});
// levanto desde JS
// levanto servidor => node index
// cancelo servidor => ctrl c  => te deja volver a escribir en terminal 

//----levanto desde packageJSON----
//--A)--sin watch (con start): automatizar levantamiento servidor con cancelacion en terminal
/*
"scripts": {
  "start": "node index.js"
},
*/
//--terminal-- => npm start <= --npm nombre_script -- con start no se digita run

//--B)--con watch (con server): automatizar levantamiento servidor automaticamente, sin cancelacion en terminal
/*
"scripts": {
 "server": "node --watch index.js"
},
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--C)--Con nodemon (con server):
/*
"scripts": {
  "server": "nodemon index.js"
}
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//--D)--Con nodemon y watch (con server):
/*
"scripts": {
  "server": "nodemon --watch index.js"
}
*/
//--terminal-- => npm run server <= --npm run nombre_script -- con nombre diferente a start si se digita run

//----THUNDER CLIENT--
//usar extencion de visual thunder client o postman para usar la url en visual

//----GITIGNORE--
//para ignorar carpeta node_modules para no subir a github en archivo gitignore digitar node_modules/*

//Requerimos Express
const express = require('express');

//Creamos una aplicación de Express
const app = express();
const server = require('http').Server(app);

//Requerimos SOCKET.IO y lo asignamos a nuestro servidor
const io = require('socket.io')(server);

//En nuestra Carpeta Public se encuentra nuestro  
//archivo index.html el cuál será servido por nuestra aplicación al cliente.
//Creamos middleware que sirve nuestra carpeta PUBLIC ante cualquier petición a nuestro servidor
app.use(express.static('public'));

//Ponemos a 0 la variable que irá aumentando en cada SEÑAL que envíe el servidor a LOS clientes conectados
var numero_señal = 0;

//Creamos una variable para contar los clientes conectados
var total_conexiones = 0;
 
io.on('connection',function(s){
    //Ante la conexión de un cliente, aumentamos la variable en 1
    total_conexiones+= 1;
 
    //y enviamos una señal a los clientes indicandole el nuevo numero de clientes conectados
    io.emit('conexiones',total_conexiones)
    s.on('disconnect',function(){
        total_conexiones-=1;
        io.emit('conexiones',total_conexiones)
    })
})

setInterval(function(){
    numero_señal += 1;
    var mensaje= 'Mensaje desde el servidor. Vez Nro:' + numero_señal;
    io.emit('mensaje', mensaje);

},1000);
server.listen(8080,function(){
    console.log('Servidor Iniciado en http://localhost:8080');
})

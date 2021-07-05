# WebSockets
Demostración de WEB SOCKETS (Ejemplo simple)
  
_ Este simple proyecto, muestra la forma en que funcionan los SOCKETS utilizando NODE JS Y EXPRESS_

## Comenzando 🚀
 ```
 WebSocket es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un
 único socket TCP.
 
 Está diseñada para ser implementada en navegadores y servidores web, 
 pero puede utilizarse por cualquier aplicación cliente/servidor.
 ```
### Pre-requisitos 📋

```
Necesitas tener instalado Nodejs y VisualStudioCode(u otro editor)  en tu PC.
Para entender el Ejemplo.
```
 
## Pasos ⚙️

```
Primer Paso: Descargamos el Repositorio.

Segundo Paso: Abrimos la carpeta raíz con Visual Studio Code (u otro editor)

Tercer Paso: Instalamos las dependencias con npm install

Cuarto Paso: Corremos nuestro servidor con node index.js (Empezará a escuchar en el puerto 8080)

Quinto paso: Abrimos nuestro navegador e indicamos http://localhost:8080 

```

### Mira en la consola de tu Navegador🔩

_Allí verás cómo llegan los mensajes desde el servidor hasta cada cliente conectado.

En este caso veremos Conexiones : 1 (Porque has abierto solo una instancia);

Si abres otra pestaña con el navegador y vas nuevamente a http://localhost:8080 , verás que ahora dira que hay 
dos conexiones... 

### Conexiones Entrantes y Salientes🔩
```
Una vez que cierres alguna de las pestañas que has abierto, verás cómo el SERVIDOR manda una señal a todos los clientes
indicando un nuevo número de conexiones actuales. 
```

###Terminando... ⌨️
 
```
 Eso es todo! Tu servidor está conectado a través de una especie de "Túnel" con los clientes conectados, permitiendo así que se manden
 constantemente señales... ésta es la manera en la que podemos presentar cambios del servidor en tiempo real.
 
```
 
## Leer más sobre Web Sockets 📖
https://es.wikipedia.org/wiki/WebSocket
 
 

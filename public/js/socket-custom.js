var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');

});

//escuchar informacion
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'daniel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});


//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});
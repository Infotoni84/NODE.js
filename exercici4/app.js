//creamos myHttp para poder usar los metodos de 'http'
var myHttp=require('http');
//Aqui usamos el metodo createServer y le pasamos la funcion con parametos request/response
var server=myHttp.createServer(function(request,response){
	//escribimos un contenido sencillo 
	response.writeHead(200,{'Content-Type':'text/html; charsert=utf-8'});
	response.write('<!DOCTYPE html><html><head></head>');
	response.write('<body><h3>Benvinguts al NODE!</h3></boby>');
	response.end();
});

//decidimos el puerte de escucha
server.listen(3000);
//escribimos si la xconexion es exitosa o no
console.log('Connexio establerta');
var HelloWorld=require('./contenido');

var valores={
	text: 'Hello World!!!'
};

//creamos el objeto escrito
var escrito=new HelloWorld();

escrito.fill(valores);

console.log(escrito.getInformation());




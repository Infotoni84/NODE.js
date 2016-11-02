var Flight=require('./vols');
//Accedemos a la carpeta vols y con el objeto flight llamos todo;

var pl_data1={
	number: 847,
	origin: 'Barcelona',
	destination: 'Madrid'
};

var pl_data2={
	number: 742,
	origin: 'Valencia',
	destination: 'Sevilla'
};

//creamos el objeto avion como en java
var pl1=new Flight();
//lleamos con el meto fill que creamos en index, es como un setXXXX;
pl1.fill(pl_data1);
//Recogemos con el metodo triggerdepart la fecha de hoy
pl1.triggerDepart();
console.log(pl1.getInformation());


var pl2=new Flight();

pl2.fill(pl_data2);

pl2.triggerArrive();

console.log(pl2.getInformation());


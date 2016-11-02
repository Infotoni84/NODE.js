//llamamos al modulo 'os'
var os=require('os');
//miramos memoria inicial
console.log("Bytes de memoria libre inicial: "+os.freemem());
//creamos array 
var muchos = new Array();
//llenamos array, la lleno con 50 millones en vez de con 1 porque con 1
//no se nota mucho el consumo de memoria
for(cont=0 ; cont <= 50000000 ; cont++){
	muchos.push(cont);
}
//miramos resultado final
console.log("Bytes de memoria libre final: "+os.freemem());




//fijarse, bien en como se cierran las cosas!!!

var Funciones=function(){

	this.suma=function(num1,num2){
		return num1 + num2;
	};

	this.resta=function(num1,num2){
		return num1 - num2;
	};

	this.multi=function(num1,num2){
		return num1 * num2;
	};

	this.division=function(num1,num2){
		return num1 / num2;
	};

	this.PI=function(){
		return 3.1416;
	}
	
};

//y exportamos el modulo pa que se pueda usar

module.exports=Funciones;
//fijarse, bien en como se cierran las cosas!!!
var HelloWorld=function(){
//Atributos HelloWorld
	this.contenido={ //generamos objeto java script		
		text: null
		//recordar que no se cierra el ultimo, que lo cierra la llave
	};

	//creamos el metodo fill, para rellenar el objeto
	this.fill=function(info){
		for(var i in this.contenido){ //similar a un foreach
			//el i es el elemento 0,1,2 etc...Un contador vaya
			if(this.contenido[i] !== 'undefined'){
				this.contenido[i]=info[i];
			}
		}
	};

	this.getInformation= function(){
		return this.contenido; 
		//devuelve el objeto this.contenido
		//esto lo podemos usar en el app.js
		//si luego exportamos el modilo
	};
	
};

//y exportamos el modulo pa que se pueda usar

module.exports=HelloWorld;
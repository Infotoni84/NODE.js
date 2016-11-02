//fijarse, bien en como se cierran las cosas!!!
var Flight=function(){
//Atributos del objeto Flight
	this.data={ //generamos objeto java script
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
		//recordar que no se cierra el ultimo, que lo cierra la llave
	}

	//Ahora creamos los metodos
	//Llenar atributos
	/**
	* fill: llenar atrubutos de Flight
	*
	**/

	this.fill=function(info){
		for(var prop in this.data){ //similar a un foreach
			//el prop es el elemento 0,1,2 etc...
			if(this.data[prop] !== 'undefined'){
				this.data[prop]=info[prop];
			}
		}
	};
	
	//parecido al anterior, pero lo hacemos con this. y ademas 
	//ya no esta dentro de una sola funcion, sino que cada
	//una va independiente.fijarse en el = que ya no son : ;
	this.triggerDepart= function(){
		this.data.actualDepart=Date.now();
	},
	this.triggerArrive= function(){
		this.data.actualArrive=Date.now();
	},
	this.getInformation= function(){
		return this.data; //devuelve el objeto this.data;
	}	
	
};

//y exportamos el modulo pa que se peuda usar

module.exports=Flight;
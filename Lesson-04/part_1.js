var ladyBag = {
	
	lipsteack: {

		 color: "Red",

		 mark: "loreal"

	},

	hairbrush: {
	
		type: "comb"
	
	},
	
	mirror: true,

	documents: "Passport",

	gum: "Orbit",

	money: true,

	deleteType: function (prop){

		for (var key in ladyBag){

			if ( key===prop){

				delete ladyBag[key]
				console.log(prop)
				
			}
			
		}	
	
	},

	addType: function (prop, value){

			if (prop in ladyBag){

				console.log("Данный предмет уже есть в наличии")
			} else {
				 	ladyBag[prop] = value
					console.log(prop + ':' + value)
			}
		
	}

}
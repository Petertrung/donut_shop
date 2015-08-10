'use strict';
var DonutShop = function(locationName, min, max, nut){
	this.locationName = locationName;
	this.min = min;
	this.max = max;
	this.nut = nut;
	this.customers = [];
	this.nutHour = [];
	var hours = 11;

	var getCustomers = function (){
		return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
	}
	function getnutHour(){
		(customers * this.nut);
	}

}

	var downtown = new DonutShop("Downtown", 8, 43, 4.5);
	var capitol = new DonutShop("Capitol Hill", 4, 37, 2);
	var south = new DonutShop("South Lake Union", 9, 23, 6.33);
	var wood = new DonutShop("Wedgewood", 2, 28, 1.25);
	var ballard = new DonutShop("Ballard", 8, 58, 3.75);

 	var shops =[downtown, capitol, south, wood, ballard];

 	console.log(downtown.getCustomers);

	// for (var i = 0 ;i < shops.length; i++) {
	// 	0 ; shops[i]

	// };

 //   document.getElementById("customers").innerHTML= downtown.locationName +" " +downtown.nut;
	// // document.getElementById("donut").innerHTML= getnutHour();
	// // document.getElementById("num").innerHTML= (nutHour * hours);

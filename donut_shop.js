'use strict';
var DonutShop = function(locationName, min, max, nut) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.nut = nut;
  this.getNutHour = [];
  this.hours = 11;
  this.totalNuts = 0;
}

DonutShop.prototype.getCustomersArray = function (){
  console.log(this.locationName);
  for(var i = 0; i < this.hours; i++ ){
    this.getNutHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
  }
   ;
      for (var i = 0; i < this.getNutHour.length; i++) {
        this.totalNuts += this.getNutHour[i];
    }
  console.log(this.totalNuts)
}

var myTab = document.getElementById('myTable');





DonutShop.prototype.render = function(){ 
 var getTable = document.getElementById('myTable');  
    
 var newRow = document.createElement('tr'); 
    
 newRow.id= this.locationName;  
    
 newRow.innerHTML = this.locationName;  
    
 getTable.appendChild(newRow); 

 this.getCustomersArray();
  
for (var i = 0; i < this.hours; i++)  
  { var newCell = document.createElement('td'); 
    newCell.innerHTML = this.getNutHour[i];  
    newRow.appendChild(newCell);  
    };  
  var newCell = document.createElement('td'); 
    newCell.innerHTML = this.totalNuts;  
    newRow.appendChild(newCell);  
   }

var downtown = new DonutShop("Downtown", 8, 43, 4.5);
var capitol = new DonutShop("Capitol Hill", 4, 37, 2);
var south = new DonutShop("South Lake Union", 9, 23, 6.33);
var wood = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballard = new DonutShop("Ballard", 8, 58, 3.75);
var shops =[downtown, capitol, south, wood, ballard];
							
 
 for (var i = 0 ;i < shops.length; i++) {
  shops[i].render();
}
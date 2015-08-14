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
    this.getNutHour.push(Math.floor(this.nut) * (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min));
  }
   ;
      for (var i = 0; i < this.getNutHour.length; i++) {
        this.totalNuts += this.getNutHour[i];
    }
  console.log(this.totalNuts);
  console.log(location);
}

var myTab = document.getElementById('myTable');



DonutShop.prototype.renderAll = function(){ 
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

var downtown = new DonutShop("Downtown", 8, 43, 4.5).renderAll();
var capitol = new DonutShop("Capitol Hill", 4, 37, 2).renderAll();
var south = new DonutShop("South Lake Union", 9, 23, 6.33).renderAll();
var wood = new DonutShop("Wedgewood", 2, 28, 1.25).renderAll();
var ballard = new DonutShop("Ballard", 8, 58, 3.75).renderAll();
var shops =[downtown, capitol, south, wood, ballard];

// function render() {							
//  for (var i = 0 ;i < shops.length; i++) {
//   shops[i].renderAll();
//   }
// }
// render();


  var btn = document.getElementById('btn');
  btn.addEventListener('click', retrivenSend)

    function retrivenSend() {
      var x = document.getElementById("x").value ;
      var y = document.getElementById("y").value ; 
      var location = document.getElementById("location").value;
      var z = document.getElementById("z").value;
      var news= new DonutShop(location, y, x, z);

      news.renderAll();

}
 
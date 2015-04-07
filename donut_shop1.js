var Store = function(storeLoc, minCustperHour, maxCustperHour, avgOrder) {
  this.storeLoc = storeLoc;
  this.minCustperHour = minCustperHour;
  this.maxCustperHour = maxCustperHour;
  this.avgOrder = avgOrder;
  this.hourlyTotals= [];
};

Store.prototype.dailyDonutstoMake = function()  {
  var perDay = 0;
  for (var time = 0; time <=11; time ++) {
    var hourlyDonuts = Math.floor((Math.random() * (this.maxCustperHour - this.minCustperHour)) + this.minCustperHour) * this.avgOrder;
    this.hourlyTotals.push(hourlyDonuts);
    perDay += hourlyDonuts;
  }
  return perDay;
}

Store.prototype.render = function()  {
  var dailyDonuts = this.dailyDonutstoMake();
  for ( var time = 0; time <= this.hourlyTotals.length; time++) {
    var el = document.createElement('td');
    el.textContent = this.hourlyTotals[time];
    var elTr = document.getElementById(this.storeLoc);
    elTr.appendChild(el);
  }
  el.textContent = dailyDonuts;
  elTr.appendChild(el);
};

var downtown = new Store("branch1", 8, 43, 4.5);
var capitolHill = new Store("branch2", 4, 37, 2);
var southLakeUnion = new Store("branch3", 9, 23, 6.33);
var wedgeWood = new Store("branch4", 2, 28, 1.25);
var ballard = new Store("branch5", 8, 58, 3.75);

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgeWood.render();
ballard.render();

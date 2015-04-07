//constructor function w/ location specifc properties
  var Store = function(storeLoc, minCustperHour, maxCustperHour, avgOrder) {
    this.storeLoc = storeLoc;
    this.minCustperHour = minCustperHour;
    this.maxCustperHour = maxCustperHour;
    this.avgOrder = avgOrder;
    this.hourlyTotals= [];
//for total time open - 6-7pm 11 hours
//method to calulate dougnuts
    this.dailyDonutstoMake = function()  {
      var perDay = 0;
      for (var time = 0; time <=11; time ++) {
        var hourlyDonuts = Math.floor((Math.random() * (this.maxCustperHour - this.minCustperHour)) + this.minCustperHour) * this.avgOrder;
        this.hourlyTotals.push(hourlyDonuts);
        perDay += hourlyDonuts;
      }
      return perDay;
    }
  };

//render funtion...
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

var downtown = new Store("Downtown", 8, 43, 4.5);
var capitolHill = new Store("Capitol Hill", 4, 37, 2);
var southLakeUnion = new Store("South Lake Union", 9, 23, 6.33);
var wedgeWood = new Store("Wedgewood", 2, 28, 1.25);
var ballard = new Store("Ballard", 8, 58, 3.75);

console.log(downtown.render());
//console.log(capitolHill.dailyDonutstoMake());
//console.log(southLakeUnion.dailyDonutstoMake());
//console.log(wedgeWood.dailyDonutstoMake());
//console.log(ballard.dailyDonutstoMake());

// console.log(downtown);
// console.log(downtown.render());




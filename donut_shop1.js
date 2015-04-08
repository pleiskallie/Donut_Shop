
(function() {
  window.storesArray = [];
  var storesArray = window.storesArray;
  var form = document.getElementById('newStoreform');

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
      var hourlyDonuts = Math.floor((Math.random() * (this.maxCustperHour - this.minCustperHour) + this.minCustperHour) * this.avgOrder);
      console.log(hourlyDonuts)
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

  storesArray.push(new Store("branch1", 8, 43, 4.5));
  storesArray.push(new Store("branch2", 4, 37, 2));
  storesArray.push(new Store("branch3", 9, 23, 6.33));
  storesArray.push(new Store("branch4", 2, 28, 1.25));
  storesArray.push(new Store("branch5", 8, 58, 3.75));

  window.renderStoreData = function() {
    var elTable = document.getElementById('donutStorelist');
    storesArray.forEach(function(store) {
      elTable.appendChild(store.render());
    });
  }

  var eventFormSubmit = function calculateInput(ev) {
    console.log("the button was cliked");
    ev.preventDefault();
    console.log("did not break");

    var storeLoc = document.getElementById('newStorelocation').value;
    var inputMincustPerhour = document.getElementById('newMincustperHour').value;
    var inputMaxcustPerhour = document.getElementById('newMaxcustperHour').value;
    var inputAvgorder = document.getElementById('newAvgorder').value;

    var newStore = new Store(storeLoc, minCustperHour, maxCustperHour, avgOrder)

    userInput.numDonuts();
    hourlyTotals.push(userInput);

    newStore.render();

  };

  form.addEventListener('submit', eventFormSubmit, false);
  window.renderStoreData();
})();


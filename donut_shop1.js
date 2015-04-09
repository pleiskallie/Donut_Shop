
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
    this.hourlyTotals =[];
    for (var time = 0; time <11; time ++) {
      var hourlyDonuts = Math.floor((Math.random() * (this.maxCustperHour - this.minCustperHour) + this.minCustperHour) * this.avgOrder);
      this.hourlyTotals.push(hourlyDonuts);
      perDay += hourlyDonuts;
    }
    return perDay;
  };

  Store.prototype.render = function()  {
    var toMake = this.dailyDonutstoMake();
    var row = document.createElement('tr');

    var data = document.createElement('td');

    data.textContent = this.storeLoc;

    row.appendChild(data);

    for ( var time = 0; time < this.hourlyTotals.length; time++) {

      data = document.createElement('td');

      data.textContent = this.hourlyTotals[time];

      row.appendChild(data);

    }

    data = document.createElement('td');

    data.textContent = toMake;

    row.appendChild(data);
    return row;

  };

  storesArray.push(new Store("branch1", 8, 43, 4.5));
  storesArray.push(new Store("branch2", 4, 37, 2));
  storesArray.push(new Store("branch3", 9, 23, 6.33));
  storesArray.push(new Store("branch4", 2, 28, 1.25));
  storesArray.push(new Store("branch5", 8, 58, 3.75));


  window.tablerenderStoreData = function() {
    var elTable = document.getElementById('tableBody');
    elTable.textContent = '';
    storesArray.forEach(function(store) {
      elTable.appendChild(store.render());
    });
  }

  tablerenderStoreData();

  var eventFormSubmit = function(ev) {
    ev.preventDefault();

    var storeLoc = document.getElementById('newStoreloc').value;
    var inputMincustPerhour = Number.parseInt(document.getElementById('minCustperHour').value);
    var inputMaxcustPerhour = Number.parseInt(document.getElementById('maxCustperHour').value);
    var inputAvgorder = Number.parseFloat(document.getElementById('avgOrder').value);

    var newStore = new Store(storeLoc, inputMincustPerhour, inputMaxcustPerhour, inputAvgorder);

    //userInput.numDonuts();
    storesArray.push(newStore);
    tablerenderStoreData();

  };

  form.addEventListener('submit', eventFormSubmit, false);
  window.Store = Store;
})();


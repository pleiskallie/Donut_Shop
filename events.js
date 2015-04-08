(function() {

var Store = window.Store;
var form = document.getElementById('newStoreform');
var storeLoc = document.getElementById('newStorelocation').value;
var addNewStore = document.getElementById('newUserRow');
var inputMincustPerhour = document.getElementById('newMincustperHour').value;
var inputMaxcustPerhour = document.getElementById('newMaxcustperHour').value;
var inputAvgorder = document.getElementById('newAvgorder').value;
var hourlyTotals = [];

var renderdonutStorelist = function  (){
  addNewStore.innerHTML = "";

  hourlyTotals.forEach(function(item) {
    addNewStore.appendChild(item.render());
  });
};

var eventFormSubmit = function calculateInput(ev) {
  ev.preventDefault();

  var userInput = new Store(storeLoc, minCustperHour, maxCustperHour, avgOrder)

  userInput.numDonuts();
  hourlyTotals.push(userInput);

  render.Store();
};

var downtown = new Store("branch1", 8, 43, 4.5);
var capitolHill = new Store("branch2", 4, 37, 2);
var southLakeUnion = new Store("branch3", 9, 23, 6.33);
var wedgeWood = new Store("branch4", 2, 28, 1.25);
var ballard = new Store("branch5", 8, 58, 3.75);


hourlyTotals.push(downtown);
hourlyTotals.push(capitolHill);
hourlyTotals.push(southLakeUnion);
hourlyTotals.push(wedgeWood);
hourlyTotals.push(ballard);

form.addEventListener('submit', eventFormSubmit, false);

})();

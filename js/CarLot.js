"use strict"

var CarLot = (function() {

  var inventory = [];

  return {
    // Return the car inventory when called
    getInventory: function() {
      return inventory;
    },

    // Loads the json inventory and once loaded it executes the callback function sent to it.
    loadInventory: function(sentCallback){

      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function() {
        inventory = JSON.parse(this.responseText).cars;
        sentCallback(inventory);  // Runs this function after json is loaded and parsed
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  }
})();


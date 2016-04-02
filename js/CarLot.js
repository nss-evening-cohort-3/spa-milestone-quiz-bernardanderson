"use strict"

var CarLot = (() => {

  var inventory = [];

  return {
    // Return the car inventory when called
    getInventory: () => inventory,

    // Loads the json inventory and once loaded it executes the callback function sent to it.
    loadInventory: (sentCallback) => {

      let inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", (event) => {
        
        // Below in the JSON.parse, "event.target.responseText" is needed instead of
        //  "this.responseText" when using fat Arrows because "this" gets lexically 
        //  assigned the window object instead of the XMLHttpRequest
        inventory = JSON.parse(event.target.responseText).cars;
        sentCallback(inventory);  // Runs this function after json is loaded and parsed
      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  }
})();


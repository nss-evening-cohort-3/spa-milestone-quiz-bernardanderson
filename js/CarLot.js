var CarLot = (function() {

  var inventory = [];

  return {
    getInventory: function() {
      return inventory;
    },

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


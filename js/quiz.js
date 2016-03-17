function populatePage(sentInventory) {

  // Gets the main container div for where the cards will be stored
  var carCardContainer = document.getElementById("car-card-container");

  // Initializes the string where each cars' information will be stored
  var carCardString = "";

  // Loop over each car in the inventory and populate the page
  for (var i = 0; i < sentInventory.length; i++) {

    // Starting at 0, for every three cars cards in the inventory
    //  a new div with the class of "row" will be add to the DOM.
    //  This keeps columns working on my tiny laptop screen 
    if (i % 3 === 0) {
      var carCardRow = document.createElement("div");
      carCardRow.classList.add("row");
      carCardContainer.appendChild(carCardRow);
    }

    // Builds the card for each car
    var carCard = document.createElement("div");
    carCard.id = `car-card-${i}`;
    carCard.classList.add("col-md-4");
    carCard.classList.add("round-card");
    carCard.classList.add("bg-warning");
    carCardRow.appendChild(carCard);

    // This just sets the "current car" element in the array to a shorter 
    //  easier to access variable.
    curCar = sentInventory[i];

    // Makes the Car Title string
    carCardString = `<h3>${curCar["year"]} ${curCar["make"]} ${curCar["model"]}</h3>`;

    // Adds the price info to the string
    carCardString += `<p>Yours for only: $${curCar["price"]}</p>`;

    // Sets the car card border color to the color of the car and also
    //  adds the color info to the car string
    carCard.setAttribute("style", `border: 3px solid ${curCar['color']}`);
    carCardString += `<p>This car comes in beautiful <span style="background:${curCar['color']}">${curCar['color']}</p>`;

    // This checks to see if the car is purchased and sets the 
    //  string added to the car string appropriately
    if (curCar["purchased"] === true) {
      carCardString += `<p>We're sorry but this car is NOT available</p>`;
    } else {
      carCardString += `<p>BUY NOW! Supplies are limited!</p>`;
    };

    // Adds the car description to the car string.
    carCardString += `<p>Description: ${curCar['description']}</p>`;

    // Inserts the car string into the current car card.
    carCard.innerHTML += carCardString;
  };

  // The event listeners once the DOM is loaded and populated
  CarLot.activateEvents();
}

// Loads the inventory, and sends the callback function 
//  to populatePage
CarLot.loadInventory(populatePage);
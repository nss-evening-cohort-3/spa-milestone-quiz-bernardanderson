"use strict"

var populatePage = (sentInventory) => {

  // Gets the main container div for where the cards will be stored
  let carCardContainer = document.getElementById("car-card-container");

  // Initializes the string where each cars' information will be stored
  let carCardString = "";

  // Loop over each car in the inventory and populate the page
  for (let i = 0; i < sentInventory.length; i++) {

    // Starting at car card 0, for every three cars cards in the inventory,
    //  a new div with the class of "row" will be add to the DOM.
    //  This keeps "3 columns" working on most larger screens
    if (i % 3 === 0) {
      var carCardRow = document.createElement("div"); // This needs to be accessible outside the block
      carCardRow.classList.add("row");
      carCardContainer.appendChild(carCardRow);
    }

    // Builds the card for each car
    let carCard = document.createElement("div");
    carCard.id = `car-card-${i}`;
    carCard.classList.add("col-md-4");
    carCard.classList.add("border-width-3");
    carCard.classList.add("bg-warning");
    carCardRow.appendChild(carCard);

    // This just sets the "current car" element in the array to a shorter, 
    //  easier to access variable.
    let curCar = sentInventory[i];

    // Makes the Car Title string
    carCardString = `<h3 class="quicksand-font">${curCar["year"]} ${curCar["make"]} ${curCar["model"]}</h3>`;

    // Adds the price info to the string
    carCardString += `<p>Yours for only: <span class='text-bigger'>$${curCar["price"]}</span></p>`;

    // Sets the car card border color to the color of the car and also
    //  adds the color info to the car string
    carCard.setAttribute("style", `border-color: ${curCar['color']}`);
    carCardString += `<p>This car comes in beautiful <span class="underline-text-color" style="color:${curCar['color']}">${curCar['color']}</span></p>`;

    // This checks to see if the car is purchased and sets the 
    //  string added to the overall car string appropriately
    if (curCar["purchased"] === true) {
      carCardString += `<p>We're sorry but this car is <strong>NOT</strong> available</p>`;
    } else {
      carCardString += `<p>BUY NOW!<br/> Supplies are limited!</p>`;
    };

    // Adds the car description to the car string.
    carCardString += `<p class="aligned-left"><span class="text-big">Description:</span> ${curCar['description']}</p>`;

    // Inserts the car string into the current car card.
    carCard.innerHTML += carCardString;
  };

  // The event listeners are added once the DOM is loaded and populated
  CarLot.activateEvents();
}

// Loads the inventory, and sends the callback function to populatePage
CarLot.loadInventory(populatePage);
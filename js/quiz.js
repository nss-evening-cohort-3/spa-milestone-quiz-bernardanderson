function populatePage(sentInventory) {

  var carCardString = "";

  // Loop over the inventory and populate the page
  for (var i = 0; i < sentInventory.length; i++) {
    var carCardHolder = document.querySelector("#car-card-holder");
    var carCard = document.createElement("div");
    carCard.id = `car-card-${i}`;
    carCard.classList.add("col-md-4");
    carCard.classList.add("bg-warning");
    carCardHolder.appendChild(carCard);

    curCar = sentInventory[i];

    carCardString = `<h3>${curCar["year"]} ${curCar["make"]} ${curCar["model"]}</h3>`;
    carCardString += `<p>Yours for only: $${curCar["price"]}</p>`;

    carCard.setAttribute("style", `border: 3px solid ${curCar['color']}`);
    carCardString += `<p>This car comes in beautiful <span style="background:${curCar['color']}">${curCar['color']}</p>`;

    if (curCar["purchased"] === true) {
      carCardString += `<p>We're sorry but this car is NOT available</p>`;
    } else {
      carCardString += `<p>BUY NOW! Supplies are limited!</p>`;
    };

    carCardString += `Description: ${curCar['description']}`;
    carCard.innerHTML += carCardString;
  };


  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
var CarLot = (function(eventHandlers) {


  eventHandlers.activateEvents = function() {

    let carCardHolder = document.querySelector("#car-card-container");

    // A single event listener watching for a click event on anything in the car card holder div
    carCardHolder.addEventListener("click", function(event) {

      event.stopPropagation();

      // Assigns the clicked target to a single variable
      let clickedTarget = event.target;

      // This checks to see that a div "row" or the main div container weren't clicked. If they 
      //  were then do nothing because it is not a car card!
      if (!clickedTarget.className.includes("row") && (event.target !== event.currentTarget)) {  

        // Calls the function to reset the border and color of the car cards
        CarLot.resetBorder();

        // Call the function to enlarge the click car card and change it's background color
        //  This send two arguments: ONLY the target element and the new color of the background.
        CarLot.increaseBorder(clickedTarget, "lightgray")
      }
    });
  }

  return eventHandlers;

})(CarLot || {});
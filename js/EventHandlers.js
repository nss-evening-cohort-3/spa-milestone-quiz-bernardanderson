var CarLot = (function(eventHandlers) {


  eventHandlers.activateEvents = function() {

    let carCardHolder = document.querySelector("#car-card-container");
    let inputDescription = document.querySelector("#desc-input");
    let resetButton = document.querySelector("#reset-button");

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
        CarLot.increaseBorder(clickedTarget, "lightgray");

        // Clears the input box, and puts the cursor into it
        inputDescription.value = "";
        inputDescription.focus();
      }
    });

    // This captures the text input from the input element in the navbar.
    inputDescription.addEventListener("keyup", function() {

      // Selects the currently selected car card (if there is one).
      let carSelected = document.querySelector(".border-width-6");

      // Checks to see if no car is selected, if true the textbox is cleared after each keypress
      if (carSelected === null) {
        inputDescription.value = "";
      // Checks to see if the enter key is press, if true the textbox is cleared and blurred
      } else if (event.keyCode === 13) {
        inputDescription.value = "";
        inputDescription.blur();
      // If no errors and a car is selected, their description is overwritten from the 
      // text input
      } else {
      carSelectedInput = carSelected.childNodes[4];
      carSelectedInput.innerHTML = `<p>Description: ${inputDescription.value}</p>`;
      };
    });

    resetButton.addEventListener("click", function() {
      CarLot.loadInventory(populatePage);
    });
  }

  return eventHandlers;

})(CarLot || {});
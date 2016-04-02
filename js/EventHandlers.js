"use strict"

var CarLot = ((eventHandlers) => {

  eventHandlers.activateEvents = () => {

    let carCardHolder = document.querySelector("#car-card-container");
    let inputDescription = document.querySelector("#desc-input");
    let resetButton = document.querySelector("#reset-button");

    // A single event listener watching for a click event on anything in the car card holder div
    carCardHolder.addEventListener("click", (event) => {

      event.stopPropagation();

      // Assigns the clicked target to a single variable
      let clickedTarget = event.target;

      // This checks to see that a div "row" or the main div container weren't clicked. If they 
      //  were then do nothing because it is not a car card!
      if (!clickedTarget.className.includes("row") && (event.target !== event.currentTarget)) {  

        // Calls the function to reset the border and color of the car cards
        CarLot.resetBorder();

        // Call the function to enlarge the clicked car card and change it's background color
        //  This send two arguments: ONLY the target/clicked element and the new color 
        //  of the background.
        CarLot.increaseBorder(clickedTarget, "lightgray");

        // Clears the input box, and puts the cursor into it
        inputDescription.value = "";
        inputDescription.focus();
      }
    });

    // This captures the text input from the input element in the navbar.
    inputDescription.addEventListener("keyup", () => {

      // Selects the currently selected car card (if there is one).
      let carSelected = document.querySelector(".border-width-6");

      // Checks to see if no car is selected. If there isn't one selected the textbox
      //  is cleared after each keypress
      if (carSelected === null) {
        inputDescription.value = "";
      // Checks to see if the enter key is press, if true the textbox is cleared and blurred 
      //  and all the cards are unselected.
      } else if (event.keyCode === 13) {
        inputDescription.value = "";
        inputDescription.blur();
        CarLot.resetBorder();
      // If no errors and a car is selected, their description is overwritten from the 
      // text input
      } else {
      let carSelectedInput = carSelected.childNodes[4];
      carSelectedInput.innerHTML = `<p class="aligned-left"><span class="text-big">Description:</span> ${inputDescription.value}</p>`;
      };
    });

    // This reloads the page if the "Reset Button" is clicked
    resetButton.addEventListener("click", () => document.location.reload(true));
  }

  return eventHandlers;

})(CarLot || {});

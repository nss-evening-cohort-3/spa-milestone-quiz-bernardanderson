"use strict"

var CarLot = (function(borderChanger) {

  // Resets the border of all the car cards
  borderChanger.resetBorder = function() {

    // Sets an array of all the car cards on the DOM
    let listOfCarCards = document.getElementsByClassName("col-md-4");

    // Cycles through all the car cards on the DOM and if the card has the larger border 
    //  class it is removed and replaced with the smaller border.  Any inline background 
    //  color is removed which allows the css file's background to kick in.
    for (let i = 0; i < listOfCarCards.length; i++) {
      if (listOfCarCards[i].className.includes("border-width-6")) {
        listOfCarCards[i].classList.remove("border-width-6");
        listOfCarCards[i].classList.add("border-width-3");
        listOfCarCards[i].style.backgroundColor = "";
      };
    };
  }

// Increases the border of the target car card. I only used one click event for the whole car card 
//  selection (targeting the main div container holding all the car cards).  Since we could 
//  only send the target and not the entire event, some DOM transversing needed to be done in 
//  order to "find" the target/car card area clicked.
  borderChanger.increaseBorder = function(sentTarget, sentBgColor) {

    // Sets an array of all the car cards on the DOM
    let listOfCarCards = document.getElementsByClassName("col-md-4");

    // This looks to see if the element clicked was actually the car card div and, if so,
    //  increase border by adding a class. It also adds the background color passed to the function.
    if (sentTarget.id.includes("car-card-")) {
      sentTarget.classList.remove("border-width-3");
      sentTarget.classList.add("border-width-6");
      sentTarget.style.backgroundColor = sentBgColor;
    
    // If you didn't click on a car card div (like a child element in the div) this moves up one
    //  parent at a time and checks for the id of a car card div. This div holds the 
    //  target/clicked element
    } else {
      let sentTargetParentTree = sentTarget.parentElement;
      while (true) {
        if (sentTargetParentTree.id.includes("car-card-")) {
          break;
        }
        sentTargetParentTree = sentTargetParentTree.parentElement;
      }

    // This increases the border by adding a class. It also adds the background color passed 
    //  to the function.
      sentTargetParentTree.classList.remove("border-width-3");
      sentTargetParentTree.classList.add("border-width-6");
      sentTargetParentTree.style.backgroundColor = sentBgColor;
    }
  }

  return borderChanger;

})(CarLot || {});
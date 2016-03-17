var CarLot = (function(eventHandlers) {

  eventHandlers.activateEvents = function() {

    let carCardHolder = document.querySelector("#car-card-container");

    let listOfCarCards = document.getElementsByClassName("round-card");

    carCardHolder.addEventListener("click", function(event) {
      console.log (event.target, event.currentTarget);

      event.stopPropagation();
      if (event.target !== event.currentTarget) {
        for (let i = 0; i < listOfCarCards.length; i++) {
          if (listOfCarCards[i].style.borderWidth === "6px") {
            listOfCarCards[i].style.borderWidth = "3px";
          };
        };

        for (let i = 0; i < event.path.length; i++) {
          if (event.path[i].id === "car-card-container") {
            event.path[i-2].style.borderWidth = "6px";
          } 
        };
      }
    });
  }

  return eventHandlers;

})(CarLot || {});
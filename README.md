# Single Page Applications Quiz

## Purpose
The purpose of this exercise is to use all of the advanced topics covered in NSS's "Single Page Applications" section of the Front-End development course.

### Instructions / Installation

You can download and clone this repository using the link above. nodeJs <a href="https://www.npmjs.com/package/http-server">http-server</a> is required to run.

### Screenshot
![Used Car Sale](https://github.com/nss-evening-cohort-3/spa-milestone-quiz-bernardanderson/blob/quiz/spa-quiz-pic.png)

### Behavior

This demo has the following behvior characteristics.

1. Create an array of cars in the `inventory.json` file (see example structure below). Put at least three cars in the array.
1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put only two elements in the navbar.
    1. A text input field.
    1. A button.
1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
1. Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing [named CSS color](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/).
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
1. When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

This demo has the following technical characteristics.

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    1. A car DOM element that was clicked on.
    1. A color name.

/**have a look through the burger options and then answer the questions below */

/**
 Time to make a tasty burger!
*/
let burgerElements = [
    "ground turkey",
    "portabella mushroom",
    "beyond",
    "elk",
    "crispy chicken",
    "head cheese",
    "blue cheese",
    "mozzarella",
    "smoked cheddar",
    "swiss",
    "gouda",
    "processed cheese",
    "maggoty cheese",
    "avocado",
    "tomato",
    "black olives",
    "sundried tomato",
    "sauteed eggplant",
    "lettuce",
    "live bullet ants",
    "blue ringed octopus",
    "cobra venom",
    "puffer fish",
    "sauteed mushrooms",
    "red onion",
    "grilled onion",
    "pickle",
    "jalepenos",
    "banana peppers",
    "ghost reaper pepper",
    "ketchup",
    "smoked ketchup",
    "babaganoush",
    "bbq sauce",
    "mayo",
    "chipotle mayo",
    "dijon mustard",
    "smokey mustard",
    "horseraddish mustard",
    "peanut butter",
    "guacamole",
    "caramel",
    "salsa",
    "corn relish",
    "dill pickle relish",
    "sweet relish",
    "bacon",
    "back bacon",
    "shrimp",
    "lobster",
    "foie gras",
    "brioche bun",
    "no bun",
    "pretzel bun",
    "chocolate chip cookies",
    "spinach wrap",
    "sun dried tomato wrap",
    "croissant",
    "kaiser bun",
]
/**
* q1 -  how long is the array of burger elements?
* Make use of the array.length feature to get the length, then console log the result
*/

/**
* q2 - create a new array called patties and fill it with all the pattie options.  This will go from the start of the array to crispy chicken.
* 
* use the array.slice command and console log the result
*/

/**
* q3 - add the following items to the pattie array with array.unshift
* -beef
* -chicken
* console log the result
*/

/**
* q4 -add the following items to the pattie array with array.push
* -beef stuffed with cheese
* -kobe beef
* console log the result
*/

/**
* q5 - create a new array called cheese and fill it with all the cheeses.  This will contain all 
* elements from head cheese to maggoty cheese
* console log the result
*/

/**
* q6 - remove the head cheese option from the cheeses array using array.shift
* console log the result
*/

/**
* q7 - remove the maggoty cheese option from the cheeses array using array.pop
* console log the result
*/

/**
* q8 - make a new array called vegetables that takes contents from avocado to ghost reaper.  
* Use the array.slice feature
* console log the result
*/

/**
* q9 - somehow we seem to have a lot of non vegetale options in vegetables.  Remove all the entries
* from live bullet ants to puffer fish using array.splice
* console log the result
*/

/**
* q10 - add chayote squash to the veggies array, just after lettuce using the array.splice command
* console log the result
*/

/**
* q11 - make a sauces array using the slice command.  Take entries from ketchup to sweet relish.  
* Remove caramel from the list using splice.
* console log the result
*/

/**
* q12 - make a meatToppings array using the slice command.  Take entries from bacon to foie gras.
* console log the result
*/

/**
* q13 - make a buns array using the slice command.  Take entries from brioche to kaiser.
* console log the result
*/

/**
* q14 - using the delete function remove chocolate chip cookies from the buns array.
* console log the result 
*/

/**
 * q15 - make 2 arrays, called burger1 and burger2.  Build a unique burger in each array from buns,
 *  patties, cheeses, sauces, veggies, and meat toppings arrays
 * console log the result
 */

 /**
  * q16 - make a burgersOrder array from the burger1 and burger2 arrays using the array.concat() function
  * console log the result
  */

/**
 * q17 - use the array.join function with a "*" symbol to make a string from burgersOrder 
 * console log the result
 */

/**
 * q18 - Using documenent.getElementsByTagName("tag name here")[0], store the body tag in a variable
 * create an H1 tag, and give it the title of "Tasty Burger Emporium". using innerText
 * append the h1 tag to the body
 */
//let bodyTag = document.getElementsByTagName("add tag name here")[0];


/**
 * q19 - uncomment the code below and write descriptive comments on what each line does
 */
/*let pattySection = document.createElement("section");
let pattyTitle = document.createElement("h2");
pattyTitle.innerText = "Burger Patties";
pattySection.appendChild(pattyTitle);
bodyTag.appendChild(pattySection);

let pattyDisplay = document.createElement("ul");
pattyDisplay.id="patties";
pattySection.appendChild(pattyDisplay);
pattieList.forEach(function(patty){
  let pattyItem = document.createElement("li");
  pattyItem.innerText = patty;
  pattyDisplay.appendChild(pattyItem);
});
*/

/**
 * q20 - Use the example of the patties to make a buns list on the stage
 */

/**
 * q21 - Use the same example code to make a cheese list on the stage
 */

/**
 * q22 - Use the example code to make a veggies list on the page
 */

/**
 * q23 - Use the example code to make a meat toppings list on the page
 */


/**
 * q24 - Use the example code to make a sauces list on the page
 */

/**
 * q25 - Use the sample code to make a section called "burger specials"
 * add your two custom burgers to the section
 */

/**
 * q26 - Have a look at the webpage for a restaurant(ideally a burger restaurant)
 * Use css in a file called style.css to make your page look like a restaurant page
 */
// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGp) => {
    if (state.greenPeppers) {
      oneGp.style.visibility = 'visible';
    } else {
      oneGp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce){
    document.querySelector("section.sauce").className = "sauce sauce-white"
  }
  else {
    document.querySelector("section.sauce").className = "sauce"
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust){
    document.querySelector("section.crust").className = "crust crust-gluten-free"
  }
  else {
    document.querySelector("section.crust").className = "crust"
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 if (state.whiteSauce){
   document.querySelector('.btn.btn-sauce').className=("btn btn-sauce active")
 }
 else {
   document.querySelector('.btn.btn-sauce').className=("btn btn-sauce")
 }
 if (state.pepperoni){
   document.querySelector('.btn.btn-pepperoni').className=("btn btn-pepperoni active")
 }
 else {
   document.querySelector('.btn.btn-pepperoni').className=("btn btn-pepperoni")
 }
 if (state.mushrooms){
   document.querySelector('.btn.btn-mushrooms').className=("btn btn-mushrooms active")
 }
 else {
   document.querySelector('.btn.btn-mushrooms').className=("btn btn-mushrooms")
 }
 if (state.greenPeppers){
   document.querySelector('.btn.btn-green-peppers').className=("btn btn-green-peppers active")
 }
 else {
   document.querySelector('.btn.btn-green-peppers').className=("btn btn-green-peppers")
 }
 if (state.glutenFreeCrust){
   document.querySelector('.btn.btn-crust').className=("btn btn-crust active")
 }
 else {
   document.querySelector('.btn.btn-crust').className=("btn btn-crust")
   
 }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // 1. Flush all element
  priceElementsHolder = document.querySelector('.panel.price ul')
  while (priceElementsHolder.firstChild) {
    priceElementsHolder.removeChild(priceElementsHolder.firstChild);
  }

  // 2. Rewrite all active elements
  totalAmount = 10
  if (state.pepperoni){
    pepperoniElement = document.createElement("li")
    pepperoniElement.textContent = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    priceElementsHolder.append(pepperoniElement)
    totalAmount += ingredients.pepperoni.price
  }
  if (state.mushrooms){
    mushroomsElement = document.createElement("li")
    mushroomsElement.textContent = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    priceElementsHolder.append(mushroomsElement)
    totalAmount += ingredients.mushrooms.price
  }
  if (state.greenPeppers){
    greenPeppersElement = document.createElement("li")
    greenPeppersElement.textContent = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    priceElementsHolder.append(greenPeppersElement)
    totalAmount += ingredients.greenPeppers.price
  }
  if (state.whiteSauce){
    whiteSauceElement = document.createElement("li")
    whiteSauceElement.textContent = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    priceElementsHolder.append(whiteSauceElement)
    totalAmount += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust){
    glutenFreeCrustElement = document.createElement("li")
    glutenFreeCrustElement.textContent = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    priceElementsHolder.append(glutenFreeCrustElement)
    totalAmount += ingredients.glutenFreeCrust.price
  }

  document.querySelector('.panel.price strong').textContent = `$${totalAmount}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = ! state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = ! state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = ! state.glutenFreeCrust;
  renderEverything();
});

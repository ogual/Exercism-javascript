/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) { 
  if (typeof(remainingTime) == 'undefined') {
    return 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  let n = 0;
  let s = 0.0;

  layers.forEach((layer) => {
    if (layer == 'noodles') { n += 50; }
    else if (layer == 'sauce') { s += 0.2; }
  });
  
  return { noodles: n, sauce: s };
}

export function addSecretIngredient(fiendsList, myList) {
  myList.push(fiendsList[fiendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let recipeOut = {};
  
  if (recipe == null || portions == null || portions == 0) {
    return recipeOut;
  }

  for(let key in recipe) {
    recipeOut[key] = recipe[key] * (portions / 2);
  }
  return recipeOut;
}
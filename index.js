const prepSection = document.querySelector(".preparation-content");
const prepList = prepSection.querySelector("ul");

let preparationTime = [
  { title: "Total: ", time: "Approximately 10 minutes" },
  { title: "Preparation: ", time: "5 Minutes" },
  { title: "Cooking: ", time: "5 Minutes" },
];

prepList.innerHTML = preparationTime
  .map((prep) => {
    return  `<li><span class="bold">${prep.title}</span>${prep.time}</li>`;
  })
  .join("");
console.log(prepList);

const ingredientsSec = document.querySelector(".ingredients-content");
const ingredientList = ingredientsSec.querySelector("ul");

let Ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

ingredientList.innerHTML = Ingredients.map((ingre) => {
  return `<li>${ingre}</li>`;
}).join("");

console.log(ingredientList);

const instructionSec = document.querySelector(".instructions-content");
const instructionList = instructionSec.querySelector("ol");

let Instructions = [
  {
    instruction: "Beat the eggs ",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    instruction: "Heat the pan ",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    instruction: "Cook the omelette ",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    instruction: "Add fillings (optional) ",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    instruction: "Fold and serve ",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    instruction: "Enjoy ",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

instructionList.innerHTML = Instructions.map((instruc) => {
  return `<li>
              <span class="bold">${instruc.instruction}</span>${instruc.description}
            </li>`;
}).join("");
console.log(instructionList);

const nutritionSec = document.querySelector(".nutrition");
const nutritionList = nutritionSec.querySelector("table");

let Nutrition = [
  {
    name: "Calories",
    value: "277kcal",
  },
  {
    name: "Carbs",
    value: "0g",
  },
  {
    name: "Protein",
    value: "20g",
  },
  {
    name: "Fat",
    value: "22g",
  },
];

nutritionList.innerHTML = Nutrition.map((nutri) => {
  return `<tr>
                <td>${nutri.name}</td>
                <td><span class="bold value-nutrition">${nutri.value}</span></td>
              </tr>`;
}).join("");

console.log(nutritionList);
function catDiet(input) {

    let fatPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbohydratesPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);

    let fatInGrams = totalCalories * (fatPercent / 100) / 9;
    let proteinInGrams = totalCalories * (proteinPercent / 100) / 4;
    let carbohydratesInGrams = totalCalories * (carbohydratesPercent / 100) / 4;
    let foodInGrams = fatInGrams + proteinInGrams + carbohydratesInGrams;
    let caloriesInOneGram = totalCalories / foodInGrams;
    let calories = caloriesInOneGram * (100 - waterPercent) / 100;

    console.log(calories.toFixed(4))
}

catDiet(["60", "25", "15", "2500", "60"])
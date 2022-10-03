function fishingBoat(input) {
    
    let budget = Number(input[0]);
    let season = input[1].toLowerCase();
    let fisherCount = Number(input[2]);
    let rent = 0;

    switch(season) {
        case 'spring':
            if (fisherCount <= 6) {
                rent = 3000 * 0.90;
            } else if (fisherCount <= 11) {
                rent = 3000 * 0.85;
            } else {
                rent = 3000 * 0.75;
            }
            break;
        case 'summer':
        case 'autumn':
            if (fisherCount <= 6) {
                rent = 4200 * 0.90;
            } else if (fisherCount <= 11) {
                rent = 4200 * 0.85;
            } else {
                rent = 4200 * 0.75;
            }
            break;
        case 'winter':
            if (fisherCount <= 6) {
                rent = 2600 * 0.90;
            } else if (fisherCount <= 11) {
                rent = 2600 * 0.85;
            } else {
                rent = 2600 * 0.75;
            }
            break;
        default:
            console.log(`Wrong input.`);
            break;
    }

    if (fisherCount % 2 === 0 && season !== 'autumn') {
        rent = rent * 0.95;
    }

    let diff = Math.abs(budget - rent);

    if (budget >= rent) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000",
"Winter",
"13"])


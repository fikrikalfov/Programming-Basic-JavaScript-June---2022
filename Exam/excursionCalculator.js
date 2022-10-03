function excursionCalculator(input) {

    let peopleCount = Number(input[0]);
    let season = input[1];
    let totalSum = 0;

    switch (season) {
        case "spring" :
            if (peopleCount <= 5) {
                totalSum = peopleCount * 50;
                console.log(`${totalSum.toFixed(2)} leva.`);
            } else {
                totalSum = peopleCount * 48;
                console.log(`${totalSum.toFixed(2)} leva.`);
            }
            break;
        case "summer" :
            if (peopleCount <= 5) {
                totalSum = peopleCount * 48.50 * 0.85;
                console.log(`${totalSum.toFixed(2)} leva.`);
            } else {
                totalSum = peopleCount * 45 * 0.85;
                console.log(`${totalSum.toFixed(2)} leva.`);
            }
            break;
        case "autumn" :
            if (peopleCount <= 5) {
                totalSum = peopleCount * 60;
                console.log(`${totalSum.toFixed(2)} leva.`);
            } else {
                totalSum = peopleCount * 49.50;
                console.log(`${totalSum.toFixed(2)} leva.`);
            }
            break;
        case "winter" :
            if (peopleCount <= 5) {
                totalSum = peopleCount * 86 * 1.08;
                console.log(`${totalSum.toFixed(2)} leva.`);
            } else {
                totalSum = peopleCount * 85 * 1.08;
                console.log(`${totalSum.toFixed(2)} leva.`);
            }
            break;
    }

}

excursionCalculator(["20", "winter"])
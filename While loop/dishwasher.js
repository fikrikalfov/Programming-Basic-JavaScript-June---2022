function dishwasher(input) {

    let bottleCount = Number(input[0]);
    let plateCount = 0;
    let potCount = 0;
    let leftoverDetergent = bottleCount * 750;
    let index = 1;
    let charging = input[index];

    while (charging !== 'End') {
        if (index % 3 !== 0) {
            plateCount += Number(charging);
            let detergent = Number(charging) * 5
            if (leftoverDetergent >= detergent) {
                leftoverDetergent -= detergent;
            } else {
                let diff = detergent - leftoverDetergent;
                console.log(`Not enough detergent, ${diff} ml. more necessary!`);
                leftoverDetergent -= detergent;
                break;
            }
        } else {
            potCount += Number(charging);
            let detergent = Number(charging) * 15;
            if (leftoverDetergent >= detergent) {
                leftoverDetergent -= detergent;
            } else {
                let diff = detergent - leftoverDetergent;
                console.log(`Not enough detergent, ${diff} ml. more necessary!`);
                leftoverDetergent -= detergent;
                break;
            }
        }
        index++;
        charging = input[index];

    }
    if (leftoverDetergent > 0) {
        console.log(`Detergent was enough!
                    ${plateCount} dishes and ${potCount} pots were washed.
                    Leftover detergent ${leftoverDetergent} ml.`);
    }

}

dishwasher(['1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'
])
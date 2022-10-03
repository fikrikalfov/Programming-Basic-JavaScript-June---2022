function newHouse(input) {

    let blumes = input[0];
    let blumesCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0

    switch (blumes) {
        case 'Roses':
            if (blumesCount > 80) {
                sum = blumesCount * 5 * 0.90;
            } else {
                sum = blumesCount * 5;
            }
            break;
        case 'Dahlias':
            if (blumesCount > 90) {
                sum = blumesCount * 3.80 * 0.85;
            } else {
                sum = blumesCount * 3.80;
            }
            break;
        case 'Tulips':
            if (blumesCount > 80) {
                sum = blumesCount * 2.80 * 0.85; 
            } else {
                sum = blumesCount * 2.80;
            }
            break;
        case 'Narcissus':
            if (blumesCount < 120) {
                sum = blumesCount * 3 * 1.15; 
            } else {
                sum = blumesCount * 3;
            }
            break;
        case 'Gladiolus':
            if (blumesCount < 80) {
                sum = blumesCount * 2.50 * 1.20; 
            } else {
                sum = blumesCount * 2.50;
            }
            break;
        default:
            console.log('error');
            break;
    }

    let diff = Math.abs(sum - budget);

    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${blumesCount} ${blumes} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}

newHouse(["Narcissus",

"119",

"360"])
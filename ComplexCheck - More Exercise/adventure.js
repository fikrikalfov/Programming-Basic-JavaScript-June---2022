function adventure(input) {

    let budget = Number(input[0]);
    let season = input[1].toLowerCase();
    let moneySpend = 0;
    let destination = '';
    let restType = '';

    switch (season) {
        case 'summer':
            if (budget <= 100) {
                moneySpend = budget * 0.30;
                destination = 'Bulgaria';
                restType = 'Camp';
            } else if (budget <= 1000) {
                moneySpend = budget * 0.40;
                destination = 'Balkans';
                restType = 'Camp';
            } else {
                moneySpend = budget * 0.90;
                destination = 'Europe';
                restType = 'Hotel';
            }
            console.log(`Somewhere in ${destination}`);
            console.log(`${restType} - ${moneySpend.toFixed(2)}`);
            break;
        case 'winter':
            if (budget <= 100) {
                moneySpend = budget * 0.70;
                destination = 'Bulgaria';
                restType = 'Hotel';
            } else if (budget <= 1000) {
                moneySpend = budget * 0.80;
                destination = 'Balkans';
                restType = 'Hotel';
            } else {
                moneySpend = budget * 0.90;
                destination = 'Europe';
                restType = 'Hotel';
            }
            console.log(`Somewhere in ${destination}`);
            console.log(`${restType} - ${moneySpend.toFixed(2)}`);
            break;
        default:
            console.log(`Wrong input`);
            break;
    }
    
}

adventure(["75", "winter"])
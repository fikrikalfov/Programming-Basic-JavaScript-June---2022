function cinema(input) {

    let projection = input[0].toLowerCase();
    let r = Number(input[1]);
    let c = Number(input[2]);

    let profit = r * c;

    switch (projection) {
        case 'premiere':
            profit *= 12.00;
            console.log(`${profit.toFixed(2)} leva`);
            break;
        case 'normal':
            profit *= 7.50;
            console.log(`${profit.toFixed(2)} leva`);
            break;
        case 'discount':
            profit *= 5.00;
            console.log(`${profit.toFixed(2)} leva`);
            break;
        default:
            console.log('error');
            break
    }

}

cinema(["Discount", "12", "30"])
function smallShop(input) {

    let product = input[0].toLowerCase();
    let city = input[1].toLowerCase();
    let quantity = Number(input[2]);
    let price = 0;

    if (city === 'sofia') {
        switch (product) {
            case 'coffee':
                price = quantity * 0.50;
                break;
            case 'water':
                price = quantity * 0.80;
                break;
            case 'beer':
                price = quantity * 1.20;
                break;
            case 'sweets':
                price = quantity * 1.45;
                break;
            case 'peanuts':
                price = quantity * 1.60;
                break;
            default:
                console.log('Wrong input');
                break;
        }
        console.log(price);
    } else if(city === 'plovdiv') {
        switch (product) {
            case 'coffee':
                price = quantity * 0.40;
                break;
            case 'water':
                price = quantity * 0.70;
                break;
            case 'beer':
                price = quantity * 1.15;
                break;
            case 'sweets':
                price = quantity * 1.30;
                break;
            case 'peanuts':
                price = quantity * 1.50;
                break;
            default:
                console.log('Wrong input');
                break;
    }
    console.log(price);
} else if(city === 'varna') {
    switch (product) {
        case 'coffee':
            price = quantity * 0.45;
            break;
        case 'water':
            price = quantity * 0.70;
            break;
        case 'beer':
            price = quantity * 1.10;
            break;
        case 'sweets':
            price = quantity * 1.35;
            break;
        case 'peanuts':
            price = quantity * 1.55;
            break;
        default:
            console.log('Wrong input');
            break;        
        }
        console.log(price);
} else {
    console.log('Wrong city');
}

}

smallShop(["coffee",

"Varna",

"2"])
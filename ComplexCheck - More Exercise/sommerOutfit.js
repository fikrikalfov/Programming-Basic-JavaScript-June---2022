function sommerOutfit(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1].toLowerCase();

    let outfit = '';
    let shoes = '';

    switch (dayTime) {
        case 'morning':
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if(degrees > 18 && degrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (degrees > 24 && degrees <= 42) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                console.log("error");
            }
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
        case 'afternoon':
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if(degrees > 18 && degrees <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (degrees > 24 && degrees <= 42) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            } else {
                console.log("error");
            }
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
        case 'evening':
            if (degrees >= 10 && degrees <= 42) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                console.log("error");
            }
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
        default:
            console.log('Wrong input');
            break;
    }

}

sommerOutfit(["16",

"Morning"])
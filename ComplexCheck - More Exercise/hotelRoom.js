function hotelRoom(input) {
    
    let month = input[0].toLowerCase();
    let stay = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    let sum = 0;

    switch (month) {
        case 'may':
        case 'october':
            studioPrice = stay * 50;
            apartmentPrice = stay * 65;
            if (stay > 7 && stay <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (stay > 14) {
                studioPrice = studioPrice * 0.70;
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case 'june':
        case 'september':
            studioPrice = stay * 75.20;
            apartmentPrice = stay * 68.70;
            if (stay > 14) {
                studioPrice = studioPrice * 0.80;
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case 'july':
        case 'august':
            studioPrice = stay * 76;
            apartmentPrice = stay * 77;
            if (stay > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        default:
            console.log(`Wrong input`);
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}

hotelRoom(["May",
"15"])

function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1].toLowerCase();

    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
        case 'saturday':
            if (hour >= 10 && hour <= 18) {
                console.log('open');
            } else {
                console.log('closed');
            }
            break;
        case "sunday":
            console.log('closed');
            break;
        default:
            console.log('wrong input');
            break;
    }

}

workingHours(["19", "Friday"])
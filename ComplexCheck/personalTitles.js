function personalTitles(input) {

    let years = Number(input[0]);
    let gender = input[1].toLowerCase();

    if (gender === 'm') {
        if (years >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    } else if (gender === 'f') {
        if (years >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else {
        console.log('Wrong input');
    }

}

personalTitles(["13.5", "m"])
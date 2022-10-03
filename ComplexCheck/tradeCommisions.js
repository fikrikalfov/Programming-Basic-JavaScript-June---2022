function tradeCommisions(input) {

    let city = input[0].toLowerCase();
    let sells = Number(input[1]);

    let commision = 0;

    switch (city) {
        case 'sofia':
            if (sells >= 0 && sells <= 500) {
                commision = sells * 0.05;
            } else if (sells > 500 && sells <= 1000) {
                commision = sells * 0.07;
            } else if (sells > 1000 && sells <= 10000) {
                commision = sells * 0.08;
            } else if (sells > 10000) {
                commision = sells * 0.12;
            } else {
                console.log('error');
            }
            break;
        case 'varna':
            if (sells >= 0 && sells <= 500) {
                commision = sells * 0.045;
            } else if (sells > 500 && sells <= 1000) {
                commision = sells * 0.075;
            } else if (sells > 1000 && sells <= 10000) {
                commision = sells * 0.10;
            } else if (sells > 10000) {
                commision = sells * 0.13;
            } else {
                console.log('error');
            }
            break;
        case 'plovdiv':
            if (sells >= 0 && sells <= 500) {
                commision = sells * 0.055;
            } else if (sells > 500 && sells <= 1000) {
                commision = sells * 0.08;
            } else if (sells > 1000 && sells <= 10000) {
                commision = sells * 0.12;
            } else if (sells > 10000) {
                commision = sells * 0.145;
            } else {
                console.log('error');
            }
            break;
        default:
            console.log('error');
            break;
    }

    if (commision > 0) {
        console.log(commision.toFixed(2));
    }

}

tradeCommisions(["Kaspichan", "-50"])
function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzel = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    
    let toyCount = puzzel + doll + bear + minion + truck;
    let totalPrice = puzzel * 2.60 + doll * 3.00 + bear * 4.10 + minion * 8.20 + truck * 2.00;

    if (toyCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.90;
    let diff = Math.abs(totalPrice - holidayPrice);

    if (totalPrice >= holidayPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

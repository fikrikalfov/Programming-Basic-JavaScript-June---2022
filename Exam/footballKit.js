function footballKit(input) {

    let tshirtPrice = Number(input[0]);
    let totalSum = Number(input[1]);
    let shortsPrice = tshirtPrice * 0.75;
    let sockPrice = shortsPrice * 0.20;
    let shoosPrice = 2 * (tshirtPrice + shortsPrice);
    let totalPrice = (tshirtPrice + shortsPrice + sockPrice + shoosPrice) * 0.85;

    if (totalPrice >= totalSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        let diff = totalSum - totalPrice;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }
}

footballKit(["25", "100"])
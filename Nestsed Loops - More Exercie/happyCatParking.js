function happyCatParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let taxPerDay = 0;
    let total = 0;

    for (let i = 1; i <= days; i++) {
        for (let x = 1; x <= hours; x++) {
            if (i % 2 === 0 && x % 2 !== 0) {
                taxPerDay += 2.50;
            } else if (i % 2 !== 0 && x % 2 === 0) {
                taxPerDay += 1.25;
            } else {
                taxPerDay += 1;
            }
            
        }
        total += taxPerDay;
        console.log(`Day: ${i} - ${taxPerDay. toFixed(2)} leva`);
        taxPerDay = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

happyCatParking(["2", "5"])
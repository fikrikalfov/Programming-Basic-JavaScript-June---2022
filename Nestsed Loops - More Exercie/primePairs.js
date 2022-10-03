function primePairs(input) {

    let firstDigit = Number(input[0]);
    let secondDigit = Number(input[1]);
    let firstBorder = firstDigit + Number(input[2]);
    let secondBorder = secondDigit + Number(input[3]);
    let specialNum = "";

    for (let i = firstDigit; i <= firstBorder; i++) {
        let isPrime = true;
        for (let x = 2; x <= (i - 1); x++) {
            if (i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            specialNum += i;
        } else {
            continue;
        }

        for (let y = secondDigit; y <= secondBorder; y++) {
            let isPrimeTwo = true;
            for (let z = 2; z <= (y - 1); z++) {
                if (y % z === 0) {
                    isPrimeTwo = false;
                    break;
                }
            }
            if (isPrimeTwo) {
                specialNum += y;
                console.log(specialNum);
            } else {
                continue;
            }
            specialNum = "" + i;
        }
        specialNum = "";
    }
}

primePairs(["10", "20", "5", "5"])
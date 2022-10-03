function uniquePinCodes(input) {

    let firstDigitBorder = Number(input[0]);
    let secondDigitBorder = Number(input[1]);
    let thirdDigitBorder = Number(input[2]);

    for (let x = 1; x <= firstDigitBorder; x++) {
        let pin = "";
        if (x % 2 === 0) {
            pin += x;
        } else {
            continue;
        }

        for (let y = 2; y <= secondDigitBorder; y++) {
            let counter = 0;
            for (let i = 1; i <= y; i++) {
                if (y % i === 0) {
                    counter++;
                }
            }
            if (counter === 2) {
                pin += " " + y;
            } else {
                continue;
            }
            for (let z = 1; z <= thirdDigitBorder; z++) {
                if (z % 2 === 0) {
                    pin += " " + z;
                    console.log(pin);
                    pin = "" + x + " " + y;
                } else {
                    continue;
                }
            }
            pin = "" + x;

        }

    }
}

uniquePinCodes(["8", "2", "6"])


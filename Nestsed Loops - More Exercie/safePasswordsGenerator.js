function safePasswordsGenerator(input) {
    let symbol1 = Number(input[0]);
    let symbol2 = Number(input[1]);
    let maxPass = Number(input[2]);
    let passwordCount = 0;
    let symbolA = 35;
    let symbolB = 64;
    let password = "";

    for (let x = 1; x <= symbol1; x++) {
        for (let y = 1; y <= symbol2; y++) {
            if (symbolA > 55) {
                symbolA = 35;
            }
            if (symbolB > 96) {
                symbolB = 64
            }
            let pass = String.fromCharCode(symbolA) + String.fromCharCode(symbolB) + x + y + String.fromCharCode(symbolB) + String.fromCharCode(symbolA);
            passwordCount++;
            password += pass + "|";
            if (passwordCount === maxPass) {
                break;
            }
            symbolA++;
            symbolB++;
        }
        if (passwordCount === maxPass) {
            break;
        }
    }
    console.log(password);
}

safePasswordsGenerator(["2", "3", "10"])
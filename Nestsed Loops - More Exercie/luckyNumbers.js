function luckyNumbers(input) {

    let digit = Number(input[0]);
    let num = "";
    let luckyNum = "";

    for (let i = 1; i < 10; i++) {
        num += i;
        for (let x = 1; x < 10; x++) {
            num += x;
            for (let y = 1; y < 10; y++) {
                num += y;
                for (let z = 1; z < 10; z++) {
                    num += z;
                    if ((i + x) === (y + z) && digit % (i + x) === 0) {
                        luckyNum += num + " ";
                    }
                    num = "" + i + x + y;
                }
                num = "" + i + x;
            }
            num = "" + i;
        }
        num = "";
    }

    console.log(luckyNum);

}

luckyNumbers(["24"])
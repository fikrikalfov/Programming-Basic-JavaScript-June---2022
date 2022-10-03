function carNumber(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let num = "";
    let specialNum = "";

    for (let i = intervalStart; i <= intervalEnd; i++) {
        num += i;
        for (let x = intervalStart; x <= intervalEnd; x++) {
            num += x;
            for (let y = intervalStart; y <= intervalEnd; y++) {
                num += y;
                for (let z = intervalStart; z <= intervalEnd; z++) {
                    num += z;
                    if (((i % 2 === 0) && (z % 2 !== 0)) || ((i % 2 !== 0) && (z % 2 === 0))) {
                        if ((i > z) && ((x + y) % 2 === 0)) {
                            specialNum += num + " ";
                        }
                    }
                    num = "" + i + x + y;
                }
                num = "" + i + x;
            }
            num = "" + i;
        }
        num = "";
    }
    console.log(specialNum);
}

carNumber(["2", "3"])
function profit(input) {
    let oneLevaCount = Number(input[0]);
    let twoLevaCount = Number(input[1]);
    let fiveLevaCount = Number(input[2]);
    let sum = Number(input[3]);
    let result = "";
    let check = 0;

    for (let x = 0; x <= oneLevaCount; x++) {
        check = x * 1;
        for (let y = 0; y <= twoLevaCount; y++) {
            check += y * 2;
            for (let z = 0; z <= fiveLevaCount; z++) {
                check += z * 5;
                if (check === sum) {
                    console.log(`${x} * 1 lv. + ${y} * 2 lv. + ${z} * 5 lv. = ${sum} lv.`);
                }
                check = x * 1 + y * 2;
            }
            check = x * 1;
        }        

    }

}

profit(["5", "3", "1", "7"])
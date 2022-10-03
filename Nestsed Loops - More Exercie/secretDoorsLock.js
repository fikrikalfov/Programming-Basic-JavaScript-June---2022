function secretDoorsLock(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let code = "";

    for (let x = 1; x <= num1; x++) {
        if (x % 2 === 0) {
            code += x;
        } else {
            continue;
        }
        for (let y = 1; y <= num2; y++) {
            let counter = 0;
            for (let i = 1; i <= 9; i++) {
                if (y % i === 0) {
                    counter ++;
                }
            }
            if (counter === 2 && (y >= 2 && y <= 7)) {
                code += " " + y;
            } else {
                continue;
            }
            for (let z = 1; z <= num3; z++) {
                if (z % 2 === 0) {
                    code += " " + z;
                    console.log(code);
                }
                code = "" + x + " " + y;
            }
            code ="" + x;
        }
        code = "";

    }
}

secretDoorsLock(["3", "5", "5"])
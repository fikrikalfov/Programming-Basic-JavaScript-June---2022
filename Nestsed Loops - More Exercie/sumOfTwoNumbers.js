function sumOfTwoNumbers(input) {
    let startOfInterval = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicDigit = Number(input[2]);
    let counter = 0;
    let isThisMagicDigit = false;

    for (let i = startOfInterval; i <= endOfInterval; i++) {
        for (let x = startOfInterval; x <= endOfInterval; x++) {
            let sum = i + x;
            counter++;
            if (sum === magicDigit) {
                isThisMagicDigit = true;
                console.log(`Combination N:${counter} (${i} + ${x} = ${magicDigit})`);
                break;
            }
        }
        if (isThisMagicDigit) {
            break;
        }
    }

    if (isThisMagicDigit === false) {
        console.log(`${counter} combinations - neither equals ${magicDigit}`);
    }

}

sumOfTwoNumbers(["88", "888", "1000"])
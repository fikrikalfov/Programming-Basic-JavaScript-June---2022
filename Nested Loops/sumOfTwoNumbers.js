function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let sum = 0;
    let combinationsCounter = 0;

    for (let x = firstNum; x <= secondNum; x++) {
        for (let y = firstNum; y <= secondNum; y++) {
            sum = x + y;
            combinationsCounter++
            if (sum === magicNum) {
                console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${sum})`);
                break;
            }
        }
        if (sum === magicNum) {
            break;
            
        }
    }
    if (sum !== magicNum) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["23",

"24",

"20"])